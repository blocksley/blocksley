<template>
  <div class="flower-fab" v-clickaway="hide">
    <transition v-if="direction=='left'"
      appear
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
    >
      <div ref="container" v-show="visible" class="flower-fab-actions flower-fab-actions-left">
        <slot />
      </div>
    </transition>
    <transition v-else-if="direction=='right'"
      appear
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutLeft"
    >
      <div ref="container" v-show="visible" class="flower-fab-actions flower-fab-actions-right">
        <slot />
      </div>
    </transition>

  </div>
</template>

<script>
import { QBtn } from 'quasar'
import Vue from 'vue'

export default {
  name: 'FlowerFab',
  props: {
    icon: '',
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
      offsetX: 0,
      offsetY: 0
    }
  },
  computed: {
  },
  watch: {
    visible () {
      if(!this.visible && this.fabRoot) {
        this.$el.parentElement.replaceChild(this.fabRoot.$el, this.$el)
      }
    }
  },
  mounted () {
    console.log('shell fab mounted')
    const slots = this.$slots.default 
    // console.log(slots)
    for (var i = 0; i < slots.length; i++) {
      const child = slots[i].componentInstance
      child.fabParent = this
      child.fabRoot = this.fabRoot ? this.fabRoot : this
      // console.log(child)
      if(child.$options._componentTag === 'flower-fab') {
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
      this.offsetX = e.offsetX
      this.offsetY = e.offsetY
      el.style.top = e.offsetY + 'px'
      el.style.left = e.offsetX + 'px'
    },
    toggle () {
      this.visible = !this.visible
    },
    createProxy(fab) {
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
        fab.$el.style.top = this.offsetY + 'px'
        fab.$el.style.left = this.offsetX + 'px'

        setTimeout(() => {
          fab.toggle()
        }, 100)
      })
    }
  }
}
</script>

<style lang="stylus">
.flower-fab {
  position: absolute;
  z-index: 990;
  display: flex
  max-width: fit-content
  min-height: 100%;
}
.flower-fab-btn {
  position: relative
  top: -50%
  left: -50%
}
.flower-fab-actions
  position: absolute;
  top:-4px;

.flower-fab-actions-left {
  right:48px;
}
.flower-fab-actions-right {
  left:48px;
}

.flower-fab-actions > * {
    display: inline-block
    margin: 4px;
}

</style>
