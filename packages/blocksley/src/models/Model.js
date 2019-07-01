import nanoid from 'nanoid'

function array_move(arr, old_index, new_index) {
  /* TODO: Remove? overkill?
  if (new_index >= arr.length) {
      var k = new_index - arr.length + 1
      while (k--) {
          arr.push({ type: 'add', id: nanoid() }) // push a dummy model
      }
  } */
  if (new_index >= arr.length || new_index < 0 ) {
    return
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
  return arr
}

class Model {
  constructor (type, options) {
    this.type = type
    this.id = nanoid()
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
      content: this.content,
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
        array_move(this.content, ndx, ndx - 1)
        break
      case 'down':
        array_move(this.content, ndx, ndx + 1)
        break
    }
  }
  replaceChild(model, child) {
    const ndx = this.content.indexOf(model)
    this.content.splice(ndx, 1, child)
  }
  stringify(options) {
    return JSON.stringify(this, null, 2)
  }
}
export default Model
