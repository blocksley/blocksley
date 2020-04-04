import { Page } from '../models'
import ImageChooser from '../components/ImageChooser'
export class BlocksleyState {
  constructor (options) {
    this.model = new Page()
    this.imageChooser = ImageChooser
    Object.assign(this, options)
  }
  findModelByType (type, _model) {
    var result = null
    var model = _model ? _model : this.model
    if (model.type == type) {
      return model
    } else {
      const children = model.children
      for (var i = 0; i < children.length; i++) {
        result = this.findModelByType(type, children[i])
        if (result)
          return result
      } 
    }
    return result
  }
}