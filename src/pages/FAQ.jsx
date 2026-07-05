import { useState } from 'react'
import ShinyText from '../components/ShinyText.jsx'
import './FAQ.css'

const faqs = [
  {
    q: 'How is snow removal priced?',
    a: 'By square footage, with a choice between per-visit billing or a flat seasonal rate. Residential jobs typically run $30–$2,500 depending on lot size and plan. Commercial properties are quoted individually.',
  },
  {
    q: 'Do I need a contract for snow removal?',
    a: 'No — you can pay per visit if you prefer flexibility, or lock in a seasonal rate if you\'d rather have one predictable price for the whole winter.',
  },
  {
    q: 'What affects my pressure washing price?',
    a: 'Square footage is the main factor, along with how much buildup or staining we\'re dealing with and how many surfaces you\'d like done in one visit.',
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
    a: 'Fill out the contact form on our home page or call/text (701) 260-9707. Commercial snow removal always requires a custom quote based on your property.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <header className="faq-hero">
        <div className="container">
          <p className="eyebrow faq-hero__eyebrow">FAQ</p>
          <h1 className="faq-hero__title">Questions we hear a lot</h1>
          <p className="faq-hero__sub">Can't find what you're looking for? Call or text us at (701) 260-9707.</p>
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
                  <span className="faq-item__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="faq-item__answer">{item.a}</p>}
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
