#!/usr/bin/env node

/**
 * Validates that prerendered HTML contains visible content and internal links.
 */

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getPrerenderRoutes, metaData, slugToOutputPath } from "./routes.mjs";

const OUT_DIR = "dist";
const MIN_TEXT_LENGTH = 80;
const MIN_LINK_COUNT = 1;

function extractRootInnerHtml(html) {
  const rootOpen = html.match(/<div id="root"[^>]*>/i);
  if (!rootOpen) return "";

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
      return html.slice(start, match.index);
    }
  }

  return "";
}

function stripTags(value) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function countInternalLinks(html, slug) {
  const relative = html.match(/href="(\/[^"]*)"/g) ?? [];
  const absolute = html.match(/href="https:\/\/highcon\.in[^"]*"/g) ?? [];
  return relative.length + absolute.length;
}

async function verifyRoute(slug) {
  const filePath =
    slug === "/"
      ? join(OUT_DIR, "index.html")
      : join(OUT_DIR, slugToOutputPath(slug));

  const html = await readFile(filePath, "utf8");
  const rootHtml = extractRootInnerHtml(html);
  const text = stripTags(rootHtml);
  const hasHeading = /<h[1-6][^>]*>/i.test(rootHtml);
  const linkCount = countInternalLinks(rootHtml, slug);
  const emptyRoot = rootHtml.replace(/\s+/g, "").length === 0;
  const minLinks = slug === "/" ? 2 : MIN_LINK_COUNT;
  const minText = slug === "/" ? 50 : MIN_TEXT_LENGTH;

  const issues = [];
  if (emptyRoot) issues.push("empty #root");
  if (text.length < minText) issues.push(`short text (${text.length})`);
  if (!hasHeading) issues.push("missing heading");
  if (linkCount < minLinks) issues.push(`few links (${linkCount})`);

  return {
    slug,
    ok: issues.length === 0,
    issues,
    textLength: text.length,
    linkCount,
  };
}

async function main() {
  console.log("🔍 Verifying prerendered HTML content...\n");

  const routes = getPrerenderRoutes(metaData);
  let passed = 0;
  let failed = 0;

  for (const slug of routes) {
    try {
      const result = await verifyRoute(slug);
      if (result.ok) {
        console.log(
          `✅ ${slug} — ${result.textLength} chars, ${result.linkCount} links`,
        );
        passed++;
      } else {
        console.log(`❌ ${slug} — ${result.issues.join(", ")}`);
        failed++;
      }
    } catch (error) {
      console.log(
        `❌ ${slug} — ${error instanceof Error ? error.message : String(error)}`,
      );
      failed++;
    }
  }

  console.log(`\n📊 Content verification: ${passed} passed, ${failed} failed`);

  if (failed > 0) {
    process.exit(1);
  }

  console.log("\n🎉 All prerendered pages contain crawlable content!");
}

main().catch(console.error);
