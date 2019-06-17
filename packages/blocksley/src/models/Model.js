import nanoid from 'nanoid'

class Model {
  constructor (type, options) {
    this.type = type
    this.id = nanoid()
    this.state = 'normal'
    this.children = []
    this.width = 16
    this.height = 16
    this.class = []
    Object.assign(this, options)
  }
  addChild (child) {
    this.children.push(child)
  }
  removeChild (child) {
    const ndx = this.children.indexOf(child)
    this.children.splice(ndx, 1)
  }
  insertBefore (model, child) {
    const ndx = this.blocks.indexOf(model)
    this.blocks.splice(ndx, 0, child)
  }
  insertAfter (model, child) {
    const ndx = this.blocks.indexOf(model) + 1
    this.blocks.splice(ndx, 0, child)
  }
}
export default Model
