<template>
  <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
    <q-btn-group class="menu-btn-group">

      <q-btn @click="commands.undo">
        <q-icon name="mdi-undo" />
      </q-btn>

      <q-btn @click="commands.redo">
        <q-icon name="mdi-redo" />
      </q-btn>

      <q-btn @click="commands.paragraph"
        :class="{ 'is-active': isActive.paragraph() }"
      >
        <q-icon name="mdi-format-paragraph" />
      </q-btn>

      <q-btn @click="commands.heading({ level: 1 })"
        :class="{ 'is-active': isActive.heading({ level: 1 }) }"
      >
        H1
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

      <q-btn @click="commands.bullet_list"
        :class="{ 'is-active': isActive.bullet_list() }"
      >
        <q-icon name="mdi-format-list-bulleted" />
      </q-btn>

      <q-btn @click="commands.ordered_list"
        :class="{ 'is-active': isActive.ordered_list() }"
      >
        <q-icon name="mdi-format-list-numbered" />
      </q-btn>

      <q-btn @click="commands.blockquote"
        :class="{ 'is-active': isActive.blockquote() }"
      >
        <q-icon name="mdi-format-quote-close" />
      </q-btn>

      <q-btn @click="commands.code_block"
        :class="{ 'is-active': isActive.code_block() }"
      >
        <q-icon name="mdi-code-not-equal-variant" />
      </q-btn>

      <q-btn @click="commands.horizontal_rule">
        <q-icon name="mdi-minus" />
      </q-btn>

      <q-btn @click="insertImage">
        <q-icon name="mdi-image" />
      </q-btn>

      <add-block-btn :select="insertImage"/>
      <!--
      <q-btn flat
        @click="vu.editText"
      >
        <q-icon name="mdi-language-html5" />
      </q-btn>
      -->
      <!--
      <q-btn flat
        class="menubar__button"
        @click="hideKeyboard"
      >
        <q-icon name="keyboard" />
      </q-btn>
      -->
    </q-btn-group>
  </editor-menu-bar>
</template>

<script>
import { EditorMenuBar } from 'tiptap'
import AddBlockBtn from '../../../components/AddBlockBtn'

export default {
  name: 'BasicToolbar',
  mixins: [ ],
  props: {
    vu: null,
    editor: null,
    contentClass: {
      type: String,
      default: 'menubar'
    }
  },
  components: {
    EditorMenuBar,
    AddBlockBtn
  },
  mounted () {
    console.log('context menu')
    console.log(this)
  },
  methods: {
    insertImage () {
      this.vu.insertImage()
    }
  }
}
</script>
