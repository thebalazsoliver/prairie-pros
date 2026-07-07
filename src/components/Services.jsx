import ShinyText from './ShinyText.jsx'
import './Services.css'

const services = [
  {
    tag: 'Winter',
    title: 'Snow Removal',
    slug: 'snow-removal',
    desc: 'Per-visit or seasonal contracts, billed by square footage. Residential and commercial properties, cleared before your day starts.',
    price: '$30–$2,500 residential',
  },
  {
    tag: 'Year-round',
    title: 'Pressure Washing',
    slug: 'pressure-washing',
    desc: 'Driveways, siding, decks and walkways — billed by square footage to fit any size of home or lot.',
    price: '$200–$1,000+',
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
        <h2 className="services__title">Five services. One crew you can count on.</h2>

        <div className="services__grid">
          {services.map((s) => (
            <a key={s.title} href={`/pricing#${s.slug}`} className="service-card">
              <span className="service-card__tag">{s.tag}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <p className="service-card__price">{s.price}</p>
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
