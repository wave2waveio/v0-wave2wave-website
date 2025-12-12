import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnnouncementBanner } from "@/components/announcement-banner"
import Script from "next/script"

const inter = localFont({
  src: [
    { path: "../public/fonts/inter/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/inter/Inter-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Wave2Wave.io - Custom Structured Cabling, Data Center & DCIM Solutions",
  description:
    "Wave2Wave.io designs, delivers, and supports the critical physical infrastructure behind tomorrow's networks — combining custom-engineered structured cabling, precision logistics, and digital twin-driven services.",
  openGraph: {
    title: "Wave2Wave.io - Custom Structured Cabling, Data Center & DCIM Solutions",
    description:
      "Wave2Wave.io designs, delivers, and supports the critical physical infrastructure behind tomorrow's networks — combining custom-engineered structured cabling, precision logistics, and digital twin-driven services.",
    url: "https://www.wave2wave.io",
    siteName: "Wave2Wave.io",
    images: [
      {
        url: "/images/wave2wave-logo.png", // Relative URL works for Vercel deployment
        width: 600,
        height: 325,
        alt: "Wave2Wave Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P9KTZ7PC');
            `,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P9KTZ7PC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <AnnouncementBanner />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
