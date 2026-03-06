import { Phone, Mail } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

export default function AssessmentDiagnosis() {
  return (
    <>
      <SEO
        title="Assessment & Diagnosis"
        description="FASD assessment and diagnosis for individuals age 7 and older. Our multidisciplinary team includes a Medical Doctor, Psychologist, Speech-Language Pathologist, and Occupational Therapist."
        path="/assement-diagnosis"
      />
      <PageHero
        title="Assessment & Diagnosis"
        subtitle="Comprehensive FASD assessment by a multidisciplinary clinical team"
        backgroundImage="https://static.wixstatic.com/media/11062b_906e5f667dde4cfeb914314a8a97dac0~mv2.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem', justifyContent: 'center' }}>
            <a href="tel:1-403-342-7499" className="btn btn-primary btn-lg">
              <Phone size={18} /> Call Now
            </a>
            <a href="mailto:clinic@fasdca.ca" className="btn btn-outline btn-lg">
              <Mail size={18} /> Email Us
            </a>
          </div>

          <p style={{ lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: '1.5rem' }}>
            To complete an intake for services outside of Red Deer County within the Central Network area,
            please reach out to our main line. Please email clinic@fasdca.ca for additional information
            and to receive a Clinic Referral Package.
          </p>

          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <img
              src="https://static.wixstatic.com/media/42932a_f3bb0308283143e1bcd9553a80260ee0~mv2.png"
              alt="10 Brain Domains assessed in FASD diagnosis"
              style={{ maxWidth: '100%', borderRadius: 'var(--radius-lg)' }}
              loading="lazy"
            />
          </div>

          <div style={{ background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>The FASD Clinic</h2>
            <p style={{ lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: '1rem' }}>
              FASD is diagnosed by considering evidence from 10 brain domains that may have been impacted
              by exposure to alcohol during gestation. Assessment and diagnosis is for individuals age 7
              years and older who are experiencing difficulties that are suspected to be a result of
              prenatal exposure to alcohol.
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: '1rem' }}>
              Our multidisciplinary team consists of a Medical Doctor, Registered Psychologist,
              Registered Speech-Language Pathologist, and Registered Occupational Therapist who work
              together to provide a comprehensive assessment.
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--color-gray-600)' }}>
              Not all individuals exposed to alcohol during gestation have FASD. Funded assessments are
              available based on eligibility. A support person or Designated Representative is encouraged
              to participate in the assessment process.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
