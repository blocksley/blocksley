<template>
  <viewer-shell :vu="this">
    <!-- <div v-html="model.html" class="viewer__content"/> -->
    <pre><code>{{model.stringify()}}</code></pre>
  </viewer-shell>
</template>

<script>

import { BlockViewerMixin } from '../../../mixins'
import ViewerShell from '../../../components/ViewerShell'

export default {
  name: 'PageJson',
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
