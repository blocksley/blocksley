import kits from 'blocksley/kits'
export default {
  mounted () {
  },
  methods: {
    edit () {
      this.frame.vu = kits[this.model.type].Editor
    },
    add () {
      this.$emit('action', { type: 'add', model: this.model })
    }
  }
}
