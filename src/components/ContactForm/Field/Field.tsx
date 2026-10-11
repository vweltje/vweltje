"use client"

import { useEffect, useRef, useState } from "react"
import TextareaOverlay from "../TextareaOverlay/TextareaOverlay"
import { validate, type FieldType } from "../constants"

type Props = {
  name: string
  label: string
  type: FieldType
  required: boolean
  focus: boolean
  onValidate: (valid: boolean) => void
}

export default function Field({
  name,
  label,
  type,
  required,
  focus,
  onValidate,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [empty, setEmpty] = useState(true)
  const [textareaValue, setTextareaValue] = useState("")
  const [textareaOverlayActive, setTextareaOverlayActive] = useState(false)

  useEffect(() => {
    if (focus) inputRef.current?.focus()
  }, [focus])

  function validateInput(value: string) {
    setEmpty(!value.length)
    onValidate(validate[type](value))
  }

  return (
    <label htmlFor={name} className="ContactForm--Field">
      {empty && label}
      {type === "textarea" ? (
        <>
          {/* Typing happens in the overlay, this textarea holds the value */}
          <textarea
            className="ContactForm--Textarea"
            id={name}
            name={name}
            required={required}
            value={textareaValue}
            readOnly
            onClick={(event) => {
              setTextareaOverlayActive(true)
              event.currentTarget.blur()
            }}
          />
          {textareaOverlayActive && (
            <TextareaOverlay
              label={label}
              id={`textarea-overlay--${name}`}
              value={textareaValue}
              onDeactivate={() => setTextareaOverlayActive(false)}
              onChange={(value) => {
                validateInput(value)
                setTextareaValue(value)
              }}
            />
          )}
        </>
      ) : (
        <input
          className="ContactForm--Input"
          ref={inputRef}
          id={name}
          name={name}
          type={type}
          required={required}
          onInput={(event) => validateInput(event.currentTarget.value)}
        />
      )}
    </label>
  )
}
