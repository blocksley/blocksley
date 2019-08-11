import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'

import { directive as ClickAway } from 'vue-clickaway'
import Draggable from 'vuedraggable'

import VueDraggableResizable from 'vue-draggable-resizable'

// fonts also have to be global as well as in the shadow
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v3/mdi-v3.css'

import {
  Quasar,
  Ripple,
  ClosePopup,
  TouchHold,

  QLayout,
  QHeader,
  QFooter,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QSeparator,
  QBanner,
  QBtn,
  QBtnDropdown,
  QBtnGroup,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QInput,
  QField,
  QImg,
  QUploader,
  QDialog,
  QCard,
  QCardSection,
  QCardActions,
  QSpace,
  QBar,
  QTooltip,
  QFab,
  QFabAction,
  QPageSticky,
  QMenu,
  QPopupProxy
} from 'quasar'

import App from 'app/src/App.vue'
import createStore from 'app/src/store/index'
import createRouter from 'app/src/router/index'

Vue.directive('clickaway', ClickAway)
Vue.component('draggable', Draggable)
Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.use(Quasar, {
  config: {
  },
  components: {
    QLayout,
    QHeader,
    QFooter,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QSeparator,
    QBanner,
    QBtn,
    QBtnDropdown,
    QBtnGroup,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QInput,
    QField,
    QImg,
    QUploader,
    QDialog,
    QCard,
    QCardSection,
    QCardActions,
    QSpace,
    QBar,
    QTooltip,
    QFab,
    QFabAction,
    QPageSticky,
    QMenu,
    QPopupProxy
  },
  directives: [
    Ripple,
    ClosePopup,
    TouchHold
  ],
  plugins: {
  }
})

import blocksley, { Blocksley } from '@blocksley/blocksley'
Vue.prototype.$blocksley = blocksley
Vue.component('blocksley', Blocksley)

const store = typeof createStore === 'function'
? createStore({Vue})
: createStore

const router = typeof createRouter === 'function'
? createRouter({Vue, store})
: createRouter

// make router instance available in store
store.$router = router

App.store = store
App.router = router

const CustomElement = wrap(Vue, App)
window.customElements.define('blocksley-applet', CustomElement)
