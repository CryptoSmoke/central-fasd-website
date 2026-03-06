import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const PREVENTION_LEVELS = [
  { level: '1', title: 'Public Awareness', desc: 'Broad public awareness campaigns and strategies to educate the general population about the risks of alcohol use during pregnancy.' },
  { level: '2', title: 'Safe Discussions', desc: 'Reproductive health discussions for individuals of childbearing years, creating safe spaces to talk about alcohol use and pregnancy planning.' },
  { level: '3', title: 'Supportive Services', desc: 'Specialized, culturally safe services for individuals at higher risk, including those with substance use challenges or limited access to care.' },
  { level: '4', title: 'Healthy Changes', desc: 'Supporting new parents to maintain healthy changes, providing ongoing resources and community connections for lasting positive outcomes.' },
]

const FACTORS = [
  'Unplanned or unrecognized pregnancy',
  'Lack of access to health education or prenatal care',
  'Substance use challenges or dependency',
  'Trauma, abuse, or domestic violence',
  'Mental health concerns',
  'Social isolation or lack of support networks',
  'Cultural or systemic barriers to care',
]

export default function EducationPrevention() {
  return (
    <>
      <SEO
        title="Education and Prevention"
        description="Learn about FASD prevention education. Prevention is complex - we offer awareness, safe discussions, supportive services, and help with healthy changes."
        path="/education-prevention"
      />
      <PageHero
        title="Education & Prevention"
        subtitle="Prevention is complex — and it starts with understanding, compassion, and support."
        backgroundImage="https://static.wixstatic.com/media/11062b_1534f4c311664a399ea141f77e51d503~mv2.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Understanding FASD Prevention</h2>
          <p style={{ lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: '2rem' }}>
            Fetal Alcohol Spectrum Disorder (FASD) is preventable — but prevention is complex. It is true
            that FASD only occurs when a fetus is exposed to alcohol during pregnancy. However, simply
            stating that "FASD is 100% preventable" oversimplifies a much more nuanced issue and can
            unintentionally contribute to stigma, blame, and shame — especially toward women who are
            most in need of support.
          </p>

          <div style={{ background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>More Than Just Awareness</h3>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: '1rem' }}>
              Many factors can contribute to alcohol use during pregnancy, including:
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {FACTORS.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-gray-700)', fontSize: '0.95rem' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Four Levels of FASD Prevention</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            {PREVENTION_LEVELS.map((p) => (
              <div key={p.level} style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-gray-200)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                borderTop: '4px solid var(--color-primary)',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--color-primary)', color: 'var(--color-white)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, marginBottom: '0.75rem'
                }}>
                  {p.level}
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-gray-600)' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
