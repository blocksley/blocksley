<template>
  <editor-menu-bar :editor="this.editor">

    <div class="menubar" slot-scope="{ commands, isActive }">

      <q-btn flat
        class="menubar__button"
        :class="{ 'is-active': isActive.bold() }"
        @click="commands.bold"
      >
        <q-icon name="mdi-format-bold" />
      </q-btn>

      <q-btn flat
        class="menubar__button"
        :class="{ 'is-active': isActive.italic() }"
        @click="commands.italic"
      >
        <q-icon name="mdi-format-italic" />
      </q-btn>

      <q-btn flat
        class="menubar__button"
        :class="{ 'is-active': isActive.strike() }"
        @click="commands.strike"
      >
        <q-icon name="mdi-format-strikethrough" />
      </q-btn>

      <q-btn flat
        class="menubar__button"
        :class="{ 'is-active': isActive.underline() }"
        @click="commands.underline"
      >
        <q-icon name="mdi-format-underline" />
      </q-btn>

      <q-btn flat
        class="menubar__button"
        :class="{ 'is-active': isActive.code() }"
        @click="commands.code"
      >
        <q-icon name="mdi-code-tags" />
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
