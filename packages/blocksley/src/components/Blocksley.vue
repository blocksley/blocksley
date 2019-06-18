<template>
  <div class="blocksley-editor">
    <frame ref="frame" :model="model"/>
  </div>
</template>

<script>
import BlocksleyStore from 'blocksley/store'

import nanoid from 'nanoid'
import { UiMixin } from 'blocksley/mixins'
import { Title, List, Image, Paragraph, Html, Document } from 'blocksley/models'
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
      model: new Document([
        new Title(),
        new Paragraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
        new Paragraph('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
        new Html('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>')
      ]),
      active: null
    }
  },
  created () {
    this.$store.registerModule('blocksley', BlocksleyStore)
  },
  mounted () {
    this.$refs.frame.activate()
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