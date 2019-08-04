<template>
  <div>
  <editor-shell :vu="this">
    <span slot="title">Image</span>
    <q-banner class="bg-primary text-white">
      <q-btn flat color="white" @click="showImagePrompt">Add from Media Library</q-btn>
    </q-banner>
    <q-dialog v-model="showImgChooser">
      <ImageChooser :select="insertImage" />
    </q-dialog>
  </editor-shell>
  </div>
</template>

<script>
import { BlockCreatorMixin } from '../../../mixins'
// Have to import separately to avoid circular dependency
import EditorShell from '../../../components/EditorShell'
import ImageChooser from '../../../components/ImageChooser'

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
.image-creator
  background-color: gray
</style>
