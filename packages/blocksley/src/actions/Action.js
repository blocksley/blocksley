class Action {
  constructor (type, options) {
    this.type = type
    Object.assign(this, options)
  }
}
export default Action