import { put, list, del, head } from '@vercel/blob'

const BLOG_PREFIX = 'content/blogs/'

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
      const { blobs } = await list({ prefix: BLOG_PREFIX })
      const posts = await Promise.all(
        blobs.map(async (blob) => {
          const r = await fetch(blob.downloadUrl)
          const data = await r.json()
          return { ...data, blobUrl: blob.url, pathname: blob.pathname }
        })
      )
      posts.sort((a, b) => new Date(b.date) - new Date(a.date))
      return json(res, posts)
    } catch (e) {
      return json(res, { error: e.message }, 500)
    }
  }

  if (!checkAuth(req)) return json(res, { error: 'Unauthorized' }, 401)

  // POST
  if (req.method === 'POST') {
    try {
      const { title, content, category, author, readTime, imageUrl } = req.body
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
      })
      return json(res, { ...post, blobUrl: blob.url }, 201)
    } catch (e) {
      return json(res, { error: e.message }, 500)
    }
  }

  // PUT
  if (req.method === 'PUT') {
    try {
      const { id, title, content, category, author, readTime, imageUrl, date } = req.body
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
      })
      return json(res, { ...post, blobUrl: blob.url })
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
