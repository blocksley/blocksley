<template>
  <div class="fields">
      <q-input outlined autocomplete="title" v-model="image.title" label="Title" />
      <q-input outlined autocomplete="filename" v-model="image.filename" label="Filename" readonly/>
      <q-img :src="image.src" style="height: 140px; max-width: 150px"/>
  </div>
</template>

<script>
import { UiMixin } from 'src/mixins'

export default {
  mixins: [UiMixin],
  props: {
    image: {
      default () {
        return {
          title: '',
          filename: ''
        }
      }
    }
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    imgSrc: function () {
      if (this.image.filename.length === 0) {
        return 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
      }
      return process.env.SERVER_URL + '/images/' + this.image.filename + '?w=200&h=160'
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>
