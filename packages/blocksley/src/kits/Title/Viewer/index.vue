<template>
  <viewer-shell :vu="this">
    <div v-if="this.model.value" v-html="`<h1>${this.model.value}</h1>`"/>
    <div v-else style="opacity:.55"><h1>Your title here ...</h1></div>
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
