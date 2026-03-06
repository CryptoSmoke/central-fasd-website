import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="https://static.wixstatic.com/media/42932a_77c114954afa4ab3844cfa84abc33c93~mv2.png"
              alt="Central Alberta FASD Network"
              className="footer-logo"
            />
            <p className="footer-desc">
              Providing free, community-based support for individuals affected by Fetal Alcohol
              Spectrum Disorder and their caregivers across Central Alberta.
            </p>
            <div className="footer-accreditations">
              <img
                src="https://static.wixstatic.com/media/42932a_d08cfbc44f894714b40761317d10b389~mv2.png"
                alt="Imagine Canada Standards Trustmark"
                className="footer-badge"
              />
              <img
                src="https://static.wixstatic.com/media/42932a_d2ca0157ae5e4f9b9b23040a02b354c2~mv2.jpg"
                alt="FASD Network"
                className="footer-badge"
              />
            </div>
          </div>

          <div className="footer-links-group">
            <h3>Programs & Services</h3>
            <ul>
              <li><Link to="/assement-diagnosis">Assessment & Diagnosis</Link></li>
              <li><Link to="/community-outreach">Community Outreach</Link></li>
              <li><Link to="/education-prevention">Education & Prevention</Link></li>
              <li><Link to="/pcap-program">PCAP Program</Link></li>
              <li><Link to="/restorative-justice-program">Restorative Justice</Link></li>
              <li><Link to="/cargiver-support-groups">Support Groups</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h3>Get Involved</h3>
            <ul>
              <li><Link to="/board-of-directors">Board Opportunities</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/volunteer">Volunteer</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <MapPin size={16} />
                <span>#101 - 5214 47 Avenue<br />Red Deer, AB, T4N 3P7</span>
              </li>
              <li>
                <Phone size={16} />
                <a href="tel:1-403-342-7499">1-403-342-7499</a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:office@fasdca.ca">office@fasdca.ca</a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:clinic@fasdca.ca">clinic@fasdca.ca</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CAFASD. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/policy-documents">Privacy Policy</Link>
            <Link to="/policy-documents">Complaint Policy</Link>
            <Link to="/contact-us">Contact</Link>
          </div>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={18} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
