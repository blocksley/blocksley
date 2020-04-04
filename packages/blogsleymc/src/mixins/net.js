import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'netMode',
    ])
  },
  methods: {
    ...mapActions([
      'setNetMode'
    ])
  }
}
