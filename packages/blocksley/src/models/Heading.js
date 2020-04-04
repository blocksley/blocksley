import Rich from './Rich'
import { Editor } from 'tiptap'
import {
  Heading,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'

export default class HeadingBlock extends Rich {
  constructor (options={}) {
    super('heading', options)
    if (this.value) {
      this.html = '<h2>' + this.value + '</h2>'
    } else {
      this.html = '<h2></h2>'
    }
    this.editor = new Editor({
      content: this.html,
      extensions: [
        new Heading({ levels: [1, 2, 3, 4] }),
        new Bold(),
        new Code(),
        new Italic(),
        new Link(),
        new Strike(),
        new Underline(),
        new History()
      ]
    })
    this.content = this.editor.getJSON()
  }
}
