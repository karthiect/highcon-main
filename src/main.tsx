import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "react-phone-number-input/style.css";
import App from "./App.tsx";
import { Toaster } from "sonner";

const rootElement = document.getElementById("root")!;

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <App />
      <Toaster duration={5000} closeButton position="bottom-right" />
    </HelmetProvider>
  </StrictMode>,
);

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    rootElement.setAttribute("data-hydrated", "true");
  });
});
