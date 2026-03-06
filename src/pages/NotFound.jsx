import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '5rem', marginBottom: '0.5rem' }}>404</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-500)', marginBottom: '2rem' }}>
            The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">Go Home</Link>
        </div>
      </section>
    </>
  )
}
