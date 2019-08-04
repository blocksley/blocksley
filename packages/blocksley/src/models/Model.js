// import uuidv1 from 'uuid/v1'
var counter = 0
function uuidv1 () {
  counter += 1
  return counter
}
function arrayMove (arr, oldIndex, newIndex) {
  /* TODO: Remove? overkill?
  if (new_index >= arr.length) {
      var k = new_index - arr.length + 1
      while (k--) {
          arr.push({ type: 'add', id: uuidv1() }) // push a dummy model
      }
  } */
  if (newIndex >= arr.length || newIndex < 0) {
    return
  }
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0])
  return arr
}

class Model {
  constructor (type, options) {
    this.type = type
    this.id = uuidv1()
    this.state = 'normal'
    this.editor = null
    this.value = null
    this.html = ''
    this.content = []
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
      content: this.content
    }
  }
  addChild (child) {
    this.content.push(child)
  }
  insertBefore (model, child) {
    const ndx = this.content.indexOf(model)
    this.content.splice(ndx, 0, child)
  }
  insertAfter (model, child) {
    const ndx = this.content.indexOf(model) + 1
    this.content.splice(ndx, 0, child)
  }
  removeChild (child) {
    const ndx = this.content.indexOf(child)
    this.content.splice(ndx, 1)
  }
  moveChild (child, to) {
    const ndx = this.content.indexOf(child)
    switch (to) {
      case 'up':
        arrayMove(this.content, ndx, ndx - 1)
        break
      case 'down':
        arrayMove(this.content, ndx, ndx + 1)
        break
    }
  }
  replaceChild (model, child) {
    const ndx = this.content.indexOf(model)
    this.content.splice(ndx, 1, child)
  }
  stringify (options) {
    return JSON.stringify(this, null, 2)
  }
}
export default Model
