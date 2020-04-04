import MenuTab from '../plugins/MenuTab'

export default {

  props: {
    editor: {
      default: null,
      type: Object,
    }
  },

  data() {
    return {
      menu: {
        isActive: false,
        left: 0,
        bottom: 0,
      },
      menuEl: this.$slots.default[0].componentInstance.$el
    }
  },

  mounted () {
    console.log('MenuTab')
    console.log(this)
    const el = this.menuEl
    const style = el.style
    style.position = 'relative'
    console.log(el)
    const parentEl = this.parentEl = document.querySelector('.q-footer .q-bar');
    console.log(parentEl)
    this.onOpen()
  },
  render() {
    if (!this.editor) {
      return null
    }

    return this.$scopedSlots.default({
      focused: this.editor.view.focused,
      focus: this.editor.focus,
      commands: this.editor.commands,
      isActive: this.editor.isActive,
      getMarkAttrs: this.editor.getMarkAttrs.bind(this.editor),
      menu: this.menu,
    })
  },
  beforeRouteLeave (to, from, next) {
    this.onClose()
  },
  beforeDestroy() {
    this.onClose()
  },
  methods: {
    onOpen () {
      console.log('menutab on editor focus')
      const el = this.menuEl
      this.parentEl.appendChild(el)
    },
    onClose () {
      console.log('menutab on editor blur')
      const el = this.menuEl
      this.parentEl.removeChild(el)
    }
  }
}
