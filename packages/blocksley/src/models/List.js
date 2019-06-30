import Block from './Block'
import { Editor } from 'tiptap'
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

export default class List extends Block {
  constructor (list) {
    super('list')
    if(list) {
      this.data = '<ul>'
      list.forEach( (item) => {
        this.data += '<li>' + item + '</li>'
      })
      this.data += '</ul>'
    } else {
      this.data = '<ul><li>Your list here</li></ul>'
    }
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
        new History()
      ]
    })
    this.content = this.editor.getJSON()
  }
}
