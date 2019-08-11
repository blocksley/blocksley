<template>
  <q-toolbar flat >

    <q-btn flat
      icon="not_interested"
      @click="frame.remove()"
    />

    <q-btn flat
      @click="newParagraph"
    >
      <q-icon name="mdi-format-paragraph" />
    </q-btn>
    <q-btn flat
      @click="newList"
    >
      <q-icon name="mdi-format-list-bulleted" />
    </q-btn>
    <q-btn flat
      @click="newImage"
    >
      <q-icon name="mdi-image" />
    </q-btn>
  </q-toolbar>
</template>

<script>

export default {
  name: 'AddBlockViewer',
  mixins: [],
  props: ['frame', 'model'],
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    newParagraph () {
      this.$emit('action', { type: 'new', kind: 'paragraph', model: this.model })
    },
    newList () {
      this.$emit('action', { type: 'new', kind: 'list', model: this.model })
    },
    newImage () {
      this.$emit('action', { type: 'new', kind: 'image', model: this.model })
    }
  }
}
</script>

<style lang="stylus">
</style>
