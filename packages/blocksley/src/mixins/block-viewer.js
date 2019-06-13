import views from '../views'
export default {
  mounted () {
  },
  methods: {
    edit () {
      console.log('edit')
      console.log(views[this.model.type].editor)
      this.frame.vu = views[this.model.type].editor
    },
    add () {
      this.$emit('action', { type: 'add', model: this.model })
    },
    remove () {
      this.$emit('action', { type: 'remove', model: this.model })
    }
  }
}
