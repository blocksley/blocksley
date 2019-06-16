import { Blocksley } from '@blocksley/blocksley'

export default (options) => {
  const { Vue } = options
  console.log('blocksley boot ...')
  console.log(Blocksley)
  console.log(options)
  Vue.component('blocksley', Blocksley)
}
