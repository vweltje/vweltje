import Markdown, { type Components } from "react-markdown"
import Image from "../Image/Image"

const components: Components = {
  img: ({ src, title, alt }) =>
    typeof src === "string" && (
      <Image
        className="Content--Image markdown-preview"
        src={src}
        title={title}
        alt={alt}
      />
    ),
  a: ({ href, children }) => (
    <a
      target="_blank"
      href={href}
      rel="noopener noreferrer"
      title={typeof children === "string" ? children : undefined}
    >
      {children}
    </a>
  ),
}

type Props = {
  children: string
  className?: string
}

export default function Content({ children, className = "" }: Props) {
  return (
    <div className={`Content ${className}`}>
      <Markdown components={components}>{children}</Markdown>
    </div>
  )
}
