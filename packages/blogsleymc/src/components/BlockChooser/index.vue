<template>
  <div v-if="$apollo.loading">Loading..</div>
  <div v-else class="q-pa-md row items-start q-gutter-md">
    <BlockCard v-for="edge in allBlocks.edges" :key="edge.id" :block="edge.node" @click.native="select(edge.node)" clickable/>
  </div>
</template>

<style>
</style>

<script>
import { UiMixin } from 'src/mixins'
import BlockCard from './BlockCard'
import gql from 'graphql-tag'
const blockQuery = gql`
query blockQuery {
  allBlocks @client {
    edges {
      node {
        id
        title
        name
        icon
      }
    }
  }
}
`
export default {
  name: 'BlockChooser',
  mixins: [UiMixin],
  props: ['select'],
  components: {
    BlockCard
  },
  data () {
    return {
      title: 'Blocks',
      authorId: this.$route.params.authorId,
      maximizedToggle: true
    }
  },
  apollo: {
    allBlocks: {
      query: blockQuery,
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
