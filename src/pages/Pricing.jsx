import { Snowflake, Droplets, TreePine, Truck, Trash2 } from 'lucide-react'
import SpraySplash from '../components/SpraySplash.jsx'
import ShinyText from '../components/ShinyText.jsx'
import './Pricing.css'

const pricing = [
  {
    id: '01',
    icon: Snowflake,
    slug: 'snow-removal',
    title: 'Snow Removal',
    billing: 'Billed by square footage · per-visit or seasonal contract',
    rows: [
      { label: 'Residential', price: '$30 – $2,500' },
      { label: 'Commercial', price: 'Custom quote' },
    ],
    note: 'Choose per-visit for pay-as-it-falls flexibility, or lock in a seasonal rate so you\'re covered no matter how many storms roll through. Commercial lots are quoted individually based on square footage, layout, and turnaround needs.',
  },
  {
    id: '02',
    icon: Droplets,
    slug: 'pressure-washing',
    title: 'Pressure Washing',
    billing: 'Billed by square footage',
    rows: [
      { label: 'Typical range', price: '$200 – $1,000+' },
    ],
    note: 'Covers driveways, siding, decks, patios and walkways. Larger surfaces, heavy staining, or multiple areas in one visit will land toward the higher end.',
  },
  {
    id: '03',
    icon: TreePine,
    slug: 'holiday-lighting',
    title: 'Holiday Lighting',
    billing: 'Billed by linear roofline footage',
    rows: [
      { label: 'Typical range', price: '$500 – $2,000+' },
    ],
    note: 'Price scales with the length of your roofline and the style of lighting. Includes install; take-down can be bundled in.',
  },
  {
    id: '04',
    icon: Truck,
    slug: 'fleet-washing',
    title: 'Fleet Washing',
    billing: 'Billed by filth level, machine size and wash frequency',
    rows: [
      { label: 'Per unit', price: '$10 – $300' },
    ],
    note: 'Commercial vehicles and equipment, priced per unit. Heavier buildup, larger machines, and one-off washes run higher; regular recurring service brings the per-wash cost down.',
  },
  {
    id: '05',
    icon: Trash2,
    slug: 'bin-cleaning',
    title: 'Bin Cleaning',
    billing: 'Flat rate · one-time cleaning',
    rows: [
      { label: 'Per bin', price: '$25' },
    ],
    note: 'Trash and recycling bins, cleaned and deodorized. Simple, flat pricing — no measuring required.',
  },
]

export default function Pricing() {
  return (
    <>
      <header className="pricing-hero">
        <div className="container pricing-hero__inner">
          <p className="eyebrow pricing-hero__eyebrow">Pricing</p>
          <h1 className="pricing-hero__title">What it costs to get it done right</h1>
          <p className="pricing-hero__sub">
            Every job is different, so most of our services are priced by size or
            scope rather than a flat number. Here's exactly how we get to your
            quote — and the ranges most customers land in.
          </p>
        </div>
        <SpraySplash className="pricing-hero__spray" variant="light" />
      </header>

      <section className="pricing-list section-pad">
        <div className="container">
          {pricing.map((service) => (
            <article key={service.id} className="pricing-item" id={service.slug}>
              <div className="pricing-item__head">
                <span className="pricing-item__id">
                  <service.icon size={20} strokeWidth={2} />
                </span>
                <div>
                  <h2 className="pricing-item__title">{service.title}</h2>
                  <p className="pricing-item__billing">{service.billing}</p>
                </div>
              </div>

              <div className="pricing-item__body">
                <p className="pricing-item__note">{service.note}</p>
                <div className="pricing-item__rows">
                  {service.rows.map((r) => (
                    <div key={r.label} className="pricing-item__row">
                      <span className="pricing-item__row-label">{r.label}</span>
                      <span className="pricing-item__row-price">{r.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <div className="pricing-cta">
            <div>
              <h3 className="pricing-cta__title">Not sure which price applies to you?</h3>
              <p className="pricing-cta__sub">Send us the details and we'll come back with a real number — not just a range.</p>
            </div>
            <a href="/#contact" className="btn btn-gold">
              <ShinyText text="Request a Quote" color="#16274F" shineColor="#ffffff" speed={2.4} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
