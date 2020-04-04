import Page from './Page'
import Html from './Html'
import Title from './Title'
import Paragraph from './Paragraph'
import Heading from './Heading'
import List from './List'
import Image from './Image'
import Quote from './Quote'

const renderers = {
  'page': new Page(),
  'html': new Html(),
  'title': new Title(),
  'paragraph': new Paragraph(),
  'heading': new Heading(),
  'list': new List(),
  'image': new Image(),
  'quote': new Quote()
}

export function render (model) {
  const renderer = renderers[model.type]
  return renderer.render(model)
}