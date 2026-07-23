import ShinyText from './ShinyText.jsx'
import DotField from './DotField.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" data-nav-theme="dark">
      <div className="hero__field" aria-hidden="true">
        <DotField
          dotRadius={1.5}
          dotSpacing={16}
          cursorRadius={220}
          bulgeStrength={40}
          glowRadius={0}
          gradientFrom="rgba(126, 200, 227, 0.35)"
          gradientTo="rgba(240, 180, 41, 0.25)"
          glowColor="#F0B429"
        />
      </div>
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">Bismarck–Mandan &amp; surrounding area</p>
          <h1 className="hero__title">
            Prairie-tough exterior care,
            <span className="hero__title-accent"> every season.</span>
          </h1>
          <p className="hero__sub">
            Snow removal, pressure washing, concrete sealing,
             holiday lighting, fleet washing, and bin cleaning.
              Dependable exterior care for homes and businesses, done right.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-gold">
              <ShinyText text="Get a Free Quote" color="#16274F" shineColor="#ffffff" speed={2.4} />
            </a>
            <a href="/pricing" className="btn btn-outline">
              <ShinyText text="See Pricing" color="#F7F5EF" shineColor="#F0B429" speed={2.4} />
            </a>
          </div>
          <div className="hero__trust">
            <div className="hero__trust-item">
              <span className="hero__trust-num">5AM</span>
              <span className="hero__trust-label">Ready when the<br/>snow is</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-num">Res. + Comm.</span>
              <span className="hero__trust-label">Homes &amp; local<br/>businesses</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-num">Owner-led</span>
              <span className="hero__trust-label">Built by a local<br/>student-athlete</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
