import Block from './Block'

export default class List extends Block {
  constructor (data) {
    super('list')
    this.data = '<ul><li>' + data + '</li></ul>'
  }
}
