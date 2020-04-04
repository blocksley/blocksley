<template>
  <div>
  <editor-shell :vu="this" :editor="editor">
    <span slot="title">HTML</span>
    <main-menu slot="menu" :vu="this" :editor="editor"/>
    <aux-menu slot="aux" :editor="editor" />
    <floating-menu :editor="editor" />
    <editor-content class="editor__content" :editor="editor" />
    <q-dialog v-model="showImgChooser">
      <component :is="state.imageChooser" :select="insertImage" />
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

import { BlockEditorMixin, RichEditorMixin } from '../../../mixins'
import EditorShell from '../../../components/EditorShell'

export default {
  name: 'HtmlBlockEditor',
  mixins: [ BlockEditorMixin, RichEditorMixin ],
  props: ['frame', 'model'],
  inject: ['state'],
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
    insertImage () {
      this.editor.commands.image()
    }
  }
}
</script>

<style lang="stylus">
</style>
