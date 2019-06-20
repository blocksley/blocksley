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
      /*
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      } */
    }
  }
}
</script>

<style lang="stylus">
</style>
