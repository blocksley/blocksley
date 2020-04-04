<template>
  <q-page padding>
    <div class="fields">
      <q-input outlined autocomplete="username" v-model="user.username" label="Username" />
      <q-input outlined autocomplete="email" v-model="user.email" label="Email" />
      <q-input outlined autocomplete="firstname" v-model="user.firstName" label="First Name" />
      <q-input outlined autocomplete="lastname" v-model="user.lastName" label="Last Name" />
    </div>
  </q-page>
</template>

<script>
import gql from 'graphql-tag'
const directives = process.env.STANDALONE ? '@client' : ''

import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'
import Header from './Header'

export default {
  mixins: [UiMixin, PageMixin],
  props: [],
  components: {
  },
  data () {
    return {
      title: 'Add User',
      user: {
        username: '',
        email: '',
        firstName: '',
        lastName: ''
      }
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
          mutation ($data: UserInput!) {
            createUser (data: $data) ${directives} {
              id
            }
          }`,
        // Parameters
        variables: {
          data: this.user
        }
      }).then((data) => {
        console.log(data)
        this.id = data.data.createUser.id
        this.$q.notify('User Created')
        this.$router.replace(`/users/${this.id}`)
        // this.$router.go(-1)
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
