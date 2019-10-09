import Model from './Model'
import Image from '../models/Image'
export default class ImageSerializer extends Model {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Image(data)
  }
}
