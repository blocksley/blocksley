import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './quasar'

import { directive as ClickAway } from 'vue-clickaway'
import Draggable from 'vuedraggable'

import VueDraggableResizable from 'vue-draggable-resizable'
// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.directive('clickaway', ClickAway)
Vue.component('draggable', Draggable)
Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.config.productionTip = false

import blocksley, { Blocksley } from '@blocksley/blocksley'
Vue.prototype.$blocksley = blocksley
Vue.component('blocksley', Blocksley)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
