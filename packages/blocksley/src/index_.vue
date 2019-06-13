<template>
  <frame :model="model" @active="onActive"/>
</template>

<script>
import BlocksleyStore from 'blocksley/store'
import { UiMixin } from 'blocksley/mixins'
import { Document } from './models'
import Frame from './Frame'

export default {
  mixins: [ UiMixin ],
  props: {
    post: {
      default () {
        return {
          id: '',
          title: '',
          summary: '',
          body: ''
        }
      }
    }
  },
  components: {
    Frame
  },
  data () {
    return {
      model: new Document('<title>My Page</title><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'),
      active: null
    }
  },
  created () {
    this.$store.registerModule('blocksley', BlocksleyStore)
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    onActive (frame) {
      if (this.active) {
        this.active.deactivate()
      }
      this.active = frame
    }
  }
}
</script>

<style lang="stylus">
  // @import 'css/main.styl'
</style>
