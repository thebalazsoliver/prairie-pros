import zanePhoto from '../assets/zane.jpg'
import ShinyText from './ShinyText.jsx'
import './ZaneCard.css'

export default function ZaneCard() {
  return (
    <div className="zane-card">
      <img
        src={zanePhoto}
        alt="Zane Clausen at a University of Mary hockey tailgate"
        className="zane-card__photo"
      />
      <div className="zane-card__footer">
        <div className="zane-card__id">
          <p className="zane-card__name">Zane Clausen</p>
          <p className="zane-card__role">Founder &amp; Owner</p>
        </div>
        <a href="#contact" className="btn btn-gold zane-card__btn">
          <ShinyText text="Get a Quote" color="#16274F" shineColor="#ffffff" speed={2.4} />
        </a>
      </div>
    </div>
  )
}
