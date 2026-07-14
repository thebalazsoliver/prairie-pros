import './LegalPage.css'

export default function CookiePolicy() {
  return (
    <>
      <header className="legal-hero" data-nav-theme="dark">
        <div className="container">
          <p className="eyebrow legal-hero__eyebrow">Legal</p>
          <h1 className="legal-hero__title">Cookie Policy</h1>
          <p className="legal-hero__sub">Last updated: July 2026</p>
        </div>
      </header>

      <section className="legal section-pad">
        <div className="container legal__container">

          <p>
            This page explains, in plain terms, what this site stores in your
            browser and why. "Cookies" here also covers similar technologies like
            browser local storage, since that's actually what we use.
          </p>

          <h2>What we use it for</h2>
          <p>
            When you first visit, a popup asks whether you accept or decline this
            notice. Whichever you choose, we save that choice in your browser's{' '}
            <strong>local storage</strong> (not a traditional server-read cookie)
            under the key <code>pp_cookie_consent</code>, so we don't ask you again
            on your next visit. That's the only thing this site itself stores in
            your browser.
          </p>
          <p>
            We don't use cookies or local storage for analytics, advertising,
            personalization, or tracking you across other websites.
          </p>

          <h2>What third parties may set</h2>
          <ul>
            <li>
              <strong>Cloudflare, Inc.</strong> (101 Townsend Street, San
              Francisco, CA 94107, USA), which hosts this site and provides
              its domain and security/CDN layer, may set a small number of
              technical cookies or use similar identifiers to protect the
              site from abuse and keep it running smoothly. These aren't
              used to track you across other sites. See{' '}
              <a href="https://www.cloudflare.com/cookie-policy/" target="_blank" rel="noreferrer">
                Cloudflare's cookie policy
              </a>.
            </li>
            <li>
              <strong>Google LLC (Google Fonts)</strong> (1600 Amphitheatre
              Parkway, Mountain View, CA 94043, USA) — the way we've set up
              font loading on this site does not set tracking cookies for
              the fonts themselves, but your browser does send a request
              directly to Google's servers to fetch them, which includes
              your IP address. See{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                Google's privacy policy
              </a>{' '}
              for how Google handles that.
            </li>
          </ul>

          <h2>Your choices</h2>
          <p>
            You can decline the popup, and the site will still work exactly the
            same — declining only means we won't assume you're fine with the third
            parties above, and it stops the popup from nagging you every time you
            reload. You can also clear this at any time from your browser's
            settings (usually under "site data," "local storage," or "cookies" for
            this domain), which will bring the popup back on your next visit.
          </p>
          <p>
            If you'd rather your browser not talk to Google's font servers at all,
            most ad-blocking or privacy browser extensions can block requests to
            <code> fonts.googleapis.com</code> and <code>fonts.gstatic.com</code> —
            the site will still work, just with your browser's default fonts
            instead of ours.
          </p>

          <h2>Questions</h2>
          <p>
            Reach out to <strong>Zane Clausen</strong> with anything cookie or
            privacy related:
          </p>
          <ul>
            <li>Phone / text: <a href="tel:+17012609707">(701) 260-9707</a></li>
            <li>Email: <a href="mailto:PrairieProsLLC@gmail.com">PrairieProsLLC@gmail.com</a></li>
          </ul>
          <p>
            For how we handle any information you send us directly, see our{' '}
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>

        </div>
      </section>
    </>
  )
}
