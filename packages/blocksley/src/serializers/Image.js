import Model from './Model'
import Image from '../models'
export default class ImageSerializer extends Model {
  constructor () {
  }
  deserialize (data) {
    return new Image(data)
  }
}
