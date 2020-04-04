import Model from './Model'
import Title from '../models/Title'
export default class TitleSerializer extends Model {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Title(data)
  }
}
