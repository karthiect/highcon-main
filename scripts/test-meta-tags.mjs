#!/usr/bin/env node

/**
 * Script to test meta tags after production build
 * Run this after building the project to verify meta tags are correct
 */

import { readFile } from "fs/promises";
import { join } from "path";
import metaData from "./metaData.node.mjs";
import { normalizeSlug, slugToOutputPath } from "./routes.mjs";

const OUT_DIR = "dist";

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function decodeHtmlEntities(value) {
  return String(value)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function includesMetaValue(content, attrName, attrValue, metaValue) {
  if (!metaValue) return true;

  const escaped = escapeRegExp(metaValue);
  const direct = new RegExp(
    `${attrName}="${attrValue}" content="${escaped}"`,
    "i",
  );
  const reversed = new RegExp(
    `content="${escaped}" ${attrName}="${attrValue}"`,
    "i",
  );

  return direct.test(content) || reversed.test(content);
}

async function testMetaTags() {
  console.log("🔍 Testing meta tags in production build...\n");

  let passed = 0;
  let failed = 0;
  const testedSlugs = new Set();

  for (const meta of metaData) {
    const slug = normalizeSlug(meta.slug);
    if (testedSlugs.has(slug)) continue;
    testedSlugs.add(slug);

    try {
      const filePath = join(OUT_DIR, slugToOutputPath(slug));

      const content = await readFile(filePath, "utf8");
      const title = decodeHtmlEntities(meta.meta_title);

      const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
      const hasTitle =
        decodeHtmlEntities(titleMatch?.[1] ?? "") === title ||
        content.includes(`<title>${meta.meta_title}</title>`);

      const hasDescription = includesMetaValue(
        content,
        "name",
        "description",
        meta.meta_description,
      );

      const hasOgTitle = includesMetaValue(
        content,
        "property",
        "og:title",
        meta.meta_title,
      );

      const hasKeywords = includesMetaValue(
        content,
        "name",
        "keywords",
        meta.meta_keywords,
      );

      // Check if placeholders are still present (this means replacement failed)
      const hasPlaceholders =
        content.includes("__TITLE_PLACEHOLDER__") ||
        content.includes("__DESCRIPTION_PLACEHOLDER__") ||
        content.includes("__KEYWORDS_PLACEHOLDER__") ||
        content.includes("__OG_TITLE_PLACEHOLDER__");

      if (hasPlaceholders) {
        console.log(`❌ ${meta.slug} - Placeholders not replaced`);
        failed++;
      } else if (hasTitle && hasDescription && hasOgTitle && hasKeywords) {
        console.log(`✅ ${meta.slug} - Meta tags OK`);
        passed++;
      } else {
        console.log(`❌ ${meta.slug} - Missing meta tags`);
        if (!hasTitle) console.log(`   - Missing title: ${meta.meta_title}`);
        if (!hasDescription) console.log(`   - Missing description`);
        if (!hasKeywords) console.log(`   - Missing keywords: ${meta.meta_keywords}`);
        if (!hasOgTitle) console.log(`   - Missing OG title`);

        // Show a snippet of what we found
        const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/);
        const descMatch = content.match(
          /name="description"[^>]*content="([^"]*)"/
        );

        if (titleMatch) console.log(`   - Found title: ${decodeHtmlEntities(titleMatch[1])}`);
        if (descMatch)
          console.log(
            `   - Found description: ${descMatch[1].substring(0, 50)}...`
          );

        failed++;
      }
    } catch (error) {
      console.log(
        `❌ ${meta.slug} - File not found or error: ${error.message}`
      );
      failed++;
    }
  }

  console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);

  if (failed > 0) {
    console.log("\n💡 Tips to fix:");
    console.log("1. Run 'npm run build' to generate the production build");
    console.log("2. Ensure the gen-seo-files.mjs script runs after build");
    console.log("3. Check that all routes in metaData.js are correct");
    process.exit(1);
  } else {
    console.log("\n🎉 All meta tags are correctly generated!");
  }
}

testMetaTags().catch(console.error);
