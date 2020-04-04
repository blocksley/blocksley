<template>
  <q-toolbar class="footer-shell">

  <div  class="header-title">
    <slot name="icon" class="header-icon"/>
    <slot/>
  </div>
  <q-space />
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
<tippy
    interactive
    placement="top-start"
    offset="0, 16"
    :sticky="true"
    boundary="viewport"
    theme="google"
    trigger="click"
    arrow>
  <template v-slot:trigger>
    <q-btn flat icon="menu"/>
  </template>
  <component :is="toolbar" />
</tippy>

  </q-toolbar>
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
