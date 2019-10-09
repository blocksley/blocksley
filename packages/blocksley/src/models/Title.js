import Model from './Model'

export default class Title extends Model {
  constructor (options) {
    super('title', options)
    this.html = this.value ? `<h1>${this.value}</h1>` : 'My Title'
  }
}
