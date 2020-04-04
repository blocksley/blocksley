<template>
  <viewer-shell :vu="this">
    <div v-html="body" class="viewer__content"/>
  </viewer-shell>
</template>

<script>

import { BlocksleyState, serialize, render } from '@blocksley/blocksley'
import { BlockViewerMixin } from '../../../mixins'
import ViewerShell from '../../../components/ViewerShell'

export default {
  name: 'PageViewer',
  mixins: [ BlockViewerMixin ],
  props: ['frame', 'model'],
  components: {
    ViewerShell
  },
  data () {
    return {
      body: render(this.model)
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
