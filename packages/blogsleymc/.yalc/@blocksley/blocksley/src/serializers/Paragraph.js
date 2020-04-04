import Model from './Model'
import Paragraph from '../models/Paragraph'
export default class ParagraphSerializer extends Model {
  constructor () {
    super()
  }
  deserialize (data) {
    return new Paragraph(data)
  }
}
