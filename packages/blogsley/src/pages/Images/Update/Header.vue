<template>
  <header-shell>
    <h1>
      <q-icon name="mdi-folder-image" class="header-icon"/>
      Image
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
