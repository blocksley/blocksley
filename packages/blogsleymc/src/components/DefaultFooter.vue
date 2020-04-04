<template>
<div>
  <footer-shell>
    <q-btn-group flat spread>
      <router-link to="/" :exact="true">
      <q-btn flat icon="home"/>
      </router-link>
      <router-link to="/users">
      <q-btn flat icon="mdi-account-multiple"/>
      </router-link>
      <router-link to="/pages">
      <q-btn flat icon="mdi-book-open-page-variant"/>
      </router-link>
      <router-link to="/images">
      <q-btn flat icon="mdi-folder-image"/>
      </router-link>
    </q-btn-group>
  </footer-shell>
  </div>
</template>

<script>
import UiMixin from 'src/mixins/ui'
export default {
  name: 'PageUpdateFooter',
  mixins: [
    UiMixin
  ],
  props: [],
  components: {
  },
  data () {
    return {
      seamless: false
    }
  },
  methods: {
  }
}
</script>
