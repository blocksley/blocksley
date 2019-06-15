<template>
  <div class="blocksley-editor">
    <draggable v-model="blocks"
      handle=".grippy"
      @start="onDragStart()"
      @end="onDragEnd()"
    >
      <frame v-for="block in blocks" :key="block.id" :model="block" @action="onAction" @active="onActive"/>
    </draggable>
  </div>
</template>

<script>
import BlocksleyStore from 'blocksley/store'

import nanoid from 'nanoid'
import { UiMixin } from 'blocksley/mixins'
import { Title, Paragraph, List, Image } from './models'
import Frame from './Frame'

export default {
  mixins: [ UiMixin ],
  props: {
    post: {
      default () {
        return {
          id: '',
          title: '',
          summary: '',
          body: ''
        }
      }
    }
  },
  components: {
    Frame
  },
  data () {
    return {
      blocks: [
        new Title(),
        new Paragraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
        new Paragraph('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        // new Html('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>')
      ],
      active: null
    }
  },
  created () {
    this.$store.registerModule('blocksley', BlocksleyStore)
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    onDragStart () {
      console.log('drag start')
    },
    onDragEnd () {
      console.log(this.active.vu)
      this.active.model.grippy = false
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
  padding-bottom: 32px;
  overflow: hidden;
}
.grippy {
}
</style>