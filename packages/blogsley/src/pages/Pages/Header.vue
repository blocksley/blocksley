<template>
  <header-shell>
    <h1>
      <q-icon name="mdi-book-open-page-variant" class="header-icon"/>
      Pages
    </h1>
  </header-shell>
</template>

<script>
import UiMixin from 'src/mixins/ui'

export default {
  name: 'UsersHeader',
  mixins: [
    UiMixin
  ],
  props: [],
  components: {
  },
  methods: {
  }
}
</script>
