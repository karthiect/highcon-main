import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createHtmlPlugin } from "vite-plugin-html";
import { visualizer } from "rollup-plugin-visualizer";

// Emulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const manualChunksConfig = {
  vendor: ["react", "react-dom"],
};

function injectProductionHtmlPlugin(isProd: boolean) {
  return {
    name: "inject-production-html",
    transformIndexHtml(html: string) {
      if (!isProd) return html;

      const prodHtmlPath = path.resolve(__dirname, "productionOnly.html");

      if (!fs.existsSync(prodHtmlPath)) {
        console.warn("[inject-production-html] productionOnly.html not found.");
        return html;
      }

      const prodHtml = fs.readFileSync(prodHtmlPath, "utf-8");

      // Inject before </head>
      return html.replace("</head>", `${prodHtml}\n</head>`);
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    publicDir: "public", // Explicitly set public directory
    server: {
      port: 3004,
      open: true,
      fs: {
        // Allow serving files from public directory
        strict: false,
      },
    },
    build: {
      rollupOptions: { output: { manualChunks: manualChunksConfig } },
      manifest: true, // ✅ generate manifest.json for hashed filenames
      copyPublicDir: true, // Ensure public dir is copied in build
    },
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler"]],
        },
      }),
      createHtmlPlugin({
        inject: {
          data: {
            prodScripts: "",
          },
          tags: [
            {
              tag: "link",
              attrs: {
                rel: "preconnect",
                href: "https://highcon.in",
                crossorigin: "",
              },
              injectTo: "head",
            },
            {
              tag: "link",
              attrs: {
                rel: "dns-prefetch",
                href: "https://highcon.in",
              },
              injectTo: "head",
            },
          ],
        },
      }),

      ...(mode === "production"
        ? [
            visualizer({
              filename: "bundle-analysis.html",
              gzipSize: true,
              brotliSize: true,
            }),
          ]
        : []),
      injectProductionHtmlPlugin(isProd),
    ],
  };
});
