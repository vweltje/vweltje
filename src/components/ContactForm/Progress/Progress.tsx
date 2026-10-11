import { fields } from "../constants"

export default function Progress({ activeField }: { activeField: number }) {
  return (
    <div className="ContactForm--Progress">
      Step {activeField}{" "}
      <span className="ContactForm--ProgressNext">/ {fields.length}</span>
    </div>
  )
}
