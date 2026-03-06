import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const SUPPORTS = [
  'AISH/PDD/Income Support forms and applications',
  'Grocery shopping and meal planning',
  'Addiction and mental health access support',
  'Medical appointment accompaniment',
  'Parent mentoring',
  'WRaP 2.0/School collaboration',
  'Obtaining identification documents',
  'Employment and education support',
  'Foodbank access',
  'Community agency collaboration',
  'Housing support',
]

export default function CommunityOutreach() {
  return (
    <>
      <SEO
        title="Community Outreach & Support"
        description="Outreach services, supports and mentorship for individuals impacted by FASD and their partners and caregivers across Central Alberta."
        path="/community-outreach"
      />
      <PageHero
        title="Community Outreach & Support"
        subtitle="Holistic support and mentorship for individuals and families impacted by FASD"
        backgroundImage="https://static.wixstatic.com/media/11062b_e7dd0bafe385414686024e4cbe20687e~mv2.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: '2.5rem' }}>
            Our Community Outreach and Support program provides outreach services, supports and mentorship
            for individuals impacted by FASD and their partners and caregivers. We work collaboratively
            with clients to identify their needs and connect them with appropriate resources.
          </p>

          <div style={{ background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
            <h2 style={{ marginBottom: '1.25rem' }}>Support Includes</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
              {SUPPORTS.map((s) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-gray-700)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-teal)', flexShrink: 0 }} />
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/contact-us" className="btn btn-primary btn-lg">Contact Us for Support</Link>
          </div>
        </div>
      </section>
    </>
  )
}
