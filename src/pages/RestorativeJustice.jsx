import { Link } from 'react-router-dom'
import { FileText } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const PROGRAMS = [
  {
    title: 'Restorative Diversion',
    desc: 'Restorative justice circles and conferences that focus on healing, understanding, and reparation for all parties involved.',
    img: 'https://static.wixstatic.com/media/11062b_31990c4a19c9437ca4eed04d9398b18b~mv2.jpg',
  },
  {
    title: 'Court Diversion',
    desc: 'Support navigating the legal system, connecting to legal and mental health professionals, and advocacy for supportive informed sentencing. Referrals through legal representation, approved by Crown.',
    img: 'https://static.wixstatic.com/media/11062b_9aeb995178c94d56acff66276b3a8392~mv2.jpg',
  },
  {
    title: 'Transitional Mentorship & In-Reach',
    desc: 'Continuum of care between incarceration and reintegration into the community. Active in Bowden, Drumheller and the Red Deer Remand Center.',
    img: 'https://static.wixstatic.com/media/11062b_0855c3390ec64726a661227ed664a145~mv2.jpeg',
  },
]

export default function RestorativeJustice() {
  return (
    <>
      <SEO
        title="Restorative Justice Program"
        description="Support for individuals impacted by FASD who have frequent interactions with police and the criminal justice system."
        path="/restorative-justice-program"
      />
      <PageHero
        title="Restorative Justice Program"
        subtitle="Support and advocacy within the criminal justice system"
        backgroundImage="https://static.wixstatic.com/media/11062b_cb534c4d62184ec3a89e16217fe8b190~mv2.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: '3rem', textAlign: 'center', maxWidth: 800, margin: '0 auto 3rem' }}>
            The Restorative Justice Program helps those impacted or potentially impacted by Fetal Alcohol
            Spectrum Disorder (FASD) who have frequent interactions with police and the criminal justice
            system. This can include risk of charges, current charges in the court process or individuals
            that have been charged and are now serving their sentence.
          </p>

          <div className="grid grid-3">
            {PROGRAMS.map((p) => (
              <div key={p.title} className="card">
                <img src={p.img} alt={p.title} className="card-img" loading="lazy" />
                <div className="card-body">
                  <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-gray-600)' }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href="https://www.centralfasd.org/_files/ugd/42932a_932fa70f599b4e2ab1a7bb74e9d2f49a.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FileText size={18} /> 2024 In-Reach Project Evaluation (PDF)
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
