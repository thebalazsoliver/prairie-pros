import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import CardNav from './components/CardNav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Pricing from './pages/Pricing.jsx'
import FAQ from './pages/FAQ.jsx'

// Plain <a href="/#some-id"> links do a full navigation when coming from a
// different page. On first load the target section isn't in the DOM yet
// when the browser tries its native hash-scroll, so it silently fails and
// you land at the top instead. This retries the scroll once React has
// actually rendered the page.
function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

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
      <ScrollToHash />
      <CardNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
