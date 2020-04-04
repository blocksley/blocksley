import Rich from './Rich'
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

import { Heading, Title, Image } from '../nodes'

export default class Html extends Rich {
  constructor (options) {
    super('html', options)
    this.editor = new Editor({
      content: this.html,
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
        new Title()
      ]
    })
    this.content = this.editor.getJSON()
  }
}
