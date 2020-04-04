import Rich from './Rich'
import { Editor } from 'tiptap'
import {
  Blockquote,
  Bold,
  Italic,
  Strike,
  Underline,
  History,
  Placeholder
} from 'tiptap-extensions'

export default class Quote extends Rich {
  constructor (options={}) {
    super('quote', options)
    if (options.value) {
      this.html = '<blockquote>' + this.value + '</blockquote>'
    } else if (!this.html) {
      this.html = '<blockquote></blockquote>'
    }
    this.editor = new Editor({
      content: this.html,
      extensions: [
        new Blockquote(),
        new Bold(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History(),
        new Placeholder({
          emptyEditorClass: 'is-editor-empty',
          emptyNodeClass: 'is-empty',
          emptyNodeText: 'Write quote …',
          showOnlyWhenEditable: true,
          showOnlyCurrent: true
        })
      ]
    })
    this.content = this.editor.getJSON()
  }
}
