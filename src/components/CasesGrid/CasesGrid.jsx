import React from "react"
import PostCard from "../PostCard/PostCard"

const CasesGrid = ({ small, cases }) => (
  <div className={`CasesGrid ${small ? "small" : ""}`}>
    {!!cases.length &&
      cases.map((singleCase) => (
        <div className="CasesGrid--Item">
          <PostCard
            image={singleCase?.featuredImage}
            title={singleCase?.title}
            excerpt={singleCase.excerpt}
            link={{ slug: singleCase?.slug, text: "View case study" }}
          />
        </div>
      ))}
  </div>
)

export default CasesGrid
