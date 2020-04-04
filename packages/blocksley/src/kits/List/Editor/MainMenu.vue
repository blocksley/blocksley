<template>
  <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">

    <q-btn-group class="menu-btn-group">

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

      <q-btn
        :class="{ 'is-active': isActive.bullet_list() }"
        @click="commands.bullet_list"
      >
        <q-icon name="mdi-format-list-bulleted" />
      </q-btn>

      <q-btn
        :class="{ 'is-active': isActive.ordered_list() }"
        @click="commands.ordered_list"
      >
        <q-icon name="mdi-format-list-numbered" />
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
