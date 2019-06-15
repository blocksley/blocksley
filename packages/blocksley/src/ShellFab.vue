<template>
  <div class="shell-fab" v-clickaway="hide">
    <q-btn fab-mini flat class="shell-fab-btn" :icon="icon" @click="visible=!visible"/>

    <transition
      appear
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
    >
    <div v-show="visible" class="shell-fab-actions">
      <slot />
    </div>
    </transition>
  </div>
</template>

<script>

export default {
  props: {
    icon: ''
  },
  components: {
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
  },
  mounted () {
    console.log('shell fab mounted')
    console.log(this.$slots.default)
    this.$slots.default.forEach( (vnode) => {
      const btn = vnode.componentInstance
      console.log(btn)
      btn.$on('click', (evt) => {
        console.log('shell fab button click')
        this.hide()
      })
    })
  },
  beforeDestroy () {
  },
  methods: {
    hide () {
      this.visible = false
    }
  }
}
</script>

<style lang="stylus">
.shell-fab {
}
.shell-fab-btn {
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
