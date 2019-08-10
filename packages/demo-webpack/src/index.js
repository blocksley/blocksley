import './css/app.styl'

import Vue from 'vue'
import store from './store'

import '@blocksley/blocksley/src/css/blocksley.styl'
import blocksley, { Blocksley } from '@blocksley/blocksley'

import { Title, List, Image, Paragraph, Html, Page } from '@blocksley/blocksley/src/models'

Vue.use(blocksley, {})

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
