import { useState } from 'react'
import ShinyText from '../components/ShinyText.jsx'
import './FAQ.css'

const faqs = [
  {
    q: 'How is snow removal priced?',
    a: 'Pricing varies based on lot size, snowfall accumulation, and complexity. Residential service is available per visit, monthly, or seasonally, and commercial plans are available for properties of all sizes.',
  },
  {
    q: 'What equipment do you use for snow removal?',
    a: 'Prairie Pros uses a 16-foot Top Gun Backblade that pulls snow from behind the truck. Its wider clearing path can reduce the number of passes, create a cleaner scrape, and help us clear many properties up to twice as fast as a traditional front plow.',
  },
  {
    q: 'Do I need a contract for snow removal?',
    a: 'No — you can pay per visit if you prefer flexibility, choose monthly service, or lock in a seasonal rate for predictable winter coverage.',
  },
  {
    q: 'What affects my pressure washing price?',
    a: 'Square footage is the main factor, along with how much buildup or staining we\'re dealing with and how many surfaces you\'d like done in one visit.',
  },
  {
    q: 'How does concrete sealing help?',
    a: 'Professional sealing helps protect driveways, sidewalks, patios, and commercial concrete from water, salt, stains, and everyday wear.',
  },
  {
    q: 'When should I book holiday lighting?',
    a: 'The earlier the better — booking ahead of the holiday rush helps us guarantee your preferred install date. Pricing is based on your roofline\'s linear footage.',
  },
  {
    q: 'How does fleet washing pricing work?',
    a: 'It\'s based on three things: how dirty the vehicles are, how big the machines are, and how often you want service. Regular recurring washes bring the per-unit cost down.',
  },
  {
    q: 'Do you offer one-time bin cleaning?',
    a: 'Yes — bin cleaning is a flat $25 per bin for a one-time clean, no measuring or estimating needed.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We\'re based in the Bismarck–Mandan area and serve the surrounding communities. Not sure if you\'re in range? Just reach out and ask.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Fill out the contact form on our home page or call/text (701) 260-9707. We\'ll review your property and service needs before providing an accurate estimate.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <header className="faq-hero" data-nav-theme="dark">
        <div className="container">
          <p className="eyebrow faq-hero__eyebrow">FAQ</p>
          <h1 className="faq-hero__title">Questions we hear a lot</h1>
          <p className="faq-hero__sub">Can't find what you're looking for? Call or text us at <a href="tel:+17012609707" className="faq-hero__phone">(701) 260-9707</a>.</p>
        </div>
      </header>

      <section className="faq-list section-pad">
        <div className="container faq-list__container">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={item.q}>
                <button
                  className="faq-item__question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-item__icon" aria-hidden="true">+</span>
                </button>
                <div className="faq-item__answer-wrap">
                  <div className="faq-item__answer-inner">
                    <p className="faq-item__answer">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}

          <div className="faq-cta">
            <p>Still have questions?</p>
            <a href="/#contact" className="btn btn-gold">
              <ShinyText text="Ask Us Directly" color="#16274F" shineColor="#ffffff" speed={2.4} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}