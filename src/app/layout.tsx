import type { Metadata, Viewport } from "next"
import { Libre_Caslon_Text, Nunito } from "next/font/google"
import { UIProvider } from "@/lib/UIContext"
import { ErrorPageProvider } from "@/lib/ErrorPageContext"
import Layout from "@/components/Layout/Layout"
import { getPage, type ErrorPage } from "@/lib/content"
import { pageMetadata, site } from "@/lib/site"
import "@/scss/globals.scss"

const nunito = Nunito({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
})

const libreCaslon = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-caslon",
})

export const metadata: Metadata = {
  ...pageMetadata(),
  metadataBase: new URL(site.url),
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: site.shareImage,
  },
  icons: {
    icon: "/images/icon-192.png",
    apple: [192, 512, 1024].map((size) => ({
      url: `/images/icon-${size}.png`,
      sizes: `${size}x${size}`,
    })),
  },
}

export const viewport: Viewport = {
  themeColor: site.themeColor,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${libreCaslon.variable}`}>
      <head>
        <link rel="preconnect" href="https://ucarecdn.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://ucarecdn.com" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body>
        <UIProvider>
          <ErrorPageProvider page={getPage<ErrorPage>("error")}>
            <Layout>{children}</Layout>
          </ErrorPageProvider>
        </UIProvider>
      </body>
    </html>
  )
}
