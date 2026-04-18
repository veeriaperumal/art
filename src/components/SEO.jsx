import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, keywords, image, url, schema }) {
  const siteTitle = 'Glorious Art Creations'
  const fullTitle = `${title} | ${siteTitle}`
  const siteUrl = 'https://gloriousartcreations.com'
  const finalDescription = description || 'Chidambaram\'s #1 Aari Embroidery and Fashion Designing Academy (Affiliated to ICVE/CDL/CHM-281).'

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords || 'aari embroidery chidambaram, fashion designing chidambaram, tailoring classes women, makeup artistry chidambaram'} />

      {/* Social Media (OpenGraph) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
      <meta property="og:image" content={image || `${siteUrl}/hero.png`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Canonical Link */}
      <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />
    </Helmet>
  )
}
