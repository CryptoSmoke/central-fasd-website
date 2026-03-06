import { Mail } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import './OurTeam.css'

const STAFF = [
  { name: 'Julie Nanson-Ashton', role: 'Executive Director', email: 'jnanson@fasdca.ca' },
  { name: 'Kaitlyn Lemens', role: 'Restorative Justice Program Team Lead', email: 'klemens@fasdca.ca' },
  { name: 'Tanya Dehmel-Neving', role: 'Community Outreach and Support Team Lead', email: 'tdehmel-neving@fasdca.ca' },
  { name: 'Olivia Warren', role: 'Administrative Assistant / Intake Coordinator', email: 'owarren@fasdca.ca' },
  { name: 'Geoffrey Adam', role: 'Community Outreach and Support Worker & Life Skills Facilitator', email: 'gadam@fasdca.ca' },
  { name: 'Braylie Eden', role: 'Court Diversion Coordinator', email: 'beden@fasdca.ca' },
  { name: 'Katie Harlow', role: 'Office Manager / Events Coordinator', email: 'kharlow@fasdca.ca' },
  { name: 'Carolyn Burgess', role: 'In-Reach Transitional Mentor - Bowden and Drumheller', email: 'cburgess@fasdca.ca' },
  { name: 'Sheena Penney', role: 'Community Outreach and Support Worker', email: 'spenney@fasdca.ca' },
  { name: 'Kenyn McDougall', role: 'Clinical Coordinator', email: 'kmcdougall@fasdca.ca' },
  { name: 'Charmaine Gairdner', role: 'In Reach Transitional Mentor Coordinator', email: 'cgairdner@fasdca.ca' },
  { name: 'Nick Gilbert', role: 'Community Outreach and Support Worker - Red Deer and Mountain View County', email: 'ngilbert@fasdca.ca' },
  { name: 'Tanya Richards', role: 'Wrap 2.0 Instructional Coach / Clinic Assistant', email: 'trichards@fasdca.ca' },
  { name: 'Chris Chabot', role: 'Wellbriety Coordinator', email: 'cchabot@fasdca.ca' },
  { name: 'Amanda Richels', role: 'Wrap 2.0 Instructional Coach / Prevention Conversation', email: 'arichels@fasdca.ca' },
  { name: 'Michelle Jardine', role: 'Community Outreach and Support Worker - Rocky Mountain House area', email: 'mjardine@fasdca.ca' },
  { name: 'Alesia Hadija', role: 'FASD Restorative Justice Support Worker - Rural Expansion', email: 'ahadija@fasdca.ca' },
  { name: 'Taylor Cholach', role: 'Team Member', email: 'tcholach@fasdca.ca' },
  { name: 'Tyra Anderson', role: 'PCAP Mentor / Community Outreach - Rocky Mountain House', email: 'tanderson@fasdca.ca' },
  { name: 'Sherry Lapka', role: 'Community Outreach and Support Worker & PCAP Mentor - Mountain View County', email: 'slapka@fasdca.ca' },
  { name: 'Regan Raabis', role: 'In-Reach Transitional Mentor - Red Deer Remand', email: 'rraabis@fasdca.ca' },
  { name: 'Tiana Bellamy', role: 'Community Outreach & Support Worker / RJ Outreach Worker - Drumheller', email: 'tbellamy@fasdca.ca' },
  { name: 'Janea Dressler', role: 'Restorative Justice Outreach Worker', email: 'jdressler@fasdca.ca' },
  { name: 'George Owusu', role: 'Team Member', email: 'gowusu@fasdca.ca' },
  { name: 'Rebecca Williams', role: 'Prevention Educator Facilitator', email: 'rwilliams@fasdca.ca' },
  { name: 'Rochelle Minde', role: 'Community Outreach & Restorative Justice Support Worker', email: 'rminde@fasdca.ca' },
]

const CLINICAL = [
  { name: 'Sharleen Sulzle', role: 'Occupational Therapist' },
  { name: 'Karen Nolan', role: 'Speech-Language Therapist' },
  { name: 'Karen Crawford', role: 'Froese Psychological Services, Psychologist' },
  { name: 'Dr. Jo Mundell', role: 'Medical Doctor' },
  { name: 'Dr. Meyer Schoeman', role: 'Clinic Coordinator' },
]

export default function OurTeam() {
  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the dedicated team at Central Alberta FASD Network providing assessment, outreach, education, and support services."
        path="/our-team"
      />
      <PageHero
        title="Our Team"
        subtitle="Dedicated professionals committed to supporting individuals and families"
        backgroundImage="https://static.wixstatic.com/media/5112b47b49d9435aab073909d2e4ba28.jpg"
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Staff Directory</h2>
          <p className="section-subtitle">Our team of passionate professionals serving Central Alberta</p>

          <div className="team-grid">
            {STAFF.map((person) => (
              <div key={person.email} className="team-card">
                <div className="team-avatar">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{person.name}</h3>
                <p className="team-role">{person.role}</p>
                <a href={`mailto:${person.email}`} className="team-email">
                  <Mail size={14} /> {person.email}
                </a>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem' }}>
            <h2 className="section-title">Clinical Team</h2>
            <p className="section-subtitle">Our multidisciplinary clinical assessment team</p>
            <div className="team-grid clinical-grid">
              {CLINICAL.map((person) => (
                <div key={person.name} className="team-card team-card-clinical">
                  <div className="team-avatar clinical-avatar">
                    {person.name.split(' ').filter(n => !n.includes('.')).map(n => n[0]).join('')}
                  </div>
                  <h3>{person.name}</h3>
                  <p className="team-role">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
