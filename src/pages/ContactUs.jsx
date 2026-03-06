import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import './ContactUs.css'

const INQUIRY_OPTIONS = [
  'Assessment & Diagnosis',
  'Education & Prevention',
  'Parent & Child Assistance Program (PCAP)',
  'WRaP 2.0 (FASD Coaching Partnership Project)',
  'Caregiver Support Groups',
  'General Inquiry',
]

export default function ContactUs() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', inquiry: '', comments: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact the Central Alberta FASD Network. Call 1-403-342-7499 or visit us at #101 - 5214 47 Avenue, Red Deer, AB."
        path="/contact-us"
      />
      <PageHero
        title="Contact Us"
        subtitle="We're here to help. Reach out to us today."
        backgroundImage="https://static.wixstatic.com/media/11062b_091f3494a9d54158a189be218d50f31e~mv2.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Whether you have questions about our programs, need support, or want to get involved,
                we'd love to hear from you.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon"><Phone size={20} /></div>
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:1-403-342-7499">1-403-342-7499</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Mail size={20} /></div>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:office@fasdca.ca">office@fasdca.ca</a>
                    <a href="mailto:clinic@fasdca.ca">clinic@fasdca.ca</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><MapPin size={20} /></div>
                  <div>
                    <strong>Address</strong>
                    <span>#101 - 5214 47 Avenue<br />Red Deer, AB, T4N 3P7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              {submitted ? (
                <div className="form-success">
                  <h3>Thank you!</h3>
                  <p>Your message has been received. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inquiry">How can we help? *</label>
                    <select id="inquiry" name="inquiry" value={form.inquiry} onChange={handleChange} required>
                      <option value="">Select an option</option>
                      {INQUIRY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="comments">Comments</label>
                    <textarea id="comments" name="comments" rows={5} value={form.comments} onChange={handleChange} />
                  </div>
                  <p className="form-disclaimer">
                    Your email address will remain confidential and will not be shared with any third parties.
                  </p>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
