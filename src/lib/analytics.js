// Public Google Tag Manager container ID; no API secret is required.
const GTM_ID = 'GTM-KTGR32GP'
export const ANALYTICS_CONSENT_KEY = 'pp_analytics_consent_v1'

export function loadAnalytics() {
  if (typeof window === 'undefined') return
  if (document.getElementById('pp-google-tag-manager')) return

  // No Tag Manager request is made before a visitor actively opts in.
  window.dataLayer = window.dataLayer || []
  const gtag = (...args) => window.dataLayer.push(args)

  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })

  gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })

  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })

  const script = document.createElement('script')
  script.id = 'pp-google-tag-manager'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  document.head.appendChild(script)
}

// After consent withdrawal, the page reloads to unload third-party JS.
export function deleteAnalyticsCookies() {
  if (typeof window === 'undefined') return
  const host = window.location.hostname
  const scopes = ['', host, host === 'prairieprosllc.com' || host.endsWith('.prairieprosllc.com') ? '.prairieprosllc.com' : '']

  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]?.trim()
    if (!name || !/^(_ga($|_)|_gid$|_gat($|_))/.test(name)) return

    for (const domain of scopes) {
      const domainPart = domain ? `; domain=${domain}` : ''
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainPart}`
    }
  })
}
