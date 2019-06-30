import Block from './Block'

export default class Title extends Block {
  constructor (value) {
    super('title')
    this.value = value
    this.html = value ? `<h1>${this.value}</h1>` : undefined
  }
}
