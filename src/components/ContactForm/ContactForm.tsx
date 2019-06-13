import React, { useState } from 'react'
import "./ContactForm.scss"
import axios from 'axios'



const ContactForm = () => {

  const [name, setName] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [sent, setSent] = useState<boolean>(false)
  const [buttonText, setButtonText] = useState<string>("")

const resetForm = () => {
  setName("")
  setMessage("")
  setEmail("")
  setSent(false)
  setButtonText("")
}

  const handleSubmit = (event) =>  {
    event.preventDefault()

    setButtonText('...sending')
  
    let data = {
        name,
        email,
        message: message
    }
    
    axios.post('API_URI', data)
    .then( res => {
      setSent(true)
      resetForm()
    })
    .catch( () => {
      console.log('Message not sent')
    })
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
  <label className="message" htmlFor="message-input">Your Message</label>
  <textarea onChange={e => setMessage(e.target.value)} name="message" className="message-input" placeholder="Please write your message here" value={message} required/>

  <label className="message-name" htmlFor="message-name">Your Name</label>
  <input onChange={e => setName(e.target.value)} name="name" className="message-name" type="text" placeholder="Your Name" value={name}/>

  <label className="message-email" htmlFor="message-email">Your Email</label>
  <input onChange={(e) => setEmail(e.target.value)} name="email" className="message-email" type="email" placeholder="your@email.com" required value={email} />

  <div className="button--container">
      <button type="submit" className="button button-primary">{ buttonText }</button>
  </div>
</form>
  )
}

export default ContactForm
