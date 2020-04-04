<template>
  <q-page padding>
    <div v-if="$apollo.loading">Loading..</div>
    <div v-else class="fields">
      <q-input outlined autocomplete="username" v-model="user.username" label="Username" />
      <q-input outlined autocomplete="email" v-model="user.email" label="Email" />
      <q-input outlined autocomplete="firstname" v-model="user.firstName" label="First Name" />
      <q-input outlined autocomplete="lastname" v-model="user.lastName" label="Last Name" />
    </div>
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'
import Header from './Header'

import gql from 'graphql-tag'
const directives = process.env.STANDALONE ? '@client' : ''

const userQuery = gql`
query userQuery($id: ID!) {
  user(id: $id) ${directives} {
    username
    email
    firstName
    lastName
  }
}
`
export default {
  mixins: [UiMixin, PageMixin],
  props: ['id'],
  components: {
  },
  apollo: {
    user: {
      query: userQuery,
      variables () {
        return {
          id: this.userId
        }
      }
    }
  },
  data () {
    return {
      title: 'User',
      userId: this.$route.params.id
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    save () {
      this.$apollo.mutate({
        // Mutation
        mutation: gql`
          mutation ($data: UserInput!) {
            updateUser(data: $data) ${directives} {
              ok
            }
          }`,
        // Parameters
        variables: {
          data: this.user
        }
      })
      this.$q.notify('User Saved')
    },
    destroy () {
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($id: ID!) {
            deleteUser(id: $id) ${directives} {
              ok
            }
          }`,
        // Parameters
        variables: {
          id: this.id
        }
      }).then((data) => {
        this.$q.notify('User Deleted')
        this.$router.go(-1)
      })
    },
    onSwitch () {
      this.setView(this)
      this.setToolbar(Toolbar)
      this.setHeader(Header)
    }
  }
}
</script>
