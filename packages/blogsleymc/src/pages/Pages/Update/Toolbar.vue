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
      <q-item clickable @click="view.json()">
        <q-item-section avatar>
          <q-icon name="code" />
        </q-item-section>
        <q-item-section>
          <q-item-label>JSON</q-item-label>
        </q-item-section>
      </q-item>
      <q-item @click="view.save()" clickable>
        <q-item-section avatar>
          <q-icon name="save" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Save</q-item-label>
        </q-item-section>
      </q-item>
      <q-item @click="view.publish()" clickable>
        <q-item-section avatar>
          <q-icon name="publish" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Publish</q-item-label>
        </q-item-section>
      </q-item>
      <q-item @click="view.destroy()" clickable>
        <q-item-section avatar>
          <q-icon name="delete" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Delete</q-item-label>
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
