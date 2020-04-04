<template>
  <q-drawer
    v-model="leftDrawerOpen"
    content-class="drawer"
  >
      <div class="button-column" style="float: left; height: 100%">
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
    </div>
    <div class="toolbox">
      <div v-bind:is="toolbar" />
    </div>

  </q-drawer>
</template>

<script>
import UiMixin from 'src/mixins/ui'
export default {
  name: 'LeftDrawer',
  mixins: [UiMixin],
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  beforeMount () {
  },
  mounted () {
  }
}
</script>

<style lang="stylus">
  .toolbox
    white-space: nowrap;
    overflow: hidden;
    height: 100%;
    background-color: #222222;
    font-size: .8125rem;
    font-weight: 600;
</style>
