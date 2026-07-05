# Prairie Pros LLC — Website

A Vite + React rebuild of the Prairie Pros LLC site, themed around the colors
in the truck/trailer logo (navy, gold, ice blue, barn red).

## Pages

- **Home** (`/`) — hero, "spot our trailer" photo strip, services overview,
  a prominent **Meet Zane** section, and the **contact form**.
- **Pricing** (`/pricing`) — full breakdown of how each service is billed.
- **FAQ** (`/faq`) — starter FAQ built from the pricing structure. Swap in
  your real FAQ copy from the old site whenever you're ready — see the
  `faqs` array in `src/pages/FAQ.jsx`.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Wiring up the contact form

The contact form (`src/components/ContactForm.jsx`) is currently UI-only —
submitting it shows a success message but doesn't send anywhere yet. To make
it actually deliver messages, the easiest options are:

- **Formspree** (formspree.io) — free tier, just point the form's `onSubmit`
  at their endpoint instead of the local state update.
- **EmailJS** (emailjs.com) — send straight to your inbox from the browser,
  no backend needed.
- A custom backend endpoint, if you'd rather handle it yourself.

## Content still to double check

- **FAQ page**: placeholder questions/answers based on the pricing
  structure — swap in your real FAQ text whenever you have it.
- **Zane's photo**: the Meet Zane section currently uses a "ZC" monogram
  badge instead of a photo. Drop a real photo into `src/assets/` and swap
  it into `src/components/MeetZane.jsx` if you'd like a photo instead.
- **Phone number**: (701) 260-9707, used across the nav, footer, and contact
  section — update in those three places if it ever changes.

## Palette (from the logo)

| Token | Hex | Use |
|---|---|---|
| Navy | `#16274F` | Primary background, header, footer |
| Navy Deep | `#0E1B38` | Darkest backgrounds |
| Steel | `#22417A` | Secondary surfaces, CTAs |
| Gold | `#F0B429` | Primary accent, buttons, highlights |
| Barn Red | `#C1272D` | Prices, sparing emphasis |
| Ice Blue | `#7EC8E3` | Icons, decorative spray accents |
| Cream | `#F7F5EF` | Light section backgrounds |
