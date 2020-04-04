<template>
  <div class="shell-fab" v-clickaway="hide">
    <q-btn fab-mini flat :color="color" class="shell-fab-btn" :icon="icon" @click="onClick"/>

    <transition v-if="direction=='left'"
      appear
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
    >
      <div ref="container" v-show="visible" class="shell-fab-actions shell-fab-actions-left">
        <slot />
      </div>
    </transition>
    <transition v-else-if="direction=='right'"
      appear
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutLeft"
    >
      <div ref="container" v-show="visible" class="shell-fab-actions shell-fab-actions-right">
        <slot />
      </div>
    </transition>

  </div>
</template>

<script>
import { QBtn } from 'quasar'
import Vue from 'vue'

export default {
  name: 'ShellFab',
  props: {
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      // default: 'primary'
      default: 'black'
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
      /*
      if(!this.visible && this.fabParent) {
        this.$el.parentElement.replaceChild(this.fabParent.$el, this.$el)
        setTimeout(() => {
          this.fabParent.toggle()
        }, 100)
      }
      */
      if (!this.visible && this.fabRoot) {
        this.$el.parentElement.replaceChild(this.fabRoot.$el, this.$el)
      }
    }
  },
  mounted () {
    // console.log('shell fab mounted')
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
      if (child.$options._componentTag === 'shell-fab') {
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
      this.visible = true
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
        console.log('shell fab proxy click')
        console.log(fab)
        e.preventDefault()
        this.$el.parentElement.replaceChild(fab.$el, this.$el)
        setTimeout(() => {
          fab.toggle()
        }, 100)
      })
    }
  }
}
</script>

<style lang="stylus">
.shell-fab {
}
.shell-fab-actions > .q-btn {
  color: white
  background-color: $primary
  // background-color: #222222;
  // opacity: 1; // Leave this as 1
  // background-color: rgba(0,0,0,0.8); // This is in the form rgba(R,G,B,a) where a is your opacity
}
.shell-fab-btn {
  z-index: 990;
  position relative
}
.shell-fab-actions
  position: absolute;
  z-index: 990;
  top:-4px;
/*
.shell-fab-actions button
  background-color: #027be3
  color: white
*/
.shell-fab-actions-left {
  right:48px;
}
.shell-fab-actions-right {
  left:48px;
}

.shell-fab-actions > * {
    margin: 4px;
    display: inline-block
}

</style>
