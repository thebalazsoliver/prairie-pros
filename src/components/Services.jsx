import ShinyText from './ShinyText.jsx'
import './Services.css'

const services = [
  {
    tag: 'Winter',
    title: 'Snow Removal',
    slug: 'snow-removal',
    desc: 'Per-visit, monthly, and seasonal plans for residential and commercial properties. Pricing varies by lot size, snowfall accumulation, and complexity.',
    priceLines: [
      'Residential from $30',
      'Commercial from $150',
    ],
  },
  {
    tag: 'Year-round',
    title: 'Pressure Washing',
    slug: 'pressure-washing',
    desc: 'Driveways, siding, decks and walkways — billed by square footage to fit any size of home or lot.',
    price: '$200–$1,000+',
  },
  {
    tag: 'Protection',
    title: 'Concrete Sealing',
    slug: 'concrete-sealing',
    desc: 'Protect driveways, sidewalks, patios, and commercial concrete from water, salt, stains, and everyday wear with high-quality sealers.',
    priceLines: [
      'Residential: $300–$2,500+',
      'Commercial: $1,500–$10,000+',
    ],
  },
  {
    tag: 'Seasonal',
    title: 'Holiday Lighting',
    slug: 'holiday-lighting',
    desc: 'Professional install along your roofline, priced by linear footage. We hang it, we take it down.',
    price: '$500–$2,000+',
  },
  {
    tag: 'Commercial',
    title: 'Fleet Washing',
    slug: 'fleet-washing',
    desc: 'Priced by filth level, machine size, and how often you need us — keep the whole fleet looking sharp.',
    price: '$10–$300 per unit',
  },
  {
    tag: 'Quick service',
    title: 'Bin Cleaning',
    slug: 'bin-cleaning',
    desc: 'One-time trash and recycling bin cleaning — flat rate, no surprises.',
    price: '$25 each',
  },
]

export default function Services() {
  return (
    <section id="services" className="services section-pad">
      <div className="container">
        <p className="eyebrow services__eyebrow">What we do</p>
        <h2 className="services__title">Six services. One crew you can count on.</h2>

        <div className="services__grid">
          {services.map((s) => (
            <a key={s.title} href={`/pricing#${s.slug}`} className="service-card">
              <span className="service-card__tag">{s.tag}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>

              {s.priceLines ? (
                <div className="service-card__price-list">
                  {s.priceLines.map((line) => (
                    <span key={line} className="service-card__price-line">
                      {line}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="service-card__price">{s.price}</p>
              )}
            </a>
          ))}

          <a href="/pricing" className="service-card service-card--cta">
            <h3 className="service-card__title">Full pricing breakdown</h3>
            <p className="service-card__desc">See how every service is billed, and what drives the price up or down.</p>
            <span className="service-card__link">
              <ShinyText text="View pricing →" color="#F0B429" shineColor="#ffffff" speed={2.4} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}