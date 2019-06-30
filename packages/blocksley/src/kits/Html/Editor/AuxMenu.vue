<template>
  <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">

    <q-btn-group flat class="menubar" >

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

    </q-btn-group>

  </editor-menu-bar>

</template>

<script>
import { EditorMenuBar } from 'tiptap'
export default {
  name: 'AuxMenu',
  mixins: [ ],
  props: ['vu', 'editor'],
  components: {
    EditorMenuBar
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
