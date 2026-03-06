import { Heart, MapPin } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

export default function Donate() {
  return (
    <>
      <SEO
        title="Donate"
        description="Support the Central Alberta FASD Network through donations. Help increase assessment capacity and support services for individuals impacted by FASD."
        path="/donate"
      />
      <PageHero
        title="Donate"
        subtitle="Your generosity makes a difference in the lives of individuals and families affected by FASD"
        backgroundImage="https://static.wixstatic.com/media/nsplsh_7644365546753851595549~mv2_d_3024_4032_s_4_2.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-gray-600)' }}>
              Provincial funding provides limited assessments. Your donations help increase our capacity
              to provide assessments, support services, and resources for individuals impacted by FASD
              across Central Alberta.
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
            color: 'var(--color-white)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            textAlign: 'center',
            marginBottom: '2rem',
          }}>
            <Heart size={48} style={{ color: 'var(--color-accent)', marginBottom: '1rem' }} />
            <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>Thank You for Your Support</h2>
            <p style={{ opacity: 0.9, lineHeight: 1.7, maxWidth: 600, margin: '0 auto' }}>
              Thank you for your consideration in assisting us to provide supports and services for
              individuals across the lifespan. Donations over the minimum monetary value of $25 will
              be provided a tax receipt.
            </p>
          </div>

          <div style={{
            background: 'var(--color-gray-50)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            border: '1px solid var(--color-gray-200)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={20} /> Donate by Mail
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-gray-600)' }}>
              Cash or cheque donations can be mailed to our office:
            </p>
            <address style={{ fontStyle: 'normal', marginTop: '0.75rem', color: 'var(--color-gray-700)', fontWeight: 600 }}>
              Central Alberta FASD Network<br />
              #101, 5214 47 Avenue<br />
              Red Deer, Alberta, T4N 3P7
            </address>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <img
              src="https://static.wixstatic.com/media/42932a_06566211590c4bdea3e63165b77c468d~mv2.png"
              alt="Yu-Turn"
              style={{ maxWidth: 200, margin: '0 auto' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  )
}
