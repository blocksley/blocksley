import nanoid from 'nanoid'

class Model {
  constructor (type, options) {
    this.type = type
    this.id = nanoid()
    this.state = 'normal'
    this.width = 16
    this.height = 16
    this.class = []
    this.grippy = false
    Object.assign(this, options)
  }
}
export default Model
