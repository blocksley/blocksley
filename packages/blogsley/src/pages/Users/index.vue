<template>
  <q-page>
    <div v-if="$apollo.loading">Loading..</div>
    <div v-else style="width: 500px; max-width: 90vw;">
      <q-list class="menu-list">
        <q-item v-for="edge in allUsers.edges" :key="edge.id" :to="`/users/${edge.node.id}`">
          <q-item-section avatar>
            <q-icon name="mdi-account" inverted color="grey-6" />
          </q-item-section>
          <q-item-section>
            {{ edge.node.username }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'
import Header from './Header'

import gql from 'graphql-tag'
const directives = process.env.STANDALONE ? '@client' : ''

const userQuery = gql`
query userQuery {
  allUsers ${directives} {
    edges {
      node {
        id
        firstName
        lastName
        username
      }
    }
  }
}
`
export default {
  name: 'Users',
  mixins: [UiMixin, PageMixin],

  data () {
    return {
      title: 'Users'
    }
  },
  apollo: {
    allUsers: {
      query: userQuery,
      prefetch: false,
      fetchPolicy: 'network-only'
    }
  },
  methods: {
    onSwitch () {
      this.setView(this)
      this.setToolbar(Toolbar)
      this.setHeader(Header)
    }
  }
}
</script>
