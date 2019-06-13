import { Node } from 'tiptap'
import EFrame from '../EFrame'
// import TitleModel from '../models/Title'

export default class AddBlock extends Node {
  get name () {
    return 'AddBlock'
  }

  get schema () {
    return {
      attrs: {
        text: {
          default: null
        }
      },
      content: 'inline*',
      group: 'block',
      defining: true,
      draggable: false,
      parseDOM: [{
        tag: 'add-block',
        getAttrs: dom => ({
          text: dom.getAttribute('text'),
          width: dom.getAttribute('width'),
          height: dom.getAttribute('height'),
          class: dom.getAttribute('class')
        })
      }],
      toDOM: node => ['add-block', {
        text: node.attrs.text,
        width: node.attrs.width,
        height: node.attrs.height,
        class: node.attrs.class
      }]
      /* ,
      createModel (node) {
        return new TitleModel(node.attrs.text, {
          class: node.attrs.class,
          width: node.attrs.width,
          height: node.attrs.height
        })
      } */
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
