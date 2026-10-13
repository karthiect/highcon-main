import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { paths } from "../constants/paths";

const COOKIE_NOTICE_SESSION_KEY = "highcon-cookie-notice-seen";

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.sessionStorage.getItem(COOKIE_NOTICE_SESSION_KEY) !== "true",
  );

  useEffect(() => {
    if (!isVisible) return;

    window.sessionStorage.setItem(COOKIE_NOTICE_SESSION_KEY, "true");
    const timeoutId = window.setTimeout(() => setIsVisible(false), 3000);

    return () => window.clearTimeout(timeoutId);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <aside
      aria-labelledby="cookie-notice-title"
      className="fixed right-4 bottom-28 z-[60] max-h-[calc(100dvh-9rem)] w-[calc(100vw-2rem)] max-w-sm overflow-y-auto rounded-xl border border-slate-200 bg-white p-5 font-['Manrope'] text-[#004856] shadow-xl sm:p-6 md:right-24 md:bottom-8"
      role="status"
    >
      <div className="mb-2 flex items-center justify-between gap-4">
        <h2 id="cookie-notice-title" className="text-lg font-bold">
          Cookie Notice
        </h2>
        <button
          aria-label="Close cookie notice"
          className="rounded-md p-1 text-[#004856] transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004856]"
          onClick={() => setIsVisible(false)}
          type="button"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
      <p className="text-sm leading-relaxed text-gray-700">
        We use cookies and similar technologies to understand how visitors
        interact with our website, analyze website traffic, measure performance,
        and improve your browsing experience. For more information, please read
        our{" "}
        <Link
          className="font-semibold text-[#004856] underline underline-offset-2 hover:text-[#14525d]"
          to={paths.privacyPolicy}
        >
          Cookie Policy
        </Link>
        .
      </p>
    </aside>
  );
}
