<template>
  <div class="drawer-shell">
        <slot/>
  </div>
</template>

<script>

export default {
  name: 'DrawerShell',
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
