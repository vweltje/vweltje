import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.shortTitle,
    description: site.description,
    start_url: "/",
    display: "minimal-ui",
    background_color: site.backgroundColor,
    theme_color: site.themeColor,
    icons: [192, 512, 1024].map((size) => ({
      src: `/images/icon-${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
    })),
  }
}
