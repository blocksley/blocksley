<template>
  <div class="drawer-shell">
        <!-- {{ view.title }} -->
        <slot/>
  </div>
</template>

<script>
import UiMixin from 'src/mixins/ui'

export default {
  name: 'ToolboxShell',
  mixins: [
    UiMixin
  ],
  props: {
    showShortcuts: {
      type: Boolean,
      default: true
    }
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
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

.drawer-shell {
  height: 100% !important;
}

</style>
