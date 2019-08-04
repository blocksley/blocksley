<template>
  <!-- Need this wrapping div or component will bind to shell element.  Bad -->
  <div>
  <editor-shell :vu="this" :editor="editor">
    <span slot="title">Html</span>
    <main-menu slot="menu" :vu="this" :editor="editor"/>
    <aux-menu slot="aux" :editor="editor" />
    <floating-menu :editor="editor" />
    <editor-content class="editor__content" :editor="editor" />
    <q-dialog v-model="showImgChooser">
      <image-chooser :select="insertImage" />
    </q-dialog>
  </editor-shell>
  </div>
</template>

<script>
import MainMenu from './MainMenu'
import FloatingMenu from './FloatingMenu'
import AuxMenu from './AuxMenu'
import ImageChooser from '../../../components/ImageChooser'
import { EditorContent } from 'tiptap'

import { BlockEditorMixin, RichEditorMixin, UiMixin } from '../../../mixins'
import EditorShell from '../../../components/EditorShell'

export default {
  name: 'HtmlBlockEditor',
  mixins: [ BlockEditorMixin, RichEditorMixin, UiMixin ],
  props: ['frame', 'model'],
  components: {
    EditorContent,
    EditorShell,
    MainMenu,
    FloatingMenu,
    AuxMenu,
    ImageChooser
  },
  data () {
    return {
      edit: false,
      showImgChooser: false
    }
  },
  mounted () {
    console.log('html editor mounted')
    console.log(this.editor)
  },
  methods: {
    showImagePrompt () {
      this.showImgChooser = true
    },
    insertImage (image) {
      const src = image.src
      this.editor.commands.image({ src })
      this.showImgChooser = false
    },
    insertImageBlock () {
      this.editor.commands.imageBlock()
    }
  }
}
</script>

<style lang="stylus">
</style>
