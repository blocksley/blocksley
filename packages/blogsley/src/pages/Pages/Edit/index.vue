<template>
  <q-page padding class="content-page">
    <component :is="form" :id="id"/>
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'
import Create from './Create'
import Update from './Update'
export default {
  name: 'EditPost',
  mixins: [UiMixin, PageMixin],
  props: ['id'],
  components: {
  },
  data () {
    return {
      title: 'New Page',
      form: Create
    }
  },
  computed: {
    model: function () { return this.state.model }
  },
  mounted () {
    if (this.id === 'create') {
      this.form = Create
    } else {
      this.form = Update
    }
  },
  beforeDestroy () {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('from: ', from)
    })
  },
  beforeRouteLeave (to, from, next) {
    this.setPage(this.post)
    console.log('leaving')
    next()
  },
  methods: {
    onSwitch () {
      this.setView(this)
      this.setToolbar(Toolbar)
      var post = this.page
      if (post) {
        this.post = post
      }
      console.log('on switch')
      console.log(this.post)
    }
  }
}
</script>
