import { deserialize } from './'

export default class Model {
  constructor () {
  }
  serialize (model) {
  }
  deserialize (data) {
    // console.log('deserializing children')
    const content = data.content
    if (content && Array.isArray(content)) {
      console.log('yes')
      for ( var i = 0; i < content.length; i++) {
        var child = deserialize(content[i])
        content[i] = child
        // console.log(child)
      } 
    }
    return data
  }
}
