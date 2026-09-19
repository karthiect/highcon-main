import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  grantAnalyticsConsent,
  trackPageView,
} from "../services/analytics";

export const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    grantAnalyticsConsent(location.pathname, location.search, location.hash);
    trackPageView(location.pathname, location.search, location.hash);
  }, [location.pathname, location.search, location.hash]);

  return null;
};
