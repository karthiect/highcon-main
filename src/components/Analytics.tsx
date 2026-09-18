import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useConsent } from "../context/ConsentContext";
import {
  grantAnalyticsConsent,
  revokeAnalyticsConsent,
  trackPageView,
} from "../services/analytics";
import { ConsentBanner } from "./ConsentBanner";

export const Analytics: React.FC = () => {
  const location = useLocation();
  const { consentState } = useConsent();
  const prevLocationRef = useRef<string | null>(null);

  useEffect(() => {
    const currentLocationKey = `${location.pathname}${location.search}${location.hash}`;

    if (consentState === "granted") {
      grantAnalyticsConsent(location.pathname, location.search, location.hash);
      trackPageView(location.pathname, location.search, location.hash);
      prevLocationRef.current = currentLocationKey;
    } else if (consentState === "denied") {
      revokeAnalyticsConsent();
      prevLocationRef.current = null;
    }
  }, [consentState, location.pathname, location.search, location.hash]);

  return <ConsentBanner />;
};
