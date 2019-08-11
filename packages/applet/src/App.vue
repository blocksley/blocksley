<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './css/app.styl'
div#q-app {
  // background-color: white;
  // font-size: 1em !important
  // color: #000 !important
  font-family: Roboto !important
}
</style>
