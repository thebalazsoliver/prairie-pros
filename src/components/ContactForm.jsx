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
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const subject = `New Prairie Pros request - ${form.service}`

    const body = `
New quote request from the Prairie Pros website:

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Service: ${form.service}

Message:
${form.message}
    `.trim()

    const mailtoLink = `mailto:PrairieProsLLC@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="contact section-pad">
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
                value={form.message}
                onChange={handleChange}
                placeholder="Approximate square footage, roofline length, number of vehicles, or anything else that helps us quote it."
              />
            </label>

            <button type="submit" className="contact-card__submit">
              <ShinyText
                text="Open Email"
                color="#16274F"
                shineColor="#ffffff"
                speed={2.4}
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}