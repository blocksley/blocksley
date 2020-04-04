<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      @click="$router.go(-1)"
    >
      <q-icon name="mdi-chevron-left" />
    </q-btn>

    <q-toolbar-title shrink>
      {{view.title}}
    </q-toolbar-title>

  </q-toolbar>
</template>

<script>
import UiMixin from 'src/mixins/ui'
export default {
  name: 'DefaultToolbar',
  mixins: [
    UiMixin
  ],
  props: [],
  methods: {
  }
}
</script>
