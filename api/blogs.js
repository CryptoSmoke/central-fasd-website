import { put, list, del } from '@vercel/blob'

const BLOG_PREFIX = 'content/blogs/'

function unauthorized(res) {
  return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
}

function checkAuth(req) {
  const auth = req.headers.get('authorization')
  if (!auth) return false
  const token = auth.replace('Bearer ', '')
  return token === process.env.ADMIN_SECRET
}

export default async function handler(req) {
  // GET - public, no auth needed
  if (req.method === 'GET') {
    try {
      const { blobs } = await list({ prefix: BLOG_PREFIX })
      const posts = await Promise.all(
        blobs.map(async (blob) => {
          const res = await fetch(blob.url)
          const data = await res.json()
          return { ...data, blobUrl: blob.url, pathname: blob.pathname }
        })
      )
      posts.sort((a, b) => new Date(b.date) - new Date(a.date))
      return new Response(JSON.stringify(posts), { headers: { 'Content-Type': 'application/json' } })
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }
  }

  // All other methods require auth
  if (!checkAuth(req)) return unauthorized()

  // POST - create new blog
  if (req.method === 'POST') {
    try {
      const body = await req.json()
      const { title, content, category, author, readTime, imageUrl } = body
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      const post = {
        id: slug,
        title,
        content,
        category: category || 'General Information',
        author: author || 'FASD Blog Writer',
        readTime: readTime || '3 min',
        imageUrl: imageUrl || '',
        date: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      const blob = await put(`${BLOG_PREFIX}${slug}.json`, JSON.stringify(post), {
        contentType: 'application/json',
        access: 'public',
      })
      return new Response(JSON.stringify({ ...post, blobUrl: blob.url }), { status: 201, headers: { 'Content-Type': 'application/json' } })
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }
  }

  // PUT - update blog
  if (req.method === 'PUT') {
    try {
      const body = await req.json()
      const { id, title, content, category, author, readTime, imageUrl, date } = body
      const slug = id || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      const post = {
        id: slug,
        title,
        content,
        category: category || 'General Information',
        author: author || 'FASD Blog Writer',
        readTime: readTime || '3 min',
        imageUrl: imageUrl || '',
        date: date || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      const blob = await put(`${BLOG_PREFIX}${slug}.json`, JSON.stringify(post), {
        contentType: 'application/json',
        access: 'public',
      })
      return new Response(JSON.stringify({ ...post, blobUrl: blob.url }), { headers: { 'Content-Type': 'application/json' } })
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }
  }

  // DELETE - delete blog
  if (req.method === 'DELETE') {
    try {
      const { searchParams } = new URL(req.url)
      const url = searchParams.get('url')
      if (!url) {
        return new Response(JSON.stringify({ error: 'Missing url param' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
      }
      await del(url)
      return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } })
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }
  }

  return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } })
}

export const config = { runtime: 'edge' }
