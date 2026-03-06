import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers"
        description="Career opportunities at the Central Alberta FASD Network. Join our team and help support individuals impacted by FASD."
        path="/careers"
      />
      <PageHero
        title="Career Opportunities"
        subtitle="Join our team and make a difference in the lives of individuals and families impacted by FASD"
        backgroundImage="https://static.wixstatic.com/media/11062b_23038e254b914d11b792ca46e48b637f~mv2_d_5000_3333_s_4_2.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: '2rem' }}>
            See below for a list of our current career opportunities. Links to more details can be
            found by clicking on the job title.
          </p>

          <div style={{
            background: 'var(--color-gray-50)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            textAlign: 'center',
            border: '1px solid var(--color-gray-200)',
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-gray-300)' }}>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    Position Available
                  </th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    Job Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} style={{ padding: '2rem', color: 'var(--color-gray-500)', fontStyle: 'italic' }}>
                    We have no open positions at this time. Please check back again later.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: 'var(--color-gray-500)', marginBottom: '1rem' }}>
              Interested in joining our team? Send us your resume.
            </p>
            <Link to="/contact-us" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
