<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <BlockCard v-for="block in blocks" :key="block.id" :block="block" @click.native="select(block)" clickable/>
  </div>
</template>

<style>
</style>

<script>
import nanoid from 'nanoid'

import { UiMixin } from '../../mixins'
import BlockCard from './BlockCard'

export default {
  name: 'BlockChooser',
  mixins: [UiMixin],
  props: ['select'],
  components: {
    BlockCard
  },
  data () {
    return {
      title: 'Blocks',
      authorId: this.$route.params.authorId,
      maximizedToggle: true,
      blocks: [
    {
      id: nanoid(),
      name: 'paragraph',
      title: 'Paragraph',
      icon: 'mdi-format-paragraph'
    },
    {
      id: nanoid(),
      name: 'heading',
      title: 'Heading',
      icon: 'mdi-alpha-h'
    },
    {
      id: nanoid(),
      name: 'list',
      title: 'List',
      icon: 'mdi-format-list-bulleted'
    },
    {
      id: nanoid(),
      name: 'image',
      title: 'Image',
      icon: 'mdi-image'
    },
    {
      id: nanoid(),
      name: 'html',
      title: 'HTML',
      icon: 'mdi-language-html5'
    },
    {
      id: nanoid(),
      name: 'quote',
      title: 'Quote',
      icon: 'format_quote'
    }
      ]
    }
  },
  methods: {
  }
}
</script>
