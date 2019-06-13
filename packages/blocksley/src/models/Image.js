import Block from './Block'

export default class Image extends Block {
  constructor (src, options) {
    super('image', options)
    // this.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
    this.width = 256
    this.height = 256

    if (!src) {
      this.state = 'create'
    }
    this.src = src
  }
}
