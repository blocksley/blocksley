<template>
  <div>
  <editor-shell :vu="this">
    <span slot="title">Image</span>
    <!--
    <q-banner class="bg-primary text-white">
      <q-btn flat color="white" @click="showImagePrompt">Add from Media Library</q-btn>
    </q-banner>
    -->
    <q-dialog v-model="showImgChooser" @escape-key="validate" @hide="validate">
      <component :is="state.imageChooser" :select="insertImage" />
    </q-dialog>
  </editor-shell>
  </div>
</template>

<script>
import { BlockCreatorMixin } from '../../../mixins'
import EditorShell from '../../../components/EditorShell'
import ImageChooser from '../../../components/ImageChooser'

export default {
  name: 'ImageBlockCreator',
  mixins: [ BlockCreatorMixin ],
  props: ['frame', 'model'],
  inject: ['state'],
  components: {
    EditorShell,
    ImageChooser
  },
  data () {
    return {
      // showImgChooser: false
      showImgChooser: true
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
      console.log('insertImage: ', image)
      this.model.state = 'normal'
      this.model.src = image.src
      this.showImgChooser = false
      this.frame.edit()
    },
    validate() {
      if (this.model.state != 'normal') {
        this.frame.remove()
      }
    }
  }
}
</script>

<style lang="stylus">
.image-creator
  background-color: gray
</style>
