import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: {
    default: "Colectiva Documentalista",
    template: "%s | Colectiva Documentalista",
  },
  description:
    "Documentando realidades, construyendo memoria. Plataforma de documentales, crónicas y archivo fotográfico.",
  keywords: ["documentalismo", "fotografía", "crónicas", "memoria", "territorio", "colaborativo"],
  authors: [{ name: "Colectiva Documentalista" }],
  creator: "Colectiva Documentalista",
  publisher: "Colectiva Documentalista",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://colectivadocumentalista.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://colectivadocumentalista.org",
    title: "Colectiva Documentalista",
    description:
      "Documentando realidades, construyendo memoria. Plataforma de documentales, crónicas y archivo fotográfico.",
    siteName: "Colectiva Documentalista",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Colectiva Documentalista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colectiva Documentalista",
    description:
      "Documentando realidades, construyendo memoria. Plataforma de documentales, crónicas y archivo fotográfico.",
    images: ["/og-image.jpg"],
    creator: "@colectivadoc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
