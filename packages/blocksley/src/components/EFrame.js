import kits from 'blocksley/kits'

export default {
  template: `
  <div v-clickaway="onClickAway">
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
      if (kits[this.model.type].creator) {
        this.vu = kits[this.model.type].creator
      } else {
        console.log(this.model.type)
        this.model.state = 'normal'
        this.vu = kits[this.model.type].editor
      }
    } else {
      this.vu = kits[this.model.type].viewer
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
      this.vu = kits[this.model.type].editor
    },
    deactivate () {
      console.log('deactivate')
      this.isActive = false
      this.vu = kits[this.model.type].viewer
    },
    onClickAway () {
      this.deactivate()
    }
  }
}
