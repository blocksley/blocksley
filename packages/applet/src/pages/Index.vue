<template>
  <q-page>
    <blocksley :model="model"/>
  </q-page>
</template>

<style>
</style>

<script>
import { Title, List, Image, Paragraph, Html, Page } from '@blocksley/blocksley/src/models'
import { PageMixin } from '@blocksley/blocksley/src/mixins'

export default {
  name: 'PageIndex',
  mixins: [PageMixin],
  components: {
  },
  data () {
    return {
      model: new Page([
        new Title(),
        new Paragraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
        new Image('statics/journal-on-desk.jpg', { title: 'Journal on Desk' }),
        new Paragraph('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
        new Html('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'),
        new List(['Get Milk', 'Get Bread', 'Get Butter'])
      ])
    }
  },
  created () {
    console.log('demo created')
    console.log(this.$blocksley)
    console.log(this.$page)
    if (!this.$page) {
      this.$page = this.model
    } else {
      this.model = this.$page
    }
    console.log(this.$page)
  }
}
</script>
