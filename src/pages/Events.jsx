import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const EVENTS = [
  {
    title: 'Fraud Prevention - March 12th, 2026',
    date: 'Thursday, March 12, 2026',
    location: 'Red Deer County',
    img: 'https://static.wixstatic.com/media/b7b3e5_4ea03dbda53f4faca50a72f3135382fd~mv2.jpg',
  },
  {
    title: 'Fraud Prevention - March 25th, 2026',
    date: 'Wednesday, March 25, 2026',
    location: '3017 50 Ave',
    img: 'https://static.wixstatic.com/media/b7b3e5_5aeb2df5f49e4cfba0bdd38fdebec11f~mv2.jpg',
  },
]

export default function Events() {
  return (
    <>
      <SEO
        title="Events"
        description="Upcoming events from the Central Alberta FASD Network. Join us for workshops, awareness campaigns, and community gatherings."
        path="/events"
      />
      <PageHero
        title="Events"
        subtitle="Join us at upcoming community events and workshops"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          {EVENTS.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {EVENTS.map((event) => (
                <div key={event.title} className="card" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', overflow: 'hidden' }}>
                  <img
                    src={event.img}
                    alt={event.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 200 }}
                    loading="lazy"
                  />
                  <div className="card-body" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.15rem' }}>
                      {event.title}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>
                        <Calendar size={16} /> {event.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>
                        <MapPin size={16} /> {event.location}
                      </span>
                    </div>
                    <button className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start' }}>
                      RSVP
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-gray-500)' }}>
              <p>No upcoming events at this time. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
