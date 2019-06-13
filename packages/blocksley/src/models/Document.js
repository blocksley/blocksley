import Block from './Block'

export default class Document extends Block {
  constructor (content) {
    super('document')
    this.data = content
  }
}
