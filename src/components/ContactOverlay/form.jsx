import React, { Fragment } from "react"
import { stringify } from "qs"
import { serialize } from "dom-form-serializer"

import Icon from "./icon"

import "./form.css"

class Form extends React.Component {
  static defaultProps = {
    name: "Contact",
    subject: "", // optional subject of the notification email
    action: "",
    successMessage: "Thanks for your message, I will get back to you soon!",
    errorMessage:
      "Oh snap... your message has not been sent, please try contacting me via the email button."
  }

  state = {
    alert: "",
    disabled: false,
    clientName: "",
    activeStep: 1,
    nextClickable: false
  }

  updateClient = (e) => {
    this.setState({ clientName: e.target.value })
  }

  changeStep = () => {
    if (!this.state.nextClickable) return
    if (this.state.activeStep < 3)
      this.setState({
        activeStep: this.state.activeStep + 1,
        nextClickable: false
      })
  }

  validateInput = (e) => {
    if (e.target.value.length) this.setState({ nextClickable: true })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
      const data = serialize(form)

    this.setState({ disabled: true })

    fetch(`${form.action  }?${  stringify(data)}`, {
      method: "POST"
    })
      .then((res) => {
        if (res.ok) return res
        throw new Error("Network error")
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch((err) => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render() {
    const { name, subject, action } = this.props
      const { activeStep, nextClickable } = this.state

    return (
      <>
        <form
          className="Form"
          name={name}
          action={action}
          onSubmit={this.handleSubmit}
          data-netlify=""
        >
          <div className="Form--fields">
            {this.state.alert && (
              <div className="Form--Alert">{this.state.alert}</div>
            )}
            <label
              className={`Form--Label${activeStep !== 1 ? " inactive" : ""}`}
            >
              <input
                className="Form--Input Form--InputText"
                type="text"
                placeholder="Drop a line"
                name="message"
                required
                onChange={(e) => {
                  this.validateInput(e)
                }}
              />
              <span>Drop a line</span>
            </label>
            <label
              className={`Form--Label${activeStep !== 2 ? " inactive" : ""}`}
            >
              <input
                className="Form--Input Form--InputText"
                type="text"
                placeholder="How can I call you?"
                name="name"
                onChange={(e) => {
                  this.updateClient(e)
                  this.validateInput(e)
                }}
                required
              />
              <span>How can I call you?</span>
            </label>
            <label
              className={`Form--Label${activeStep !== 3 ? " inactive" : ""}`}
            >
              <input
                className="Form--Input Form--InputText"
                type="email"
                placeholder="Email"
                name="emailAddress"
                required
                onChange={(e) => {
                  this.validateInput(e)
                }}
              />
              <span>
                Thanks {this.state.clientName}, on what email can I reace you?
              </span>
            </label>
            {!!subject && (
              <input type="hidden" name="subject" value={subject} />
            )}
            <input type="hidden" name="form-name" value={name} />
          </div>
          <div className="Form--nav">
            {this.state.activeStep < 3 && (
              <button
                className={`Form--navButton${nextClickable ? "" : " disabled"}`}
                onClick={() => this.changeStep()}
              >
                <Icon name="next" />
              </button>
            )}

            {this.state.activeStep >= 3 && (
              <button
                type="submit"
                className={`Form--navButton${nextClickable ? "" : " disabled"}`}
              >
                <Icon name="next" />
              </button>
            )}
          </div>
        </form>
      </>
    )
  }
}

export default Form
