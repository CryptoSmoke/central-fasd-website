import { useState, useEffect } from 'react'
import { Trash2, Edit3, Plus, LogIn, LogOut, Save, X } from 'lucide-react'
import SEO from '../components/SEO'
import './Admin.css'

const BLOG_CATEGORIES = ['Announcements', 'General Information', 'Restorative Practice', 'CanFASD', 'The Prevention Conversation', 'Annual General Meeting (AGM)']

const EMPTY_BLOG = { title: '', content: '', category: 'General Information', author: 'FASD Blog Writer', readTime: '3 min', imageUrl: '' }
const EMPTY_EVENT = { title: '', date: '', location: '', description: '', imageUrl: '' }

export default function Admin() {
  const [token, setToken] = useState(() => sessionStorage.getItem('admin-token') || '')
  const [loggedIn, setLoggedIn] = useState(false)
  const [tokenInput, setTokenInput] = useState('')
  const [tab, setTab] = useState('blogs')
  const [blogs, setBlogs] = useState([])
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(null) // { type: 'blog'|'event', data: {...}, isNew: bool }
  const [error, setError] = useState('')

  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }

  useEffect(() => {
    if (token) {
      setLoggedIn(true)
      sessionStorage.setItem('admin-token', token)
      fetchAll()
    }
  }, [token])

  async function fetchAll() {
    setLoading(true)
    try {
      const [blogRes, eventRes] = await Promise.all([fetch('/api/blogs'), fetch('/api/events')])
      const blogData = await blogRes.json()
      const eventData = await eventRes.json()
      if (Array.isArray(blogData)) setBlogs(blogData)
      if (Array.isArray(eventData)) setEvents(eventData)
    } catch (e) {
      setError('Failed to fetch data')
    }
    setLoading(false)
  }

  function handleLogin(e) {
    e.preventDefault()
    if (tokenInput.trim()) setToken(tokenInput.trim())
  }

  function logout() {
    setToken('')
    setLoggedIn(false)
    sessionStorage.removeItem('admin-token')
  }

  async function saveBlog(data) {
    setError('')
    const method = data.isNew ? 'POST' : 'PUT'
    try {
      const res = await fetch('/api/blogs', { method, headers, body: JSON.stringify(data) })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Failed to save')
      }
      setEditing(null)
      fetchAll()
    } catch (e) {
      setError(e.message)
    }
  }

  async function deleteBlog(post) {
    if (!confirm(`Delete "${post.title}"?`)) return
    try {
      const res = await fetch(`/api/blogs?url=${encodeURIComponent(post.blobUrl)}`, { method: 'DELETE', headers })
      if (!res.ok) throw new Error('Failed to delete')
      fetchAll()
    } catch (e) {
      setError(e.message)
    }
  }

  async function saveEvent(data) {
    setError('')
    const method = data.isNew ? 'POST' : 'PUT'
    try {
      const res = await fetch('/api/events', { method, headers, body: JSON.stringify(data) })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Failed to save')
      }
      setEditing(null)
      fetchAll()
    } catch (e) {
      setError(e.message)
    }
  }

  async function deleteEvent(event) {
    if (!confirm(`Delete "${event.title}"?`)) return
    try {
      const res = await fetch(`/api/events?url=${encodeURIComponent(event.blobUrl)}`, { method: 'DELETE', headers })
      if (!res.ok) throw new Error('Failed to delete')
      fetchAll()
    } catch (e) {
      setError(e.message)
    }
  }

  if (!loggedIn) {
    return (
      <>
        <SEO title="Admin" description="Admin panel" path="/admin" />
        <div className="admin-login">
          <form onSubmit={handleLogin} className="admin-login-form">
            <h1>Admin Login</h1>
            <p>Enter your admin secret to continue.</p>
            <input
              type="password"
              placeholder="Admin Secret"
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              autoFocus
            />
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <LogIn size={18} /> Sign In
            </button>
          </form>
        </div>
      </>
    )
  }

  return (
    <>
      <SEO title="Admin" description="Admin panel" path="/admin" />
      <div className="admin">
        <div className="admin-header">
          <h1>Content Manager</h1>
          <button onClick={logout} className="btn btn-sm btn-outline" style={{ color: 'var(--color-white)', borderColor: 'rgba(255,255,255,0.3)' }}>
            <LogOut size={16} /> Logout
          </button>
        </div>

        {error && (
          <div className="admin-error">
            {error}
            <button onClick={() => setError('')}><X size={16} /></button>
          </div>
        )}

        <div className="admin-tabs">
          <button className={`admin-tab ${tab === 'blogs' ? 'active' : ''}`} onClick={() => { setTab('blogs'); setEditing(null) }}>
            Blog Posts ({blogs.length})
          </button>
          <button className={`admin-tab ${tab === 'events' ? 'active' : ''}`} onClick={() => { setTab('events'); setEditing(null) }}>
            Events ({events.length})
          </button>
        </div>

        <div className="admin-content">
          {/* BLOG TAB */}
          {tab === 'blogs' && !editing && (
            <>
              <div className="admin-toolbar">
                <button className="btn btn-primary btn-sm" onClick={() => setEditing({ type: 'blog', data: { ...EMPTY_BLOG }, isNew: true })}>
                  <Plus size={16} /> New Blog Post
                </button>
              </div>
              {loading ? <p className="admin-loading">Loading...</p> : (
                <div className="admin-list">
                  {blogs.map((post) => (
                    <div key={post.id || post.title} className="admin-item">
                      <div className="admin-item-info">
                        <strong>{post.title}</strong>
                        <span>{post.category} &middot; {new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="admin-item-actions">
                        <button onClick={() => setEditing({ type: 'blog', data: { ...post }, isNew: false })} title="Edit">
                          <Edit3 size={16} />
                        </button>
                        <button onClick={() => deleteBlog(post)} title="Delete" className="delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                  {blogs.length === 0 && <p className="admin-empty">No blog posts yet. Create your first one!</p>}
                </div>
              )}
            </>
          )}

          {/* BLOG EDITOR */}
          {tab === 'blogs' && editing?.type === 'blog' && (
            <BlogEditor
              data={editing.data}
              isNew={editing.isNew}
              onSave={(d) => saveBlog({ ...d, isNew: editing.isNew })}
              onCancel={() => setEditing(null)}
            />
          )}

          {/* EVENTS TAB */}
          {tab === 'events' && !editing && (
            <>
              <div className="admin-toolbar">
                <button className="btn btn-primary btn-sm" onClick={() => setEditing({ type: 'event', data: { ...EMPTY_EVENT }, isNew: true })}>
                  <Plus size={16} /> New Event
                </button>
              </div>
              {loading ? <p className="admin-loading">Loading...</p> : (
                <div className="admin-list">
                  {events.map((event) => (
                    <div key={event.id || event.title} className="admin-item">
                      <div className="admin-item-info">
                        <strong>{event.title}</strong>
                        <span>{event.location} &middot; {new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="admin-item-actions">
                        <button onClick={() => setEditing({ type: 'event', data: { ...event }, isNew: false })} title="Edit">
                          <Edit3 size={16} />
                        </button>
                        <button onClick={() => deleteEvent(event)} title="Delete" className="delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                  {events.length === 0 && <p className="admin-empty">No events yet. Create your first one!</p>}
                </div>
              )}
            </>
          )}

          {/* EVENT EDITOR */}
          {tab === 'events' && editing?.type === 'event' && (
            <EventEditor
              data={editing.data}
              isNew={editing.isNew}
              onSave={(d) => saveEvent({ ...d, isNew: editing.isNew })}
              onCancel={() => setEditing(null)}
            />
          )}
        </div>
      </div>
    </>
  )
}

function BlogEditor({ data, isNew, onSave, onCancel }) {
  const [form, setForm] = useState(data)
  const set = (k, v) => setForm({ ...form, [k]: v })

  return (
    <div className="admin-editor">
      <h2>{isNew ? 'New Blog Post' : 'Edit Blog Post'}</h2>
      <div className="admin-form">
        <label>
          Title *
          <input value={form.title} onChange={(e) => set('title', e.target.value)} placeholder="Post title" />
        </label>
        <label>
          Category
          <select value={form.category} onChange={(e) => set('category', e.target.value)}>
            {BLOG_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <label>
            Author
            <input value={form.author} onChange={(e) => set('author', e.target.value)} placeholder="FASD Blog Writer" />
          </label>
          <label>
            Read Time
            <input value={form.readTime} onChange={(e) => set('readTime', e.target.value)} placeholder="3 min" />
          </label>
        </div>
        <label>
          Image URL (optional)
          <input value={form.imageUrl} onChange={(e) => set('imageUrl', e.target.value)} placeholder="https://..." />
        </label>
        <label>
          Content *
          <textarea rows={12} value={form.content} onChange={(e) => set('content', e.target.value)} placeholder="Write your blog post content here..." />
        </label>
        <div className="admin-editor-actions">
          <button className="btn btn-primary" onClick={() => onSave(form)} disabled={!form.title || !form.content}>
            <Save size={16} /> {isNew ? 'Publish' : 'Update'}
          </button>
          <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

function EventEditor({ data, isNew, onSave, onCancel }) {
  const [form, setForm] = useState(data)
  const set = (k, v) => setForm({ ...form, [k]: v })

  return (
    <div className="admin-editor">
      <h2>{isNew ? 'New Event' : 'Edit Event'}</h2>
      <div className="admin-form">
        <label>
          Title *
          <input value={form.title} onChange={(e) => set('title', e.target.value)} placeholder="Event title" />
        </label>
        <label>
          Date *
          <input type="date" value={form.date ? form.date.substring(0, 10) : ''} onChange={(e) => set('date', e.target.value)} />
        </label>
        <label>
          Location
          <input value={form.location} onChange={(e) => set('location', e.target.value)} placeholder="Red Deer, AB" />
        </label>
        <label>
          Image URL (optional)
          <input value={form.imageUrl} onChange={(e) => set('imageUrl', e.target.value)} placeholder="https://..." />
        </label>
        <label>
          Description
          <textarea rows={6} value={form.description} onChange={(e) => set('description', e.target.value)} placeholder="Event description..." />
        </label>
        <div className="admin-editor-actions">
          <button className="btn btn-primary" onClick={() => onSave(form)} disabled={!form.title || !form.date}>
            <Save size={16} /> {isNew ? 'Create Event' : 'Update Event'}
          </button>
          <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
