import { readFile, writeFile, mkdir } from "fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import metaData from "./metaData.node.mjs";
import { getStaticAppRouteMetaEntries } from "./app-routes.mjs";
import { normalizeSlug, slugToOutputPath } from "./routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SITE = "https://highcon.in";
const OUT_DIR = "dist";
const iso = new Date().toISOString().split("T")[0];
const DEFAULT_OG_IMAGE = "/favicon.png";

function normalizeKeywords(pageMeta) {
  if (typeof pageMeta?.meta_keyword === "string") return pageMeta.meta_keyword;
  if (typeof pageMeta?.meta_keywords === "string")
    return pageMeta.meta_keywords;
  if (Array.isArray(pageMeta?.meta_keywords)) {
    return pageMeta.meta_keywords.join(", ");
  }
  return "";
}

function resolveOgImage(pageMeta) {
  const image = pageMeta?.og_image || pageMeta?.ogImage || DEFAULT_OG_IMAGE;
  if (!image) return `${SITE}${DEFAULT_OG_IMAGE}`;
  if (/^https?:\/\//i.test(image)) return image;
  return `${SITE}${image.startsWith("/") ? image : `/${image}`}`;
}

const PRODUCTION_SCRIPTS = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-8X4CTBPSWS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-8X4CTBPSWS');
</script>

<!-- Microsoft Clarity -->
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "vg3a3h6try");
</script>
`.trim();

function extractBuiltAssets(builtHtml) {
  const cssPath = builtHtml.match(/\/assets\/index-[\w]+\.css/)?.[0];
  const moduleScript =
    builtHtml.match(
      /<script type="module"[^>]*src="\/assets\/[^"]+\.js"[^>]*><\/script>/i,
    )?.[0] ?? "";
  const modulePreloads =
    builtHtml.match(
      /<link rel="modulepreload"[^>]*href="\/assets\/[^"]+"[^>]*>/gi,
    ) ?? [];

  const stylesheet = cssPath ? `<link rel="stylesheet" href="${cssPath}">` : "";
  const bodyAssets = [
    moduleScript,
    ...modulePreloads.filter((tag) => tag !== moduleScript),
  ]
    .filter(Boolean)
    .join("\n");

  return { stylesheet, bodyAssets };
}

async function createBaseTemplate() {
  const builtHtmlPath = join(OUT_DIR, "index.html");
  const sourceHtmlPath = join(ROOT, "index.html");
  const builtHtml = await readFile(builtHtmlPath, "utf8");

  if (builtHtml.includes("__TITLE_PLACEHOLDER__")) {
    return builtHtml.replace(/<%- prodScripts %>/g, PRODUCTION_SCRIPTS);
  }

  const sourceHtml = await readFile(sourceHtmlPath, "utf8");
  const { stylesheet, bodyAssets } = extractBuiltAssets(builtHtml);

  return sourceHtml
    .replace(/<%- prodScripts %>/g, PRODUCTION_SCRIPTS)
    .replace("</head>", `${stylesheet ? `\n  ${stylesheet}\n` : ""}</head>`)
    .replace(
      /<script type="module" src="\/src\/main\.tsx"><\/script>/,
      bodyAssets,
    );
}

const baseHtml = await createBaseTemplate();
const allPageMeta = [...metaData, ...getStaticAppRouteMetaEntries(metaData)];
const uniquePageMeta = [];
const seenSlugs = new Set();

for (const pageMeta of allPageMeta) {
  const slug = normalizeSlug(pageMeta?.slug);
  if (seenSlugs.has(slug)) continue;
  seenSlugs.add(slug);
  uniquePageMeta.push({ ...pageMeta, slug });
}

async function generatePage(pageMeta) {
  const normalizedSlug = normalizeSlug(pageMeta?.slug);

  const html = baseHtml
    .replaceAll("__TITLE_PLACEHOLDER__", pageMeta.meta_title)
    .replaceAll("__DESCRIPTION_PLACEHOLDER__", pageMeta.meta_description)
    .replaceAll("__KEYWORDS_PLACEHOLDER__", normalizeKeywords(pageMeta))
    .replaceAll("__OG_TITLE_PLACEHOLDER__", pageMeta.meta_title)
    .replaceAll("__OG_DESCRIPTION_PLACEHOLDER__", pageMeta.meta_description)
    .replaceAll("__OG_URL_PLACEHOLDER__", `${SITE}${normalizedSlug}`)
    .replaceAll("__OG_IMAGE_PLACEHOLDER__", resolveOgImage(pageMeta))
    .replaceAll("__OG_IMAGE_ALT_PLACEHOLDER__", pageMeta.meta_title)
    .replaceAll(
      "__CANONICAL_PLACEHOLDER__",
      pageMeta.canonical_link || `${SITE}${normalizedSlug}`,
    );

  const routePath = join(OUT_DIR, slugToOutputPath(normalizedSlug));
  await mkdir(dirname(routePath), { recursive: true });
  await writeFile(routePath, html, "utf8");

  console.log(`✅ Generated HTML with meta for: ${normalizedSlug}`);
}

for (const pageMeta of uniquePageMeta) {
  await generatePage(pageMeta);
}

const homeMeta =
  metaData.find((m) => {
    const canonical = String(m?.canonical_link || "").replace(/\/+$/, "");
    return canonical === SITE;
  }) || metaData[0];

if (homeMeta) {
  await generatePage({ ...homeMeta, slug: "/" });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniquePageMeta
  .map(
    (p) => `  <url>
    <loc>${SITE}${normalizeSlug(p.slug)}</loc>
    <lastmod>${iso}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p.priority ?? 0.8}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

await writeFile(join(OUT_DIR, "sitemap.xml"), sitemap.trim() + "\n");
console.log("✅ sitemap.xml generated");

const robots = `# Robots.txt for highcon.in

User-agent: *
Allow: /
Disallow: /privacy-policy

Sitemap: ${SITE}/sitemap.xml
`;

await writeFile(join(OUT_DIR, "robots.txt"), robots.trim() + "\n");
console.log("✅ robots.txt generated");

console.log(
  `\n🎉 Generated ${uniquePageMeta.length} pages with SEO meta tags!`,
);
