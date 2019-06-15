<template>
  <div>
    <q-btn fab-mini flat :icon="icon" @click="visible=!visible"/>

    <transition
      appear
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
    >
    <div v-if="visible" class="shell-fab-actions">
      <slot />
    </div>
    </transition>
  </div>
</template>

<script>

export default {
  props: {
    icon: ''
  },
  components: {
  },
  data () {
    return {
      visible: false
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
.shell-fab-actions {
  position: absolute;
  z-index: 990;
  top:-8px;
  right:40px;
}
.shell-fab-actions > * {
    margin: 4px;
}

</style>
