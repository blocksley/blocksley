<template>
  <div class="blocksley-editor">
    <frame ref="frame" :root="true" :model="model"/>
  </div>
</template>

<script>
import BlocksleyStore from 'blocksley/store'

import { UiMixin } from 'blocksley/mixins'
import Frame from './Frame'

export default {
  mixins: [ UiMixin ],
  props: {
    model: {
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
      active: null
    }
  },
  created () {
    if(!this.$store.state.blocksley) {
      this.$store.registerModule('blocksley', BlocksleyStore)
    }
  },
  mounted () {
    this.$refs.frame.edit()
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
.blocksley-editor {
}
</style>