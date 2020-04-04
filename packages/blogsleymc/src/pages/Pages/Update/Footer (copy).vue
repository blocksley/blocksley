<template>
<div>
  <footer-shell>
    <!--
      <q-btn label="Click Me" color="primary" @click="seamless = true" ></q-btn>
      <q-dialog v-model="seamless" seamless position="bottom">
        <q-card >
          <q-linear-progress :value="0.6" color="pink" ></q-linear-progress>
          <q-card-section class="row items-center no-wrap">
            <div>
              <div class="text-weight-bold">The Walker</div>
              <div class="text-grey">Fitz & The Tantrums</div>
            </div>
            <q-space ></q-space>
            <q-btn flat round icon="play_arrow" ></q-btn>
            <q-btn flat round icon="pause" ></q-btn>
            <q-btn flat round icon="close" v-close-popup ></q-btn>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-actions>
          <q-btn label="Share" color="primary" flat ></q-btn>
          <q-btn label="Comment" color="secondary" flat ></q-btn>
        </q-card-actions>
          <q-img
          src="statics/images/journal-on-desk.jpg"
          style="width: 100%"
        >
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Caption
          </div>
        </q-img>
        </q-card>
      </q-dialog>
      -->
  </footer-shell>
  </div>
</template>

<script>
import UiMixin from 'src/mixins/ui'
export default {
  name: 'PageUpdateFooter',
  mixins: [
    UiMixin
  ],
  props: [],
  components: {
  },
  data () {
    return {
      seamless: false
    }
  },
  methods: {
  }
}
</script>
