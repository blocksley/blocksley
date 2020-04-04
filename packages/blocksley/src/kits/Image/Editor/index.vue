<template>
  <editor-shell ref="shell" :vu="this">
    <span slot="title">Image</span>
    <main-menu slot="menu" :vu="this"/>
    <vue-draggable-resizable
      :draggable="false"
      @resizing="onResizing"
      :w="this.model.width"
      :h="this.model.height"
      :z="750"
      class="resizer"
    />
    <img ref="image" :src="model.src" :width="this.model.width" :height="this.model.height" style="object-fit:cover;"/>
  </editor-shell>
</template>

<script>
import { render } from '../../../renderers'

import { BlockEditorMixin } from '../../../mixins'
import EditorShell from '../../../components/EditorShell'
import MainMenu from './MainMenu'

export default {
  name: 'ImageBlockEditor',
  mixins: [ BlockEditorMixin ],
  props: ['frame', 'model'],
  components: {
    EditorShell,
    MainMenu
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  beforeDestroy () {
    console.log('image editor destroyed')
    console.log(this)
    this.model.html = render(this.model)
    console.log(this.model)
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
.resizer {
  position: absolute;
  left: 0;
  top: 32px;
}
</style>
