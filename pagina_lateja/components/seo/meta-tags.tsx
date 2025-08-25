import Head from "next/head"

interface MetaTagsProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

export function MetaTags({
  title = "Colectiva Documentalista",
  description = "Documentando realidades, construyendo memoria. Plataforma de documentales, crónicas y archivo fotográfico.",
  image = "/og-image.jpg",
  url = "https://colectivadocumentalista.org",
  type = "website",
}: MetaTagsProps) {
  const fullTitle = title === "Colectiva Documentalista" ? title : `${title} | Colectiva Documentalista`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="documentalismo, fotografía, crónicas, memoria, territorio, colaborativo" />
      <meta name="author" content="Colectiva Documentalista" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Colectiva Documentalista" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="es" />
      <meta name="revisit-after" content="7 days" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Colectiva Documentalista",
            description: description,
            url: url,
            logo: `${url}/logo.png`,
            sameAs: [
              "https://instagram.com/colectivadocumentalista",
              "https://twitter.com/colectivadoc",
              "https://youtube.com/@colectivadocumentalista",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              email: "contacto@colectivadocumentalista.org",
              contactType: "General Inquiry",
            },
          }),
        }}
      />
    </Head>
  )
}
