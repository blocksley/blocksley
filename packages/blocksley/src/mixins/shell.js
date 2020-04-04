export default {
  name: 'ShellMixin',
  props: {
    fab: null
  },
  data () {
    return {
      fabs: []
    }
  },
  computed: {
    
  },
  mounted () {
  },
  methods: {
    push (b) {
      this.fabs.push(b)
    },
    pop () {
      this.fab = this.fabs.pop()
    }
  }
}
