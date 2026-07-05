import ZaneCard from './ZaneCard.jsx'
import ShinyText from './ShinyText.jsx'
import './MeetZane.css'

export default function MeetZane() {
  return (
    <section id="meet-zane" className="zane section-pad">
      <div className="container zane__inner">
        <div className="zane__portrait">
          <ZaneCard />
          <p className="zane__caption">Zane, mid-celebration at a University of Mary hockey tailgate.</p>
        </div>

        <div className="zane__content">
          <p className="eyebrow zane__eyebrow">The person behind the truck</p>
          <h2 className="zane__title">Meet Zane</h2>
          <blockquote className="zane__quote">
            “I'm Zane, the founder and owner of Prairie Pros LLC. I started this
            business as a student-athlete at the University of Mary to bring
            honest, high-quality services to my local community. Whether we're
            clearing snow at 5&nbsp;a.m. or stringing up holiday lights, we show up
            ready to work hard and do the job right.”
          </blockquote>
          <p className="zane__closing">
            Every client supports a bigger dream — and we don't take that lightly.
          </p>
          <a href="#contact" className="btn btn-navy zane__cta">
            <ShinyText text="Work with Zane's crew" color="#F7F5EF" shineColor="#F0B429" speed={2.4} />
          </a>
        </div>
      </div>
    </section>
  )
}
