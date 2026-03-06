import { Phone } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

export default function SupportGroups() {
  return (
    <>
      <SEO
        title="Support Groups"
        description="Caregiver support groups and life skills groups for individuals and families impacted by FASD in Central Alberta."
        path="/cargiver-support-groups"
      />
      <PageHero
        title="Support Groups"
        subtitle="Building community through shared experiences and skill development"
        backgroundImage="https://static.wixstatic.com/media/11062b_c98984b94bd14e1cb151d18284efa4d8~mv2.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
            <div className="card">
              <div className="card-body" style={{ padding: '2rem' }}>
                <img
                  src="https://static.wixstatic.com/media/42932a_918d5be6595d47df959e2320c17c85eb~mv2.png"
                  alt="Caregiver Support"
                  style={{ width: 64, height: 64, marginBottom: '1rem' }}
                  loading="lazy"
                />
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Care for Caregivers Support Group
                </h3>
                <p style={{ fontSize: '0.925rem', lineHeight: 1.8, color: 'var(--color-gray-600)' }}>
                  Caring for someone with FASD can be both rewarding and challenging. Our Caregiver
                  Support Group offers a welcoming space to share experiences, celebrate successes,
                  and navigate obstacles together.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body" style={{ padding: '2rem' }}>
                <img
                  src="https://static.wixstatic.com/media/42932a_607dd59896354f619fe09d45e7b658d4~mv2.png"
                  alt="Life Skills Group"
                  style={{ width: 64, height: 64, marginBottom: '1rem' }}
                  loading="lazy"
                />
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Life Skills Group (Ages 16+)
                </h3>
                <p style={{ fontSize: '0.925rem', lineHeight: 1.8, color: 'var(--color-gray-600)' }}>
                  Youth and adults aged 16 and up can join a weekly group designed to build essential
                  life skills through engaging activities and educational modules.
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="tel:1-403-342-7499" className="btn btn-primary btn-lg">
              <Phone size={18} /> Call Us Today: 1-403-342-7499
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
