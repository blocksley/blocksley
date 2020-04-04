import { directive as ClickAway } from 'vue-clickaway'
import Draggable from 'vuedraggable'

import VueDraggableResizable from 'vue-draggable-resizable'
// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

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
  QPopupProxy,
  QScrollArea
} from 'quasar'

import { Blocksley } from './components'

export function install (Vue, options) {
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
      QPopupProxy,
      QScrollArea
    },
    directives: [
      Ripple,
      ClosePopup,
      TouchHold
    ],
    plugins: {
    }
  })
  Vue.component('blocksley', Blocksley)
}
