import React, { useState, useEffect } from "react"
import ClickAwayListner from "../../ClickAwayListner/ClickAwayListner"
import Button from "../../Button/Button"
import "./TextareaOverlay.scss"

const TextareaOverlay = ({
  parrentRef,
  label,
  name,
  currentValue,
  onDeactivate,
  onInput
}) => {
  const [empty, setEmpty] = useState(true)
  const [active, setActive] = useState(false)

  function handleChange(event) {
    setEmpty(!event.currentTarget.value.length)
    onInput(event)
  }
  function deactivate() {
    setActive(false)
    setTimeout(() => {
      onDeactivate()
    }, 200)
  }
  function onKeyPress(event) {
    if (event.which === 27) deactivate()
  }

  useEffect(() => {
    setActive(true)
  }, [parrentRef])

  return (
    <ClickAwayListner onClickAway={deactivate}>
      <div className={`ContactForm--TextareaOverlay${active ? " active" : ""}`}>
        {empty && !currentValue && <label htmlFor={name}>{label}</label>}
        <textarea
          ref={(input) => input && input.focus()}
          id={name}
          name={name}
          onInput={handleChange}
          onKeyDown={onKeyPress}
          value={currentValue}
          onChange={() => {}}
        />
        <Button
          className="ContactForm--TextareaOverlayButton"
          noHover
          onClick={deactivate}
        >
          Done
        </Button>
      </div>
    </ClickAwayListner>
  )
}

export default TextareaOverlay
