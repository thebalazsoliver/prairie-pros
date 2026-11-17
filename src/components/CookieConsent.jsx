import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ANALYTICS_CONSENT_KEY,
  deleteAnalyticsCookies,
  loadAnalytics,
} from '../lib/analytics.js'
import './CookieConsent.css'

function getConsent() {
  try {
    const saved = window.localStorage.getItem(ANALYTICS_CONSENT_KEY)
    return saved === 'accepted' || saved === 'declined' ? saved : null
  } catch {
    return null
  }
}

export default function CookieConsent() {
  const [choice, setChoice] = useState(getConsent)
  const [isOpen, setIsOpen] = useState(() => getConsent() === null)

  useEffect(() => {
    if (choice === 'accepted') loadAnalytics()
  }, [choice])

  useEffect(() => {
    const openSettings = () => setIsOpen(true)
    window.addEventListener('pp:open-cookie-preferences', openSettings)
    return () => window.removeEventListener('pp:open-cookie-preferences', openSettings)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  function decide(nextChoice) {
    try {
      window.localStorage.setItem(ANALYTICS_CONSENT_KEY, nextChoice)
    } catch {
      // Consent still applies to this page if browser storage is disabled.
    }

    const withdrawing = choice === 'accepted' && nextChoice === 'declined'
    setChoice(nextChoice)
    setIsOpen(false)

    if (withdrawing) {
      deleteAnalyticsCookies()
      window.location.reload()
    }
  }

  if (!isOpen) return null

  return (
    <div className="cookie-veil" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div className="cookie-modal">
        <p className="eyebrow cookie-modal__eyebrow">Privacy preferences</p>
        <h2 id="cookie-title" className="cookie-modal__title">
          Help us improve Prairie Pros
        </h2>
        <p className="cookie-modal__text">
          We use essential site features and, only if you agree, Google Analytics
          through Google Tag Manager to understand visits and improve the website.
          Optional analytics is off unless you accept. Your choice does not affect
          the site's functionality. Read our{' '}
          <Link to="/privacy-policy" onClick={() => setIsOpen(false)}>Privacy Policy</Link> and{' '}
          <Link to="/cookie-policy" onClick={() => setIsOpen(false)}>Cookie Policy</Link>.
        </p>
        <div className="cookie-modal__actions">
          <button type="button" className="btn btn-outline-dark" onClick={() => decide('declined')}>
            Reject analytics
          </button>
          <button type="button" className="btn btn-gold" onClick={() => decide('accepted')}>
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  )
}
