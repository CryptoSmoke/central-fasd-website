import { Clock, User, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const CATEGORIES = ['All Posts', 'Announcements', 'General Information', 'Restorative Practice', 'CanFASD', 'The Prevention Conversation', 'Annual General Meeting (AGM)']

const POSTS = [
  { title: 'Understanding FASD: What Educators Need to Know', date: 'Mar 2, 2022', readTime: '3 min', category: 'General Information' },
  { title: 'Wellbriety All Addictions Recovery Gathering', date: 'Mar 1, 2022', readTime: '2 min', category: 'Announcements' },
  { title: 'The Hidden Disability - The Movie', date: 'Feb 25, 2022', readTime: '2 min', category: 'General Information' },
  { title: 'Healing the Hurt: Indigenous Women Lead Campaign to Educate Health Care Providers on Culturally Safe Care', date: 'Feb 24, 2022', readTime: '3 min', category: 'The Prevention Conversation' },
  { title: 'Conditions and Barriers to School Inclusion for Children with FASD', date: 'Feb 21, 2022', readTime: '4 min', category: 'General Information' },
  { title: 'The FASD Forum 22 presented by NOFASD Australia', date: 'Feb 17, 2022', readTime: '2 min', category: 'Announcements' },
  { title: 'Missing in Action: Sex and Gender in Substance Use Research', date: 'Feb 16, 2022', readTime: '3 min', category: 'CanFASD' },
  { title: 'Talking About Substance Use During Pregnancy: Collaborative Approaches for Health Care Providers', date: 'Feb 11, 2022', readTime: '4 min', category: 'The Prevention Conversation' },
  { title: 'Using a "Stop & Think Plan" to Help with Processing', date: 'Feb 10, 2022', readTime: '2 min', category: 'General Information' },
  { title: 'Preconceptional Paternal Alcohol Consumption and Risk of Child Behavioral Problems', date: 'Feb 9, 2022', readTime: '5 min', category: 'CanFASD' },
  { title: 'New Webinar from CanFASD: Understanding the FASD Diagnosis', date: 'Feb 8, 2022', readTime: '1 min', category: 'CanFASD' },
  { title: 'Activities Guide: Enhancing and Practicing Executive Function Skills with Children', date: 'Feb 2, 2022', readTime: '2 min', category: 'General Information' },
  { title: "FASD & Me: Strengthening My Community Worksheets", date: 'Jan 28, 2022', readTime: '1 min', category: 'General Information' },
  { title: "FASD in the Classroom by the FASD Network of Saskatchewan", date: 'Jan 25, 2022', readTime: '2 min', category: 'General Information' },
  { title: "Let's Talk About Stigma, Mental Health, and FASD", date: 'Jan 20, 2022', readTime: '3 min', category: 'The Prevention Conversation' },
]

import { useState } from 'react'

export default function Blog() {
  const [filter, setFilter] = useState('All Posts')
  const filtered = filter === 'All Posts' ? POSTS : POSTS.filter(p => p.category === filter)

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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filtered.map((post, i) => (
              <article
                key={i}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-gray-200)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-gray-200)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={12} /> {post.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <User size={12} /> FASD Blog Writer
                  </span>
                  <span>{post.readTime} read</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--color-primary)' }}>
                  {post.title}
                </h3>
                <span style={{ fontSize: '0.75rem', background: 'var(--color-gray-100)', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)', color: 'var(--color-gray-500)' }}>
                  {post.category}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
