import { db } from '../boot/dexie'

class Blocks {
  constructor (db) {
    this.db = db
  }

  async get (id) {
    const block = await db.blocks.get(id)
    console.log('Blocks::get')
    console.log(block)
    return block
  }

  async all (after, before, first, last) {
    console.log('Blocks::all')
    const results = await db
      .table('blocks')
      .toArray()
    console.log(results)
    return results
  }

  async create (input) {
    const id = await db.blocks.put(input)
    return id
  }

  async update (input) {
    const id = await db.blocks.put(input)
    return id
  }

  async delete (id) {
    await db.blocks.delete(id)
    return id
  }
}

export default new Blocks(db)
