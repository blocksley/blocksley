<template>
  <q-page padding style="background-color:#dddddd;">
    <div v-if="$apollo.loading">Loading..</div>
    <div v-else class="q-pa-md row items-start q-gutter-md">
      <Item v-for="edge in allImages.edges" :key="edge.id" :image="edge.node" @click.native="selectImage(edge.node)" clickable/>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'
import Item from './Item'

import gql from 'graphql-tag'
const imageQuery = gql`
query imageQuery {
  allImages @client {
    edges {
      node {
        id
        title
        filename
      }
    }
  }
}
`
export default {
  name: 'ImageChooser',
  mixins: [UiMixin, PageMixin],
  components: {
    Item
  },
  data () {
    return {
      title: 'Image Chooser',
      authorId: this.$route.params.authorId
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
    selectImage (image) {
      this.setImage(image)
      this.$router.go(-1)
    },
    onSwitch () {
      this.setView(this)
      this.setToolbar(Toolbar)
    }
  }
}
</script>
