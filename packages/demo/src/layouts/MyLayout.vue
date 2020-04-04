<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated reveal :reveal-offset="64"> -->
    <!--
    <q-header elevated>
      <q-toolbar class="app-toolbar">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Blocksley Demo
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    -->
    <q-footer>
      <q-bar style="background-color:black; color:white">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
      </q-bar>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-toolbar class="app-toolbar" style="color:white">
        <q-toolbar-title>
        <q-icon name="mdi-cube-outline"/>
          Blocksley Demo
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="cancel" />
        </q-btn>
      </q-toolbar>

      <q-list>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="edit" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Edit</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/json">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>JSON</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-separator/>
      <q-item>Quasar v{{ $q.version }}</q-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
