<template>
  <div>
  <editor-shell :vu="this">
    <q-dialog v-model="showImgChooser">
      <ImageChooser :select="insertImage" />
    </q-dialog>
    <q-btn @click="showImagePrompt">Add from Media Library</q-btn>
  </editor-shell>
  </div>
</template>

<script>
import { BlockCreatorMixin } from 'blocksley/mixins'
// Have to import separately to avoid circular dependency
import EditorShell from 'blocksley/components/EditorShell'
import ImageChooser from 'blocksley/components/ImageChooser'

export default {
  name: 'ImageBlockCreator',
  mixins: [ BlockCreatorMixin ],
  props: ['frame', 'model'],
  components: {
    EditorShell,
    ImageChooser
  },
  data () {
    return {
      showImgChooser: false
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    showImagePrompt () {
      this.showImgChooser = true
    },
    insertImage (image) {
      const src = image.src
      this.model.state = 'normal'
      this.model.src = src
      this.showImgChooser = false
      this.frame.edit()
    }
  }
}
</script>

<style lang="stylus">
</style>
