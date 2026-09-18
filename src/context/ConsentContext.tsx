import React, { createContext, useContext, useEffect, useState } from "react";

export type ConsentState = "unknown" | "granted" | "denied";

const CONSENT_STORAGE_KEY = "highcon_analytics_consent_v1";

interface ConsentContextType {
  consentState: ConsentState;
  isBannerOpen: boolean;
  acceptAnalytics: () => void;
  rejectAnalytics: () => void;
  openConsentBanner: () => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

function getInitialConsentState(): ConsentState {
  if (typeof window === "undefined") return "unknown";
  try {
    const saved = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (saved === "granted" || saved === "denied") {
      return saved;
    }
  } catch {
    // Ignore localStorage access errors
  }
  return "unknown";
}

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consentState, setConsentState] = useState<ConsentState>(getInitialConsentState);
  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(() => {
    return getInitialConsentState() === "unknown";
  });

  useEffect(() => {
    if (consentState === "unknown") {
      setIsBannerOpen(true);
    }
  }, [consentState]);

  const acceptAnalytics = () => {
    setConsentState("granted");
    setIsBannerOpen(false);
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, "granted");
    } catch {
      // Ignore localStorage errors
    }
  };

  const rejectAnalytics = () => {
    setConsentState("denied");
    setIsBannerOpen(false);
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, "denied");
    } catch {
      // Ignore localStorage errors
    }
  };

  const openConsentBanner = () => {
    setIsBannerOpen(true);
  };

  return (
    <ConsentContext.Provider
      value={{
        consentState,
        isBannerOpen,
        acceptAnalytics,
        rejectAnalytics,
        openConsentBanner,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = (): ConsentContextType => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return context;
};
