<template>
<div class="fit">
  <toolbox-shell>
    <q-list>
      <q-item to="/users/create" exact>
        <q-item-section avatar>
          <q-icon name="mdi-account-plus-outline" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Add User</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

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
