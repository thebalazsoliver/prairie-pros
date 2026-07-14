import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './CookieConsent.css'

const STORAGE_KEY = 'pp_cookie_consent'

export default function CookieConsent() {
  const [choice, setChoice] = useState(null) // null = not decided yet

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'accepted' || saved === 'declined') {
      setChoice(saved)
    } else {
      setChoice('pending')
    }
  }, [])

  useEffect(() => {
    if (choice === 'pending') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [choice])

  function decide(value) {
    window.localStorage.setItem(STORAGE_KEY, value)
    setChoice(value)
  }

  if (choice !== 'pending') return null

  return (
    <div className="cookie-veil" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div className="cookie-modal">
        <p className="eyebrow cookie-modal__eyebrow">Cookie Notice</p>
        <h2 id="cookie-title" className="cookie-modal__title">This site uses cookies</h2>
        <p className="cookie-modal__text">
          Prairie Pros LLC doesn't run ads or tracking cookies on this site.
          Technically, we store your choice below in your browser's local storage
          rather than a traditional cookie file, but it does the same job — and
          we still call it a "cookie notice" since that's what people expect to
          see. We also use Google Fonts and Cloudflare to run the site, which may
          process basic technical data like your IP address as part of loading
          the page. Full details are in our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
          <Link to="/cookie-policy">Cookie Policy</Link>.
        </p>
        <div className="cookie-modal__actions">
          <button type="button" className="btn btn-outline-dark" onClick={() => decide('declined')}>
            Decline
          </button>
          <button type="button" className="btn btn-gold" onClick={() => decide('accepted')}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
