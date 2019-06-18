<template>
  <editor-shell :vu="this">
    <q-dialog v-model="showImgChooser">
      <image-chooser :select="insertImage" />
    </q-dialog>
    <span slot="title">Html</span>
    <context-menu slot="menu" :vu="this" :editor="editor"/>
    <floating-menu :editor="editor" />
    <editor-content class="editor__content" :editor="editor" />
  </editor-shell>
</template>

<script>
import ContextMenu from './ContextMenu'
import FloatingMenu from './FloatingMenu'
import ImageChooser from 'blocksley/components/ImageChooser'
import { Editor, EditorContent } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  // Heading,
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
  // Image,
  History
} from 'tiptap-extensions'

import { Heading, Title, Image, ImageBlock } from 'blocksley/nodes'

import { BlockEditorMixin } from 'blocksley/mixins'
import EditorShell from 'blocksley/components/EditorShell'

export default {
  name: 'HtmlBlockEditor',
  mixins: [ BlockEditorMixin ],
  props: ['frame', 'model'],
  components: {
    EditorContent,
    EditorShell,
    ContextMenu,
    FloatingMenu,
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
          new History(),
          new ImageBlock(),
          new Title()
        ]
      }),
      showImgChooser: false
    }
  },
  mounted () {
    console.log('editor mounted')
    console.log(this.editor)
    // this.editor.setContent(this.model.data)
  },
  beforeDestroy () {
    console.log('editor destroyed')
    this.model.data = this.editor.getHTML()
    // this.model.data = this.editor.getJSON()
    console.log(this.editor.getJSON())
    console.log(this.editor)
    this.editor.destroy()
  },
  methods: {
    editText () {
      this.$router.push(`/pages/${this.id}/text`)
    },
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
    },
    onSwitch () {
      // this.setEditor(this.editor)
      // this.setToolbar(Toolbar)
    }
  }
}
</script>

<style lang="stylus">
</style>
