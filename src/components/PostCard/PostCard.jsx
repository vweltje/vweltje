import React from "react"
import { Link } from "gatsby"
import Image from "../Image/Image"

const PostCard = ({ image, title, excerpt, link }) => (
  <div className="PostCard">
    <figure className="PostCard--Image">
      <Image src={image} lazy size="small" alt={image} />
    </figure>
    <h2>{title}</h2>
    <p>{excerpt}</p>
    <Link className="Link" to={`${link.slug}`}>
      {link.text}
    </Link>
  </div>
)

export default PostCard
