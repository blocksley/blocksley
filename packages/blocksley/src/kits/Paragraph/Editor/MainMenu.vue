<template>
  <editor-menu-bar :editor="this.editor">

    <div class="menubar" slot-scope="{ commands }">

      <q-btn flat
        class="menubar__button"
        @click="commands.undo"
      >
        <q-icon name="mdi-undo" />
      </q-btn>

      <q-btn flat
        class="menubar__button"
        @click="commands.redo"
      >
        <q-icon name="mdi-redo" />
      </q-btn>

    </div>

  </editor-menu-bar>
</template>

<script>
import { EditorMenuBar } from 'tiptap'
export default {
  name: 'BasicToolbar',
  mixins: [ ],
  props: ['vu', 'editor'],
  components: {
    EditorMenuBar
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    showImagePrompt (command) {
      console.log(this.vu)
      this.vu.showImagePrompt(command)
    }
  }
}
</script>
