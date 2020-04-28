import React, { useContext, useState, useEffect } from "react"
import ClickAwayListner from "../ClickAwayListner/ClickAwayListner"
import Container from "../Container/Container"
import ContactForm from "../ContactForm/ContactForm"
import { store } from "../../store"
import "./ContactOverlay.scss"

const Overlay = ({ active, visible, children }) => (
  <>
    {active && (
      <div className={`ContactOverlay${visible ? " visible" : ""}`}>
        {children}
      </div>
    )}
  </>
)

const ContactOverlay = () => {
  const {
    state: {
      contactOverlay: { active }
    },
    dispatch
  } = useContext(store)
  const [visible, setVisible] = useState(false)
  const deactivate = () => {
    setVisible(false)
    setTimeout(() => {
      dispatch("contactOverlay--deactivate")
    }, 200)
  }
  const isStaticContentRender = typeof window === "undefined"

  useEffect(() => {
    if (active) setVisible(true)
  }, [active])

  return (
    <Overlay active={active || isStaticContentRender} visible={visible}>
      <Container size="smaller">
        <div className="ContactOverlay--Inner">
          <ClickAwayListner detectEvents={active} onClickAway={deactivate}>
            <ContactForm />
          </ClickAwayListner>
        </div>
      </Container>
    </Overlay>
  )
}

export default ContactOverlay
