import { useState, useEffect } from 'react'
import { Calendar, MapPin } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const FALLBACK_EVENTS = [
  {
    title: 'Fraud Prevention - March 12th, 2026',
    date: '2026-03-12',
    location: 'Red Deer County',
    imageUrl: 'https://static.wixstatic.com/media/b7b3e5_4ea03dbda53f4faca50a72f3135382fd~mv2.jpg',
  },
  {
    title: 'Fraud Prevention - March 25th, 2026',
    date: '2026-03-25',
    location: '3017 50 Ave',
    imageUrl: 'https://static.wixstatic.com/media/b7b3e5_5aeb2df5f49e4cfba0bdd38fdebec11f~mv2.jpg',
  },
]

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Events() {
  const [events, setEvents] = useState(FALLBACK_EVENTS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/events')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setEvents(data)
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

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
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-gray-400)' }}>Loading events...</div>
          ) : events.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {events.map((event) => (
                <div key={event.id || event.title} className="card" style={{ display: 'grid', gridTemplateColumns: event.imageUrl ? '280px 1fr' : '1fr', overflow: 'hidden' }}>
                  {event.imageUrl && (
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 200 }}
                      loading="lazy"
                    />
                  )}
                  <div className="card-body" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.15rem' }}>
                      {event.title}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>
                        <Calendar size={16} /> {formatDate(event.date)}
                      </span>
                      {event.location && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>
                          <MapPin size={16} /> {event.location}
                        </span>
                      )}
                    </div>
                    {event.description && (
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-500)', lineHeight: 1.6, marginBottom: '1rem' }}>
                        {event.description}
                      </p>
                    )}
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
