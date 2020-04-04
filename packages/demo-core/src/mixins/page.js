export default {
  computed: {
    $page: {
      get: function () {
        console.log('getter')
        console.log(this.$blocksley.page)
        return this.$blocksley.page
      },
      set: function (val) {
        console.log('page set')
        console.log(val)
        this.$blocksley.page = val
      }
    }
  },
  methods: {
  }
}
