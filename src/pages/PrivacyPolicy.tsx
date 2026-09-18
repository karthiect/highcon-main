import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useConsent } from "../context/ConsentContext";
import { Helmet } from "react-helmet-async";

export const PrivacyPolicy: React.FC = () => {
  const { consentState, openConsentBanner } = useConsent();

  return (
    <>
      <Helmet>
        <title>Privacy & Cookie Policy | Highcon Innovations International</title>
        <meta
          name="description"
          content="Privacy and Cookie Policy for Highcon Innovations International detailing consent-gated Google Analytics 4 and Microsoft Clarity usage."
        />
      </Helmet>
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-6 font-['Manrope'] text-3xl font-bold text-gray-900 sm:text-4xl">
          Privacy & Cookie Policy
        </h1>

        <div className="space-y-6 font-['Manrope'] text-sm leading-relaxed text-gray-700 sm:text-base">
          <p>
            Highcon Innovations International respects your privacy. This policy outlines how we collect, handle,
            and process analytics data on our website.
          </p>

          <section className="rounded-xl bg-slate-50 p-6 border border-slate-200">
            <h2 className="mb-3 text-lg font-semibold text-gray-900">
              Analytics & Tracking Technologies (GA4 & Microsoft Clarity)
            </h2>
            <p className="mb-3">
              We use <strong>Google Analytics 4 (GA4)</strong> and <strong>Microsoft Clarity</strong> to analyze website performance,
              user traffic, and improve customer experience.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              <li>
                <strong>Consent-Gated Loading:</strong> Neither Google Analytics nor Microsoft Clarity scripts are loaded
                or executed until you explicitly grant consent by clicking "Accept analytics".
              </li>
              <li>
                <strong>Privacy Controls:</strong> Ad storage, ad user data, and ad personalization signals remain denied by default.
                Google signals and personalized advertising features are explicitly disabled.
              </li>
              <li>
                <strong>Anonymization & Safety:</strong> URL parameters, personal search queries, email addresses, and personal identifiable
                information (PII) are never sent to our analytics providers.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">Your Current Preference</h2>
            <p className="capitalize">
              Current Analytics Status: <span className="font-bold text-cyan-600">{consentState}</span>
            </p>
            <button
              type="button"
              onClick={openConsentBanner}
              className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
            >
              Change Cookie Preferences
            </button>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
