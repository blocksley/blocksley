import Block from './Block'

export default class Document extends Block {
  constructor (children) {
    super('document')
    this.children = children
  }
}
