<template>
<div>
  <q-btn @click="showImgChooser = !showImgChooser">
    <q-icon name="mdi-image" />
  </q-btn>
  <q-dialog v-model="showImgChooser">
    <component :is="state.imageChooser" :select="select" />
  </q-dialog>
</div>
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
      showImgChooser: false
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
