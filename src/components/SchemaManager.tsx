import type { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import metaData from "../../metaData.js";
import { paths } from "../constants/paths";

const SITE_URL = "https://highcon.in";
const BRAND_NAME = "Highcon Innovations International";

type MetaItem = {
  page: string;
  meta_title: string;
  meta_description: string;
  ogImage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

type SchemaObject = {
  "@context"?: string;
  "@type"?: string | string[];
  "@id"?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const SchemaManager: FC = () => {
  const { pathname } = useLocation();
  const currentMeta = (metaData as MetaItem[]).find(
    (item) => item.page === pathname,
  );

  if (!currentMeta) return null;

  /* -------------------------------
     1️⃣ Detect schema type
  -------------------------------- */
  let schemaType: string | string[] = "WebPage";

  if (pathname === "/") schemaType = "WebSite";
  else if (pathname === paths.about) schemaType = "AboutPage";
  else if (pathname === "/our-team") schemaType = "AboutPage";
  else if (pathname === "/contact-us") schemaType = "ContactPage";
  else if (pathname === "/pricing") schemaType = "OfferCatalog";
  else if (pathname.includes("/service/")) schemaType = "Service";
  else if (pathname === "/ai-agents") schemaType = "SoftwareApplication";
  else if (pathname === "/newsletter") schemaType = "WebPage";
  else if (pathname.includes("/blog/")) schemaType = "BlogPosting";
  else if (pathname === "/blog") schemaType = "Blog";
  else if (pathname.includes("erp-software-companies-in-"))
    schemaType = ["SoftwareCompany", "LocalBusiness"];

  /* -------------------------------
     2️⃣ Base schema
  -------------------------------- */
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "@id": `${SITE_URL}${pathname}#schema`,
    name: currentMeta.meta_title,
    description: currentMeta.meta_description,
    url: `${SITE_URL}${pathname}`,
    image: currentMeta.ogImage
      ? `${SITE_URL}${currentMeta.ogImage}`
      : undefined,
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: BRAND_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.png`,
      },
      sameAs: [
        "https://www.linkedin.com/company/highcon",
        "https://www.facebook.com/highcon",
        "https://www.instagram.com/highcon",
      ],
    },
  };

  /* -------------------------------
     3️⃣ Page-specific extensions
  -------------------------------- */

  // 🔹 Service pages
  if (schemaType === "Service") {
    schema.serviceType = currentMeta.meta_title;
    schema.provider = {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
    };
  }

  // 🔹 Pricing page
  if (schemaType === "OfferCatalog") {
    schema.itemListElement = [
      { "@type": "Offer", name: "Bronze Package" },
      { "@type": "Offer", name: "Silver Package" },
      { "@type": "Offer", name: "Gold Package" },
    ];
  }

  // 🔹 AI Agents
  if (schemaType === "SoftwareApplication") {
    schema.applicationCategory = "Artificial Intelligence Software";
    schema.operatingSystem = "All";
  }

  // 🔹 Blog post
  if (schemaType === "BlogPosting") {
    schema.author = {
      "@type": "Organization",
      name: BRAND_NAME,
    };
    schema.mainEntityOfPage = {
      "@type": "WebPage",
      "@id": `${SITE_URL}${pathname}`,
    };
  }

  // 🔹 Location pages (ERP Software Companies in City)
  let faqSchema: SchemaObject | null = null;

  if (pathname.includes("erp-software-companies-in-")) {
    const city = pathname
      .replace("/erp-software-companies-in-", "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    schema.name = BRAND_NAME;
    schema.alternateName = `ERP Software Company in ${city}`;
    schema.areaServed = {
      "@type": "City",
      name: city,
    };
    schema.address = {
      "@type": "PostalAddress",
      addressLocality: city,
      addressCountry: "IN",
    };

    // FAQ schema (location-specific)
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_URL}${pathname}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: `Which are the best ERP software companies in ${city}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The best ERP software companies in ${city} provide scalable, industry-specific ERP solutions with strong local support.`,
          },
        },
        {
          "@type": "Question",
          name: "Is ERP software suitable for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ERP software helps small businesses automate operations, improve accuracy, and scale efficiently.",
          },
        },
      ],
    };
  }

  /* -------------------------------
     4️⃣ Inject schema
  -------------------------------- */
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
    </Helmet>
  );
};

export default SchemaManager;
