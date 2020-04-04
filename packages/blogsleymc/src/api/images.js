import { db } from '../boot/dexie'

class Images {
  constructor (db) {
    this.db = db
  }

  async get (id) {
    const image = await db.images.get(id)
    console.log('getImage')
    console.log(image)
    return image
  }

  async all (after, before, first, last) {
    console.log('allImages')
    const results = await db
      .table('images')
      .toArray()
    console.log(results)
    return results
  }

  async create (data) {
    const id = await db.images.put(data)
    return id
  }

  async update (id, data) {
    data.id = id
    await db.images.put(data)
    return true
  }

  async delete (id) {
    await db.images.delete(id)
    return id
  }
}

export default new Images(db)
