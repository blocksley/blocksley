<template>
  <div class="viewer-shell" @click="onClick" @contextmenu="contentContext">

    <super-fab ref="menu" direction="right" icon="more_vert" color="primary">
      <q-btn fab-mini icon="playlist_add" color="primary" @click="onAdd"/>
      <q-btn fab-mini icon="delete" color="primary" @click="vu.remove()"/>
      <q-btn fab-mini icon="edit" color="primary" @click="vu.edit()"/>
      <super-fab direction="right" fab-mini icon="unfold_more" color="primary">
        <q-btn fab-mini icon="keyboard_arrow_up" color="primary"/>
        <q-btn fab outlined class="grippy" icon="drag_indicator" color="primary"/>
        <q-btn fab-mini icon="keyboard_arrow_down" color="primary"/>
      </super-fab>
    </super-fab>

    <slot/>

  </div>
</template>

<script>
import SuperFab from './SuperFab'

export default {
  name: 'ViewerShell',
  props: {
    vu: null
  },
  components: {
    SuperFab
  },
  data () {
    return {
      menuVisible: false
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
    },
    onClick (e) {
      if(!e.defaultPrevented) {
        this.vu.edit()
      }
    },
    onAdd (e) {
      e.preventDefault()
      this.vu.add()
    },
    toggleMenu (e) {
      this.menuVisible = !this.menuVisible
      if(this.menuVisible) {
        this.$refs.menu.show(e)
      } else {
        this.$refs.menu.hide(e)
      }
    },
    contentContext(evt) {
      console.log('viewer context click')
      console.log(evt)
      if(evt.defaultPrevented) {
        return;
      }
      evt.preventDefault()
      this.toggleMenu(evt)
    },
    contentHold(details) {
      const { evt } = details
      console.log('viewer context hold')
      console.log(evt)
      if(evt.defaultPrevented) {
        return;
      }
      evt.preventDefault()
        setTimeout(() => {
          this.toggleMenu(evt)
        }, 1000)
    },
  }
}
</script>

<style lang="stylus">

.viewer-shell {
  position: relative;
  max-width: 1080px;
}

</style>
