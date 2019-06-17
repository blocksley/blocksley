<template>
  <div class="blocksley-editor">
    <draggable v-model="model.children"
      handle=".grippy"
      @start="onDragStart()"
      @end="onDragEnd()"
    >
      <frame v-for="child in model.children" :key="child.id" :model="child" @action="onAction" @active="onActive"/>
    </draggable>
  </div>
</template>

<script>
import ContextMenu from './ContextMenu'
import FloatingMenu from './FloatingMenu'

import { BlockEditorMixin } from 'blocksley/mixins'
import Frame from 'blocksley/components/Frame'
import EditorShell from 'blocksley/components/EditorShell'

export default {
  name: 'DocumentEditor',
  mixins: [ BlockEditorMixin ],
  props: ['frame', 'model'],
  components: {
    Frame,
    EditorShell,
    ContextMenu,
    FloatingMenu
  },
  data () {
    return {
      active: null
    }
  },
  mounted () {
    console.log('editor mounted')
  },
  beforeDestroy () {
    console.log('editor destroyed')
  },
  methods: {
    onDragStart () {
      console.log('drag start')
    },
    onDragEnd () {
      console.log(this.active.vu)
      this.active.grippy = false
    },
    onAction (action) {
      var model, ndx
      console.log(action)
      switch (action.type) {
        case 'add':
          model = { type: 'new', id: nanoid() }
          ndx = this.blocks.indexOf(action.model) + 1
          this.blocks.splice(ndx, 0, model)
          break
        case 'remove':
          ndx = this.blocks.indexOf(action.model)
          this.blocks.splice(ndx, 1)
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
          ndx = this.blocks.indexOf(action.model)
          this.blocks.splice(ndx, 1, model)
          break
      }
    },
    onActive (frame) {
      if (this.active && this.active !== frame) {
        this.active.deactivate()
      }
      this.active = frame
    }
  }
}
</script>

<style lang="stylus">
.blocksley-editor {
  padding: 16px;
  overflow: hidden;
}
.grippy {
}
</style>
