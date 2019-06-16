<template>
  <editor-shell ref="shell" :vu="this">
    <context-menu slot="menu" :vu="this"/>
    <vue-draggable-resizable :draggable="false" @resizing="onResizing" :w="this.model.width" :h="this.model.height" :z="16"/>
    <img ref="image" :src="model.src" :width="this.model.width" :height="this.model.height" style="object-fit:cover;"/>
  </editor-shell>
</template>

<script>
import { BlockEditorMixin } from 'blocksley/mixins'
import EditorShell from 'blocksley/components/EditorShell'
import ContextMenu from './ContextMenu'

export default {
  name: 'ImageBlockEditor',
  mixins: [ BlockEditorMixin ],
  props: ['frame', 'model'],
  components: {
    EditorShell,
    ContextMenu
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    onResizing (left, top, width, height) {
      this.model.width = width
      this.model.height = height
    }
  }
}
</script>

<style lang="stylus">
</style>
