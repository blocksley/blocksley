import Block from './Block'

export default class List extends Block {
  constructor (list) {
    super('list')
    if(list) {
      this.data = '<ul>'
      list.forEach( (item) => {
        this.data += '<li>' + item + '</li>'
      })
      this.data += '</ul>'
    } else {
      this.data = '<ul><li>Your list here</li></ul>'
    }
  }
}
