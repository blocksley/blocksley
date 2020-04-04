import { Node } from 'tiptap'
import Frame from '../Frame'
import { Image, Html } from '../models'

const blockTypes = {
  'image': Image,
  'html': Html
}

export default class BlockNode extends Node {
  get name () {
    return 'block'
  }

  get schema () {
    return {
      attrs: {
        src: {
          default: null
        },
        class: {
          default: null
        }
      },
      group: 'block',
      selectable: false,
      parseDOM: [{
        tag: 'block',
        getAttrs: dom => ({
          type: dom.getAttribute('type')
        })
      }],
      toDOM: node => ['block', {
        type: node.attrs.type
      }]
    }
  }

  get view () {
    return {
      props: ['node', 'updateAttrs', 'editable'],
      data () {
        return {
          block: new ImageBlock(this.node.attrs.src, { class: this.node.attrs.class })
        }
      },
      components: {
        Frame
      },
      computed: {
        src: {
          get () {
            return this.node.attrs.src
          },
          set (src) {
            this.updateAttrs({
              src
            })
          }
        },
        class: {
          get () {
            return this.node.attrs.class
          },
          set (cls) {
            this.updateAttrs({
              cls
            })
          }
        }
      },
      template: `
        <div>
          <frame :block="this.block"/>
        </div>
        `
      /*
      template: `
        <div class="iframe">
          <iframe class="iframe__embed" :src="src"></iframe>
          <input class="iframe__input" @paste.stop type="text" v-model="src" v-if="editable" />
        </div>
      `
      */
    }
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
