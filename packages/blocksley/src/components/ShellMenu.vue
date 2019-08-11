<template>
  <q-menu ref="menu"
    no-parent-event
    touch-position
    class="shell-menu"
    content-class="shell-menu-content"
  >
    <q-icon name="drag_indicator"
      class="shell-menu-grip"
      style="float:left"
      @mousedown="dragStart"
      @mouseup="dragEnd"
      @mousemove="drag"
    />
    <!--
    <shell-fab direction="right" icon="drag_indicator" >
      <q-btn fab-mini icon="keyboard_arrow_up" />
      <q-btn fab outlined icon="drag_indicator" 
        @mousedown="dragStart"
        @mouseup="dragEnd"
        @mousemove="drag"
      />
      <q-btn fab-mini icon="keyboard_arrow_down" />
    </shell-fab>
    -->
    <slot/>
  </q-menu>
</template>

<script>
import ShellFab from './ShellFab'

export default {
  props: {
  },
  components: {
    ShellFab
  },
  data () {
    return {
      // dragItem: document.querySelector("#item"),
      // container: document.querySelector("#container"),
      active: false,
      currentX: 0,
      currentY: 0,
      initialX: 0,
      initialY: 0,
      xOffset: 0,
      yOffset: 0
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
    show (e) {
      this.$refs.menu.show(e)
    },
    hide (e) {
      this.$refs.menu.hide(e)
    },
    dragStart(e) {
        e.preventDefault();

      console.log('dragstart')
      if (e.type === "touchstart") {
        this.initialX = e.touches[0].clientX - this.xOffset;
        this.initialY = e.touches[0].clientY - this.yOffset;
      } else {
        this.initialX = e.clientX - this.xOffset;
        this.initialY = e.clientY - this.yOffset;
      }
      /*
      if (e.target === dragItem) {
        active = true;
      }*/
      this.active = true;
    },
    dragEnd(e) {
        e.preventDefault();

      this.initialX = this.currentX;
      this.initialY = this.currentY;
      active = false;
    },
    drag(e) {
      e.preventDefault();
      var clientX = 0
      var clientY = 0
      if (this.active) {      
        if (e.type === "touchmove") {
          clientX = e.touches[0].clientX
          clientY = e.touches[0].clientY
        } else {
          clientX = e.clientX
          clientY = e.clientY
        }
        this.currentX = clientX - this.initialX;
        this.currentY = clientY - this.initialY;

        this.xOffset = this.currentX;
        this.yOffset = this.currentY;
        const menu = this.$refs.menu 
        console.log(menu)
        this.$refs.menu.show(e)
        const portal  = menu.__portal
        console.log(portal)
        menu.absoluteOffset = [clientX, clientY]
        console.log(menu.absoluteOffset)
        menu.updatePosition()
        // this.setTranslate(this.currentX, this.currentY, this.$refs.menu.__portal.$el, e);
      }
    },
    setTranslate(xPos, yPos, el, e) {
      console.log(el)
      // el.style.transform = "translate3d(" + this.xPos + "px, " + this.yPos + "px, 0)";
      el.style.top = xPos
      el.style.left = yPos
      // this.$refs.menu.updatePosition()
    }
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
.shell-menu-grip {
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}
</style>
