<template>
<tippy 
    interactive
    :animate-fill="false" 
    placement="bottom"
    offset="0, 8"
    theme="light"
    animation="fade"
    trigger="click"
    arrow>
  <template v-slot:trigger>
    <q-btn fab-mini flat icon="add_circle_outline"/>
  </template>
  <component :is="state.blockChooser" :select="select" />
</tippy>
</template>

<script>
export default {
  mixins: [],
  props: {
    select: null
  },
  inject: ['state'],
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>
