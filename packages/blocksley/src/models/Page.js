import Block from './Block'

export default class Page extends Block {
  constructor (content) {
    super('page', { content })
  }
}
