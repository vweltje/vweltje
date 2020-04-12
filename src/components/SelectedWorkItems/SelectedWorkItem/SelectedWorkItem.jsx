import React from "react"

import SelectedWorkItemText from "./SelectedWorkItemText/SelectedWorkItemText"
import SelectedWorkItemImage from "./SelectedWorkItemImage/SelectedWorkItemImage"

const SelectedWorkItem = ({ item, textFirst = false }) => {
  return (
    <div className="SelectedWork--Item">
      {textFirst ? (
        <>
          <SelectedWorkItemText
            title={item?.title}
            text={item?.excerpt}
            link={{
              text: "View case study",
              slug: item?.slug
            }}
          />
          <SelectedWorkItemImage image={item?.devicePreview} />
        </>
      ) : (
        <>
          <SelectedWorkItemImage image={item?.devicePreview} />
          <SelectedWorkItemText
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

export default SelectedWorkItem
