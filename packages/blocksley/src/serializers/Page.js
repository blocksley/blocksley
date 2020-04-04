import Model from './Model'
import Page from '../models/Page'
export default class PageSerializer extends Model {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Page(super.deserialize(data))
  }
}
