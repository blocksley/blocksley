<template>
  <q-menu auto-close content-class="bg-black text-white">
    <q-btn-group>
      <q-btn icon="visibility" color="accent" @click="view.view()"/>
      <q-btn icon="playlist_add" color="accent" @click="view.add()"/>
      <q-btn icon="keyboard_arrow_up" color="accent" />
      <q-btn icon="keyboard_arrow_down" color="accent" />
      <q-btn icon="delete" color="accent" />
    </q-btn-group>
  </q-menu>
</template>

<script>

export default {
  name: 'ParagraphShellMenu',
  mixins: [ ],
  props: ['view', 'editor'],
  components: {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
</style>
