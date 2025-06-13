'use client'
import React, { useState } from 'react'
import SuccessIndicator from './successIndicator/SuccessIndicator'

export default function ContactForm() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [successIndicator, setSuccessIndicator] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  async function onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      setMessageSent(false)
      setSuccessIndicator(true)
      const response = await fetch('/api/messages', {
        method: 'POST',
        body: JSON.stringify({ firstName, email, subject, message }),
      })
      const result = await response.json()

      if (!response.ok || result.status !== 'success')
        throw new Error("something wen't wrong")

      setMessageSent(true)
    } catch (err) {
      setMessageSent(false)
      setSuccessIndicator(false)
    }
  }

  return (
    <form onSubmit={onSubmitForm}>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-group">
            <div className="input-with-icon">
              <i className="bi bi-person" />
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div className="input-with-icon">
              <i className="bi bi-envelope" />
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <div className="input-with-icon">
              <i className="bi bi-text-left" />
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <div className="input-with-icon">
              <i className="bi bi-chat-dots message-icon" />
              <textarea
                className="form-control"
                name="message"
                placeholder="Write Message..."
                style={{ height: 180 }}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </div>
          </div>
        </div>
        {successIndicator && (
          <SuccessIndicator
            success={messageSent}
            loadingMessage="Sending Message"
            successMessage="Message Sent"
          />
        )}
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary btn-submit">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </form>
  )
}
