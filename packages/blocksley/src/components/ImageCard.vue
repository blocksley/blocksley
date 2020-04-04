<template>
  <q-card class="my-card cursor-pointer">
    <q-img :src="image.src"
      style="max-width: 400px; height: 160px;"
      contain
    />

    <q-card-section>
      <div class="text-subtitle2">{{ image.title }}</div>
    </q-card-section>

  </q-card>
</template>

<script>
export default {
  mixins: [],
  props: {
    image: {
      default () {
        return {
          src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
          title: ''
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
      if (this.image.src.length === 0) {
        return 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
      }
      return this.image.src
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
