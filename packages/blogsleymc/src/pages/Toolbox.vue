<template>
  <toolbox-shell :showShortcuts="false">

    <q-list>
      <q-item to="/users">
        <q-item-section avatar>
          <q-icon name="mdi-account-multiple" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Users</q-item-label>
        </q-item-section>
      </q-item>

      <q-item to="/pages">
        <q-item-section avatar>
          <q-icon name="mdi-book-open-page-variant" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Pages</q-item-label>
        </q-item-section>
      </q-item>

      <q-item to="/images">
        <q-item-section avatar>
          <q-icon name="mdi-folder-image" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Images</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>

  </toolbox-shell>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import ToolboxShell from 'components/ToolboxShell'

export default {
  name: 'HomeToolbox',
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
