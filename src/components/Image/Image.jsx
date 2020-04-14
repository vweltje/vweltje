import React, { useState, useRef } from "react"
import Observer from "../Observer/Observer"

import "./Image.scss"

const Image = ({
  background = false,
  backgroundSize = "cover",
  resolutions = "1000x",
  className = "",
  src,
  title = "",
  alt = "",
  lazy = true
}) => {
  const ref = useRef()
  const [isIntersecting, setIsIntersecting] = useState(false)
  let srcSet = ""
  let fullSrc = ""
  let smallSrc = ""

  const imageSizes = [
    "320",
    "450",
    "640",
    "750",
    "800",
    "900",
    "1000",
    "1200",
    "1500",
    "1600"
  ] // image sizes used for image source sets

  const checkIsUploadcare = (ulloadcareSrc) => {
    return (
      typeof ulloadcareSrc === "string" &&
      ulloadcareSrc.includes("ucarecdn.com")
    )
  }

  const getResolutionString = (res) => {
    /* add resolutions options for inline images */
    let mutatedRes = res
    if (res === "small") {
      mutatedRes = "800x"
    } else if (res === "medium") {
      mutatedRes = "1000x"
    } else if (res === "large") {
      mutatedRes = "1600x"
    }
    return mutatedRes
  }

  const isUploadcare = checkIsUploadcare(src)
  const fullImage = !isUploadcare || !lazy

  /* create source set for images */
  if (isUploadcare) {
    srcSet = imageSizes.map((size) => {
      return `${src}-/progressive/yes/-/format/auto/-/preview/${size}x${size}/-/quality/lightest/${size}.jpg ${size}w`
    })
  }

  fullSrc = `${src}${
    isUploadcare
      ? `-/progressive/yes/-/format/auto/-/resize/${getResolutionString(
          resolutions
        )}/`
      : ""
  }`
  smallSrc = `${src}${
    isUploadcare ? "-/progressive/yes/-/format/auto/-/resize/10x/" : ""
  }`

  let style = {}
  if (background) {
    style = {
      backgroundImage: `url(${isIntersecting ? fullSrc : smallSrc})`,
      backgroundSize
    }
  }
  const onImageInterseting = () => {
    setIsIntersecting(true)
  }

  return (
    <>
      {isUploadcare && lazy && (
        <Observer onIntersecting={() => onImageInterseting()}>
          <div
            className="BackgroundImage"
            ref={ref}
            style={{
              backgroundImage: `url(${smallSrc})`,
              backgroundSize: "cover"
            }}
          >
            {!background && (
              <img
                className={`LazyImage ${
                  className + isIntersecting ? " faded" : ""
                }`}
                src={isIntersecting ? fullSrc : ""}
                srcSet={isIntersecting ? srcSet : ""}
                sizes="100vw"
                title={title}
                alt={alt}
              />
            )}
            {background && (
              <div
                className={`LazyImage BackgroundImage absolute ${
                  className + isIntersecting ? " faded" : ""
                }`}
                style={style}
              />
            )}
          </div>
        </Observer>
      )}
      {fullImage && (
        <>
          {background && (
            <div
              className={`BackgroundImage absolute ${className}`}
              style={style}
            />
          )}
          {!background && (
            <img
              className={`${className}`}
              src={fullSrc}
              srcSet={srcSet}
              sizes="100vw"
              title={title}
              alt={alt}
            />
          )}
        </>
      )}
    </>
  )
}

export default Image
