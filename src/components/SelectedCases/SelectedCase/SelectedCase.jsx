import React from "react"

import Container from "../../Container/Container"
import SelectedCaseText from "./SelectedCaseText/SelectedCaseText"
import SelectedCaseImage from "./SelectedCaseImage/SelectedCaseImage"

import "./SelectedCase.scss"

const SelectedCase = ({ item, textFirst = false }) => {
  return (
    <div className="SelectedCase">
      <Container>
        {textFirst ? (
          <>
            <SelectedCaseText
              title={item?.title}
              text={item?.excerpt}
              link={{
                text: "View case study",
                slug: item?.slug
              }}
            />
            <SelectedCaseImage image={item?.devicePreview} />
          </>
        ) : (
          <>
            <SelectedCaseImage image={item?.devicePreview} />
            <SelectedCaseText
              title={item?.title}
              text={item?.excerpt}
              link={{
                text: "View case study",
                slug: item?.slug
              }}
            />
          </>
        )}
      </Container>
    </div>
  )
}

export default SelectedCase
