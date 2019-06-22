import Block from './Block'

export default class Paragraph extends Block {
  constructor (data) {
    super('paragraph')
    this.data = '<p>' + (data ? data : 'Your paragraph here') + '</p>'
  }
}
