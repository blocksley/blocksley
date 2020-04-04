<template>
  <div class="header-shell row q-px-md">
  <!--
  <q-btn
    flat
    @click="leftDrawerOpen = !leftDrawerOpen"
    aria-label="Menu"
    class="header-menu"
  >
    <q-icon name="menu" />
  </q-btn>
  -->
  <div  class="header-title">
    <slot name="icon" class="header-icon"/>
    <slot/>
  </div>

  </div>
</template>

<script>
import UiMixin from 'src/mixins/ui'

export default {
  name: 'HeaderShell',
  mixins: [UiMixin],
  props: {
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
}

</style>
