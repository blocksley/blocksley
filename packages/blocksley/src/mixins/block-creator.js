import Views from '../views'
export default {
  mounted () {
  },
  methods: {
    edit () {
      this.frame.vu = Views[this.model.type].editor
    },
    add () {
      this.$emit('action', { type: 'add', model: this.model })
    }
  }
}
