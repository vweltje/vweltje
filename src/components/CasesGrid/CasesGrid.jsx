import React from "react"
import Container from "../Container/Container"
import PostCard from "../PostCard/PostCard"
import "./CasesGrid.scss"

const CasesGrid = ({ small, cases }) => (
  <Container size="small">
    <div className={`CasesGrid${small ? " small" : ""}`}>
      {!!cases.length &&
        cases.map(({ slug, featuredImage, title, excerpt }) => (
          <div className="CasesGrid--Item" key={slug}>
            <PostCard
              image={featuredImage}
              title={title}
              excerpt={excerpt}
              link={{
                slug: `/cases/${slug}`,
                text: "View case study"
              }}
            />
          </div>
        ))}
    </div>
  </Container>
)

export default CasesGrid
