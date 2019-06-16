<template>
  <div class="shell-actions">
    <component v-if="fab" v-bind:is="fab"/>
    <slot :actions="this"/>
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
      fab: null
    }
  },
  computed: {
  },
  mounted () {
    console.log('shell actions mounted')
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
.shell-actions {
  // font-size: 1.5rem;
  // position: relative;
  // position: absolute;
  // right: 0;
  // top: -5px;
  // margin: 5px;
  // opacity: .75;
}
</style>
