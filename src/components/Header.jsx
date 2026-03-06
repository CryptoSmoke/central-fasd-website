import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import './Header.css'

const NAV_ITEMS = [
  { label: 'What is FASD?', path: '/what-is-fasd' },
  {
    label: 'About Us',
    children: [
      { label: 'Who We Are', path: '/who-we-are' },
      { label: 'Our Team', path: '/our-team' },
      { label: 'Board of Directors', path: '/board-of-directors' },
      { label: 'Reporting Documents', path: '/reporting-documents' },
      { label: 'Policy Documents', path: '/policy-documents' },
    ],
  },
  {
    label: 'Programs & Services',
    children: [
      { label: 'Assessment & Diagnosis', path: '/assement-diagnosis' },
      { label: 'Community Outreach & Support', path: '/community-outreach' },
      { label: 'Education & Prevention', path: '/education-prevention' },
      { label: 'Parent & Child Assistance Program', path: '/pcap-program' },
      { label: 'Restorative Justice Program', path: '/restorative-justice-program' },
      { label: 'Support Groups', path: '/cargiver-support-groups' },
    ],
  },
  {
    label: 'Get Involved',
    children: [
      { label: 'Board Opportunities', path: '/board-of-directors' },
      { label: 'Careers', path: '/careers' },
      { label: 'Donate', path: '/donate' },
      { label: 'Volunteer', path: '/volunteer' },
    ],
  },
  { label: 'Events', path: '/events' },
  { label: 'Blog', path: '/blog' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const navRef = useRef()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="header-inner container">
        <Link to="/" className="logo-link" aria-label="Central Alberta FASD Network - Home">
          <img
            src="https://static.wixstatic.com/media/42932a_77c114954afa4ab3844cfa84abc33c93~mv2.png"
            alt="Central Alberta FASD Network Logo"
            className="logo-img"
          />
        </Link>

        <nav className={`nav ${mobileOpen ? 'nav-open' : ''}`} ref={navRef} aria-label="Main navigation">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className={`nav-item ${item.children ? 'has-dropdown' : ''}`}
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => item.children && setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button
                      className="nav-link dropdown-toggle"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown size={16} />
                    </button>
                    <ul className={`dropdown ${openDropdown === item.label ? 'dropdown-open' : ''}`}>
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link to={child.path} className="dropdown-link">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.path} className="nav-link">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a href="tel:1-403-342-7499" className="header-cta btn btn-primary btn-sm">
          <Phone size={16} />
          <span className="header-cta-text">Call Us Today</span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
    </header>
  )
}
