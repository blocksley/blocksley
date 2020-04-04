<template>
  <div class="viewer-shell" @click="onClick" @contextmenu="contentContext">

    <super-fab v-show="menuVisible" ref="menu" icon="more_vert" >
      <q-btn fab-mini icon="playlist_add"  @click="onAdd"/>
      <q-btn fab-mini icon="delete"  @click="frame.remove()"/>
      <q-btn fab-mini icon="edit"  @click="frame.edit()"/>
      <super-fab fab-mini icon="unfold_more" >
        <q-btn fab-mini icon="keyboard_arrow_up"  @click="frame.move('up')"/>
        <q-btn fab outlined class="grippy" icon="drag_indicator" />
        <q-btn fab-mini icon="keyboard_arrow_down"  @click="frame.move('down')"/>
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
      frame: null,
      menuVisible: false
    }
  },
  computed: {
  },
  mounted () {
    this.frame = this.vu.frame
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
    onClick (evt) {
      if (evt.defaultPrevented) {
        return
      }
      evt.preventDefault()
      this.frame.edit()
    },
    onAdd (e) {
      e.preventDefault()
      this.frame.add()
    },
    toggleMenu (e) {
      this.menuVisible = !this.menuVisible
      if (this.menuVisible) {
        this.$refs.menu.show(e)
      } else {
        this.$refs.menu.hide(e)
      }
    },
    contentContext (evt) {
      return
      console.log('viewer context click')
      console.log(evt)
      if (evt.defaultPrevented) {
        return
      }
      evt.preventDefault()
      this.toggleMenu(evt)
    },
    contentHold (details) {
      const { evt } = details
      console.log('viewer context hold')
      console.log(evt)
      if (evt.defaultPrevented) {
        return
      }
      evt.preventDefault()
      setTimeout(() => {
        this.toggleMenu(evt)
      }, 1000)
    }
  }
}
</script>

<style lang="stylus">

.viewer-shell {
  position: relative;
  max-width: 1080px;
}

</style>
