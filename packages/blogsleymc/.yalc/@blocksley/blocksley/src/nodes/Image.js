import { Node } from 'tiptap'
import EFrame from '../components/EFrame'
import Image from '../models/Image'

export default class ImageNode extends Node {
  constructor(options = {}) {
    super(options)
  }

  init () {
    return null
  }

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
      draggable: true,
      parseDOM: [{
        tag: 'img',
        getAttrs: dom => ({
          src: dom.getAttribute('src'),
          width: dom.getAttribute('width'),
          height: dom.getAttribute('height'),
          class: dom.getAttribute('class')
        })
      }],
      /*
      toDOM: node => ['img', {
        src: node.attrs.src,
        width: node.attrs.width,
        height: node.attrs.height,
        class: node.attrs.class
      }], */
      toDOM: node => ['img', {
        src: node.model.src,
        width: node.model.width,
        height: node.model.height,
        class: node.model.class,
        style: 'object-fit:cover'
      }],
      createModel (node) {
        return new Image({
          src: node.attrs.src,
          class: node.attrs.class,
          width: parseInt(node.attrs.width),
          height: parseInt(node.attrs.height)
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
  commands (cmd) {
    console.log('command')
    console.log(cmd)
    const { type } = cmd
    return attrs => (state, dispatch) => {
      const { selection } = state
      const position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos
      const node = type.create(attrs)
      const transaction = state.tr.insert(position, node)
      dispatch(transaction)
    }
  }
}
