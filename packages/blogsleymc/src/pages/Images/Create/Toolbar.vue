<template>
<div class="fit">
  <toolbox-shell>

    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="$router.go(-1)"
      >
        <q-icon name="mdi-chevron-left" />
      </q-btn>

      <q-toolbar-title shrink>
        {{view.title}}
      </q-toolbar-title>

    </q-toolbar>
  </toolbox-shell>
</div>
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
