import Toolbar from 'components/DefaultToolbar'
import Footer from 'components/DefaultFooter'

export default {
  mounted () {
    this.setView(this)
    this.setFooter(Footer)
    this.onSwitch()
  },
  beforeRouteUpdate (to, from, next) {
    this.onSwitch()
    next()
  },
  beforeRouteLeave (to, from, next) {
    this.setHeader(null)
    // this.setFooter(null)
    // this.setFooter(Footer)
    next()
  },
  methods: {
    onSwitch () {
      this.setToolbar(Toolbar)
      this.setFooter(Footer)
    }
  }
}
