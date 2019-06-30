import nanoid from 'nanoid'

class Model {
  constructor (type, options) {
    this.type = type
    this.id = nanoid()
    this.state = 'normal'
    this.editor = null
    this.value = null
    this.html = ''
    this.content = null
    this.children = []
    this.width = 16
    this.height = 16
    this.class = []
    Object.assign(this, options)
  }
  toJSON () {
    return {
      type: this.type,
      id: this.id,
      value: this.value,
      html: this.html, 
      content: this.content,
      children: this.children
    }
  }
  addChild (child) {
    this.children.push(child)
  }
  insertBefore (model, child) {
    const ndx = this.children.indexOf(model)
    this.children.splice(ndx, 0, child)
  }
  insertAfter (model, child) {
    const ndx = this.children.indexOf(model) + 1
    this.children.splice(ndx, 0, child)
  }
  removeChild (child) {
    const ndx = this.children.indexOf(child)
    this.children.splice(ndx, 1)
  }
  replaceChild(model, child) {
    const ndx = this.children.indexOf(model)
    this.children.splice(ndx, 1, child)
  }
  stringify(options) {
    return JSON.stringify(this, null, 2)
  }
}
export default Model
