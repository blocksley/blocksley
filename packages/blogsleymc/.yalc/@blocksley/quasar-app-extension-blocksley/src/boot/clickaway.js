import { directive as ClickAway } from 'vue-clickaway'

// "async" is optional
export default async ({ Vue }) => {
  Vue.directive('clickaway', ClickAway)
}
