import React from "react";
import { useConsent } from "../context/ConsentContext";

export const ConsentBanner: React.FC = () => {
  const { isBannerOpen, acceptAnalytics, rejectAnalytics } = useConsent();

  if (!isBannerOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie and Analytics Preferences"
      className="fixed bottom-0 inset-x-0 z-50 border-t border-cyan-500/20 bg-slate-950/95 p-4 text-white shadow-2xl backdrop-blur-md transition-all duration-300 sm:p-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-1 text-left">
          <h3 className="font-['Manrope'] text-sm font-semibold tracking-wide text-white sm:text-base">
            Privacy & Analytics Preferences
          </h3>
          <p className="max-w-3xl font-['Manrope'] text-xs text-slate-300 sm:text-sm">
            We use Google Analytics 4 and Microsoft Clarity to understand site usage and improve performance.
            Analytics scripts load <strong>only after explicit consent</strong>, and ad-tracking signals remain disabled.
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={acceptAnalytics}
            className="w-full rounded-full bg-cyan-400 px-5 py-2 font-['Manrope'] text-xs font-bold text-slate-950 transition-colors hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto sm:text-sm"
          >
            Accept analytics
          </button>
          <button
            type="button"
            onClick={rejectAnalytics}
            className="w-full rounded-full border border-slate-700 bg-slate-900 px-5 py-2 font-['Manrope'] text-xs font-semibold text-slate-200 transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto sm:text-sm"
          >
            Reject analytics
          </button>
        </div>
      </div>
    </div>
  );
};
