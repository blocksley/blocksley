import Block from './Block'
import { Editor } from 'tiptap'
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

export default class Html extends Block {
  constructor (content) {
    super('html')
    this.data = content
    this.editor = new Editor({
      content: this.data,
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
    })
    this.content = this.editor.getJSON()
  }
}
