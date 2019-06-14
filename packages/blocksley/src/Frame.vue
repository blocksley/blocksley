<template>
  <component v-bind:is="vu" :frame="this" :model="model" :class="model.class" @action="this.onAction" @active="this.onActive"/>
</template>

<script>

import views from './views'
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
      isActive: false
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
    if (this.model.state === 'create') {
      if (views[this.model.type].creator) {
        this.vu = views[this.model.type].creator
      } else {
        // TODO:  Throw an error?
        this.model.state = 'normal'
        this.vu = views[this.model.type].editor
      }
    } else {
      this.vu = views[this.model.type].viewer
    }
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
      this.vu = views[this.model.type].editor
    },
    deactivate () {
      this.isActive = false
      this.vu = views[this.model.type].viewer
    }
  }
}
</script>

<style lang="stylus">
</style>
