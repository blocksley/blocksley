<template>
  <div>
    <component v-bind:is="vu" :frame="this" :model="model" :class="model.class" @action="this.onAction" @active="this.onActive"/>
  </div>
</template>

<script>

import kits from 'blocksley/kits'
export default {
  props: {
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
      vu: null,
      isActive: false,
      grippy: false
    }
  },
  computed: {
  },
  /* watch: {
    model: {
      deep: true,
      handler () {
        console.log('model changed')
        console.log(this.model)
      }
    }
  }, */
  mounted () {
    console.log(this.model)
    this.vu = kits[this.model.type].editor
  },
  beforeDestroy () {
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
      this.vu = kits[this.model.type].editor
    },
    deactivate () {
      this.isActive = false
      this.vu = kits[this.model.type].viewer
    },
    onDragStart () {
      console.log('frame drag started')
    },
    onDragEnd () {
      this.grippy = false
    }
  }
}
</script>

<style lang="stylus">
</style>
