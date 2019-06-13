<template>
  <editor-shell :vu="this">
    <q-input
      v-model="model.data"
      :autofocus="true"
      borderless
      placeholder="Your title here ..."
      input-class="title"/>
  </editor-shell>
</template>

<script>
import EditorShell from 'blocksley/EditorShell'
import { BlockEditorMixin } from 'blocksley/mixins'

export default {
  name: 'TitleBlockEditor',
  mixins: [ BlockEditorMixin ],
  props: ['frame', 'model'],
  components: {
    EditorShell
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
  }
}
</script>

<style lang="stylus">
.title {
  text-rendering: optimizeLegibility;
  font-weight: bold;
  font-size: 2rem;
}
</style>
