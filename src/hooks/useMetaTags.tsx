import { useCallback, useEffect } from "react";

type MetaItem = {
  slug: string;
  meta_title: string;
  meta_description: string;
  meta_keywords?: string;
  canonical_link?: string;
  og_image?: string;
  ogImage?: string; // Fallback
  priority?: number;
};

type UseMetaOptions = {
  getPath?: () => string;
  includeTwitter?: boolean;
  setOgUrl?: boolean;
  twitterCard?: string;
};

import { normalizePath } from "../helpers/pathUtils";

function upsertMeta(attrName: string, attrValue: string, content?: string) {
  if (!content) return;

  let el = document.head.querySelector(
    `meta[${attrName}="${attrValue}"]`
  ) as HTMLMetaElement | null;

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function upsertLink(rel: string, href?: string) {
  if (!href) return;

  let el = document.head.querySelector(
    `link[rel="${rel}"]`
  ) as HTMLLinkElement | null;

  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }

  el.setAttribute("href", href);
}

export default function useMetaTags(
  metaArray: MetaItem[] | undefined,
  options: UseMetaOptions = {}
) {
  const { getPath: optGetPath } = options || {};

  const getPath = useCallback(() => {
    if (optGetPath) return normalizePath(optGetPath());
    if (typeof window === "undefined") return "/";
    return normalizePath(window.location.pathname || "/");
  }, [optGetPath]);

  useEffect(() => {
    if (
      typeof document === "undefined" ||
      !Array.isArray(metaArray) ||
      !metaArray.length
    )
      return;

    const path = getPath();

    // ✅ Create normalized map
    const map = Object.fromEntries(
      metaArray.map((m) => [
        normalizePath(m.slug || "/"),
        m,
      ])
    );

    const fallback =
      map["/"] ||
      metaArray.find((item) => normalizePath(item?.slug) === "/") ||
      metaArray[0];

    // ✅ Exact match
    let found = map[path];

    // ✅ Bulk/Material handling fallback
    if (!found) {
      if (path.startsWith("/bulk-material-handling/")) {
        const altPath = path.replace(
          "/bulk-material-handling/",
          "/material-handling/"
        );
        found = map[altPath];
      } else if (path.startsWith("/material-handling/")) {
        const altPath = path.replace(
          "/material-handling/",
          "/bulk-material-handling/"
        );
        found = map[altPath];
      }
    }

    // ✅ Service fallback
    if (!found && path.startsWith("/service/")) {
      found = map["/services/"] || fallback;
    }

    // ✅ Blog dynamic route support (/blog/:slug/)
    if (!found && path.startsWith("/blog/") && path !== "/blog/") {
      const blogSegment = path
        .replace(/^\/blog\//, "")
        .replace(/\/+$/, "");

      found =
        map[`/${blogSegment}/`] ||
        map[`/blog/${blogSegment}/`] ||
        map["/blog/"] ||
        found;
    }

    if (!found) {
      found = fallback;
    }

    const title = found?.meta_title || fallback?.meta_title || "";
    const desc = found?.meta_description || fallback?.meta_description || "";
    const keywords = found?.meta_keywords || fallback?.meta_keywords || "";
    const canonical =
      found?.canonical_link ||
      fallback?.canonical_link ||
      (typeof window !== "undefined" ? window.location.href : "");

    // <title>
    if (title) document.title = title;

    // Meta tags
    upsertMeta("name", "description", desc);

    if (keywords) {
      upsertMeta("name", "keywords", keywords);
    }

    // Open Graph
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", desc);

    // Resolve OG Image
    const rawImage = found?.og_image || found?.ogImage || fallback?.og_image || "/favicon.png";
    const ogImage = rawImage.startsWith("http") ? rawImage : `${window.location.origin}${rawImage.startsWith("/") ? "" : "/"}${rawImage}`;
    upsertMeta("property", "og:image", ogImage);

    if (options.includeTwitter !== false) {
      upsertMeta("name", "twitter:title", title);
      upsertMeta("name", "twitter:description", desc);
      upsertMeta("name", "twitter:image", ogImage);
      upsertMeta(
        "name",
        "twitter:card",
        options.twitterCard || "summary_large_image"
      );
    }

    if (options.setOgUrl !== false && typeof window !== "undefined") {
      upsertMeta("property", "og:url", window.location.href);
    }

    upsertLink("canonical", canonical);
  }, [
    metaArray,
    getPath,
    options.includeTwitter,
    options.setOgUrl,
    options.twitterCard,
  ]);
}
