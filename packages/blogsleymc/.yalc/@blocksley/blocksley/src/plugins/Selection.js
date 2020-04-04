import { Plugin, PluginKey } from 'prosemirror-state'

class SelectionPlugin {
  constructor (shell, editor, onUpdate) {
    console.log('selection plugin')
    this.shell = shell
    this.editor = editor
    this.onUpdate = onUpdate
    this.isActive = false
  }

  update (view, lastState) {
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

  sendUpdate () {
    this.onUpdate({
      isActive: this.isActive
    })
  }

  hide (event) {
    console.log('selection hide')
    this.isActive = false
    this.sendUpdate()
  }

  destroy () {
    // console.trace('selection destroy')
  }
}

export default function (shell, editor, onUpdate) {
  return new Plugin({
    key: new PluginKey('shell_selection'),
    view () {
      return new SelectionPlugin(shell, editor, onUpdate)
    }
  })
}
