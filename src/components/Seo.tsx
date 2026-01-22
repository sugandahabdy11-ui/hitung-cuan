import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}

export function Seo({
  title,
  description,
  canonical,
  noindex = false,
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {canonical && <link rel="canonical" href={canonical} />}

      {noindex && (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </Helmet>
  );
}
