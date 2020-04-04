import { db } from '../boot/dexie'

class Users {
  constructor (db) {
    this.db = db
  }

  async get (id) {
    const user = await db.users.get(id)
    console.log('User::get')
    console.log(user)
    return user
  }

  async all (after, before, first, last) {
    console.log('User::all')
    const results = await db
      .table('users')
      .toArray()
    console.log(results)
    return results
  }

  async create (data) {
    const id = await db.users.put(data)
    return { id }
  }

  async update (id, data) {
    data.id = id
    await db.users.put(data)
    return true
  }

  async delete (id) {
    await db.users.delete(id)
    return id
  }

  async login (username, password) {
    return { data: { login: 'xxx' } }
  }
}

export default new Users(db)
