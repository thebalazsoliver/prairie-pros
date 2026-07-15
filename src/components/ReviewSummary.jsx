import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'
import { motion, useMotionValue, useAnimationFrame } from 'motion/react'
import './ReviewSummary.css'

// Animates a number from 0 up to `value` over roughly `duration` seconds,
// writing the formatted text directly into the span (no re-renders needed).
// Stays at 0 until `start` becomes true.
function useCountUp(ref, value, { duration = 1.2, decimals = 0, start = false } = {}) {
  const progress = useMotionValue(0)
  const startRef = useRef(null)
  const doneRef = useRef(false)

  useEffect(() => {
    startRef.current = null
    doneRef.current = false
    progress.set(0)
  }, [value]) // eslint-disable-line react-hooks/exhaustive-deps

  useAnimationFrame((t) => {
    if (!start || doneRef.current || !ref.current) return
    if (startRef.current === null) startRef.current = t

    const elapsed = (t - startRef.current) / 1000
    const p = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    const current = value * eased

    ref.current.textContent =
      decimals > 0
        ? current.toFixed(decimals)
        : new Intl.NumberFormat('en-US').format(Math.round(current))

    if (p >= 1) doneRef.current = true
  })
}

export default function ReviewSummary({
  rating,
  reviewCount,
  maxRating = 5,
  reviewUrl,
  className = '',
}) {
  const ratingRef = useRef(null)
  const reviewCountRef = useRef(null)
  const [started, setStarted] = useState(false)

  useCountUp(ratingRef, rating, { duration: 1.2, decimals: 1, start: started })
  useCountUp(reviewCountRef, reviewCount, { duration: 1.2, decimals: 0, start: started })

  const Wrapper = reviewUrl ? motion.a : motion.div
  const linkProps = reviewUrl
    ? { href: reviewUrl, target: '_blank', rel: 'noreferrer noopener' }
    : {}

  return (
    <Wrapper
      className={`review-badge ${reviewUrl ? 'review-badge--link' : ''} ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      onViewportEnter={() => setStarted(true)}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      aria-label={
        reviewUrl
          ? `Rating: ${rating} out of ${maxRating} based on ${reviewCount} Google reviews. Opens our reviews in a new tab.`
          : `Rating: ${rating} out of ${maxRating} based on ${reviewCount} reviews.`
      }
      {...linkProps}
    >
      <div className="review-badge__stars">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            className="review-badge__star"
            style={{ opacity: rating >= i + 1 ? 1 : 0.35 }}
            size={16}
            fill="currentColor"
          />
        ))}
      </div>
      <span className="review-badge__score">
        <span ref={ratingRef} style={{ minWidth: `${rating.toFixed(1).length}ch` }} className="review-badge__num">0.0</span>
        <span className="review-badge__count">
          {' '}(<span ref={reviewCountRef} style={{ minWidth: `${String(reviewCount).length}ch` }} className="review-badge__num">0</span>)
        </span>
      </span>
    </Wrapper>
  )
}
