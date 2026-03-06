import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

export default function WhatIsFasd() {
  return (
    <>
      <SEO
        title="What is FASD?"
        description="Learn about Fetal Alcohol Spectrum Disorder - the leading developmental disability in Canada affecting 4% of Canadians."
        path="/what-is-fasd"
      />
      <PageHero
        title="What is FASD?"
        subtitle="Understanding Fetal Alcohol Spectrum Disorder"
        backgroundImage="https://static.wixstatic.com/media/nsplsh_1519204c50624bd6a0f0f3710d06933a~mv2.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-primary)', lineHeight: 1.6 }}>
              FASD is the leading developmental disability in Canada. It affects 4% of Canadians.
              That's more than Autism, Cerebral Palsy, Down Syndrome and Tourette's Syndrome combined.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>About FASD</h2>
              <p style={{ lineHeight: 1.8, color: 'var(--color-gray-600)' }}>
                Fetal Alcohol Spectrum Disorder (FASD) is a diagnostic term used to describe impacts on
                the brain and body of individuals prenatally exposed to alcohol. FASD is a lifelong disability.
                Individuals with FASD will experience some degree of challenges in their daily living, and
                need support with motor skills, physical health, learning, memory, attention, communication,
                emotional regulation, and social skills to reach their full potential. Each individual with
                FASD is unique and has areas of both strengths and challenges.
              </p>
            </div>

            <div style={{ background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)', padding: '2rem', borderLeft: '4px solid var(--color-accent)' }}>
              <p style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                FASD is a whole-body disorder — it affects both the brain and the body.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img
                src="https://static.wixstatic.com/media/42932a_aa2431bc837742cab078d0382782e0c6~mv2.png"
                alt="FASD prevalence comparison infographic showing FASD is 2.5x more common than Autism, 19x more common than Cerebral Palsy, 28x more common than Down Syndrome, and 40x more common than Tourettes Syndrome"
                style={{ maxWidth: '100%', borderRadius: 'var(--radius-lg)' }}
                loading="lazy"
              />
            </div>

            <div>
              <h2 style={{ marginBottom: '1rem' }}>Prevalence</h2>
              <p style={{ lineHeight: 1.8, color: 'var(--color-gray-600)' }}>
                Fetal Alcohol Spectrum Disorder is 2.5 times more common than Autism, 19 times more
                common than Cerebral Palsy, 28 times more common than Down Syndrome, and 40 times
                more common than Tourette's Syndrome.
              </p>
            </div>

            <div style={{ background: 'var(--color-primary)', color: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: '3rem', textAlign: 'center' }}>
              <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>Prevention</h2>
              <p style={{ fontSize: '1.15rem', marginBottom: '0.75rem', opacity: 0.9 }}>
                No amount of alcohol use is known to be safe for a developing baby before birth.
              </p>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                It's never too late to say "No Thanks"
              </p>
              <p style={{ marginTop: '0.75rem', opacity: 0.85 }}>
                Each day with no alcohol can make a difference to the baby's development.
              </p>
            </div>

            <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
              <Link to="/education-prevention" className="btn btn-primary btn-lg">
                Learn About Prevention
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
