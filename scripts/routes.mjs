/**
 * Shared route discovery for sitemap, prerender, and SEO validation.
 * Single source of truth: metaData.node.mjs (metaData.json + blogData.json).
 */
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import metaData from "./metaData.node.mjs";
import {
  getStaticAppRouteMetaEntries,
  normalizeSlug,
} from "./app-routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const configDir = resolve(__dirname, "../src/constants");

const blogSlugs = new Set(
  JSON.parse(readFileSync(resolve(configDir, "blogData.json"), "utf-8"))
    .filter((item) => item?.status === "Published")
    .map((item) => normalizeSlug(item?.slug)),
);

/** Map SEO slug to the URL React Router actually renders. */
export function resolveVisitPath(entry) {
  const outputSlug = normalizeSlug(entry?.slug);

  if (blogSlugs.has(outputSlug)) {
    const segment = outputSlug.replace(/^\/+|\/+$/g, "");
    return normalizeSlug(`/blog/${segment}`);
  }

  const canonical = String(entry?.canonical_link ?? "").trim();
  if (canonical) {
    try {
      const canonicalPath = normalizeSlug(new URL(canonical).pathname);
      if (canonicalPath && canonicalPath !== outputSlug) {
        return canonicalPath;
      }
    } catch {
      // ignore invalid canonical URLs
    }
  }

  return outputSlug;
}

/** Prerender jobs: output file path (SEO slug) + browser visit path (router path). */
export function getPrerenderJobs(source = metaData) {
  const mergedSource = [...source, ...getStaticAppRouteMetaEntries(source)];
  const seen = new Set();
  const jobs = [];

  for (const entry of mergedSource) {
    const outputSlug = normalizeSlug(entry?.slug);
    if (seen.has(outputSlug)) continue;
    seen.add(outputSlug);

    jobs.push({
      outputSlug,
      visitPath: resolveVisitPath(entry),
      entry,
    });
  }

  return jobs;
}

/** All crawlable public routes derived from published SEO metadata. */
export function getPrerenderRoutes(source = metaData) {
  return getPrerenderJobs(source).map((job) => job.outputSlug);
}

export function slugToOutputPath(slug) {
  const normalized = normalizeSlug(slug);
  if (normalized === "/") return "index.html";

  const segments = normalized.replace(/^\/+|\/+$/g, "");
  return `${segments}/index.html`;
}

export { metaData, normalizeSlug, blogSlugs };
