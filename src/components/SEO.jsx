import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path = '' }) {
  const siteTitle = 'Central Alberta FASD Network'
  const fullTitle = title ? `${title} | CAFASD` : `${siteTitle} | Fetal Alcohol Spectrum Disorder Network`
  const baseUrl = 'https://www.centralfasd.org'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${baseUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}${path}`} />
      <meta property="og:site_name" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
