import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    leftDrawerOpen: {
      get: function () {
        return this.$store.getters.leftDrawerOpen
      },
      set: function (val) {
        this.$store.commit('leftDrawerOpen', val)
      }
    },
    ...mapGetters([
      'view',
      'page',
      'toolbar',
      'header',
      'footer',
      '$editor',
      'edited',
      '$image'
    ])
  },
  methods: {
    ...mapActions([
      'setView',
      'setPage',
      'toggleLeftDrawer',
      'setLeftDrawerOpen',
      'setToolbar',
      'setHeader',
      'setFooter',
      'setEditor',
      'setEdited',
      'setImage'
    ])
  }
}
