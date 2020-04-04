<template>
  <q-card>
    <q-bar class="bg-black text-white">
      <div>Insert Image</div>
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip>Close</q-tooltip>
      </q-btn>
    </q-bar>
    <div v-if="$apollo.loading">Loading..</div>
    <div v-else class="q-pa-md row items-start q-gutter-md">
      <ImageCard v-for="edge in allImages.edges" :key="edge.id" :image="edge.node" @click.native="select(edge.node)" clickable/>
    </div>
  </q-card>
</template>

<style>
</style>

<script>
import { UiMixin } from 'src/mixins'
import ImageCard from './ImageCard'

import gql from 'graphql-tag'
const directives = process.env.STANDALONE ? '@client' : ''

const imageQuery = gql`
query imageQuery {
  allImages ${directives} {
    edges {
      node {
        id
        title
        filename
        src
      }
    }
  }
}
`
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
      maximizedToggle: true
    }
  },
  apollo: {
    allImages: {
      query: imageQuery,
      // fetchPolicy: 'network-only',
      variables () {
        return { authorId: this.authorId }
      }
    }
  },
  methods: {
  }
}
</script>
