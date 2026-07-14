import './LegalPage.css'

export default function PrivacyPolicy() {
  return (
    <>
      <header className="legal-hero" data-nav-theme="dark">
        <div className="container">
          <p className="eyebrow legal-hero__eyebrow">Legal</p>
          <h1 className="legal-hero__title">Privacy Policy</h1>
          <p className="legal-hero__sub">Last updated: July 2026</p>
        </div>
      </header>

      <section className="legal section-pad">
        <div className="container legal__container">

          <p>
            Prairie Pros LLC ("Prairie Pros," "we," "us") operates this website. This
            policy explains what information we collect from visitors, how we use it,
            and who else touches that data as part of running the site.
          </p>

          <h2>Who's responsible for your data</h2>
          <p>
            The person responsible for handling any information collected through this
            site is <strong>Zane Clausen</strong>, Founder &amp; Owner of Prairie Pros LLC.
            You can reach him directly with any question, request, or concern:
          </p>
          <ul>
            <li>Phone / text: <a href="tel:+17012609707">(701) 260-9707</a></li>
            <li>Email: <a href="mailto:PrairieProsLLC@gmail.com">PrairieProsLLC@gmail.com</a></li>
          </ul>

          <h2>What information we collect</h2>
          <p>
            The only personal information this site collects is what you choose to
            type into the contact form on the home page — your name, phone number,
            email address, the service you're asking about, and whatever message you
            write.
          </p>
          <p>
            That form doesn't submit to a server or a third-party form processor.
            Instead, it opens your device's own email app with a pre-filled message
            addressed to <a href="mailto:PrairieProsLLC@gmail.com">PrairieProsLLC@gmail.com</a>.
            From that point on, the message travels through your email provider and
            ours (see "Third parties" below) like any other email you send.
          </p>
          <p>
            We don't run analytics, advertising, or tracking scripts of any kind on
            this site — no Google Analytics, no Meta/Facebook Pixel, nothing that
            profiles your visit or follows you elsewhere.
          </p>

          <h2>Cookies &amp; local storage</h2>
          <p>
            We use a small amount of browser local storage to remember whether you've
            accepted or dismissed the cookie notice, so it doesn't show up on every
            visit. Full details are in our{' '}
            <a href="/cookie-policy">Cookie Policy</a>.
          </p>

          <h2>Third parties involved in running this site</h2>
          <p>
            A handful of outside services are involved in getting this website onto
            your screen. Each of them may process limited technical information (like
            your IP address) purely as part of that job:
          </p>
          <ul>
            <li>
              <strong>Cloudflare, Inc.</strong> — 101 Townsend Street, San
              Francisco, CA 94107, USA. Cloudflare hosts the website's files
              (Cloudflare Pages) and manages our domain name (Cloudflare
              Registrar). Cloudflare also provides the security and
              content-delivery layer that gets the page to your browser
              quickly, which involves processing standard connection data
              such as IP address and request logs. See{' '}
              <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">
                Cloudflare's privacy policy
              </a>.
            </li>
            <li>
              <strong>Google LLC (Google Fonts)</strong> — 1600 Amphitheatre
              Parkway, Mountain View, CA 94043, USA. The site's typefaces are
              loaded from Google's font servers (fonts.googleapis.com and
              fonts.gstatic.com). Loading a font this way means your browser
              makes a request directly to Google, which may see your IP
              address and browser details as part of that request. See{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                Google's privacy policy
              </a>.
            </li>
            <li>
              <strong>Your email provider (and ours)</strong> — if you use the
              contact form, the resulting email is handled by your email provider and
              by ours (Gmail) according to their own privacy policies.
            </li>
          </ul>
          <p>
            We don't sell, rent, or share your information with anyone for marketing
            purposes.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep quote-request emails for as long as reasonably needed to respond
            to you and provide the service you asked about, then delete them at our
            discretion.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask Zane at any time what information we have connected to you,
            or ask that it be deleted, using the phone number or email above. You can
            also clear your browser's local storage or cookies at any time through
            your browser's settings.
          </p>

          <h2>Children's privacy</h2>
          <p>
            This site is intended for adults arranging exterior services for their
            home or business. We don't knowingly collect information from children.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If this policy changes, we'll update the "last updated" date at the top
            of this page.
          </p>

        </div>
      </section>
    </>
  )
}
