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

    <q-list>
      <q-item @click="view.save()" clickable>
        <q-item-section avatar>
          <q-icon name="save" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Save</q-item-label>
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
