import { mapGetters, mapActions } from 'vuex'

var page = null

export default {
  computed: {
    page: {
      get: function () {
        return page
      },
      set: function (val) {
        page = val
      }
    },
    ...mapGetters([
    ])
  },
  methods: {
    ...mapActions([
    ])
  }
}
