<template>
  <q-page padding class="content-page">
    <blocksley :state="state"/>
  </q-page>
</template>

<script>
import gql from 'graphql-tag'

import { BlocksleyState, serialize, deserialize, render } from '@blocksley/blocksley'

import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'
import BlockChooser from 'components/BlockChooser'
import ImageChooser from 'components/ImageChooser'

const directives = process.env.STANDALONE ? '@client' : ''

export default {
  mixins: [UiMixin, PageMixin],
  props: ['id'],
  components: {
  },
  data () {
    return {
      title: 'Page',
      postId: this.$route.params.id,
      state: new BlocksleyState({
        blockChooser: BlockChooser,
        imageChooser: ImageChooser
      })
    }
  },
  computed: {
    model: function () { return this.state.model }
  },
  apollo: {
    post: {
      query: gql`
        query postQuery($id: ID!) {
          post(id: $id) ${directives} {
            id
            title
            model
            body
          }
        }`,
      variables () {
        return {
          id: this.postId
        }
      },
      update (data) {
        const post = data.post
        console.log(post)
        this.state.model = deserialize(JSON.parse(post.model))
        return post
      },
      subscribeToMore: {
        // below is the subscription query.
        document: gql`
          subscription postEvents($id: ID!) {
            postEvents(id: $id) {
              kind
            }
          }
        `,
        variables () {
          return {
            id: this.postId
          }
        },
        result (previousResult, { subscriptionData }) {
          const data = subscriptionData.data
          console.log(data)
          this.$q.notify('Page Updated')
          return data
        }
      }
      // fetchPolicy: 'network-only'
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    edit () {
      this.$router.push(`/pages/${this.post.id}`)
    },
    json () {
      this.$router.push(`/pages/${this.post.id}/json`)
    },
    save () {
      this.model.freeze()
      const model = serialize(this.model)
      const body = render(this.model)
      const title = this.state.findModelByType('title').value
      const postInput = {
        title,
        model,
        body
      }
      console.log(postInput)
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($id: ID!, $data: PostInput!) {
            updatePost(id: $id, data: $data) ${directives} {
              ok
            }
          }`,
        // Parameters
        variables: {
          id: this.postId,
          data: postInput
        }
      })
      this.$q.notify('Page Saved')
    },
    publish () {
      this.model.freeze()
      const model = serialize(this.model)
      const body = render(this.model)
      const title = this.state.findModelByType('title').value
      const postInput = {
        title,
        model,
        body
      }
      console.log(postInput)
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($id: ID!, $data: PostInput!) {
            publishPost(id: $id, data: $data) ${directives} {
              ok
            }
          }`,
        // Parameters
        variables: {
          id: this.postId,
          data: postInput
        }
      })
      this.$q.notify('Page Published')
    },
    destroy () {
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($id: ID!) {
            deletePost(id: $id) ${directives} {
              ok
            }
          }`,
        // Parameters
        variables: {
          id: this.id
        }
      }).then((data) => {
        this.$q.notify('Page Deleted')
        this.$router.go(-1)
      })
    },
    onSwitch () {
      this.setView(this)
      this.setToolbar(Toolbar)
    }
  }
}
</script>
