import Page from './Page'
import Html from './Html'
import Title from './Title'
import Paragraph from './Paragraph'
import List from './List'
import Image from './Image'

const serializers = {
  'page': Page,
  'html': Html,
  'title': Title,
  'paragraph': Paragraph,
  'list': List,
  'image': Image
}

export function serialize (model) {
  const serializer = serializers[model.type]
  return serializer.serialize(model)
}

export function deserialize (data) {
  const serializer = serializers[model.type]
  return serializer.deserialize(data)
}