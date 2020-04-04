<template>
  <q-page padding class="content-page">
    <blocksley :state="state"/>
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'
import BlockChooser from 'components/BlockChooser'
import ImageChooser from 'components/ImageChooser'

import { BlocksleyState, serialize, render } from '@blocksley/blocksley'
import { Title, List, Image, Paragraph, Heading, Html, Page } from '@blocksley/blocksley/src/models'

import gql from 'graphql-tag'
const directives = process.env.STANDALONE ? '@client' : ''

export default {
  name: 'CreatePost',
  mixins: [UiMixin, PageMixin],
  props: [],
  components: {
  },
  data () {
    return {
      title: 'New Page',
      post: {
        title: 'My Post',
        model: '{}',
        body: 'Blogsley rocks!!!'
      },
      state: new BlocksleyState({
        blockChooser: BlockChooser,
        imageChooser: ImageChooser,
        model: new Page({
          children: [
            new Title(),
            new Paragraph({ value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }),
            // new Image({ src: `${process.env.SERVER_URL}/images/journal-on-desk.jpg`, title: 'Journal on Desk' }),
            new Image({ src: 'statics/images/journal-on-desk.jpg', title: 'Journal on Desk' }),
            new Heading({ value: 'Heading' }),
            new Paragraph({ value: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }),
            new Html({ html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>' }),
            new List({ value: ['Get Milk', 'Get Bread', 'Get Butter'] })
          ]
        })
      })
    }
  },
  computed: {
    model: function () { return this.state.model }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('from: ', from)
    })
  },
  beforeRouteLeave (to, from, next) {
    this.setPage(this.post)
    console.log('leaving')
    next()
  },
  methods: {
    save () {
      const post = Object.assign({}, this.post)
      this.model.freeze()
      post.model = serialize(this.model)
      post.body = render(this.model)
      post.title = this.state.findModelByType('title').value

      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($data: PostInput!) {
            createPost (data: $data) ${directives} {
              id
            }
          }`,
        // Parameters
        variables: {
          data: post
        }
      }).then((response) => {
        console.log(response)
        this.id = response.data.createPost.id
        // this.$q.notify('Page Created')
        this.$router.replace(`/pages/${this.id}`)
        // this.$router.go(-1)
      })
    },
    onSwitch () {
      this.setView(this)
      this.setToolbar(Toolbar)
      var post = this.page
      if (post) {
        this.post = post
      }
      console.log('on switch')
      console.log(this.post)
    }
  }
}
</script>
