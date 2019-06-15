import React, { useState } from "react"
import "./ContactForm.scss"
import axios from "axios"

const ContactForm = () => {
  const [name, setName] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [sent, setSent] = useState<boolean>(false)
  const [buttonText, setButtonText] = useState<string>("Send")

  const resetForm = () => {
    setName("")
    setMessage("")
    setEmail("")
    setSent(false)
    setButtonText("Send")
  }

  const handleSubmit = event => {
    event.preventDefault()

    setButtonText("...sending")

    let data = {
      name,
      email,
      message: message
    }

    axios
      .post("http://localhost:4444/api/v1", data)
      .then(res => {
        setSent(true)
        resetForm()
      })
      .catch(() => {
        console.log("Message not sent")
      })
  }
  return (
    <form className="ContactForm" onSubmit={handleSubmit}>
      <label className="ContactForm-label" htmlFor="message-input">
        Your Message
      </label>
      <textarea
        onChange={e => setMessage(e.target.value)}
        name="message"
        className="ContactForm-textArea"
        placeholder="Please write your message here"
        value={message}
        required
      />

      <label className="ContactForm-label" htmlFor="message-name">
        Your Name
      </label>
      <input
        onChange={e => setName(e.target.value)}
        name="name"
        className="ContactForm-textInput"
        type="text"
        placeholder="Your Name"
        value={name}
      />

      <label className="ContactForm-label" htmlFor="message-email">
        Your Email
      </label>
      <input
        onChange={e => setEmail(e.target.value)}
        name="email"
        className="ContactForm-textInput"
        type="email"
        placeholder="your@email.com"
        required
        value={email}
      />

      <button type="submit" className="ContactForm-button">
        {buttonText}
      </button>
    </form>
  )
}

export default ContactForm
