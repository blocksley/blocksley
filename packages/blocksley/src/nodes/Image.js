import { Node } from 'tiptap'
import EFrame from '../components/EFrame'
import ImageBlock from '../models/Image'

export default class Image extends Node {
  get name () {
    return 'image'
  }

  get schema () {
    return {
      attrs: {
        src: {
          default: null
        },
        width: {
          default: 256
        },
        height: {
          default: 256
        },
        class: {
          default: null
        }
      },
      group: 'block',
      selectable: false,
      parseDOM: [{
        tag: 'img',
        getAttrs: dom => ({
          src: dom.getAttribute('src'),
          width: dom.getAttribute('width'),
          height: dom.getAttribute('height'),
          class: dom.getAttribute('class')
        })
      }],
      toDOM: node => ['img', {
        src: node.attrs.src,
        width: node.attrs.width,
        height: node.attrs.height,
        class: node.attrs.class
      }],
      createModel (node) {
        return new ImageBlock(node.attrs.src, {
          class: node.attrs.class,
          width: node.attrs.width,
          height: node.attrs.height
        })
      }
    }
  }

  // there are some props available
  // `node` is a Prosemirror Node Object
  // `updateAttrs` is a function to update attributes defined in `schema`
  // `view` is the ProseMirror view instance
  // `options` is an array of your extension options
  // `selected`

  get view () {
    return EFrame
  }
  commands ({ type }) {
    return attrs => (state, dispatch) => {
      const { selection } = state
      const position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos
      const node = type.create(attrs)
      const transaction = state.tr.insert(position, node)
      dispatch(transaction)
    }
  }
}
