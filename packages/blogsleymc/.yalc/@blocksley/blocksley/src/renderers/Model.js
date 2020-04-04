import { render } from './'

export default class Model {
  constructor () {
  }
  render (model) {
    var html = model.html
    // console.log('rendering children')
    const children = model.children
    if (children && Array.isArray(children)) {
      for ( var i = 0; i < children.length; i++) {
        html += render(children[i])
        // console.log(child)
      } 
    }
    return html
  }
}
