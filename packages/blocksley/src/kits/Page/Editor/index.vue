<template>
  <div class="page-editor">
    <editor-shell :vu="this" class="page-editor">
      <draggable v-model="model.children"
        group="blocks"
        handle=".grippy"
        @start="onDragStart()"
        @end="onDragEnd()"
      >
        <frame v-for="child in model.children"
          :key="child.id"
          :model="child"
          class="noselect"
          @action="onAction"
          />
      </draggable>
    </editor-shell>
  </div>
</template>

<script>
import { Add, List, Image, Paragraph, Heading, Html, Quote } from '../../../models'

import { BlockEditorMixin } from '../../../mixins'
import Frame from '../../../components/Frame'
import EditorShell from '../../../components/EditorShell'

export default {
  name: 'PageEditor',
  mixins: [ BlockEditorMixin ],
  props: ['frame', 'model'],
  components: {
    Frame,
    EditorShell
  },
  data () {
    return {
    }
  },
  created () {
    console.log('page editor created')
  },
  beforeDestroy () {
    console.log('page editor destroyed')
  },
  methods: {
    onDragStart () {
      console.log('drag start')
    },
    onDragEnd () {
      console.log('drag end')
    },
    onAction (action) {
      var model
      console.log(action)
      switch (action.type) {
        case 'add':
          model = new Add()
          this.model.insertAfter(action.model, model)
          break
        case 'remove':
          this.model.removeChild(action.model)
          break
        case 'move':
          this.model.moveChild(action.model, action.to)
          break
        case 'new':
          switch (action.kind) {
            case 'paragraph':
              model = new Paragraph()
              break
            case 'heading':
              model = new Heading()
              break
            case 'list':
              model = new List()
              break
            case 'image':
              model = new Image()
              break
            case 'html':
              model = new Html()
              break
            case 'quote':
              model = new Quote()
              break
          }
          model.state = 'create'
          // this.model.replaceChild(action.model, model)
          this.model.insertAfter(action.model, model)
          break
      }
    }
  }
}
</script>

<style lang="stylus">
.page-editor {
  // padding: 16px;
  // padding: 34px 16px 16px 16px;
  // padding: 16px 0px 0px 0px;
  // overflow: hidden;
}
.grippy {
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>
