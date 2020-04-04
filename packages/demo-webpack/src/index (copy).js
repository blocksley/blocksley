import Vue from 'vue'
// import Vuex from 'vuex'
import store from './store'

import { directive as ClickAway } from 'vue-clickaway'
import Draggable from 'vuedraggable'

import VueDraggableResizable from 'vue-draggable-resizable'
// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

import './css/app.styl'

import Quasar, {
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

import '@blocksley/blocksley/src/css/blocksley.styl'
// import blocksley from '@blocksley/blocksley'
import { Blocksley } from '@blocksley/blocksley'

import { Title, List, Image, Paragraph, Html, Page } from '@blocksley/blocksley/src/models'
// import { PageMixin } from '@blocksley/blocksley/src/mixins'

// Vue.use(Vuex)

Vue.directive('clickaway', ClickAway)
Vue.component('draggable', Draggable)
Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.use(Quasar, {
  config: {
  },
  build: {
    vueCompiler: true
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

const model = new Page([
  new Title(),
  new Paragraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
  new Image('statics/journal-on-desk.jpg', { title: 'Journal on Desk' }),
  new Paragraph('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
  new Html('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'),
  new List(['Get Milk', 'Get Bread', 'Get Butter'])
])

new Vue({
  store,
  render: h => h(Blocksley, {
    props: {
      model
    }
  })
}).$mount('#app')
