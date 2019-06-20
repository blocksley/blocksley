<template>
  <!-- <div ref="shell" tabindex="-1" class="editor-shell"  @contextmenu="onContext($event)" @click="hideMenu($event)"> -->
  <div ref="shell" tabindex="-1" class="editor-shell" @contextmenu="onContext($event)" @click="detectClick($event)">
    <div class="shell-inner">
    <div class="shell-header" :class="{'sticky-header': stickyHeader}">
      <q-bar class="shell-bar">
        <shell-fab direction="right" icon="drag_indicator" color="primary">
          <q-btn fab-mini icon="keyboard_arrow_up" color="primary"/>
          <q-btn fab outlined class="grippy" icon="drag_indicator" color="primary"/>
          <q-btn fab-mini icon="keyboard_arrow_down" color="primary"/>
        </shell-fab>
        <slot name="title"/>
        <q-space />
        <!-- <q-btn fab-mini flat icon="build" color="primary"/> -->
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
      <q-toolbar class="shell-toolbar">
        <slot name="menu"/>
      </q-toolbar>
    </div>
    <div>
      <slot/>
      <shell-menu ref="menu">
        <slot name="menu"/>
      </shell-menu>
      <shell-dialog ref="dialog" content-class="menubar-dark">
        <template v-slot:default="slotScope">
          <slot name="menu" v-bind:content-class="slotScope.contentClass"/>
        </template>
      </shell-dialog>
    </div>
    </div> <!--shell-inner-->
  </div>
</template>

<script>
import ShellMenu from './ShellMenu'
import ShellDialog from './ShellDialog'
import ShellFab from './ShellFab'

export default {
  name: 'EditorShell',
  props: {
    vu: null
  },
  components: {
    ShellMenu,
    ShellDialog,
    ShellFab
  },
  data () {
    return {
      frame: { grippy: false },
      model: {},
      showBar: false,
      showMenu: false,
      delay: 250,
      numClicks: 0,
      stickyHeader: this.$q.platform.is.desktop
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
      e.preventDefault()
      this.showMenu = !this.showMenu
      if (this.showMenu) {
        // this.$refs.menu.show(e)
        this.$refs.dialog.show(e)
      } else {
        // this.$refs.menu.hide(e)
        this.$refs.dialog.hide(e)
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
    toggleStickyHeader () {
      this.stickyHeader = !this.stickyHeader
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
                      // this.toggleMenu()
                      break;
                    default:
                      // console.log('double click')
                      this.toggleStickyHeader()
              }
              this.numClicks = 0               // reset the first click
          }, this.delay);                              // wait 0.2s
      }
    } 
  }
}
</script>

<style lang="stylus">
sticky()
  position: -webkit-sticky; /* Safari */
  position: sticky;

shell-background()
  background-color: white
  background-image: linear-gradient(17deg,rgba(243,248,255,.03) 63.45%,rgba(207,214,229,.27) 98%)
  background-repeat: no-repeat

.sticky-header
  sticky()
  top: 0
  z-index: 500

.shell-header
  shell-background()

.editor-shell {
  position: relative;
  max-width: 1080px;
  shell-background()
  background-position: 0px -32px
  border-bottom 1px solid rgba(0,0,0,.27);
  box-shadow:
    0px 11px 8px -10px #CCC;
}

.shell-inner
  shell-background()
  
.shell-bar {
  width: 100%;
  margin-top: -32px;
  padding:0px
  shell-background()
  border-top 1px solid rgba(0,0,0,.27);
  box-shadow:
    0px -11px 8px -10px #CCC;
  color: $primary
}

.shell-toolbar
  // padding:0px
  shell-background()

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
