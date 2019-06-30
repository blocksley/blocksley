<template>
  <div>
  <editor-shell :vu="this" :editor="editor">
    <span slot="title">List</span>
    <main-menu slot="menu" :vu="this" :editor="editor"/>
    <floating-menu :editor="editor" />
    <aux-menu slot="aux" :editor="editor" />
    <editor-content class="editor__content" :editor="editor"/>
  </editor-shell>
  </div>
</template>

<script>
import MainMenu from './MainMenu'
import FloatingMenu from './FloatingMenu'
import AuxMenu from './AuxMenu'
import { ImageChooser } from 'blocksley/components'
import { EditorContent } from 'tiptap'

import EditorShell from 'blocksley/components/EditorShell'
import { BlockEditorMixin, RichEditorMixin  } from 'blocksley/mixins'

export default {
  name: 'HtmlBlockEditor',
  mixins: [ BlockEditorMixin, RichEditorMixin ],
  props: ['frame', 'model'],
  components: {
    EditorShell,
    EditorContent,
    FloatingMenu,
    MainMenu,
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
  },
  methods: {
  }
}
</script>

<style lang="stylus">
</style>
