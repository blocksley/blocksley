import kits from '../kits'

export default {
  template: `
  <div>
    <component v-bind:is="vu" :frame="this" :model="model" :class="model.class" @action="this.onAction"/>
  </div>`,
  props: ['node', 'updateAttrs', 'view', 'getPos'],
  data () {
    return {
      vu: null,
      isActive: false,
      // model: this.node.type.spec.createModel(this.node)
      model: this.node.model ? this.node.model : this.node.model = this.node.type.spec.createModel(this.node)
    }
  },
  components: {
  },
  computed: {
  },
  mounted () {
    console.log('e-frame mounted')
    console.log(this.model)
    console.log(this.node)
    console.log(this.view)
    if (this.model.state === 'create') {
      if (kits[this.model.type].Creator) {
        this.vu = kits[this.model.type].Creator
      } else {
        console.log(this.model.type)
        this.model.state = 'normal'
        this.vu = kits[this.model.type].Editor
      }
    } else {
      this.vu = kits[this.model.type].Viewer
    }
  },
  beforeDestroy () {
    console.log('e-frame destroyed')
    console.log(this.model)
    console.log(this.node)
  },
  methods: {
    use (toolName) {
      this.vu = kits[this.model.type][toolName]
    },
    onAction (action) {
      this.$emit('action', action)
    },
    edit () {
      this.use('Editor')
    },
    browse () {
      this.use('Viewer')
    }
  }
}
