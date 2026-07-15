import truckLogo from '../assets/truck-logo.png'
import ReviewSummary from './ReviewSummary.jsx'
import './TruckStrip.css'

export default function TruckStrip() {
  return (
    <section className="truck-strip">
      <div className="container truck-strip__inner">
        <img
          src={truckLogo}
          alt="The Prairie Pros logo, painted on the back of our service trailer"
          className="truck-strip__img"
        />
        <p className="truck-strip__caption">
          Keep an eye out — that's our trailer, rolling through your neighborhood.
        </p>
        <span className="truck-strip__divider" aria-hidden="true" />
        <ReviewSummary
          rating={5.0}
          reviewCount={13}
          reviewUrl="https://share.google/eLyquSGIEPVl2PPXg"
        />
      </div>
    </section>
  )
}
