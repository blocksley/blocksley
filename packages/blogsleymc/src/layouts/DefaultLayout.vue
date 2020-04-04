<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :v-if="header" elevated reveal>
      <div v-bind:is="header" />
    </q-header>
    <q-footer :v-if="footer" reveal>
      <div v-bind:is="footer" />
    </q-footer>

    <left-drawer />

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { UiMixin } from 'src/mixins'
import LeftDrawer from 'components/LeftDrawer'
export default {
  name: 'DefaultLayout',
  mixins: [UiMixin],
  components: {
    LeftDrawer
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
    this.setLeftDrawerOpen(this.$q.platform.is.desktop)
  }

}
</script>

<style>
</style>
