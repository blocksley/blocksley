import Views from 'blocksley/views'

export default {
  template: `
  <div>
    <component v-bind:is="vu" :frame="this" :model="model" :class="model.class" @action="this.onAction" @active="this.onActive"/>
  </div>`,
  props: ['node', 'updateAttrs', 'view', 'getPos'],
  data () {
    return {
      vu: null,
      isActive: false,
      model: this.node.type.spec.createModel(this.node)
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
      if (Views[this.model.type].creator) {
        this.vu = Views[this.model.type].creator
      } else {
        console.log(this.model.type)
        this.model.state = 'normal'
        this.vu = Views[this.model.type].editor
      }
    } else {
      this.vu = Views[this.model.type].viewer
    }
  },
  beforeDestroy () {
    console.log('e-frame destroyed')
    console.log(this.model)
    console.log(this.node)
  },
  methods: {
    onAction (action) {
      this.$emit('action', action)
    },
    onActive () {
      this.isActive = true
      this.$emit('active', this)
    },
    activate () {
      this.vu = Views[this.model.type].editor
    },
    deactivate () {
      this.isActive = false
      this.vu = Views[this.model.type].viewer
    }
  }
}
