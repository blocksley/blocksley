<template>
  <editor-floating-menu :editor="editor">
    <div
      slot-scope="{ commands, isActive, menu }"
      class="editor__floating-menu"
      :class="{ 'is-active': menu.isActive }"
      :style="`top: ${menu.top}px`"
    >

      <button
        class="menufloat__button"
        :class="{ 'is-active': isActive.heading({ level: 1 }) }"
        @click="commands.heading({ level: 1 })"
      >
        H1
      </button>

      <button
        class="menufloat__button"
        :class="{ 'is-active': isActive.heading({ level: 2 }) }"
        @click="commands.heading({ level: 2 })"
      >
        H2
      </button>

      <button
        class="menufloat__button"
        :class="{ 'is-active': isActive.heading({ level: 3 }) }"
        @click="commands.heading({ level: 3 })"
      >
        H3
      </button>

      <button
        class="menufloat__button"
        :class="{ 'is-active': isActive.bullet_list() }"
        @click="commands.bullet_list"
      >
        <q-icon name="mdi-format-list-bulleted" />
      </button>

      <button
        class="menufloat__button"
        :class="{ 'is-active': isActive.ordered_list() }"
        @click="commands.ordered_list"
      >
        <q-icon name="mdi-format-list-numbered" />
      </button>

      <button
        class="menufloat__button"
        :class="{ 'is-active': isActive.blockquote() }"
        @click="commands.blockquote"
      >
        <q-icon name="mdi-format-quote-close" />
      </button>

      <button
        class="menufloat__button"
        :class="{ 'is-active': isActive.code_block() }"
        @click="commands.code_block"
      >
        <q-icon name="mdi-code-not-equal-variant" />
      </button>

    </div>
  </editor-floating-menu>

</template>

<script>
import { EditorFloatingMenu } from 'tiptap'
export default {
  name: 'HtmlEditorFloatingMenu',
  mixins: [ ],
  props: ['view', 'editor'],
  components: {
    EditorFloatingMenu
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

<style lang="stylus">

.editor
  &__floating-menu
    position: absolute
    margin-top: -0.25rem
    visibility: hidden
    opacity: 0
    transition: opacity 0.2s, visibility 0.2s
    &.is-active
      opacity: 1
      visibility: visible

</style>
