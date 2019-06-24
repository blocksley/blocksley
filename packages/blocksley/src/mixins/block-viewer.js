import kits from '../kits'
export default {
  mounted () {
  },
  methods: {
    edit () {
      console.log('edit')
      console.log(kits[this.model.type].Editor)
      this.frame.vu = kits[this.model.type].Editor
    },
    add () {
      this.$emit('action', { type: 'add', model: this.model })
    },
    remove () {
      this.$emit('action', { type: 'remove', model: this.model })
    }
  }
}
