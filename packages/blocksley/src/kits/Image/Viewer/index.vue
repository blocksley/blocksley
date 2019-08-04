<template>
  <viewer-shell :vu="this">
    <img :src="model.src" :width="this.model.width" :height="this.model.height" style="object-fit:cover"/>
  </viewer-shell>
</template>

<script>
import ViewerShell from '../../../components/ViewerShell'
import { BlockViewerMixin } from '../../../mixins'
export default {
  name: 'TitleBlockViewer',
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
