import Block from './Block'

export default class Page extends Block {
  constructor (children) {
    super('page', { children })
  }
}
