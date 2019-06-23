<template>
  <viewer-shell :vu="this">
    <div v-html="model.data" class="viewer__content"/>
  </viewer-shell>
</template>

<script>

import { BlockViewerMixin } from 'blocksley/mixins'
import ViewerShell from 'blocksley/components/ViewerShell'

export default {
  name: 'PageViewer',
  mixins: [ BlockViewerMixin ],
  props: ['frame', 'model'],
  components: {
    ViewerShell
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
</style>
