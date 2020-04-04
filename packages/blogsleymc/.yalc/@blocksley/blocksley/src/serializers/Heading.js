import Model from './Model'
import Heading from '../models/Heading'
export default class HeadingSerializer extends Model {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Heading(data)
  }
}
