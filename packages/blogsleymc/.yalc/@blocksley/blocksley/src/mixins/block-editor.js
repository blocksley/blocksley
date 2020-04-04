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
      this.model.class = ['block-left']
    },
    floatRight () {
      this.model.class = ['block-right']
    }
  }
}
