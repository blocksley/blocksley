<template>
<toolbox-shell>
  <q-toolbar>
    <q-toolbar-title>
      {{view.title}}
    </q-toolbar-title>
  </q-toolbar>
</toolbox-shell>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import ToolboxShell from 'components/ToolboxShell'

export default {
  name: 'DefaultToolbar',
  mixins: [
    UiMixin
  ],
  props: [],
  components: {
    ToolboxShell
  },
  methods: {
  }
}
</script>
