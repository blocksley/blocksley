<template>
  <component :is="vu" :frame="this" :model="model" :class="model.class" @action="this.onAction"/>
</template>

<script>

import kits from '../kits'
export default {
  props: {
    root: {
      type: Boolean,
      default: false
    },
    embedded: {
      type: Boolean,
      default: false
    },
    model: {
      default () {
        return {
          type: 'html',
          html: '<h1>Hello</h1>'
        }
      }
    }
  },
  components: {
  },
  data () {
    return {
      parent: null,
      vu: null,
      grippy: false
    }
  },
  computed: {
  },
  mounted () {
    console.log(this.model)
    if (this.model.state === 'create') {
      if (kits[this.model.type].Creator) {
        this.use('Creator')
      } else {
        this.use('Editor')
      }
    } else {
      this.use('Viewer')
    }
  },
  beforeDestroy () {
  },
  methods: {
    use (toolName) {
      this.vu = kits[this.model.type][toolName]
    },
    onAction (action) {
      this.$emit('action', action)
    },
    edit () {
      this.use('Editor')
    },
    browse () {
      this.use('Viewer')
    },
    add () {
      this.$emit('action', { type: 'add', model: this.model })
    },
    remove () {
      this.$emit('action', { type: 'remove', model: this.model })
    },
    move (to) {
      this.$emit('action', { type: 'move', model: this.model, to })
    },
    onDragStart () {
      console.log('frame drag started')
    },
    onDragEnd () {
      this.grippy = false
    },
    isEventInElement (event, element) {
      var rect = element.getBoundingClientRect()
      var x = event.clientX
      if (x < rect.left || x >= rect.right) return false
      var y = event.clientY
      if (y < rect.top || y >= rect.bottom) return false
      return true
    }
  }
}
</script>

<style lang="stylus">
</style>
