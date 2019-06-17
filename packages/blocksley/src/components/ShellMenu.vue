<template>
  <div class="shell-menu">
    <q-menu ref="menu" v-model="showMenu" no-parent-event @contextmenu="onContext($event)" auto-close content-class="bg-black text-white">
      <slot name="menu"/>
    </q-menu>
  </div>
</template>

<script>

export default {
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
    console.log('shell menu mounted')
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
.shell-menu {
  // font-size: 1.5rem;
  // position: relative;
  // position: absolute;
  // right: 0;
  // top: -5px;
  // margin: 5px;
  // opacity: .75;
}
</style>
