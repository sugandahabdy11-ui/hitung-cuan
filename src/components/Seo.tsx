import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}

const SITE_NAME = "CalcTools Finance Indonesia";
const DEFAULT_OG_IMAGE = "https://calctoolsfinance.site/og-image.png";
const SITE_URL = "https://calctoolsfinance.site";

export function Seo({
  title,
  description,
  canonical,
  noindex = false,
}: SeoProps) {
  const canonicalUrl = canonical ?? SITE_URL;

  return (
    <Helmet>
      {/* Charset */}
      <meta charSet="utf-8" />

      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </Helmet>
  );
}
