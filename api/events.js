import { put, list, del } from '@vercel/blob'

const EVENT_PREFIX = 'content/events/'

function json(res, data, status = 200) {
  res.setHeader('Content-Type', 'application/json')
  res.status(status).json(data)
}

function checkAuth(req) {
  const auth = req.headers.authorization
  if (!auth) return false
  const token = auth.replace('Bearer ', '')
  return token === process.env.ADMIN_SECRET
}

export default async function handler(req, res) {
  // GET - public
  if (req.method === 'GET') {
    try {
      const { blobs } = await list({ prefix: EVENT_PREFIX })
      const events = await Promise.all(
        blobs.map(async (blob) => {
          const r = await fetch(blob.url)
          const data = await r.json()
          return { ...data, blobUrl: blob.url, pathname: blob.pathname }
        })
      )
      events.sort((a, b) => new Date(a.date) - new Date(b.date))
      return json(res, events)
    } catch (e) {
      return json(res, { error: e.message }, 500)
    }
  }

  if (!checkAuth(req)) return json(res, { error: 'Unauthorized' }, 401)

  // POST
  if (req.method === 'POST') {
    try {
      const { title, date, location, description, imageUrl } = req.body
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
      return json(res, { ...event, blobUrl: blob.url }, 201)
    } catch (e) {
      return json(res, { error: e.message }, 500)
    }
  }

  // PUT
  if (req.method === 'PUT') {
    try {
      const { id, title, date, location, description, imageUrl } = req.body
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
      return json(res, { ...event, blobUrl: blob.url })
    } catch (e) {
      return json(res, { error: e.message }, 500)
    }
  }

  // DELETE
  if (req.method === 'DELETE') {
    try {
      const url = req.query.url
      if (!url) return json(res, { error: 'Missing url param' }, 400)
      await del(url)
      return json(res, { success: true })
    } catch (e) {
      return json(res, { error: e.message }, 500)
    }
  }

  return json(res, { error: 'Method not allowed' }, 405)
}
