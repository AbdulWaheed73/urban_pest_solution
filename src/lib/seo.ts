import { siteConfig } from "@/data/site-config";
import type { PestDetail, TrainingSession, Product, FAQ } from "@/types";

export const SITE_URL = "https://urbanpestsolution.com";

/**
 * Default social-share image — the build-generated card at /opengraph-image.
 * Pages that set their own `openGraph` block don't inherit the root
 * opengraph-image file convention, so include this explicitly in those pages.
 */
export const OG_IMAGE = "/opengraph-image";

const ORG_ID = `${SITE_URL}/#organization`;

/** LocalBusiness / Organization — belongs sitewide (root layout). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORG_ID,
    name: siteConfig.companyName,
    url: SITE_URL,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/logo.png`,
    description:
      "Integrated pest management for commercial and residential properties across Pakistan — science-driven, eco-friendly pest control, fumigation, termite and rodent treatment.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "106-A, Str. 15, State Life Housing Society",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
  };
}

/** WebSite node — pairs with the organization as publisher. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.companyName,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-PK",
  };
}

/** BreadcrumbList — pass ordered [{ name, path }] from home to current page. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** FAQPage — from any list of Q&A. */
export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Article — for a pest library entry. */
export function pestArticleSchema(pest: PestDetail) {
  const url = `${SITE_URL}/library/${pest.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${pest.name} (${pest.scientificName})`,
    description: pest.shortDescription,
    image: `${SITE_URL}/pests/${pest.slug}.jpg`,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    about: pest.scientificName,
  };
}

/** Course — for an academy training session. */
export function courseSchema(session: TrainingSession) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: session.title,
    description: session.summary,
    image: `${SITE_URL}${session.image}`,
    provider: {
      "@type": "Organization",
      name: "Urban Pest Academy",
      url: `${SITE_URL}/academy`,
    },
  };
}

/** ItemList of Products — for the shop. */
export function productListSchema(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description,
        category: p.category,
        offers: {
          "@type": "Offer",
          price: p.price,
          priceCurrency: "PKR",
          availability: p.inStock
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
        },
      },
    })),
  };
}
