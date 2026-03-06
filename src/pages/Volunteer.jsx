import { Phone, Mail } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

export default function Volunteer() {
  return (
    <>
      <SEO
        title="Volunteer"
        description="Volunteer opportunities with the Central Alberta FASD Network. Help support individuals and families impacted by FASD."
        path="/volunteer"
      />
      <PageHero
        title="Volunteer Opportunities"
        subtitle="Make a meaningful difference in your community"
        backgroundImage="https://static.wixstatic.com/media/11062b_9a7ddf12964745a3b68de0eeccb08d36~mv2.jpeg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <div style={{
            background: 'var(--color-gray-50)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            border: '1px solid var(--color-gray-200)',
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Coming Soon</h2>
            <p style={{ lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: '2rem' }}>
              Check back soon for information about volunteer opportunities with the Central Alberta
              FASD Network!
            </p>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: '1.5rem' }}>
              In the meantime, please reach out to us directly:
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:403-342-7499" className="btn btn-primary">
                <Phone size={18} /> 403-342-7499
              </a>
              <a href="mailto:office@fasdca.ca" className="btn btn-outline">
                <Mail size={18} /> office@fasdca.ca
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
