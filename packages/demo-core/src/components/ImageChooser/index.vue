<template>
  <q-card>
    <q-bar class="bg-black text-white">
      <div>Insert Image</div>
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip>Close</q-tooltip>
      </q-btn>
    </q-bar>
    <div class="q-pa-md row items-start q-gutter-md">
      <ImageCard v-for="image in images" :key="image.id" :image="image" @click.native="select(image)" clickable/>
    </div>
  </q-card>
</template>

<style>
</style>

<script>
import { UiMixin } from '../../mixins'
import ImageCard from './ImageCard'

export default {
  name: 'ImageChooser',
  mixins: [UiMixin],
  props: ['select'],
  components: {
    ImageCard
  },
  data () {
    return {
      title: 'Images',
      authorId: this.$route.params.authorId,
      maximizedToggle: true,
      images: [
        {
          id: 1
        }
      ]
    }
  },
  methods: {
  }
}
</script>
