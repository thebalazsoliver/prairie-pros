import { Gauge, MoveHorizontal, Snowflake } from 'lucide-react'
import ShinyText from './ShinyText.jsx'
import './SnowEquipment.css'

export default function SnowEquipment() {
  return (
    <section className="snow-equipment section-pad" data-nav-theme="dark">
      <div className="container">
        <div className="snow-equipment__card">
          <div className="snow-equipment__media">
            <img
              src="/hokotro.webp"
              alt="Prairie Pros 16-foot Top Gun Backblade snow removal equipment"
              className="snow-equipment__image"
              loading="lazy"
            />
            <span className="snow-equipment__badge">16-FT TOP GUN BACKBLADE</span>
          </div>

          <div className="snow-equipment__content">
            <p className="eyebrow snow-equipment__eyebrow">
              Built for North Dakota winters
            </p>

            <h2 className="snow-equipment__title">
              Faster, More Efficient Snow Removal
            </h2>

            <p className="snow-equipment__text">
              Prairie Pros uses a 16-foot Top Gun Backblade that pulls snow from
              behind the truck for a cleaner scrape and fewer passes than a
              traditional front plow. With nearly double the clearing width, we
              can clear many properties up to twice as fast, helping keep your
              property safer while reducing service time.
            </p>

            <div className="snow-equipment__stats">
              <div className="snow-equipment__stat">
                <MoveHorizontal size={22} strokeWidth={2} />
                <span><strong>16-foot</strong><small>clearing width</small></span>
              </div>
              <div className="snow-equipment__stat">
                <Gauge size={22} strokeWidth={2} />
                <span><strong>Up to 2×</strong><small>faster clearing</small></span>
              </div>
              <div className="snow-equipment__stat">
                <Snowflake size={22} strokeWidth={2} />
                <span><strong>Fewer passes</strong><small>cleaner scrape</small></span>
              </div>
            </div>

            <a href="/#contact" className="btn btn-gold snow-equipment__cta">
              <ShinyText
                text="Get a Snow Removal Quote"
                color="#16274F"
                shineColor="#ffffff"
                speed={2.4}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
