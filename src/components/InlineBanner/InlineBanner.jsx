import React, { useContext } from "react"
import Container from "../Container/Container"
import Button from "../Button/Button"
import { store } from "../../store"
import "./InlineBanner.scss"

const InlineBanner = ({ children }) => {
  const { dispatch } = useContext(store)

  return (
    <section className="InlineBanner">
      <Container>
        <div className="InlineBanner--Inner">
          {children || (
            <Button onClick={() => dispatch("contactOverlay--activate")}>
              Ok, let's talk
            </Button>
          )}
        </div>
      </Container>
    </section>
  )
}

export default InlineBanner
