import Model from './Model'
import Quote from '../models/Quote'
export default class QuoteSerializer extends Model {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Quote(data)
  }
}
