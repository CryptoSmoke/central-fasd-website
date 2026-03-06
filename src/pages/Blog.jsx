import { useState, useEffect } from 'react'
import { Clock, User } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const CATEGORIES = ['All Posts', 'Announcements', 'General Information', 'Restorative Practice', 'CanFASD', 'The Prevention Conversation', 'Annual General Meeting (AGM)']

const FALLBACK_POSTS = [
  { title: 'Understanding FASD: What Educators Need to Know', date: '2022-03-02', readTime: '3 min', category: 'General Information' },
  { title: 'Wellbriety All Addictions Recovery Gathering', date: '2022-03-01', readTime: '2 min', category: 'Announcements' },
  { title: 'The Hidden Disability - The Movie', date: '2022-02-25', readTime: '2 min', category: 'General Information' },
  { title: 'Healing the Hurt: Indigenous Women Lead Campaign', date: '2022-02-24', readTime: '3 min', category: 'The Prevention Conversation' },
  { title: 'Conditions and Barriers to School Inclusion for Children with FASD', date: '2022-02-21', readTime: '4 min', category: 'General Information' },
  { title: 'The FASD Forum 22 presented by NOFASD Australia', date: '2022-02-17', readTime: '2 min', category: 'Announcements' },
  { title: 'Missing in Action: Sex and Gender in Substance Use Research', date: '2022-02-16', readTime: '3 min', category: 'CanFASD' },
  { title: 'Talking About Substance Use During Pregnancy', date: '2022-02-11', readTime: '4 min', category: 'The Prevention Conversation' },
  { title: 'Using a "Stop & Think Plan" to Help with Processing', date: '2022-02-10', readTime: '2 min', category: 'General Information' },
  { title: 'New Webinar from CanFASD: Understanding the FASD Diagnosis', date: '2022-02-08', readTime: '1 min', category: 'CanFASD' },
  { title: "Let's Talk About Stigma, Mental Health, and FASD", date: '2022-01-20', readTime: '3 min', category: 'The Prevention Conversation' },
]

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function Blog() {
  const [filter, setFilter] = useState('All Posts')
  const [posts, setPosts] = useState(FALLBACK_POSTS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/blogs')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data)
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const filtered = filter === 'All Posts' ? posts : posts.filter(p => p.category === filter)

  return (
    <>
      <SEO
        title="Blog"
        description="FASD blog resources - articles, research updates, and educational content from the Central Alberta FASD Network."
        path="/blog"
      />
      <PageHero
        title="FASD Blog Resources"
        subtitle="Articles, research, and educational resources about Fetal Alcohol Spectrum Disorder"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn btn-sm ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                style={{ fontSize: '0.8rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-gray-400)' }}>Loading posts...</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {filtered.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-gray-400)' }}>No posts in this category.</div>
              ) : filtered.map((post, i) => (
                <article
                  key={post.id || i}
                  style={{
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-gray-200)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-gray-200)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={12} /> {formatDate(post.date)}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <User size={12} /> {post.author || 'FASD Blog Writer'}
                    </span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                    {post.title}
                  </h3>
                  {post.content && (
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                      {post.content.length > 200 ? post.content.substring(0, 200) + '...' : post.content}
                    </p>
                  )}
                  <span style={{ fontSize: '0.75rem', background: 'var(--color-gray-100)', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)', color: 'var(--color-gray-500)' }}>
                    {post.category}
                  </span>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
