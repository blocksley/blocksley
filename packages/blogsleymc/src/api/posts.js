import { db } from '../boot/dexie'

class Cache {
  constructor () {
    this.cache = {}
  }

  put (post) {
    this.cache[post.id] = post
  }

  get (id) {
    return this.cache[id]
  }
}
class Posts {
  constructor (db) {
    this.db = db
    this.cache = new Cache()
  }

  async get (id) {
    const post = await db.posts.get(id)
    console.log('postQuery')
    console.log(post)
    return post
  }

  async all (after, before, first, last) {
    console.log('allPosts')
    const results = await db
      .table('posts')
      .toArray()
    console.log(results)
    return results
  }

  async create (input) {
    const id = await db.posts.put(input)
    return { id }
  }

  async update (id, data) {
    data.id = id
    await db.posts.put(data)
    return true
  }

  async delete (id) {
    await db.posts.delete(id)
    return id
  }
}

export default new Posts(db)
