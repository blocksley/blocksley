<template>
  <editor-shell :vu="this" :editor="editor">
    <span slot="title">Heading</span>
    <main-menu slot="menu" :vu="this" :editor="editor"/>
    <aux-menu slot="aux" :editor="editor" />
    <editor-content class="editor__content" :editor="editor"/>
  </editor-shell>
</template>

<script>
import MainMenu from './MainMenu'
import AuxMenu from './AuxMenu'
import { EditorContent } from 'tiptap'

import EditorShell from '../../../components/EditorShell'
import { BlockEditorMixin, RichEditorMixin } from '../../../mixins'

export default {
  name: 'ParagraphEditor',
  mixins: [ BlockEditorMixin, RichEditorMixin ],
  props: ['frame', 'model'],
  components: {
    EditorShell,
    EditorContent,
    MainMenu,
    AuxMenu
  },
  data () {
    return {
      edit: false,
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
