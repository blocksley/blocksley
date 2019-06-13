import nanoid from 'nanoid'

class Model {
  constructor (type, options) {
    this.type = type
    this.id = nanoid()
    this.state = 'normal'
    this.width = 16
    this.height = 16
    this.class = []
    Object.assign(this, options)
  }
}
export default Model

/*
import Vue from 'vue'
import Component from 'vue-class-component'

import nanoid from 'nanoid'

@Component
class Model extends Vue {
  constructor (type, options) {
    super()
    this.type = type
    this.id = nanoid()
    this.class = []
    Object.assign(this, options)
  }
}
export default Model
*/
