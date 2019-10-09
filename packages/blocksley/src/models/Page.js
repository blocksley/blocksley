import Model from './Model'

export default class Page extends Model {
  constructor (content) {
    super('page', { content })
  }
}
