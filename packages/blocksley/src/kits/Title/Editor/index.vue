<template>
  <div>
  <editor-shell :vu="this">
    <span slot="title">Title</span>
    <q-input
      v-model="model.data"
      :autofocus="true"
      borderless
      placeholder="Your title here ..."
      input-class="title"/>
  </editor-shell>
  </div>
</template>

<script>
import EditorShell from 'blocksley/components/EditorShell'
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
