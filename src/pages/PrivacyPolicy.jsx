import './LegalPage.css'

export default function PrivacyPolicy() {
  return (
    <>
      <header className="legal-hero" data-nav-theme="dark">
        <div className="container">
          <p className="eyebrow legal-hero__eyebrow">Legal</p>
          <h1 className="legal-hero__title">Privacy Policy</h1>
          <p className="legal-hero__sub">Last updated: July 23, 2026</p>
        </div>
      </header>

      <section className="legal section-pad">
        <div className="container legal__container">

          <p>
            Prairie Pros LLC ("Prairie Pros," "we," "us") operates this website. This
            policy explains what information we collect from visitors, how we use it,
            and which service providers may process that information as part of
            operating the site and responding to inquiries.
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
            The personal information this site collects is what you choose to enter
            into the contact form on the home page — your name, phone number, email
            address, the service you're asking about, and the message you submit.
          </p>
          <p>
            When you submit the form, the information is sent securely through a
            Cloudflare Pages Function and then delivered to Prairie Pros through
            Brevo's transactional email service. Brevo may process the submitted
            information and limited delivery records for the purpose of sending,
            securing, troubleshooting, and maintaining records of the communication.
          </p>
          <p>
            We use the information you submit only to respond to your inquiry, prepare
            an estimate, schedule or provide requested services, and maintain related
            business records. We do not use contact-form information for unrelated
            advertising or sell it to third parties.
          </p>
          <p>
            We don't run analytics, advertising, or behavioral tracking scripts of
            any kind on this site — no Google Analytics, no Meta/Facebook Pixel, and
            nothing intended to profile your visit or follow you elsewhere.
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
            A small number of outside services are involved in operating this website,
            delivering form submissions, and making the site available to visitors.
            These providers may process limited technical or contact information only
            as needed to perform those services:
          </p>
          <ul>
            <li>
              <strong>Cloudflare, Inc.</strong> — 101 Townsend Street, San
              Francisco, CA 94107, USA. Cloudflare hosts the website's files
              through Cloudflare Pages, processes contact-form submissions
              through a Pages Function, manages our domain name, and provides
              security and content delivery. This may involve processing standard
              connection data such as IP addresses, request logs, and form data
              submitted to the contact endpoint. See{' '}
              <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">
                Cloudflare's privacy policy
              </a>.
            </li>
            <li>
              <strong>Brevo (Sendinblue)</strong> — Brevo is used to deliver
              transactional emails submitted through the website contact form.
              Information submitted through the form, including your name, email
              address, phone number, selected service, and message, may be processed
              by Brevo for email delivery, security, troubleshooting, and related
              communication records. See{' '}
              <a href="https://www.brevo.com/legal/privacypolicy/" target="_blank" rel="noreferrer">
                Brevo's privacy policy
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
              <strong>Google LLC (Gmail)</strong> — form submissions delivered
              through Brevo are received and stored in the Prairie Pros Gmail
              account. Google may process email content and related account data
              according to its own privacy policy. See{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                Google's privacy policy
              </a>.
            </li>
          </ul>

          <p>
            We don't sell, rent, or share your personal information with third parties
            for their own marketing purposes.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep quote requests and related communications for as long as reasonably
            needed to respond to you, provide the requested service, handle follow-up
            questions, and maintain appropriate business records. Information may be
            deleted when it is no longer reasonably needed.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask Zane at any time what information we have connected to you,
            request a correction, or ask that it be deleted, subject to any information
            we may need to keep for legitimate business or legal reasons. Use the phone
            number or email address listed above. You can also clear your browser's
            local storage or cookies at any time through your browser's settings.
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