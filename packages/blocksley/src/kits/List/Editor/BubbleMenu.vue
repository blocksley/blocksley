<template>
    <editor-menu-bubble :editor="editor" :keep-in-bounds="keepInBounds" v-slot="{ commands, isActive, menu }">

      <q-btn-group flat
        class="menububble"
        :class="{ 'is-active': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >

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
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <q-icon name="mdi-format-paragraph" />
        </q-btn>

        <q-btn flat
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </q-btn>

        <q-btn flat
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </q-btn>

        <q-btn flat
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </q-btn>

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
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <q-icon name="mdi-format-quote-close" />
        </q-btn>

        <q-btn flat
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <q-icon name="mdi-code-not-equal-variant" />
        </q-btn>

        <q-btn flat
          class="menubar__button"
          @click="commands.horizontal_rule"
        >
          <q-icon name="mdi-minus" />
        </q-btn>

        <q-btn flat
          class="menubar__button"
          @click="showImagePrompt(commands.image)"
        >
          <q-icon name="mdi-image" />
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

      </q-btn-group>

    </editor-menu-bubble>

</template>

<script>
import { EditorMenuBubble } from 'tiptap'
export default {
  name: 'BubbleMenu',
  mixins: [ ],
  props: ['view', 'editor'],
  components: {
    EditorMenuBubble
  },
  data () {
    return {
      keepInBounds: true
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    showImagePrompt (command) {
      console.log(this.view)
      this.view.showImagePrompt(command)
    }
  }
}
</script>
