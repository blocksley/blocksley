<template>
  <div v-clickaway="onClickAway">
    <component v-bind:is="vu" :frame="this" :model="model" :class="model.class" @action="this.onAction" @active="this.onActive"/>
  </div>
</template>

<script>

import kits from 'blocksley/kits'
export default {
  props: {
    root: {
      type: Boolean,
      default: false
    },
    embedded: {
      type: Boolean,
      default: false
    },
    model: {
      default () {
        return {
          type: 'html',
          html: '<h1>Hello</h1>'
        }
      }
    }
  },
  components: {
  },
  data () {
    return {
      vu: null,
      isActive: false,
      grippy: false
    }
  },
  computed: {
  },
  /* watch: {
    model: {
      deep: true,
      handler () {
        console.log('model changed')
        console.log(this.model)
      }
    }
  }, */
  mounted () {
    console.log(this.model)
    if (this.model.state === 'create') {
      if (kits[this.model.type].creator) {
        this.vu = kits[this.model.type].creator
      } else {
        // TODO:  Throw an error?
        this.model.state = 'normal'
        this.vu = kits[this.model.type].editor
      }
    } else {
      this.vu = kits[this.model.type].viewer
    }
  },
  beforeDestroy () {
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
      this.isActive = false
      this.vu = kits[this.model.type].viewer
    },
    onDragStart () {
      console.log('frame drag started')
    },
    onDragEnd () {
      this.grippy = false
    },
    onClickAway (e) {
      // console.log('click away')
      // console.log(e)
      if(this.root || this.isEventInElement(e, this.$el) || this.$el.contains(e.target)) {
        return
      }
        this.deactivate()
    },
    isEventInElement(event, element)   {
      var rect = element.getBoundingClientRect();
      var x = event.clientX;
      if (x < rect.left || x >= rect.right) return false;
      var y = event.clientY;
      if (y < rect.top || y >= rect.bottom) return false;
      return true;
    }
  }
}
</script>

<style lang="stylus">
</style>
