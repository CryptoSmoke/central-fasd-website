import { put, list, del } from '@vercel/blob'

const EVENT_PREFIX = 'content/events/'

function checkAuth(req) {
  const auth = req.headers.get('authorization')
  if (!auth) return false
  const token = auth.replace('Bearer ', '')
  return token === process.env.ADMIN_SECRET
}

export default async function handler(req) {
  // GET - public
  if (req.method === 'GET') {
    try {
      const { blobs } = await list({ prefix: EVENT_PREFIX })
      const events = await Promise.all(
        blobs.map(async (blob) => {
          const res = await fetch(blob.url)
          const data = await res.json()
          return { ...data, blobUrl: blob.url, pathname: blob.pathname }
        })
      )
      events.sort((a, b) => new Date(a.date) - new Date(b.date))
      return new Response(JSON.stringify(events), { headers: { 'Content-Type': 'application/json' } })
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }
  }

  if (!checkAuth(req)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  // POST - create event
  if (req.method === 'POST') {
    try {
      const body = await req.json()
      const { title, date, location, description, imageUrl } = body
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      const event = {
        id: slug,
        title,
        date,
        location: location || '',
        description: description || '',
        imageUrl: imageUrl || '',
        createdAt: new Date().toISOString(),
      }
      const blob = await put(`${EVENT_PREFIX}${slug}.json`, JSON.stringify(event), {
        contentType: 'application/json',
        access: 'public',
      })
      return new Response(JSON.stringify({ ...event, blobUrl: blob.url }), { status: 201, headers: { 'Content-Type': 'application/json' } })
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }
  }

  // PUT - update event
  if (req.method === 'PUT') {
    try {
      const body = await req.json()
      const { id, title, date, location, description, imageUrl } = body
      const slug = id || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      const event = {
        id: slug,
        title,
        date,
        location: location || '',
        description: description || '',
        imageUrl: imageUrl || '',
        createdAt: new Date().toISOString(),
      }
      const blob = await put(`${EVENT_PREFIX}${slug}.json`, JSON.stringify(event), {
        contentType: 'application/json',
        access: 'public',
      })
      return new Response(JSON.stringify({ ...event, blobUrl: blob.url }), { headers: { 'Content-Type': 'application/json' } })
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }
  }

  // DELETE
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
