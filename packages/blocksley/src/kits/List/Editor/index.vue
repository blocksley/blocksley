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
import { Editor, EditorContent } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  Image,
  History
} from 'tiptap-extensions'

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
      editor: new Editor({
        autoFocus: true,
        content: this.model.data,
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new Image(),
          new History()
        ]
      }),
      showImgChooser: false
    }
  },
  mounted () {
    // this.editor.setContent(this.model.data)
  },
  beforeDestroy () {
    this.model.data = this.editor.getHTML()
    this.editor.destroy()
  },
  methods: {
  }
}
</script>

<style lang="stylus">
</style>
