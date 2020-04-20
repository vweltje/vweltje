import React from "react"
import { Link } from "gatsby"
import Image from "../Image/Image"
import "./PostCard.scss"

const PostCard = ({ image, title, excerpt, link }) => (
  <div className="PostCard">
    <Link className="PostCard--ContentLink" to={`${link.slug}`}>
      <figure className="PostCard--Image">
        <Image background src={image} lazy size="small" alt={image} />
      </figure>
      <h2 className="PostCard--title">{title}</h2>
      <p>{excerpt}</p>
    </Link>
    <div>
      <Link className="Link" to={`${link.slug}`}>
        {link.text}
      </Link>
    </div>
  </div>
)

export default PostCard
