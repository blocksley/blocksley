import Model from './Model'

export default class Rich extends Model {
  constructor (type, options) {
    super(type, options)
    this.content = null
    this.editor = null
  }
  toJSON () {
    return Object.assign(super.toJSON(), {
      content: this.content,
    })
  }
  freeze () {
    super.freeze()
    console.log('freezing')
    this.content = this.editor.getJSON()
    this.html = this.editor.getHTML()
  }
}
