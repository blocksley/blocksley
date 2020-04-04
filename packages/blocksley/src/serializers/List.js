import Model from './Model'
import List from '../models/List'
export default class ListSerializer extends Model {
  constructor () {
    super()
  }
  deserialize (data) {
    return new List(data)
  }
}
