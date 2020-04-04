import nanoid from 'nanoid'

function arrayMove (arr, oldIndex, newIndex) {
  if (newIndex >= arr.length || newIndex < 0) {
    return
  }
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0])
  return arr
}

class Model {
  constructor (type, options) {
    this.type = type
    this.id = nanoid()
    this.state = 'normal'
    this._value = null
    this.html = ''
    this.children = []
    this.width = 256
    this.height = 256
    this.class = [] //TODO:smelly:has to do with style
    Object.assign(this, options)
  }
  set value (val) {
    this._value = val
  }
  get value () {
    return this._value
  }
  toJSON () {
    return {
      type: this.type,
      id: this.id,
      _value: this.value,
      html: this.html,
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
  moveChild (child, to) {
    const ndx = this.children.indexOf(child)
    switch (to) {
      case 'up':
        arrayMove(this.children, ndx, ndx - 1)
        break
      case 'down':
        arrayMove(this.children, ndx, ndx + 1)
        break
    }
  }
  replaceChild (model, child) {
    const ndx = this.children.indexOf(model)
    this.children.splice(ndx, 1, child)
  }
  stringify (options) {
    return JSON.stringify(this, null, 2)
  }
  freeze () {
    for ( var i = 0; i < this.children.length; i++) {
      this.children[i].freeze()
    } 
  }
}
export default Model
