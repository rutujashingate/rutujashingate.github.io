import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rutuja Shingate - UX Designer",
  description:
    "From logic to layout, I design with both sides of the brain. Blending my developer roots with design thinking to craft experiences that just click.",
  keywords:
    "UX Designer, UI Designer, Product Designer, User Experience, User Interface, Design Systems, Prototyping, Figma, React, Frontend Development",
  authors: [{ name: "Rutuja Shingate" }],
  creator: "Rutuja Shingate",
  publisher: "Rutuja Shingate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rutujashingate.github.io",
    title: "Rutuja Shingate - UX Designer",
    description:
      "From logic to layout, I design with both sides of the brain. Blending my developer roots with design thinking to craft experiences that just click.",
    siteName: "Rutuja Shingate Portfolio",
    images: [
      {
        url: "/images/rutuja-about.jpeg",
        width: 1200,
        height: 630,
        alt: "Rutuja Shingate - UX Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rutuja Shingate - UX Designer",
    description:
      "From logic to layout, I design with both sides of the brain. Blending my developer roots with design thinking to craft experiences that just click.",
    images: ["/images/og-image.jpg"],
    creator: "@rutujashingate",
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
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#F5F1E8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
