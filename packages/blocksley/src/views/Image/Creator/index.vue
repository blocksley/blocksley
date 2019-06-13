<template>
  <editor-shell :view="this">
    <q-dialog v-model="showImgChooser">
      <ImageChooser :select="insertImage" />
    </q-dialog>
    <q-btn @click="showImagePrompt">Add from Media Library</q-btn>
  </editor-shell>
</template>

<script>
import EditorShell from 'blocksley/EditorShell'
import { BlockCreatorMixin } from 'blocksley/mixins'
import ImageChooser from 'blocksley/ImageChooser'

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
      this.model.src = src
      this.showImgChooser = false
      this.edit()
    }
  }
}
</script>

<style lang="stylus">
</style>
