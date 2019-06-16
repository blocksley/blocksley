<template>
  <div class="shell-fab" v-clickaway="hide">
    <q-btn fab-mini flat :color="color" class="shell-fab-btn" :icon="icon" @click="onClick()"/>

    <transition
      appear
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
    >
    <div ref="container" v-show="visible" class="shell-fab-actions">
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
    actions: null,
    icon: '',
    color: {
      type: String,
      default: 'primary'
    }
  },
  components: {
  },
  data () {
    return {
      visible: false,
      fabParent: null
    }
  },
  computed: {
  },
  watch: {
    visible () {
      if(!this.visible && this.fabParent) {
        this.$el.parentElement.replaceChild(this.fabParent.$el, this.$el)
        setTimeout(() => {
          this.fabParent.toggle()
        }, 100)
      }
    }
  },
  mounted () {
    console.log('shell fab mounted')
    console.log(this.$slots.default)
    for (var i = 0; i < this.$slots.default.length; i++) {
      const vnode = this.$slots.default[i]
      const child = vnode.componentInstance
      child.fabParent = this
      console.log(child)
      if(child.$options._componentTag === 'shell-fab') {
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
    onClick () {
      this.toggle()
    },
    hide () {
      this.visible = false
    },
    show () {
      this.visible = true
    },
    toggle () {
      this.visible = !this.visible
    },
    createProxy(fab) {
      var ComponentClass = Vue.extend(QBtn)
      var child = new ComponentClass({
        propsData: { fabMini: true, icon: fab.icon, color: 'primary' }
      })
      child.$mount() // pass nothing
      this.$refs.container.replaceChild(child.$el, fab.$el)
      child.$on('click', (evt) => {
        console.log('shell fab proxy click')
        console.log(fab)
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
.shell-fab-btn {
  z-index: 990;
}
.shell-fab-actions {
  position: absolute;
  z-index: 990;
  top:-4px;
  right:48px;
}
.shell-fab-actions > * {
    margin: 4px;
}

</style>
