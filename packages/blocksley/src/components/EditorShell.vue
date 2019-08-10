<template>
  <div ref="shell"
    tabindex="-1"
    class="editor-shell"
    @keyup="onKeyUp"
    @focus="onFocus"
    @blur="onBlur"
  >
    <div v-if="parent" class="shell-header" :class="{'sticky-header': stickyHeader}">
      <q-bar class="shell-bar" @click="barClick">
        <shell-fab direction="right" icon="drag_indicator" color="primary">
          <q-btn fab-mini icon="keyboard_arrow_up" color="primary" @click="frame.move('up')"/>
          <q-btn fab outlined class="grippy" icon="drag_indicator" color="primary"/>
          <q-btn fab-mini icon="keyboard_arrow_down" color="primary" @click="frame.move('down')"/>
        </shell-fab>
        <slot name="title"/>
        <q-btn fab-mini flat icon="add_circle_outline" color="primary" @click="frame.add()"/>
        <q-space />
        <shell-fab icon="more_vert" color="primary">
          <q-btn fab-mini icon="playlist_add" color="primary" @click="frame.add()"/>
          <q-btn fab-mini icon="delete" color="primary" @click="frame.remove()"/>
          <q-btn fab-mini icon="visibility" color="primary" @click="frame.use('Viewer')"/>
          <shell-fab fab-mini icon="unfold_more" color="primary">
            <q-btn fab-mini icon="keyboard_arrow_up" color="primary" @click="frame.move('up')"/>
            <q-btn fab outlined class="grippy" icon="drag_indicator" color="primary"/>
            <q-btn fab-mini icon="keyboard_arrow_down" color="primary" @click="frame.move('down')"/>
          </shell-fab>
        </shell-fab>
      </q-bar>
      <q-toolbar v-if="this.$slots.menu" ref="toolbar" v-show="toolbarVisible" class="shell-toolbar">
        <slot v-if="!this.menu.isActive" name="menu"/>
        <slot v-else name="aux"/>
        <!--
        <transition v-else
          appear
          enter-active-class="animated fadeInRight"
          leave-active-class="animated fadeOutRight"
        >
          <slot name="aux"/>
        </transition>
        -->
      </q-toolbar>
    </div>
    <div
      class="shell-inner"
      v-bind:class="{ 'child-shell': !isRoot }"
      @contextmenu="contentContext"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
import ShellFab from './ShellFab'
import SelectionPlugin from '../plugins/Selection'

export default {
  name: 'EditorShell',
  props: {
    vu: null,
    editor: null
  },
  components: {
    ShellFab
  },
  data () {
    return {
      frame: { grippy: false },
      model: {},
      view: null,
      parent: null,
      $_activeChild: null,
      // toolbarVisible: this.$q.platform.is.desktop,
      toolbarVisible: true,
      menuVisible: false,
      menu: {
        isActive: false,
        left: 0,
        bottom: 0
      },
      delay: 250,
      barClicks: 0,
      contentClicks: 0,
      // stickyHeader: this.$q.platform.is.desktop
      stickyHeader: true
    }
  },
  computed: {
    isRoot () {
      return this.parent === null
    },
    activeChild: {
      get () {
        return this.$_activeChild
      },
      set (child) {
        // console.log('set active child')
        // console.log(child)
        // console.trace()
        if (this.$_activeChild && this.$_activeChild !== child) {
          this.$_activeChild.close()
        }
        this.$_activeChild = child
        if (!this.$_activeChild) {
          this.showToolbar()
        }
      }
    },
    grippy: {
      get () {
        return this.frame.grippy
      },
      set (val) {
        this.frame.grippy = val
      }
    }
  },
  mounted () {
    this.frame = this.vu.frame
    this.model = this.vu.model
    console.log(this.model)
    const editor = this.editor
    if (editor) {
      this.view = editor.view
      editor.on('focus', this.onEditorFocus)
      editor.on('blur', this.onEditorBlur)
      this.$nextTick(() => {
        editor.registerPlugin(SelectionPlugin(
          this,
          editor,
          (menu) => {
            // the second check ensures event is fired only once
            if (menu.isActive && this.menu.isActive === false) {
              this.$emit('show', menu)
            } else if (!menu.isActive && this.menu.isActive === true) {
              this.$emit('hide', menu)
            }
            this.menu = menu
          }
        ))
      })
    }
    this.onOpen()
  },
  beforeDestroy () {
    this.onClose()
  },
  methods: {
    onAction (action) {
      this.$emit('action', action)
    },
    onOpen () {
      console.log('shell opened')
      //
      const closest = this.$el.parentElement.closest('.editor-shell')
      this.parent = closest ? closest.__vue__ : null

      if (this.parent) {
        console.log('parent shell')
        console.log(this.parent)
        this.parent.hideToolbar()
        this.parent.activeChild = this
      }
      this.$refs.shell.focus()
    },
    close () {
      console.log('close shell')
      this.frame.use('Viewer')
    },
    onClose () {
      console.log('shell closed')
      // this.$refs.shell.blur()
    },
    onKeyUp (evt) {
      // console.log('keyup')
      // console.log(e)
      // TODO: This needs more work
      if (evt.key === 'Escape' && this.parent) {
        this.close()
      }
    },
    onFocus (evt) {
      if (evt.defaultPrevented) {
        return
      }
      evt.preventDefault()
      console.log('shell focus')
      console.log(evt)
      this.activeChild = null
      this.showToolbar()
    },
    onBlur (evt) {
      if (evt.defaultPrevented) {
        return
      }
      evt.preventDefault()
      console.log('shell blur')
      console.log(evt)
    },
    onEditorFocus (args) {
      console.log('editor focus')
      console.log(args)
      this.onFocus(args.event)
    },
    onEditorBlur (args) {
      console.log('editor blur')
      console.log(args)
    },
    hideMenu (e) {
      console.log('hide menu')
      // e.preventDefault()
      this.toggleMenu()
    },
    toggleMenu (e) {
      this.menuVisible = !this.menuVisible
      if (this.menuVisible) {
        this.$refs.menu.show(e)
      } else {
        this.$refs.menu.hide(e)
      }
    },
    showToolbar () {
      this.toolbarVisible = true
    },
    hideToolbar () {
      this.toolbarVisible = false
    },
    toggleToolbar (e) {
      this.toolbarVisible = !this.toolbarVisible
    },
    toggleGrippy () {
      this.grippy = !this.grippy
    },
    toggleStickyHeader () {
      this.stickyHeader = !this.stickyHeader
    },
    barClick (e) {
      console.log('detect bar click')
      this.barClicks++
      if (this.barClicks === 1) {
        setTimeout(() => {
          switch (this.barClicks) {
            case 1:
              // console.log('single click')
              break
            default:
              // console.log('double click')
              this.toggleToolbar()
          }
          this.barClicks = 0
        }, this.delay)
      }
    },
    contentClick (e) {
      console.log('content click')
      console.log(e)
      e.preventDefault()
      this.contentClicks++
      if (this.contentClicks === 1) {
        setTimeout(() => {
          switch (this.contentClicks) {
            case 1:
              console.log('single click')
              // this.toggleMenu()
              break
            default:
              console.log('double click')
              // this.toggleMenu()
          }
          this.contentClicks = 0
        }, this.delay)
      }
    },
    contentContext (e) {
      console.log('context click')
      console.log(e)
      if (e.defaultPrevented) {
        return
      }
      if (!this.$q.platform.is.desktop) {
        // this.hideKeyboard()
        e.preventDefault()
      }
      // this.toggleMenu(e)
    },
    hideKeyboard () {
      if (
        document.activeElement &&
        document.activeElement.blur &&
        typeof document.activeElement.blur === 'function'
      ) {
        document.activeElement.blur()
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
  background-color: white !important
  background-image: linear-gradient(17deg,rgba(243,248,255,.03) 63.45%,rgba(207,214,229,.27) 98%)
  background-repeat: no-repeat

.sticky-header
  sticky()
  top: 0
  opacity: 1
  z-index: 500

.shell-header
  shell-background()

.editor-shell
  position: relative;
  max-width: 1080px;

.child-shell
  shell-background()
  background-position: 0px -40px
  border-bottom 1px solid rgba(0,0,0,.27);
  box-shadow:
    0px 11px 8px -10px #CCC;

.shell-inner
  position: relative

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
  shell-background()

.shell-menu {
  position: absolute;
  left: 0;
  top: -32px;
}
</style>
