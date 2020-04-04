import blocksley, { Blocksley } from '@blocksley/blocksley'

export default (options) => {
  const { Vue } = options
  console.log('blocksley booting ...')
  console.log(Blocksley)
  console.log(options)
  Vue.prototype.$blocksley = blocksley
  Vue.component('blocksley', Blocksley)
}
