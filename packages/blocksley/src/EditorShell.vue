<template>
  <div class="editor-shell row">
    <!-- <q-menu context-menu touch-position auto-close content-class="bg-black text-white"> -->
    <div class="col">
      <slot/>
      <q-menu context-menu auto-close content-class="bg-black text-white">
        <slot name="menu"/>
      </q-menu>
    </div>
    
    <div id="actions" class="col-auto shell-actions" :class="{ grippy }" @click="detectClick($event)">
      <div class="cursor-pointer">
        <q-icon :name="grippyIcon"/>
        <q-menu v-model="showMenu" :no-parent-event="true" auto-close content-class="bg-black text-white">
          <q-btn-group>
            <q-btn icon="visibility" @click="vu.view()"/>
            <q-btn icon="playlist_add" @click="vu.add()"/>
            <q-btn icon="unfold_more" @click="toggleGrippy()"/>
            <q-btn icon="keyboard_arrow_up" />
            <q-btn icon="keyboard_arrow_down" />
            <q-btn icon="delete" @click="vu.remove()"/>
          </q-btn-group>
          <q-btn-group>
            <q-btn icon="mdi-format-align-left" @click="vu.floatLeft()"/>
            <q-btn icon="mdi-format-align-right" @click="vu.floatRight()"/>
          </q-btn-group>
        </q-menu>
      </div>
    </div>
    
    <!--
    <div class="shell-actions col-auto" :class="{ grippy }" >
      <q-fab
        flat
        icon="more_vert"
        direction="left"
        color="primary"
      >
        <q-fab-action icon="visibility" color="primary" @click="vu.view()"/>
        <q-fab-action icon="playlist_add" color="primary" @click="vu.add()"/>
        <q-fab-action icon="unfold_more" color="primary" @click="grippy = !grippy"/>
        <q-fab-action icon="keyboard_arrow_up" color="primary"/>
        <q-fab-action icon="keyboard_arrow_down" color="primary"/>
        <q-fab-action icon="delete" color="primary" @click="vu.remove()"/>
      </q-fab>
    </div>
    -->
  </div>
</template>

<script>

export default {
  name: 'EditorShell',
  props: {
    vu: null
  },
  components: {
  },
  data () {
    return {
      model: { grippy: false },
      showMenu: false,
      clickCount: 0,
      clickTimer: null,
      delay: 250,
      numClicks: 0
    }
  },
  computed: {
    grippy: {
      get () {
        return this.model.grippy
      },
      set (val) {
        this.model.grippy = val
      }
    },
    grippyIcon () {
      return this.grippy ? 'unfold_more' : 'more_vert'
    }
  },
  mounted () {
    this.model = this.vu.model
    console.log(this.model)
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
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    toggleGrippy () {
      this.grippy = !this.grippy
    },
    detectClick (e) {
      // console.log('handle click')
      e.preventDefault()
      this.numClicks++;
      if (this.numClicks === 1) {          // the first click in .2s
          setTimeout(() => {
              switch(this.numClicks) {     // check the event type
                    case 1:
                      // console.log('single click')
                      this.toggleMenu()
                      break;
                    default:
                      // console.log('double click')
                      this.toggleGrippy()
              }
              this.numClicks = 0               // reset the first click
          }, this.delay);                              // wait 0.2s
      }
    } 
  }
}
</script>

<style lang="stylus">

.editor-shell {
  position: relative;
  max-width: 1080px;
  border-radius: 3px;
  background-image: linear-gradient(17deg,rgba(243,248,255,.03) 63.45%,rgba(207,214,229,.27) 98%);
}

.shell-menu {
  position: absolute;
  left: 0;
  top: -42px;
}

.shell-actions {
  font-size: 1.5rem;
  // position: relative;
  // position: absolute;
  // right: 0;
  // top: -5px;
  margin: 5px;
  opacity: .75;
}

</style>
