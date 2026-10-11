// Images are served and resized by the Uploadcare CDN
const imageSizes = [320, 450, 640, 750, 800, 900, 1000, 1200, 1500, 1600]

const resolutions = {
  small: "800x",
  medium: "1000x",
  large: "1600x",
}

export type Resolution = keyof typeof resolutions

const isUploadcare = (src: string) => src.includes("ucarecdn.com")

export const getSrcSet = (src: string) =>
  isUploadcare(src)
    ? imageSizes
        .map(
          (size) =>
            `${src}-/progressive/yes/-/format/auto/-/preview/${size}x${size}/-/quality/lightest/${size}.jpg ${size}w`,
        )
        .join(",")
    : undefined

export const getResizedSrc = (src: string, resolution: string) =>
  isUploadcare(src)
    ? `${src}-/progressive/yes/-/format/auto/-/resize/${resolution}/`
    : src

type Props = {
  src: string
  resolution?: Resolution
  className?: string
  title?: string
  alt?: string
}

export default function Image({
  src,
  resolution = "medium",
  className = "",
  title = "",
  alt = "",
}: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- Uploadcare does the optimisation
    <img
      className={className}
      src={getResizedSrc(src, resolutions[resolution])}
      srcSet={getSrcSet(src)}
      sizes="100vw"
      title={title}
      alt={alt}
    />
  )
}
