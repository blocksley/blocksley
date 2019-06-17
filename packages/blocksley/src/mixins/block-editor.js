export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$emit('active', this)
  },
  methods: {
    view () {
      this.frame.deactivate()
    },
    add () {
      this.$emit('action', { type: 'add', model: this.model })
    },
    remove () {
      this.$emit('action', { type: 'remove', model: this.model })
    },
    floatLeft () {
      this.model.class = ['float-left']
    },
    floatRight () {
      this.model.class = ['float-right']
    }
  }
}
