import { MetadataRoute } from "next";

/**
 * Sitemap for calctoolsfinance.site
 * Optimized for SEO & Google Search Console
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calctoolsfinance.site";
  const lastModified = new Date();

  return [
    /* ======================
       CORE PAGES
    ====================== */
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },

    /* ======================
       CALCULATOR PAGES
    ====================== */
    {
      url: `${baseUrl}/kalkulator-gaji-pph21`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kalkulator-kpr`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/emi-calculator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    /* ======================
       LEGAL PAGES (Adsense)
    ====================== */
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
