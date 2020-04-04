<template>
  <div class="super-fab" v-clickaway="hide">
    <transition v-if="direction=='left'"
      appear
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
    >
      <div ref="container" v-show="visible" class="super-fab-actions super-fab-actions-left">
        <slot />
      </div>
    </transition>
    <transition v-else-if="direction=='right'"
      appear
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutLeft"
    >
      <div ref="container" v-show="visible" class="super-fab-actions super-fab-actions-right">
        <slot />
      </div>
    </transition>

  </div>
</template>

<script>
import { QBtn } from 'quasar'
import Vue from 'vue'

export default {
  name: 'SuperFab',
  props: {
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    direction: {
      type: String,
      default: 'left'
    }
  },
  components: {
  },
  data () {
    return {
      visible: false,
      fabRoot: null,
      fabParent: null,
      absoluteX: 0,
      absoluteY: 0,
      offsetX: 0,
      offsetY: 0
    }
  },
  computed: {
  },
  watch: {
    visible () {
      if (!this.visible && this.fabRoot) {
        this.$el.parentElement.replaceChild(this.fabRoot.$el, this.$el)
      }
    }
  },
  mounted () {
    // console.log('shell fab mounted')
    /*
    switch(this.direction) {
      case 'left':
        this.offsetX = 48
        break
      case 'right':
        this.offsetX = -48
        break
    } */
    const slots = this.$slots.default
    // console.log(slots)
    for (var i = 0; i < slots.length; i++) {
      const child = slots[i].componentInstance
      if (!child) {
        continue
      }
      child.fabParent = this
      child.fabRoot = this.fabRoot ? this.fabRoot : this
      // console.log(child)
      if (child.$options._componentTag === 'super-fab') {
        this.createProxy(child)
      } else {
        child.$on('click', (evt) => {
          console.log('shell fab button click')
          this.hide()
        })
      }
    }
  },
  beforeDestroy () {
  },
  methods: {
    onClick (e) {
      e.preventDefault()
      this.toggle()
    },
    hide (e) {
      this.visible = false
    },
    show (e) {
      console.log('show flower fab')
      console.log(e)
      this.visible = true
      const el = this.$el
      this.absoluteX = e.offsetX
      this.absoluteY = e.offsetY
      el.style.top = e.offsetY + 'px'
      el.style.left = e.offsetX + 'px'
    },
    toggle () {
      this.visible = !this.visible
    },
    createProxy (fab) {
      const ComponentClass = Vue.extend(QBtn)
      const child = new ComponentClass({
        propsData: { fabMini: true, icon: fab.icon, color: 'primary' }
      })
      child.$mount() // pass nothing
      fab.$el.parentElement.replaceChild(child.$el, fab.$el)
      child.$on('click', (e) => {
        e.preventDefault()
        console.log('shell fab proxy click')
        console.log(fab)
        this.$el.parentElement.replaceChild(fab.$el, this.$el)
        fab.$el.style.top = (this.absoluteY + this.offsetX) + 'px'
        fab.$el.style.left = (this.absoluteX + this.offsetY) + 'px'

        setTimeout(() => {
          fab.toggle()
        }, 100)
      })
    }
  }
}
</script>

<style lang="stylus">
.super-fab {
  position: absolute;
  z-index: 990;
  display: flex
  max-width: fit-content
  white-space:nowrap
  min-height: 100%;
}
.super-fab-actions > .q-btn {
  color: white
  background-color: $primary
}
.super-fab-btn {
  position: relative
}
.super-fab-actions
  position: absolute;
  top:-4px;

.super-fab-actions-left {
  // right:48px;
}
.super-fab-actions-right {
  // left:48px;
}

.super-fab-actions > * {
    display: inline-block
    margin: 4px;
}

</style>
