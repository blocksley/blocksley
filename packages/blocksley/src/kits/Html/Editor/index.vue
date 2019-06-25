<template>
  <!-- Need this wrapping div or component will bind to shell element.  Bad -->
  <div>
  <editor-shell :vu="this" :editor="editor">
    <q-dialog v-model="showImgChooser">
      <image-chooser :select="insertImage" />
    </q-dialog>
    <span slot="title">Html</span>
    <main-menu slot="menu" :vu="this" :editor="editor"/>
    <aux-menu slot="aux" :editor="editor" />
    <floating-menu :editor="editor" />
    <editor-content class="editor__content" :editor="editor" />
  </editor-shell>
  </div>
</template>

<script>
import MainMenu from './MainMenu'
import FloatingMenu from './FloatingMenu'
import AuxMenu from './AuxMenu'
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

import { BlockEditorMixin, RichEditorMixin, UiMixin } from 'blocksley/mixins'
import EditorShell from 'blocksley/components/EditorShell'

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
    console.log('html editor mounted')
    console.log(this.editor)
    // this.editor.setContent(this.model.data)
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
    },
    onFocus (args) {
      console.log('editor focus')
      console.log(args)
    },
    onBlur (args) {
      console.log('editor blur')
      console.log(args)
    }
  }
}
</script>

<style lang="stylus">
</style>
