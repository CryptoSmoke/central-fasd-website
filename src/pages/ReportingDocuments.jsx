import { FileText, Download } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const SECTIONS = [
  {
    title: 'Compilation (Financial) Engagement Reports',
    docs: [
      { name: '2024-2025', url: 'https://www.centralfasd.org/_files/ugd/42932a_0f53e0522715471c8e4986a07e91e662.pdf' },
      { name: '2023-2024', url: 'https://www.centralfasd.org/_files/ugd/42932a_119a7610fbae4f24aeb20472cf834887.pdf' },
      { name: '2022-2023', url: 'https://www.centralfasd.org/_files/ugd/42932a_4ba28f384b1140efa5f03342421f2da5.pdf' },
      { name: '2021-2022', url: 'https://www.centralfasd.org/_files/ugd/42932a_4f151221e8754fb7809086ffee55974b.pdf' },
      { name: '2020-2021', url: 'https://www.centralfasd.org/_files/ugd/42932a_6fe1683ac64645f7b3abd59b80af1ee9.pdf' },
      { name: '2019-2020', url: 'https://www.centralfasd.org/_files/ugd/42932a_84be40c131c1443386119fbf08bf2194.pdf' },
    ],
  },
  {
    title: 'Annual General Meeting Minutes',
    docs: [
      { name: '2024', url: 'https://www.centralfasd.org/_files/ugd/42932a_93303ee817c246f3b7446e0c07267b06.pdf' },
      { name: '2023', url: 'https://www.centralfasd.org/_files/ugd/42932a_e7fffd75ced849d993efb1c83c607d40.pdf' },
    ],
  },
  {
    title: 'Strategic Plan',
    docs: [
      { name: '2024-2027 Strategic Plan', url: '#' },
      { name: '2021-2024 Strategic Plan', url: '#' },
    ],
  },
]

export default function ReportingDocuments() {
  return (
    <>
      <SEO
        title="Network Reporting Documents"
        description="Access the Central Alberta FASD Network's financial reports, AGM minutes, strategic plans, and other governance documents."
        path="/reporting-documents"
      />
      <PageHero
        title="Network Reporting Documents"
        subtitle="Financial reports, meeting minutes, and strategic plans"
        backgroundImage="https://static.wixstatic.com/media/nsplsh_0e42269baaba4ed6a4b3418692a28917~mv2.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          {SECTIONS.map((section) => (
            <div key={section.title} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--color-primary)' }}>
                {section.title}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {section.docs.map((doc) => (
                  <a
                    key={doc.name}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.875rem 1rem',
                      background: 'var(--color-gray-50)',
                      borderRadius: 'var(--radius-md)',
                      textDecoration: 'none',
                      color: 'var(--color-gray-700)',
                      transition: 'background 0.2s ease',
                      fontSize: '0.9rem',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-gray-100)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-gray-50)'}
                  >
                    <FileText size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span style={{ flex: 1 }}>{doc.name}</span>
                    <Download size={16} style={{ color: 'var(--color-gray-400)' }} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
