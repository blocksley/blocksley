<template>
  <div>
    <q-btn flat class="menubar__button"
      @click="vu.floatLeft"
    >
      <q-icon name="mdi-format-align-left" />
    </q-btn>
    <q-btn flat class="menubar__button"
      @click="vu.floatRight"
    >
      <q-icon name="mdi-format-align-right" />
    </q-btn>
  </div>
</template>

<script>
export default {
  name: 'BasicToolbar',
  mixins: [ ],
  props: ['vu', 'editor'],
  components: {
  },
  methods: {
  }
}
</script>
