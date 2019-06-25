import { Plugin, PluginKey } from 'prosemirror-state'

class Menu {

  constructor({ options, editorView }) {
    this.options = {
      ...{
        element: null,
        onUpdate: () => false,
      },
      ...options,
    }
    this.editorView = editorView
    this.isActive = false
    // new stuff
    console.log('MenuTab')
    const el = this.options.element
    const style = el.style
    style.position = 'relative'
    console.log(el)
    const parentEl = this.parentEl = document.querySelector('.q-footer .q-bar');
    console.log(parentEl)
    // the mousedown event is fired before blur so we can prevent it
    this.options.element.addEventListener('mousedown', this.handleClick)

    this.options.editor.on('focus', ({ view }) => {
      console.log('menutab on editor focus')
      const el = this.options.element
      this.parentEl.appendChild(el)
      this.update(view)
    })

    this.options.editor.on('blur', ({ event }) => {
      console.log('menutab on editor blur')
      if (this.isActive)
        this.parentEl.removeChild(this.options.element)
      this.hide(event)
    })
  }

  handleClick(event) {
    event.preventDefault()
  }

  update(view, lastState) {
    const { state } = view

    // Don't do anything if the document/selection didn't change
    if (lastState && lastState.doc.eq(state.doc) && lastState.selection.eq(state.selection)) {
      return
    }

    // Hide the tooltip if the selection is empty
    if (state.selection.empty) {
      this.hide()
      return
    }

    this.isActive = true

    this.sendUpdate()
  }

  sendUpdate() {
    this.options.onUpdate({
      isActive: this.isActive
    })
  }

  hide(event) {
    console.log('menutab hide')
    /*
    if (event && event.relatedTarget) {
      return
    }
    */
    this.isActive = false
    this.sendUpdate()
  }

  destroy() {
    console.log('menutab destroy')
    if (this.isActive)
      this.parentEl.removeChild(this.options.element)
    this.options.element.removeEventListener('mousedown', this.handleClick)
  }

}

export default function (options) {
  return new Plugin({
    key: new PluginKey('menu_tab'),
    view(editorView) {
      return new Menu({ editorView, options })
    },
  })
}
