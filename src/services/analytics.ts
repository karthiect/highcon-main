/**
 * Privacy-Conscious GA4 & Microsoft Clarity Analytics Service
 * Safe for SSR / Prerendering
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined)?.trim() || "";
const CLARITY_ID = (import.meta.env.VITE_CLARITY_PROJECT_ID as string | undefined)?.trim() || "";

const IS_PROD = import.meta.env.PROD;

function isGaValid(): boolean {
  return IS_PROD && /^G-[A-Z0-9]+$/i.test(GA_ID);
}

function isClarityValid(): boolean {
  return IS_PROD && CLARITY_ID.length > 0;
}

let isGaInjected = false;
let isClarityInjected = false;
let lastSentPath = "";

/**
 * Normalizes an SPA route path according to Highcon route templates.
 * Strips query strings & hashes, maps dynamic routes, and defaults unknown routes to /other/.
 */
export function normalizeAnalyticsPath(pathname: string, search: string = "", hash: string = ""): {
  normalizedPath: string;
  isRecognizedRoute: boolean;
  hasQueryOrHash: boolean;
} {
  const hasQueryOrHash = (search && search.length > 0) || (hash && hash.length > 0);

  // Clean trailing slash & query parameters
  const cleanPath = pathname.split("?")[0].split("#")[0];

  // Static routes matching src/constants/paths.ts
  if (cleanPath === "/" || cleanPath === "/index.html/" || cleanPath === "/index.html") {
    return { normalizedPath: "/", isRecognizedRoute: true, hasQueryOrHash };
  }
  if (cleanPath === "/about-highcon" || cleanPath === "/about-highcon/") {
    return { normalizedPath: "/about-highcon/", isRecognizedRoute: true, hasQueryOrHash };
  }
  if (cleanPath === "/engineering-industrial-services" || cleanPath === "/engineering-industrial-services/") {
    return { normalizedPath: "/engineering-industrial-services/", isRecognizedRoute: true, hasQueryOrHash };
  }
  if (cleanPath === "/engineering-industry-insights-blog" || cleanPath === "/engineering-industry-insights-blog/") {
    return { normalizedPath: "/engineering-industry-insights-blog/", isRecognizedRoute: true, hasQueryOrHash };
  }
  if (cleanPath === "/contact-highcon-engineering" || cleanPath === "/contact-highcon-engineering/") {
    return { normalizedPath: "/contact-highcon-engineering/", isRecognizedRoute: true, hasQueryOrHash };
  }
  if (cleanPath === "/bulk-material-handling" || cleanPath === "/bulk-material-handling/") {
    return { normalizedPath: "/bulk-material-handling/", isRecognizedRoute: true, hasQueryOrHash };
  }
  if (cleanPath === "/material-handling" || cleanPath === "/material-handling/") {
    return { normalizedPath: "/material-handling/", isRecognizedRoute: true, hasQueryOrHash };
  }
  if (cleanPath === "/not-found" || cleanPath === "/not-found/") {
    return { normalizedPath: "/not-found/", isRecognizedRoute: true, hasQueryOrHash };
  }

  // Dynamic route patterns
  const parts = cleanPath.split("/").filter(Boolean);

  // /blog/:slug/
  if (parts.length === 2 && parts[0] === "blog") {
    return { normalizedPath: "/blog/:slug/", isRecognizedRoute: true, hasQueryOrHash };
  }

  // /bulk-material-handling/:layerOne ... :layerFive
  if (parts.length >= 2 && parts[0] === "bulk-material-handling") {
    const layerDepth = parts.length - 1;
    if (layerDepth === 1) return { normalizedPath: "/bulk-material-handling/:layerOne/", isRecognizedRoute: true, hasQueryOrHash };
    if (layerDepth === 2) return { normalizedPath: "/bulk-material-handling/:layerOne/:layerTwo/", isRecognizedRoute: true, hasQueryOrHash };
    if (layerDepth === 3) return { normalizedPath: "/bulk-material-handling/:layerOne/:layerTwo/:layerThree/", isRecognizedRoute: true, hasQueryOrHash };
    if (layerDepth === 4) return { normalizedPath: "/bulk-material-handling/:layerOne/:layerTwo/:layerThree/:layerFour/", isRecognizedRoute: true, hasQueryOrHash };
    if (layerDepth === 5) return { normalizedPath: "/bulk-material-handling/:layerOne/:layerTwo/:layerThree/:layerFour/:layerFive/", isRecognizedRoute: true, hasQueryOrHash };
  }

  // /material-handling/:layerOne ... :layerFive
  if (parts.length >= 2 && parts[0] === "material-handling") {
    const layerDepth = parts.length - 1;
    if (layerDepth === 1) return { normalizedPath: "/material-handling/:layerOne/", isRecognizedRoute: true, hasQueryOrHash };
    if (layerDepth === 2) return { normalizedPath: "/material-handling/:layerOne/:layerTwo/", isRecognizedRoute: true, hasQueryOrHash };
    if (layerDepth === 3) return { normalizedPath: "/material-handling/:layerOne/:layerTwo/:layerThree/", isRecognizedRoute: true, hasQueryOrHash };
    if (layerDepth === 4) return { normalizedPath: "/material-handling/:layerOne/:layerTwo/:layerThree/:layerFour/", isRecognizedRoute: true, hasQueryOrHash };
    if (layerDepth === 5) return { normalizedPath: "/material-handling/:layerOne/:layerTwo/:layerThree/:layerFour/:layerFive/", isRecognizedRoute: true, hasQueryOrHash };
  }

  // Fallback for unknown / unrecognized routes
  return { normalizedPath: "/other/", isRecognizedRoute: false, hasQueryOrHash };
}

/**
 * Initializes GA4 with default DENIED consent before injecting script.
 */
function initGa() {
  if (typeof window === "undefined" || !isGaValid() || isGaInjected) return;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer?.push(args);
  }
  window.gtag = gtag;

  // CRITICAL: Default consent MUST be denied
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", GA_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  isGaInjected = true;
}

/**
 * Initializes Microsoft Clarity lazily.
 */
function initClarity() {
  if (typeof window === "undefined" || !isClarityValid() || isClarityInjected) return;

  (function (c: any, l: any, a: any, r: any, i: any) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    const t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_ID);

  isClarityInjected = true;
}

/**
 * Grants consent and injects GA4 / Clarity scripts lazily.
 */
export function grantAnalyticsConsent(currentPathname: string, search: string = "", hash: string = "") {
  if (typeof window === "undefined") return;

  if (isGaValid()) {
    if (!isGaInjected) {
      initGa();
    }
    window.gtag?.("consent", "update", {
      analytics_storage: "granted",
    });
  }

  const routeInfo = normalizeAnalyticsPath(currentPathname, search, hash);

  // Clarity is initialized ONLY on clean, recognized routes without query/hash strings
  if (isClarityValid() && routeInfo.isRecognizedRoute && !routeInfo.hasQueryOrHash) {
    if (!isClarityInjected) {
      initClarity();
    }
    window.clarity?.("consent");
  }
}

/**
 * Sends a single manual GA4 page_view for a route change.
 */
export function trackPageView(pathname: string, search: string = "", hash: string = "") {
  if (typeof window === "undefined" || !isGaValid() || !isGaInjected) return;

  const { normalizedPath } = normalizeAnalyticsPath(pathname, search, hash);

  // Deduplication check for StrictMode / double renders
  if (lastSentPath === normalizedPath) {
    return;
  }

  lastSentPath = normalizedPath;

  window.gtag?.("event", "page_view", {
    page_path: normalizedPath,
    page_title: document.title,
    send_to: GA_ID,
  });
}

/**
 * Best-effort cookie cleanup on consent withdrawal/rejection.
 */
export function revokeAnalyticsConsent() {
  if (typeof window === "undefined") return;

  lastSentPath = "";

  if (window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
    });
  }

  if (window.clarity) {
    try {
      window.clarity("consent", false);
    } catch {
      // Ignore clarity error if function signature varies
    }
  }

  // Best-effort cleanup of accessible first-party GA & Clarity cookies
  try {
    const cookies = document.cookie.split(";");
    const targetCookiePrefixes = ["_ga", "_clsk", "_clck", "_gid"];
    const domains = [window.location.hostname, `.${window.location.hostname}`, ""];
    const path = "/";

    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();

      const shouldRemove = targetCookiePrefixes.some((prefix) => name.startsWith(prefix));
      if (shouldRemove) {
        for (const domain of domains) {
          const domainString = domain ? `; domain=${domain}` : "";
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}${domainString}`;
        }
      }
    }
  } catch {
    // Ignore cookie clearance errors
  }
}
