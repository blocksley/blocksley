import Block from './Block'

export default class Html extends Block {
  constructor (content) {
    super('html')
    this.data = content
  }
}
