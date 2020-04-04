import { deserialize } from './'

export default class Model {
  constructor () {
  }
  serialize (model) {
  }
  deserialize (data) {
    // console.log('deserializing children')
    const children = data.children
    if (children && Array.isArray(children)) {
      for ( var i = 0; i < children.length; i++) {
        var child = deserialize(children[i])
        children[i] = child
        // console.log(child)
      } 
    }
    return data
  }
}
