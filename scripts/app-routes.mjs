import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const configDir = resolve(__dirname, "../src/constants");
const SITE = "https://highcon.in";

export function normalizeSlug(value) {
  const slug = String(value ?? "").trim();
  if (!slug || slug === "/") return "/";
  const withLeading = slug.startsWith("/") ? slug : `/${slug}`;
  const collapsed = withLeading.replace(/\/+/g, "/");
  return collapsed.endsWith("/") ? collapsed : `${collapsed}/`;
}

/** Static React Router paths from paths.ts (no dynamic :params). */
export function getStaticAppRoutes() {
  const pathsContent = readFileSync(resolve(configDir, "paths.ts"), "utf-8");
  const routes = new Set();
  const skip = new Set(["/index.html/", "/not-found/"]);

  for (const match of pathsContent.matchAll(/:\s*["']([^"']+)["']/g)) {
    const route = normalizeSlug(match[1]);
    if (!route || route.includes(":") || skip.has(route)) continue;
    routes.add(route);
  }

  return [...routes];
}

/** SEO meta for app routes that must exist on disk but may be missing from metaData.json. */
export const STATIC_APP_ROUTE_META = {
  "/bulk-material-handling/": {
    meta_title: "Bulk Material Handling Solutions | Highcon",
    meta_description:
      "Explore Highcon bulk material handling solutions including aerospace components, idlers, pulleys, tower cranes, and industrial equipment.",
    meta_keywords:
      "bulk material handling, industrial bulk handling systems, bulk material equipment, Highcon bulk solutions",
    canonical_link: `${SITE}/bulk-material-handling/`,
    priority: 0.9,
  },
  "/material-handling/": {
    meta_title: "Material Handling Solutions | Highcon",
    meta_description:
      "Explore Highcon material handling solutions including EOT cranes, idlers, pulleys, tower cranes, and precision industrial equipment.",
    meta_keywords:
      "material handling, industrial material handling, EOT cranes, conveyor systems, Highcon material handling",
    canonical_link: `${SITE}/material-handling/`,
    priority: 0.9,
  },
  "/engineering-industrial-services/": {
    meta_title: "Engineering & Industrial Services | Highcon",
    meta_description:
      "Highcon delivers engineering and industrial services with streamlined processes for optimal efficiency across manufacturing and automation.",
    meta_keywords:
      "engineering services, industrial services, manufacturing engineering, industrial automation services, Highcon services",
    canonical_link: `${SITE}/engineering-industrial-services/`,
    priority: 0.9,
  },
};

export function getStaticAppRouteMetaEntries(source = []) {
  const existing = new Set(source.map((entry) => normalizeSlug(entry?.slug)));
  const entries = [];

  for (const slug of getStaticAppRoutes()) {
    if (existing.has(slug)) continue;

    const fallback = STATIC_APP_ROUTE_META[slug];
    if (!fallback) continue;

    entries.push({
      slug,
      status: "Published",
      ...fallback,
      og_image: "/favicon.png",
    });
  }

  return entries;
}
