import React from "react"
import Container from "../Container/Container"
import PostCard from "../PostCard/PostCard"
import "./CasesGrid.scss"

const CasesGrid = ({ small, cases }) => (
  <Container size="small">
    <div className={`CasesGrid ${small ? "small" : ""}`}>
      {!!cases.length &&
        cases.map((singleCase) => (
          <div className="CasesGrid--Item" key={singleCase.slug}>
            <PostCard
              image={singleCase?.featuredImage}
              title={singleCase?.title}
              excerpt={singleCase.excerpt}
              link={{
                slug: `/cases/${singleCase?.slug}`,
                text: "View case study"
              }}
            />
          </div>
        ))}
    </div>
  </Container>
)

export default CasesGrid
