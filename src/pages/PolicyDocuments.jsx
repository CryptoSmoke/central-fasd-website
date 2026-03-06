import { FileText, Download } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const POLICIES = [
  {
    title: 'Confidentiality Policy',
    url: 'https://www.centralfasd.org/_files/ugd/42932a_34bc884a6e3b4a6cbb0fdb492c01893a.pdf',
  },
  {
    title: 'Complaint Policy',
    url: 'https://www.centralfasd.org/_files/ugd/42932a_9298e7ba9bac46b49efc0edc6d349804.pdf',
  },
  {
    title: 'Privacy Policy',
    url: 'https://www.centralfasd.org/_files/ugd/42932a_b58620f2761b44a683a48feb46e91a38.pdf',
  },
]

export default function PolicyDocuments() {
  return (
    <>
      <SEO
        title="Policy Documents"
        description="Access the Central Alberta FASD Network's policies including confidentiality, complaint, and privacy policies."
        path="/policy-documents"
      />
      <PageHero
        title="Policy Documents"
        subtitle="Transparency and accountability in everything we do"
        backgroundImage="https://static.wixstatic.com/media/nsplsh_0b87b32bed584f7d8349a5080028b96e~mv2.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {POLICIES.map((policy) => (
              <a
                key={policy.title}
                href={policy.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-gray-200)',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  color: 'var(--color-gray-800)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-gray-200)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <FileText size={24} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span style={{ flex: 1, fontWeight: 600 }}>{policy.title}</span>
                <Download size={18} style={{ color: 'var(--color-gray-400)' }} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
