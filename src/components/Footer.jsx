import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img
            src="/prairie-pros-logo.svg"
            alt="Prairie Pros Exterior Services"
            className="footer__mark"
          />

          <div>
            <p className="footer__name">PRAIRIE PROS</p>
            <p className="footer__tag">Exterior Services</p>
          </div>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Get in touch</p>
          <a href="tel:+17012609707" className="footer__link">
            (701) 260-9707
          </a>
          <a href="/#contact" className="footer__link">
            Request a quote
          </a>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Explore</p>
          <Link to="/" className="footer__link">
            Home
          </Link>
          <Link to="/pricing" className="footer__link">
            Pricing
          </Link>
          <Link to="/faq" className="footer__link">
            FAQ
          </Link>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Services</p>
          <a href="/#services" className="footer__link">
            Snow removal
          </a>
          <a href="/#services" className="footer__link">
            Pressure washing
          </a>
          <a href="/#services" className="footer__link">
            Holiday lighting
          </a>
          <a href="/#services" className="footer__link">
            Fleet &amp; bin washing
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Prairie Pros LLC. Built to weather every season.</p>
        </div>
      </div>
    </footer>
  )
}