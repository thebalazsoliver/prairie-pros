import './LegalPage.css'

export default function CookiePolicy() {
  return (
    <>
      <header className="legal-hero" data-nav-theme="dark">
        <div className="container">
          <p className="eyebrow legal-hero__eyebrow">Legal</p>
          <h1 className="legal-hero__title">Cookie Policy</h1>
          <p className="legal-hero__sub">Last updated: November 17, 2026</p>
        </div>
      </header>

      <section className="legal section-pad">
        <div className="container legal__container">
          <p>
            This page explains how Prairie Pros LLC uses cookies and similar
            technologies, including local storage, on our website.
          </p>

          <h2>Essential site storage</h2>
          <p>
            We use browser local storage to remember your choice about optional
            analytics under the key <code>pp_analytics_consent_v1</code>.
            This is necessary to honor your preference on future visits and is
            not used to track your browsing activity. Rejecting optional analytics
            does not affect the site's core features.
          </p>

          <h2>Optional Google Analytics</h2>
          <p>
            With your permission, we load Google Tag Manager to run Google Analytics
            4 (GA4). GA4 helps us understand visits, pages viewed, and general
            interactions so we can improve the site. Analytics can use cookies
            such as <code>_ga</code> and <code>_ga_*</code> to distinguish visits.
            Cookie lifetimes may vary with our Google Analytics settings and
            your browser. We do not load the Google Tag Manager container until
            you actively accept analytics.
          </p>
          <p>
            You can reject analytics when the notice first appears. To change
            your decision later, use <strong>Cookie settings</strong> in the
            website footer. If you withdraw consent, we stop future analytics
            loading and attempt to clear Google Analytics cookies set by our site.
            You can also clear cookies and site data using your browser's settings.
          </p>

          <h2>Other services</h2>
          <ul>
            <li>
              <strong>Cloudflare, Inc.</strong> — hosts and protects the website
              and may use strictly necessary security identifiers. See{' '}
              <a href="https://www.cloudflare.com/cookie-policy/" target="_blank" rel="noreferrer">
                Cloudflare's cookie policy
              </a>.
            </li>
            <li>
              <strong>Google LLC (Google Fonts)</strong> — our fonts are loaded
              from Google servers. These requests can expose standard connection
              information such as your IP address. See{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                Google's privacy policy
              </a>.
            </li>
            <li>
              <strong>Google LLC (Google Analytics and Tag Manager)</strong> —
              if you accept optional analytics, these services help us measure
              site usage. See{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                Google's privacy policy
              </a>.
            </li>
          </ul>

          <h2>Questions</h2>
          <p>
            Contact <strong>Zane Clausen</strong> about cookies or privacy:
          </p>
          <ul>
            <li>Phone / text: <a href="tel:+17012609707">(701) 260-9707</a></li>
            <li>Email: <a href="mailto:PrairieProsLLC@gmail.com">PrairieProsLLC@gmail.com</a></li>
          </ul>
          <p>
            For more information on how we handle personal information, see our{' '}
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </>
  )
}
