import { Mail } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const BOARD = [
  { name: 'Julie Nanson', role: 'Executive Director' },
  { name: 'Katherine Rauch', role: 'Chair' },
  { name: 'Barb Sluggett', role: 'Vice Chair' },
  { name: 'Ann Siford', role: 'Director' },
  { name: 'Cpl. Amber Prosser', role: 'Director' },
  { name: 'Cst. Francois Nadeau', role: 'Director' },
  { name: 'Steven Wheeler', role: 'Director' },
]

export default function BoardOfDirectors() {
  return (
    <>
      <SEO
        title="Board of Directors"
        description="Meet the Board of Directors of the Central Alberta FASD Network guiding our organization's mission and governance."
        path="/board-of-directors"
      />
      <PageHero
        title="Board of Directors"
        subtitle="Providing strategic leadership and governance"
        backgroundImage="https://static.wixstatic.com/media/11062b_27caf0f4dd0d4f99b94a045187a95c76~mv2.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <img
              src="https://static.wixstatic.com/media/42932a_e1822734cbc9459ba5ffaafe0f3d8f34~mv2.jpg"
              alt="Central Alberta FASD Network Board of Directors"
              style={{ maxWidth: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
              loading="lazy"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {BOARD.map((b) => (
              <div key={b.name} style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-gray-200)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                textAlign: 'center',
                borderTop: '3px solid var(--color-primary)',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'var(--color-primary)', color: 'var(--color-white)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, margin: '0 auto 0.75rem',
                }}>
                  {b.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {b.name}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>{b.role}</p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--color-primary)', color: 'var(--color-white)',
            borderRadius: 'var(--radius-lg)', padding: '2.5rem', textAlign: 'center',
          }}>
            <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>Join Our Board</h2>
            <p style={{ maxWidth: 600, margin: '0 auto 1.5rem', opacity: 0.9, lineHeight: 1.7 }}>
              The Central Alberta FASD Network is actively seeking passionate, diverse and experienced
              board members. Two-year terms beginning September 2024.
            </p>
            <a href="mailto:jnanson@fasdca.ca" className="btn btn-primary">
              <Mail size={18} /> Contact: jnanson@fasdca.ca
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
