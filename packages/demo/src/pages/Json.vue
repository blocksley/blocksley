<template>
  <q-page padding>
    <pre><code>{{json}}</code></pre>
  </q-page>
</template>

<style>
</style>

<script>
import { UiMixin, PageMixin } from '@blocksley/demo-core/src/mixins'

export default {
  name: 'PageJson',
  mixins: [UiMixin, PageMixin],
  data () {
    return {
      json: '',
      lines: []
    }
  },
  components: {
  },
  mounted () {
    const json = this.json = this.$page.model.stringify({
      indent: '  ',
      singleQuotes: false
    })
    this.lines = json.split('\n')
  }
}
</script>
