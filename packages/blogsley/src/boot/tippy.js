import VueTippy, { TippyComponent } from 'vue-tippy'

import 'tippy.js/themes/light.css'
import 'tippy.js/themes/light-border.css'
import 'tippy.js/themes/google.css'
import 'tippy.js/themes/translucent.css'

// "async" is optional
export default async ({ Vue }) => {
  Vue.use(VueTippy)
  Vue.component('tippy', TippyComponent)
  // or
  /*
  Vue.use(VueTippy,{
      flipDuration: 0,
      popperOptions: {
          modifiers: {
              preventOverflow: {
                  enabled: false
              }
          }
      }
  }) */
}
