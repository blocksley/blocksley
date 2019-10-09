import Page from './Page'
import Html from './Html'
import Title from './Title'
import Paragraph from './Paragraph'
import List from './List'
import Image from './Image'

const serializers = {
  'page': new Page(),
  'html': new Html(),
  'title': new Title(),
  'paragraph': new Paragraph(),
  'list': new List(),
  'image': new Image()
}

export function serialize (model) {
  const serializer = serializers[model.type]
  return serializer.serialize(model)
}

export function deserialize (data) {
  const serializer = serializers[data.type]
  console.log(serializer)
  return serializer.deserialize(data)
}