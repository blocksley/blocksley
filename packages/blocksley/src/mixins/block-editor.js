export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$emit('active', this)
  },
  methods: {
    floatLeft () {
      this.model.class = ['float-left']
    },
    floatRight () {
      this.model.class = ['float-right']
    }
  }
}
