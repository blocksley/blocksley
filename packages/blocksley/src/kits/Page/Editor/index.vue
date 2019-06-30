<template>
  <div class="page-editor">
    <editor-shell :vu="this">
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
import { Add, Title, List, Image, Paragraph, Html, Page } from 'blocksley/models'

import MainMenu from './MainMenu'

import { BlockEditorMixin, UiMixin, PageMixin } from 'blocksley/mixins'
import Frame from 'blocksley/components/Frame'
import EditorShell from 'blocksley/components/EditorShell'

export default {
  name: 'PageEditor',
  mixins: [ BlockEditorMixin, UiMixin, PageMixin ],
  props: ['frame', 'model'],
  components: {
    Frame,
    EditorShell,
    MainMenu
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
      var model, ndx
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
            case 'list':
              model = new List()
              break
            case 'image':
              model = new Image()
              break
          }
          /*
          ndx = this.blocks.indexOf(action.model)
          this.blocks.splice(ndx, 1, model)
          */
          this.model.replaceChild(action.model, model)
          break
      }
    },
  }
}
</script>

<style lang="stylus">
.page-editor {
  // padding: 16px;
  padding: 34px 16px 16px 16px;
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
