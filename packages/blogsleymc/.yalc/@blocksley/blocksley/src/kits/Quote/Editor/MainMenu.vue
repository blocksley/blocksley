<template>
  <editor-menu-bar :editor="this.editor">

    <q-btn-group class="menu-btn-group" slot-scope="{ commands }">

      <q-btn
        @click="commands.undo"
      >
      <q-icon name="mdi-undo" />
      </q-btn>

      <q-btn
        @click="commands.redo"
      >
        <q-icon name="mdi-redo" />
      </q-btn>

    </q-btn-group>

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
  }
}
</script>
