import { Node } from 'tiptap'
import Frame from '../components/Frame'
import ImageBlock from '../models/Image'

export default class Image extends Node {
  get name () {
    return 'imageBlock'
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
        tag: 'img-block',
        getAttrs: dom => ({
          src: dom.getAttribute('src'),
          width: dom.getAttribute('width'),
          height: dom.getAttribute('height'),
          class: dom.getAttribute('class')
        })
      }],
      toDOM: node => ['img-block', {
        src: node.attrs.src,
        width: node.attrs.width,
        height: node.attrs.height,
        class: node.attrs.class
      }]
    }
  }

  // there are some props available
  // `node` is a Prosemirror Node Object
  // `updateAttrs` is a function to update attributes defined in `schema`
  // `view` is the ProseMirror view instance
  // `options` is an array of your extension options
  // `selected`

  get view () {
    return {
      name: 'ImageBlockNode',
      props: ['node', 'updateAttrs', 'view', 'getPos'],
      data () {
        return {
          block: new ImageBlock(this.node.attrs.src, {
            class: this.node.attrs.class,
            width: this.node.attrs.width,
            height: this.node.attrs.height
          })
        }
      },
      components: {
        Frame
      },
      mounted () {
        console.log('mounted')
        console.log(this.block)
        console.log(this.node)
      },
      beforeDestroy () {
        console.log('block destroyed')
        console.log(this.block)
        this.updateAttrs({
          src: this.block.src,
          class: this.block.class,
          width: this.block.width,
          height: this.block.height
        })
        /*
        this.view.dispatch(
          this.view.state.tr.setNodeMarkup(
            this.getPos(),
            null,
            this.node.attrs
          )
        )
        */
        console.log(this.node)
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
              class: cls
            })
          }
        }
      },
      template: `
        <div>
          <frame :block="this.block"/>
        </div>
        `
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
