import { useState, useEffect } from 'react'
import './CookieBanner.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-content">
        <p>
          We use cookies to enhance your browsing experience and analyze site traffic.
          By clicking "Accept", you consent to our use of cookies. See our{' '}
          <a href="/policy-documents">Privacy Policy</a> for more information.
        </p>
        <div className="cookie-actions">
          <button className="btn btn-primary btn-sm" onClick={accept}>Accept</button>
          <button className="btn btn-outline btn-sm" onClick={decline}>Decline</button>
        </div>
      </div>
    </div>
  )
}
