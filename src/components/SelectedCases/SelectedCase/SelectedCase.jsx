import React from "react"
import Container from "../../Container/Container"
import SelectedCaseText from "./SelectedCaseText/SelectedCaseText"
import SelectedCaseImage from "./SelectedCaseImage/SelectedCaseImage"
import "./SelectedCase.scss"

const SelectedCase = ({ item, textFirst = false }) => {
  const link = {
    text: "View case study",
    slug: `/cases/${item?.slug}` ?? ""
  }

  return (
    <div className={`SelectedCase${textFirst ? " textFirst" : ""}`}>
      <Container>
        {textFirst ? (
          <>
            <SelectedCaseText
              title={item?.title}
              text={item?.excerpt}
              link={link}
            />
            <SelectedCaseImage
              image={item?.devicePreview}
              backgroundAnimationAxis="xy"
            />
          </>
        ) : (
          <>
            <SelectedCaseImage image={item?.devicePreview} />
            <SelectedCaseText
              title={item?.title}
              text={item?.excerpt}
              link={link}
            />
          </>
        )}
      </Container>
    </div>
  )
}

export default SelectedCase
