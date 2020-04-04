import Model from './Model'
import Html from '../models/Html'
export default class HtmlSerializer extends Model {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Html(data)
  }
}
