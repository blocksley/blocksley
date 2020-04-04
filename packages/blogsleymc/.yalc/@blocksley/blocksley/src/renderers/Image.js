import Model from './Model'
export default class ImageRenderer extends Model {
  constructor () {
    super()
  }
  render (model) {
    const html = `
    <img src=${model.src} width=${model.width} height=${model.height} style="object-fit:cover"/>
    `
    return html
  }
}
