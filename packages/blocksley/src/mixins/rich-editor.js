export default {
  mounted () {
  },
  beforeDestroy () {
    console.log('rich editor destroyed')
    console.log(this)
    this.model.data = this.editor.getHTML()
    this.model.content = this.editor.getJSON()
    console.log(this.model)
    this.editor.destroy()
  }
}
