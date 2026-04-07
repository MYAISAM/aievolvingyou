import { useState } from 'react'

const encode = (data) =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const name    = form.elements['name'].value
    const email   = form.elements['email'].value
    const message = form.elements['message'].value

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name,
        email,
        message,
      }),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }

  return (
    <section id="connect" className="fade-section visible">
      <div className="section-inner">
        <h2>Start a Conversation</h2>
        <p>
          If you're thinking seriously about how AI is reshaping your work or organisation, I'm open to thoughtful dialogue.
        </p>

        {submitted ? (
          <p style={{ marginTop: '32px' }}>Thanks — I'll respond personally.</p>
        ) : (
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

            <div>
              <label>Name</label>
              <input type="text" name="name" required />
            </div>

            <div>
              <label>Email</label>
              <input type="email" name="email" required />
            </div>

            <div>
              <label>Message</label>
              <textarea
                name="message"
                placeholder="What are you exploring, building, or wrestling with?"
                required
              ></textarea>
            </div>

            <button type="submit">Start a Conversation</button>
          </form>
        )}
      </div>
    </section>
  )
}
