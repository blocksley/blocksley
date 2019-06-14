import VueTippy from 'vue-tippy'

// "async" is optional
export default async ({ Vue }) => {
  Vue.use(VueTippy)
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
