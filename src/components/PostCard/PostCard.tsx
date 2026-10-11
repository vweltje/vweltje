import Link from "next/link"
import LazyBackgroundImage from "../Image/LazyBackgroundImage"

type Props = {
  image: string
  title: string
  excerpt: string
  link: { href: string; text: string }
}

export default function PostCard({ image, title, excerpt, link }: Props) {
  return (
    <div className="PostCard">
      <Link className="PostCard--ContentLink" href={link.href}>
        <figure className="PostCard--Image">
          <LazyBackgroundImage src={image} />
        </figure>
        <h2 className="PostCard--title">{title}</h2>
        <p className="PostCard--Excerpt">{excerpt}</p>
      </Link>
      <div>
        <Link className="Link" href={link.href}>
          {link.text}
        </Link>
      </div>
    </div>
  )
}
