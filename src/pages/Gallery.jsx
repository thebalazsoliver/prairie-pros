import { useState } from 'react'

import fleet01Before from '../assets/gallery/fleet-01-before.webp'
import fleet01After from '../assets/gallery/fleet-01-after.webp'
import fleet02Before from '../assets/gallery/fleet-02-before.webp'
import fleet02After from '../assets/gallery/fleet-02-after.webp'
import fleetWashing000 from '../assets/gallery/Fleetwashing000.webp'
import fleetWashing0001 from '../assets/gallery/fleetwashing0001.webp'
import pressure01Before from '../assets/gallery/pressure-01-before.webp'
import pressure01After from '../assets/gallery/pressure-01-after.webp'
import pressure02Splitdeck from '../assets/gallery/pressure-02-splitdeck.webp'
import pressure03RailingBefore from '../assets/gallery/railingbefore.webp'
import pressure03RailingMid from '../assets/gallery/railingmid.webp'
import pressure03Railing from '../assets/gallery/pressure-03-railing.webp'
import pressure04Splitfence from '../assets/gallery/pressure-04-splitfence.webp'
import bins01Dirty1 from '../assets/gallery/bins-01-dirty1.webp'
import bins01Clean from '../assets/gallery/bins-01-clean.webp'
import holiday01 from '../assets/gallery/holiday-01.webp'
import holiday02 from '../assets/gallery/holiday-02.webp'
import holiday03 from '../assets/gallery/holiday-03.webp'

import './Gallery.css'

const categories = [
  {
    id: 'fleet',
    title: 'Fleet Washing',
    blurb: 'Waste Management trucks, before the grime and after a full wash.',
    photos: [
      { src: fleet01Before, alt: 'Waste Management garbage truck covered in road grime before washing' },
      { src: fleet01After, alt: 'The same Waste Management truck, washed clean' },
      { src: fleet02Before, alt: 'A second Waste Management truck in the shop before washing' },
      { src: fleet02After, alt: 'The same truck after a full fleet wash, bright white and green' },
      { src: fleetWashing000, alt: 'Commercial sanitation vehicle ready for fleet washing service' },
      { src: fleetWashing0001, alt: 'Commercial work truck after fleet washing service' },
    ],
  },
  {
    id: 'pressure',
    title: 'Pressure Washing',
    blurb: 'Patios, decks, and fences — same surface, dramatically different after a wash.',
    photos: [
      { src: pressure01Before, alt: 'A concrete patio and walkway stained with dirt before pressure washing' },
      { src: pressure01After, alt: 'The same patio area, cleaned and rinsed' },
      { src: pressure02Splitdeck, alt: 'A composite deck staircase, half cleaned and half still dirty, showing the contrast' },
      { src: pressure03RailingBefore, alt: 'Composite railing before pressure washing with visible dirt and buildup' },
      { src: pressure03RailingMid, alt: 'Composite railing during pressure washing showing the cleaned and dirty contrast' },
      { src: pressure03Railing, alt: 'Close-up of the freshly pressure-washed composite deck railing' },
      { src: pressure04Splitfence, alt: 'A wood privacy fence, one half freshly stained and cleaned, the other half weathered' },
    ],
  },
  {
    id: 'holiday',
    title: 'Holiday Lighting',
    blurb: 'Custom holiday lighting installations that make homes stand out all season long.',
    photos: [
      { src: holiday01, alt: 'Home decorated with warm white holiday lights at night' },
      { src: holiday02, alt: 'Large home with detailed holiday roofline lighting installation' },
      { src: holiday03, alt: 'Residential property illuminated with professional holiday lighting' },
    ],
  },
  {
    id: 'bins',
    title: 'Bin Cleaning',
    blurb: 'Trash and recycling bins, rinsed out and deodorized.',
    photos: [
      { src: bins01Dirty1, alt: 'Trash bins before cleaning with visible dirt and buildup' },
      { src: bins01Clean, alt: 'Two trash bins opened up, freshly cleaned and rinsed out' },
    ],
  },
]

const allPhotos = categories.flatMap((c) => c.photos)

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  function openAt(photo) {
    const idx = allPhotos.findIndex((p) => p.src === photo.src)
    setActiveIndex(idx)
  }

  function close() {
    setActiveIndex(null)
  }

  function step(delta) {
    setActiveIndex((i) =>
      i === null ? null : (i + delta + allPhotos.length) % allPhotos.length
    )
  }

  return (
    <>
      <header className="gallery-hero" data-nav-theme="dark">
        <div className="container">
          <p className="eyebrow gallery-hero__eyebrow">Gallery</p>
          <h1 className="gallery-hero__title">Real jobs, real results</h1>
          <p className="gallery-hero__sub">
            A look at recent fleet washing, pressure washing, and bin cleaning work
            around Bismarck–Mandan.
          </p>
        </div>
      </header>

      <section className="gallery section-pad">
        <div className="container">
          {categories.map((cat) => (
            <div key={cat.id} className="gallery-category">
              <div className="gallery-category__head">
                <h2 className="gallery-category__title">{cat.title}</h2>
                <p className="gallery-category__blurb">{cat.blurb}</p>
              </div>

              <div className="gallery-grid">
                {cat.photos.map((photo) => (
                  <button
                    key={photo.src}
                    type="button"
                    className="gallery-tile"
                    onClick={() => openAt(photo)}
                    aria-label="Open photo full size"
                  >
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            className="gallery-lightbox__close"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>

          <button
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation()
              step(-1)
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <img
            src={allPhotos[activeIndex].src}
            alt={allPhotos[activeIndex].alt}
            className="gallery-lightbox__img"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation()
              step(1)
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}