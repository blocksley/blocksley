<template>
  <div>
    <q-btn flat
      @click="vu.floatLeft"
    >
      <q-icon name="mdi-format-align-left" />
    </q-btn>
    <q-btn flat
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
    showImagePrompt (command) {
      console.log(this.vu)
      this.vu.showImagePrompt(command)
      /*
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      } */
    }
  }
}
</script>
