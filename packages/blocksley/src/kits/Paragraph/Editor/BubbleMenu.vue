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
