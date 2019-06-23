<template>
  <editor-menu-bar :editor="this.editor">

    <div class="menubar" slot-scope="{ commands, isActive }">

      <q-btn flat
        class="menubar__button"
        :class="{ 'is-active': isActive.bullet_list() }"
        @click="commands.bullet_list"
      >
        <q-icon name="mdi-format-list-bulleted" />
      </q-btn>

      <q-btn flat
        class="menubar__button"
        :class="{ 'is-active': isActive.ordered_list() }"
        @click="commands.ordered_list"
      >
        <q-icon name="mdi-format-list-numbered" />
      </q-btn>

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
  }
}
</script>
