<template>
  <q-page padding>
    <Form :image="this.image" />
  </q-page>
</template>

<script>
import gql from 'graphql-tag'
const directives = process.env.STANDALONE ? '@client' : ''

import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'
import Header from './Header'
import Form from '../Form'

export default {
  mixins: [UiMixin, PageMixin],
  props: ['id'],
  components: {
    Form
  },
  apollo: {
    image: {
      query: gql`
        query imageQuery($id: ID!) {
          image(id: $id) ${directives} {
            id
            title
            filename
            src
          }
        }`,
      fetchPolicy: 'network-only',
      variables () {
        return {
          id: this.imageId
        }
      }
    }
  },
  data () {
    return {
      title: 'Image',
      imageId: this.$route.params.id
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    save () {
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($id: ID!, $data: ImageInput!) {
            updateImage(id: $id, data: $data) ${directives} {
              ok
            }
          }`,
        // Parameters
        variables: {
          id: this.imageId,
          data: this.image
        }
      })
      this.$q.notify('Image Saved')
    },
    destroy () {
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($id: ID!) {
            deleteImage(id: $id) ${directives} {
              ok
            }
          }`,
        // Parameters
        variables: {
          id: this.id
        }
      }).then((data) => {
        this.$q.notify('Image Deleted')
        this.$router.go(-1)
      })
    },
    onSwitch () {
      this.setToolbar(Toolbar)
      this.setHeader(Header)
    }
  }
}
</script>
