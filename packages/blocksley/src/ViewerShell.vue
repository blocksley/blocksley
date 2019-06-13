<template>
  <div class="viewer-shell" @click="vu.edit()">
    <q-menu context-menu touch-position auto-close content-class="bg-black text-white">
      <q-btn-group>
        <q-btn icon="edit" @click="vu.edit()"/>
        <q-btn icon="playlist_add" @click="vu.add()"/>
        <q-btn icon="keyboard_arrow_up" />
        <q-btn icon="keyboard_arrow_down" />
        <q-btn icon="delete" @click="vu.remove()"/>
      </q-btn-group>
    </q-menu>

    <slot/>

  </div>
</template>

<script>

export default {
  name: 'ViewerShell',
  props: {
    vu: null
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
    onAction (action) {
      this.$emit('action', action)
    },
    onActive () {
      this.isActive = true
      this.$emit('active', this)
    },
    activate () {
    },
    deactivate () {
      this.isActive = false
    }
  }
}
</script>

<style lang="stylus">

.viewer-shell {
  position: relative;
  max-width: 1080px;
  border-radius: 3px;
  // background-image: linear-gradient(17deg,rgba(243,248,255,.03) 63.45%,rgba(207,214,229,.27) 98%);
}

</style>
