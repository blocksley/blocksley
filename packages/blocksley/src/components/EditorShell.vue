<template>
  <div ref="shell" tabindex="-1" class="editor-shell"  @contextmenu="onContext($event)" @click="hideMenu($event)">
    <q-bar class="shell-toolbar text-primary">
      <!-- <div class="grippy ">
        <q-icon name="drag_indicator" class="grippy-icon"/>
        <slot name="title"/>
      </div> -->
      <shell-fab direction="right" icon="drag_indicator" color="primary">
        <q-btn fab-mini icon="keyboard_arrow_up" color="primary"/>
        <q-btn fab outlined class="grippy" icon="drag_indicator" color="primary"/>
        <q-btn fab-mini icon="keyboard_arrow_down" color="primary"/>
      </shell-fab>
      <slot name="title"/>
      <q-space />
      <shell-fab icon="more_vert" color="primary">
        <q-btn fab-mini icon="playlist_add" color="primary" @click="vu.add()"/>
        <q-btn fab-mini icon="delete" color="primary" @click="vu.remove()"/>
        <q-btn fab-mini icon="visibility" color="primary" @click="vu.view()"/>
        <shell-fab fab-mini icon="unfold_more" color="primary">
          <q-btn fab-mini icon="keyboard_arrow_up" color="primary"/>
          <q-btn fab outlined class="grippy" icon="unfold_more" color="primary"/>
          <q-btn fab-mini icon="keyboard_arrow_down" color="primary"/>
        </shell-fab>
      </shell-fab>
    </q-bar>
    <!-- <div class="col" @contextmenu.prevent.stop="onContext" @click.prevent.stop="hideMenu"> -->
    <!-- <div> -->
    <div class="col" style="position: relative;">
      <slot/>
      <!-- <q-menu ref="menu" context-menu touch-position auto-close content-class="bg-black text-white"> -->
      <q-menu ref="menu" no-parent-event touch-position auto-close content-class="bg-black text-white">
        <slot name="menu"/>
      </q-menu>
    </div>
      <!-- <q-menu ref="menu" no-parent-event touch-position auto-close content-class="bg-black text-white"> -->
  </div>
</template>

<script>
import ShellActions from './ShellActions'
import ShellFab from './ShellFab'

export default {
  name: 'EditorShell',
  props: {
    vu: null
  },
  components: {
    ShellActions,
    ShellFab
  },
  data () {
    return {
      frame: { grippy: false },
      model: {},
      showBar: false,
      showMenu: false,
      delay: 250,
      numClicks: 0
    }
  },
  computed: {
    grippy: {
      get () {
        return this.frame.grippy
      },
      set (val) {
        this.frame.grippy = val
      }
    },
    grippyIcon () {
      return this.grippy ? 'unfold_more' : 'more_vert'
    }
  },
  mounted () {
    this.frame = this.vu.frame
    this.model = this.vu.model
    console.log(this.model)
    this.$refs.shell.focus()
    /*
    if (this.$q.platform.is.mobile) {
      this.$refs.shellMenu.$on('click', this.detectClick)
    }
    */
  },
  beforeDestroy () {
    this.$refs.shell.blur()
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
    onContext(e) {
      console.log('context click')
      console.log(e)
      if(e.defaultPrevented) {
        return;
      }
      //Prevent @contextclick from propagating
      e.preventDefault()
      this.showMenu = !this.showMenu
      if (this.showMenu) {
        this.$refs.menu.show(e)
      } else {
        this.$refs.menu.hide(e)
      }
    },
    hideMenu (e) {
      console.log('click away')
      this.showMenu = false
      this.$refs.menu.hide(e)
    },
    toggleMenu () {
      this.showMenu = !this.showMenu
      if (this.showMenu) {
        this.$refs.menu.show(e)
      }
    },
    toggleGrippy () {
      this.grippy = !this.grippy
    },
    detectClick (e) {
      console.log('detect click')
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

shell-background()
  background-color: white;
  background-image: linear-gradient(17deg,rgba(243,248,255,.03) 63.45%,rgba(207,214,229,.27) 98%);
  background-repeat: no-repeat;

.editor-shell {
  position: relative;
  max-width: 1080px;
  shell-background()
  background-position: 0px -32px;
  border-bottom 1px solid rgba(0,0,0,.27);
  box-shadow:
    0px 11px 8px -10px #CCC;
}

.shell-toolbar {
  width: 100%;
  margin-top: -32px;
  padding:0px
  shell-background()
  border-top 1px solid rgba(0,0,0,.27);
  box-shadow:
    0px -11px 8px -10px #CCC; 
}
.shell-menu {
  position: absolute;
  left: 0;
  top: -32px;
}
.grippy-icon {
  // font-size: 1.5rem;
  // position: relative;
  // position: absolute;
  margin-right: 8px;
  // z-index: 990;
  // opacity: .75;
}

.grippy-menu {
  // font-size: 1.5rem;
  // position: relative;
  position: absolute;
  left: 50%;
  top: -8px;
  width: 200px;
  margin-left: -100px;
  z-index: 990;
  // margin: 5px;
  // opacity: .75;
}
.grippy-menu > * {
    margin: 5px;
}
</style>
