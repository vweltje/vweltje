import React from "react"

import SelectedCaseText from "./SelectedCaseText/SelectedCaseText"
import SelectedCaseImage from "./SelectedCaseImage/SelectedCaseImage"

const SelectedCase = ({ item, textFirst = false }) => {
  return (
    <div className="SelectedWork--Item">
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
    </div>
  )
}

export default SelectedCase
