import React from "react"
import { upperFirst } from "lodash"
import Container from "../../Container/Container"
import "./Splitview.scss"

const SplitviewContainer = ({ position, children }) => (
  <div className={`Splitview--${upperFirst(position)}`}>
    <Container>
      <div className="Splitview--Content">{children}</div>
    </Container>
  </div>
)

const Splitview = ({ children }) => {
  return <div className="Splitview">{children}</div>
}

export { Splitview as default, SplitviewContainer }
