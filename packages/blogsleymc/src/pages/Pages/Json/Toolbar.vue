<template>
  <toolbox-shell>

    <q-list>
      <q-item @click="$router.go(-1)" clickable>
        <q-item-section avatar>
          <q-icon name="mdi-chevron-left" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Back</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

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
