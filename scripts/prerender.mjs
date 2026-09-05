#!/usr/bin/env node

/**
 * Post-build prerendering for crawlable routes.
 *
 * Flow:
 * 1. gen-seo-files.mjs creates per-route HTML shells with SEO meta tags.
 * 2. This script loads each route in headless Chromium, waits for React to render,
 *    and injects the rendered #root HTML into the existing SEO shell.
 *
 * Route list comes from scripts/routes.mjs (same source as sitemap generation).
 */

import { chromium } from "playwright";
import { createServer } from "node:http";
import { access, mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, extname, isAbsolute, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getPrerenderJobs, metaData, slugToOutputPath } from "./routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST_DIR = join(ROOT, "dist");
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY || 4);
const NAV_TIMEOUT_MS = Number(process.env.PRERENDER_TIMEOUT_MS || 45000);
const RENDER_SETTLE_MS = Number(process.env.PRERENDER_SETTLE_MS || 500);
const DEBUG = process.env.PRERENDER_DEBUG === "1";

let interruptedSignal = null;
let activeBrowser = null;
let activeServer = null;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function resolveStaticFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  const cleanPath = decoded.replace(/\/+$/, "") || "/";
  const relativePath = cleanPath.replace(/^\/+/, "");

  const candidates =
    cleanPath === "/"
      ? [join(DIST_DIR, "index.html")]
      : [
          join(DIST_DIR, relativePath),
          join(DIST_DIR, `${relativePath}.html`),
          join(DIST_DIR, relativePath, "index.html"),
        ];

  for (const candidate of candidates) {
    const resolved = resolve(candidate);
    const relativeToDist = relative(DIST_DIR, resolved);
    if (relativeToDist.startsWith("..") || isAbsolute(relativeToDist)) continue;
    if (await fileExists(resolved)) {
      const fileStat = await stat(resolved);
      if (fileStat.isFile()) return { filePath: resolved, fallback: false };
    }
  }

  if (!extname(cleanPath)) {
    return { filePath: join(DIST_DIR, "index.html"), fallback: true };
  }

  return null;
}

function createStaticServer() {
  return createServer(async (req, res) => {
    try {
      const resolved = await resolveStaticFile(req.url || "/");
      if (!resolved) {
        if (DEBUG) console.log(`[server] ${req.url || "/"} -> 404`);
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Not found");
        return;
      }

      const { filePath, fallback } = resolved;
      const body = await readFile(filePath);
      const ext = extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || "application/octet-stream";

      if (DEBUG) {
        console.log(
          `[server] ${req.url || "/"} -> 200 ${filePath} (${contentType}${fallback ? ", SPA fallback" : ""})`,
        );
      }

      res.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": "no-store",
      });
      res.end(body);
    } catch {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
    }
  });
}

async function waitForServerReady(server) {
  const port = await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      resolve(typeof address === "object" && address ? address.port : 0);
    });
  });

  const baseUrl = `http://127.0.0.1:${port}`;

  for (let attempt = 0; attempt < 30; attempt++) {
    try {
      const response = await fetch(`${baseUrl}/`);
      if (response.ok) return baseUrl;
    } catch {
      // retry
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Static server did not become ready on ${baseUrl}`);
}

/** Replace only #root inner HTML so build-time SEO head (meta, GA, Clarity) is preserved. */
function injectRootHtml(html, rootInnerHtml) {
  const rootOpen = html.match(/<div id="root"[^>]*>/i);
  if (!rootOpen) {
    throw new Error("Could not find #root container in HTML shell");
  }

  const start = rootOpen.index + rootOpen[0].length;
  const tagRegex = /<\/?div\b[^>]*>/gi;
  tagRegex.lastIndex = rootOpen.index;

  let depth = 0;
  let match;

  while ((match = tagRegex.exec(html)) !== null) {
    if (match.index === rootOpen.index) {
      depth = 1;
      continue;
    }

    depth += match[0].startsWith("</") ? -1 : 1;
    if (depth === 0) {
      return `${html.slice(0, start)}${rootInnerHtml}${html.slice(match.index)}`;
    }
  }

  throw new Error("Could not find closing tag for #root");
}

async function prerenderRoute(context, job, baseUrl, attempt = 1) {
  const { outputSlug, visitPath } = job;
  const page = await context.newPage();
  const url = visitPath === "/" ? `${baseUrl}/` : `${baseUrl}${visitPath}`;
  const outputPath = join(DIST_DIR, slugToOutputPath(outputSlug));
  const timeout = attempt > 1 ? NAV_TIMEOUT_MS * 2 : NAV_TIMEOUT_MS;
  const browserErrors = [];
  const requestFailures = [];
  const httpFailures = [];

  page.on("console", (message) => {
    if (DEBUG) {
      console.log(
        `[debug] ${visitPath} attempt ${attempt} console.${message.type()}: ${message.text()}`,
      );
    }
  });
  page.on("pageerror", (error) => {
    const detail = error.stack || error.message;
    browserErrors.push(detail);
    if (DEBUG) console.error(`[debug] ${visitPath} attempt ${attempt} pageerror: ${detail}`);
  });
  page.on("requestfailed", (request) => {
    const detail = `${request.url()} — ${request.failure()?.errorText || "request failed"}`;
    requestFailures.push(detail);
    if (DEBUG) console.error(`[debug] ${visitPath} attempt ${attempt} requestfailed: ${detail}`);
  });
  page.on("response", (response) => {
    if (response.status() < 400) return;
    const detail = `${response.status()} ${response.url()}`;
    httpFailures.push(detail);
    if (DEBUG) console.error(`[debug] ${visitPath} attempt ${attempt} response: ${detail}`);
  });

  try {
    await page.goto(url, {
      waitUntil: "load",
      timeout,
    });

    await page.waitForFunction(
      () => document.querySelector("#root")?.innerHTML.trim().length > 0,
      undefined,
      { timeout },
    );
    await page.waitForTimeout(RENDER_SETTLE_MS);

    const rootInnerHtml = await page.locator("#root").innerHTML();
    const shellHtml = await readFile(outputPath, "utf8");
    const mergedHtml = injectRootHtml(shellHtml, rootInnerHtml);

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, mergedHtml, "utf8");

    const rootText = await page.locator("#root").innerText();
    const linkCount = await page.locator("#root a[href]").count();

    return {
      slug: outputSlug,
      visitPath,
      ok: Boolean(rootText?.trim()),
      textLength: rootText?.trim().length ?? 0,
      linkCount,
      outputPath,
    };
  } catch (error) {
    let pageState = null;
    if (!page.isClosed()) {
      try {
        pageState = await page.evaluate(() => ({
          href: location.href,
          title: document.title,
          readyState: document.readyState,
          rootExists: Boolean(document.querySelector("#root")),
          rootHtml: document.querySelector("#root")?.innerHTML.slice(0, 500) ?? null,
          bodyHtml: document.body.innerHTML.slice(0, 1000),
        }));
      } catch {
        // The browser may already be closing after an interrupt.
      }
    }

    const baseError = error instanceof Error ? error.message : String(error);
    const details = [
      `attempt ${attempt}/2, timeout ${timeout}ms: ${baseError}`,
      browserErrors.length ? `browser error: ${browserErrors.join(" | ")}` : "",
      httpFailures.length ? `HTTP failures: ${httpFailures.join(" | ")}` : "",
      requestFailures.length && DEBUG
        ? `request failures: ${requestFailures.join(" | ")}`
        : "",
      pageState ? `page state: ${JSON.stringify(pageState)}` : "",
    ].filter(Boolean);
    const failure = details.join("; ");

    if (attempt < 2 && !interruptedSignal) {
      console.warn(`⚠️ ${visitPath} ${failure} — retrying once`);
      await page.close();
      return prerenderRoute(context, job, baseUrl, attempt + 1);
    }

    return {
      slug: outputSlug,
      visitPath,
      ok: false,
      error: interruptedSignal ? `interrupted by ${interruptedSignal}` : failure,
    };
  } finally {
    if (!page.isClosed()) {
      await page.close();
    }
  }
}

async function runPool(items, worker, concurrency) {
  const results = new Array(items.length);
  let index = 0;
  let completed = 0;

  async function runWorker() {
    while (true) {
      if (interruptedSignal) break;
      const currentIndex = index++;

      if (currentIndex >= items.length) {
        break;
      }

      const current = items[currentIndex];

      console.log(
        `🔄 [${currentIndex + 1}/${items.length}] Starting: ${current.visitPath}`,
      );

      const result = await worker(current);

      results[currentIndex] = result;
      completed++;

      if (result.ok) {
        console.log(
          `✅ [${completed}/${items.length}] Completed: ${result.visitPath}`,
        );
      } else {
        console.log(
          `❌ [${completed}/${items.length}] Failed: ${result.visitPath} — ${result.error || "empty #root"}`,
        );
      }
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () =>
      runWorker(),
    ),
  );

  return results.filter(Boolean);
}

async function closeQuietly(resource, label) {
  if (!resource) return;
  try {
    await resource.close();
  } catch (error) {
    if (DEBUG && !interruptedSignal) {
      console.error(`[debug] Failed to close ${label}:`, error);
    }
  }
}

function installSignalHandlers() {
  for (const signal of ["SIGINT", "SIGTERM"]) {
    process.once(signal, () => {
      interruptedSignal = signal;
      console.warn(`\n⚠️ Received ${signal}; shutting down prerender cleanly...`);
      void closeQuietly(activeBrowser, "browser");
      activeServer?.close();
    });
  }
}

async function main() {
  installSignalHandlers();
  if (!(await fileExists(join(DIST_DIR, "index.html")))) {
    console.error("❌ dist/index.html not found. Run `vite build` first.");
    process.exit(1);
  }

  const jobs = getPrerenderJobs(metaData);
  console.log(`🔄 Prerendering ${jobs.length} routes from metaData source...`);

  const server = createStaticServer();
  activeServer = server;
  const baseUrl = await waitForServerReady(server);

  const browser = await chromium.launch({ headless: true });
  activeBrowser = browser;
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  });

  let results;
  try {
    results = await runPool(
      jobs,
      (job) => prerenderRoute(context, job, baseUrl),
      CONCURRENCY,
    );
  } finally {
    await closeQuietly(context, "browser context");
    await closeQuietly(browser, "browser");
    if (server.listening) {
      await new Promise((resolve) => server.close(resolve));
    }
    activeBrowser = null;
    activeServer = null;
  }

  if (interruptedSignal) {
    process.exitCode = interruptedSignal === "SIGINT" ? 130 : 143;
    return;
  }

  const passed = results.filter((result) => result.ok);
  const failed = results.filter((result) => !result.ok);

  for (const result of passed) {
    const via =
      result.visitPath && result.visitPath !== result.slug
        ? ` (via ${result.visitPath})`
        : "";
    console.log(
      `✅ ${result.slug}${via} — ${result.textLength} chars, ${result.linkCount} links`,
    );
  }

  for (const result of failed) {
    const via =
      result.visitPath && result.visitPath !== result.slug
        ? ` via ${result.visitPath}`
        : "";
    console.log(`❌ ${result.slug}${via} — ${result.error || "empty #root"}`);
  }

  console.log(
    `\n📊 Prerender results: ${passed.length} passed, ${failed.length} failed`,
  );

  if (failed.length > 0) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("❌ Prerender failed:", error);
  process.exit(1);
});
