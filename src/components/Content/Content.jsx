import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Marked from 'react-markdown'
import Image from '../Image/Image'
import HtmlBlock from './HtmlBlock/HtmlBlock'
import ContentImage from './ContentImage/ContentImage'
import './Content.scss'

const encodeMarkdownURIs = (source = '') => {
  const markdownLinkRegex = /\[(.+)\]\((.+)(".+)\)/g

  return source.replace(markdownLinkRegex, (match, linkURI) => {
    if (!linkURI) return match
    const replaced = match.replace(linkURI, encodeURI(linkURI))
    return replaced
  })
}

const withContentImages = source => {
  const images = source.match(/<img(.*?)\\?>/gim)

  for (let i in images) {
    const src = /src="(.*?)"/g.exec(images[i]),
      alt = /alt="(.*?)"/g.exec(images[i]),
      title = /title="(.*?)"/g.exec(images[i])
    source = source.replace(
      images[i],
      renderToStaticMarkup(
        <Image
          resolutions="medium"
          className="Content--Image"
          lazy={false}
          src={src ? src[1] : null}
          alt={alt ? alt[1] : null}
          title={title ? title[1] : null}
        />
      )
    )
  }

  return source
}

const replaceCustomSelectors = (source, selectors) => {
  if (selectors && Object.keys(selectors).length) {
    for (let selector in selectors) {
      if (source.search(`{{${selector}}}`) >= 0) {
        source = source.replace(
          new RegExp(`{{${selector}}}`, 'g'),
          renderToStaticMarkup(selectors[selector])
        )
      }
    }
  }
  return source
}

const Content = ({
  source,
  src,
  children,
  className = '',
  customReplaceSelectors = false
}) => {
  // accepts either html or markdown
  source = source || src || children || ''
  if (source.match(/^</)) {
    source = withContentImages(source)
    source = replaceCustomSelectors(source, customReplaceSelectors)

    return (
      <div
        className={`Content ${className}`}
        dangerouslySetInnerHTML={{ __html: source }}
      />
    )
  }

  return (
    <Marked
      className={`Content ${className}`}
      source={encodeMarkdownURIs(source)}
      renderers={{
        image: ContentImage,
        html: HtmlBlock
      }}
    />
  )
}

export default Content
