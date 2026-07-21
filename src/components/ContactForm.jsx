import { useState } from 'react'
import { Phone, MapPin, Clock } from 'lucide-react'
import ShinyText from './ShinyText.jsx'
import './ContactForm.css'

const services = [
  'Snow Removal',
  'Pressure Washing',
  'Holiday Lighting',
  'Fleet Washing',
  'Bin Cleaning',
  'Something else',
]

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: services[0],
  message: '',
  website: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (status === 'sending') return

    setStatus('sending')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(
          result.message ||
            'Your request could not be sent. Please try again.'
        )
      }

      setStatus('success')
      setFeedback(
        result.message ||
          'Your request was sent successfully.'
      )
      setForm(initialForm)
    } catch (error) {
      console.error('Contact form error:', error)

      setStatus('error')
      setFeedback(
        error.message ||
          'Something went wrong. Please try again.'
      )
    }
  }

  return (
    <section
      id="contact"
      className="contact section-pad"
      data-nav-theme="dark"
    >
      <div className="container">
        <div className="contact-card">
          <div className="contact-card__info">
            <p className="eyebrow contact-card__eyebrow">
              Let's get you on the schedule
            </p>

            <h2 className="contact-card__title">Get in touch</h2>

            <p className="contact-card__sub">
              Tell us what you need done and we'll get back to you with
              square-footage pricing or a custom commercial quote — usually
              within one business day.
            </p>

            <ul className="contact-card__facts">
              <li>
                <span className="contact-card__icon">
                  <Phone size={18} strokeWidth={2} />
                </span>
                <span>
                  <span className="contact-card__fact-label">Call or text</span>
                  <a
                    href="tel:+17012609707"
                    className="contact-card__fact-value"
                  >
                    (701) 260-9707
                  </a>
                </span>
              </li>

              <li>
                <span className="contact-card__icon">
                  <MapPin size={18} strokeWidth={2} />
                </span>
                <span>
                  <span className="contact-card__fact-label">Service area</span>
                  <span className="contact-card__fact-value">
                    Bismarck–Mandan &amp; surrounding communities
                  </span>
                </span>
              </li>

              <li>
                <span className="contact-card__icon">
                  <Clock size={18} strokeWidth={2} />
                </span>
                <span>
                  <span className="contact-card__fact-label">Snow calls</span>
                  <span className="contact-card__fact-value">
                    Answered early — we're already up
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <form className="contact-card__form" onSubmit={handleSubmit}>
            <label className="contact-card__field">
              <span>Name</span>
              <input
                required
                name="name"
                autoComplete="name"
                maxLength={100}
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </label>

            <label className="contact-card__field">
              <span>Email</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                maxLength={200}
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
              />
            </label>

            <label className="contact-card__field">
              <span>Phone</span>
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                maxLength={50}
                value={form.phone}
                onChange={handleChange}
                placeholder="(701) 555-0100"
              />
            </label>

            <label className="contact-card__field">
              <span>Service</span>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label className="contact-card__field">
              <span>Message</span>
              <textarea
                required
                name="message"
                rows={3}
                maxLength={5000}
                value={form.message}
                onChange={handleChange}
                placeholder="Approximate square footage, roofline length, number of vehicles, or anything else that helps us quote it."
              />
            </label>

            <div className="contact-card__honeypot" aria-hidden="true">
              <label>
                Website
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <button
              type="submit"
              className="contact-card__submit"
              disabled={status === 'sending'}
            >
              <ShinyText
                text={status === 'sending' ? 'Sending...' : 'Send Request'}
                color="#16274F"
                shineColor="#ffffff"
                speed={2.4}
              />
            </button>

            {feedback && (
              <p
                className={`contact-card__feedback contact-card__feedback--${status}`}
                role={status === 'error' ? 'alert' : 'status'}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}