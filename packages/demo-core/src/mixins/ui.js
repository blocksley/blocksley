import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    leftDrawerOpen: {
      get: function () {
        return this.$store.getters['leftDrawerOpen']
      },
      set: function (val) {
        this.$store.commit('leftDrawerOpen', val)
      }
    },
    ...mapGetters([
      'toolbar',
      '$editor',
      'edited',
      '$image'
    ])
  },
  methods: {
    ...mapActions([
      'toggleLeftDrawer',
      'setLeftDrawerOpen',
      'setToolbar',
      'setEditor',
      'setEdited',
      'setImage'
    ])
  }
}
