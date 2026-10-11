import type { Metadata } from "next"
import type { Meta } from "./content"

export const site = {
  title: "Portfolio | Vincent Weltje",
  shortTitle: "Portfolio vweltje",
  description: "Personal portfolio web site of Vincent Weltje",
  url: "https://vweltje.nl",
  themeColor: "#2a4742",
  backgroundColor: "#fff",
  shareImage:
    "https://ucarecdn.com/ed78dfba-c22e-4a15-ae45-b69798994efb/shareimage.jpg",
}

// Per page title and description, everything else comes from the root layout
export function pageMetadata(meta?: Meta): Metadata {
  const title = meta?.title ?? site.title
  const description = meta?.description ?? site.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: "en_US",
      siteName: site.title,
      images: { url: site.shareImage, secureUrl: site.shareImage },
    },
  }
}
