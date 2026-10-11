import type { MetadataRoute } from "next"
import { getCases } from "@/lib/content"
import { site } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/about-me/", "/cases/"]
  const casePaths = getCases().map(({ slug }) => `/cases/${slug}/`)

  return [...paths, ...casePaths].map((path) => ({ url: `${site.url}${path}` }))
}
