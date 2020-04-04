<template>
  <editor-menu-bar :editor="this.editor" v-slot="{ commands, isActive }">

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

      <q-btn @click="commands.heading({ level: 2 })"
        :class="{ 'is-active': isActive.heading({ level: 2 }) }"
      >
        H2
      </q-btn>

      <q-btn @click="commands.heading({ level: 3 })"
        :class="{ 'is-active': isActive.heading({ level: 3 }) }"
      >
        H3
      </q-btn>

      <q-btn @click="commands.heading({ level: 4 })"
        :class="{ 'is-active': isActive.heading({ level: 4 }) }"
      >
        H4
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
