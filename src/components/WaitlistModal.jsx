import { useEffect, useRef, useState } from 'react'

const encode = (data) =>
  Object.keys(data)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

export default function WaitlistModal({ open, onClose }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 60)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) {
      // Reset on close (after transition would complete)
      const t = setTimeout(() => {
        setSubmitted(false)
        setEmail('')
        setError('')
      }, 300)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [open, onClose])

  if (!open) return null

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'waitlist', email }),
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-box"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="AI Displacement Risk Report — join the waitlist"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {submitted ? (
          <div className="modal-success">
            <p className="modal-success-heading">You're on the list.</p>
            <p className="modal-success-body">
              We'll reach out personally when the report is ready.
            </p>
          </div>
        ) : (
          <>
            <p className="modal-eyebrow">Coming soon</p>
            <h2 className="modal-title">AI Displacement Risk Report</h2>
            <p className="modal-body">
              Find out how exposed your role is to AI, which tasks are most
              at risk, and what that could mean for your future at work.
            </p>

            <form
              name="waitlist"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="modal-form"
            >
              <input type="hidden" name="form-name" value="waitlist" />
              <div className="modal-field">
                <label htmlFor="waitlist-email">Email address</label>
                <input
                  ref={inputRef}
                  id="waitlist-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </div>
              {error && <p className="modal-error">{error}</p>}
              <button type="submit" className="modal-submit">
                Join the waitlist
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
