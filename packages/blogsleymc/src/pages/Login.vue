<template>
  <q-page padding>
    <form @submit.prevent="handleSubmit">
        <q-input autocomplete="username" v-model="username" type="username" label="Username" />
        <q-input autocomplete="current-password" v-model="password" type="password" label="Password" />
        <q-btn flat color="primary" type="submit" label="Submit" />
    </form>
  </q-page>
</template>

<style>
</style>

<script>
import { UiMixin, PageMixin, UserMixin } from 'src/mixins'

export default {
  name: 'LoginPage',
  mixins: [UiMixin, PageMixin, UserMixin],
  data () {
    return {
      title: 'Login',
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
