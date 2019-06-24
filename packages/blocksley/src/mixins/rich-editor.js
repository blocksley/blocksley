export default {
  mounted () {
  },
  deactivated () {
    console.log('rich editor deactivated')
    this.model.data = this.editor.getHTML()
    this.model.content = this.editor.getJSON()
    console.log(this.model)
  },
  beforeDestroy () {
    console.log('rich editor destroyed')
    this.editor.destroy()
  }
}
