import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import CardNav from './components/CardNav.jsx'
import Footer from './components/Footer.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import Home from './pages/Home.jsx'
import Pricing from './pages/Pricing.jsx'
import FAQ from './pages/FAQ.jsx'
import Gallery from './pages/Gallery.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import CookiePolicy from './pages/CookiePolicy.jsx'

// Handles scroll position on every route change:
// - If the new URL has a #hash (e.g. from the footer or nav), scroll to that
//   section once it's actually in the DOM (plain <a> links do a full
//   navigation from another page, and the target isn't rendered yet the
//   instant the browser tries its native hash-scroll, so it'd otherwise fail
//   silently and leave you at the top).
// - Otherwise (a plain page link, like Footer's "Pricing" or "Gallery"),
//   React Router doesn't reset scroll position on its own, so without this
//   you'd land wherever you happened to be scrolled to on the previous page.
//   Reset to the top instead.
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const id = decodeURIComponent(location.hash.slice(1))

    // Try a few times in case images/layout are still shifting things
    // around right after route change.
    let attempts = 0
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (attempts < 10) {
        attempts += 1
        requestAnimationFrame(tryScroll)
      }
    }
    requestAnimationFrame(tryScroll)
  }, [location])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <CardNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
