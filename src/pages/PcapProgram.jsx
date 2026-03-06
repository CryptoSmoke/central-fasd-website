import { Phone } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const SUPPORT_ITEMS = [
  'Collaborating with mental health and addictions treatment',
  'Medical care and birth control',
  'Community resources',
  'Housing support',
  'Forms and applications',
  'Legal support',
  'Child intervention',
  'Grocery shopping and meal planning',
]

const ELIGIBILITY = [
  'Is pregnant or up to six months postpartum',
  'Has used alcohol and/or other substances during pregnancy',
  'May become pregnant and is at risk of continuing to use alcohol or other substances',
  'Has delivered a child who is potentially impacted or who is impacted by FASD',
]

export default function PcapProgram() {
  return (
    <>
      <SEO
        title="Parent & Child Assistance Program"
        description="PCAP is a three-year voluntary program offering holistic support during and after pregnancy for those experiencing difficulties with substance use."
        path="/pcap-program"
      />
      <PageHero
        title="Parent & Child Assistance Program (PCAP)"
        subtitle="Holistic support during and after pregnancy"
        backgroundImage="https://static.wixstatic.com/media/4736eb72f0224575957b67b5ef3b26e6.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem', alignItems: 'start', marginBottom: '3rem' }}>
            <div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: '2rem' }}>
                PCAP offers holistic support during and after pregnancy for those experiencing difficulties
                with substance use and other barriers. PCAP mentors build healthy relationships with the
                participant by meeting them where they are at in their lives and supporting them achieve
                their goals.
              </p>

              <h2 style={{ marginBottom: '1rem' }}>Support Includes</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                {SUPPORT_ITEMS.map((s) => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-gray-700)' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-teal)', flexShrink: 0 }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/42932a_52e61729601a4fdcabe203f8bb237cca~mv2.png"
                alt="Alberta PCAP Council"
                style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}
                loading="lazy"
              />
            </div>
          </div>

          <div style={{ background: 'var(--color-primary)', color: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: '2.5rem' }}>
            <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>Program Eligibility</h2>
            <p style={{ marginBottom: '1.25rem', opacity: 0.9 }}>An individual who:</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {ELIGIBILITY.map((e) => (
                <li key={e} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', opacity: 0.9 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0, marginTop: 8 }} />
                  {e}
                </li>
              ))}
            </ul>
            <a href="tel:1-403-342-7499" className="btn btn-primary btn-lg">
              <Phone size={18} /> Call Now: 1-403-342-7499
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
