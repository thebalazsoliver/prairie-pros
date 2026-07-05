import { Routes, Route } from 'react-router-dom'
import CardNav from './components/CardNav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Pricing from './pages/Pricing.jsx'
import FAQ from './pages/FAQ.jsx'

export default function App() {
  return (
    <>
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
