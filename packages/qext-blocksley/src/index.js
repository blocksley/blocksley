/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */
const path = require('path')

const extendQuasarConf = function (conf) {
  console.log('extend quasar config')
  // console.log(conf)
  // make sure qactivity boot file is registered
  // console.log(` App Extension (blocksley) Info: 'Adding blocksley boot reference to your quasar.conf.js'`)
  conf.boot.push('~@blocksley/quasar-app-extension-blocksley/src/boot/blocksley.js')
  conf.boot.push('~@blocksley/quasar-app-extension-blocksley/src/boot/resizable.js')
  conf.boot.push('~@blocksley/quasar-app-extension-blocksley/src/boot/draggable.js')
  conf.boot.push('~@blocksley/quasar-app-extension-blocksley/src/boot/clickaway.js')
  conf.boot.push('~@blocksley/quasar-app-extension-blocksley/src/boot/tippy.js')
  
  conf.build.vueCompiler = true
  // make sure boot file & component transpiles
  conf.build.transpileDependencies.push(/@blocksley[\\/]quasar-app-extension-blocksley[\\/]src[\\/]/)

  // make sure blocksley css goes through webpack to avoid ssr issues
  // console.log(` App Extension (blocksley) Info: 'Adding blocksley.styl css reference to your quasar.conf.js'`)
  conf.css.push('~@blocksley/blocksley/src/css/blocksley.styl')
  //Material Design Icons
  conf.extras.push('mdi-v3')

  conf.framework.directives = [
    ...conf.framework.directives,
    'ClosePopup',
    'TouchHold'
  ]
  conf.framework.components = [
    ...conf.framework.components,
    'QLayout',
    'QHeader',
    'QFooter',
    'QDrawer',
    'QPageContainer',
    'QPage',
    'QToolbar',
    'QToolbarTitle',
    'QSeparator',
    'QBanner',
    'QBtn',
    'QBtnDropdown',
    'QBtnGroup',
    'QIcon',
    'QList',
    'QItem',
    'QItemSection',
    'QItemLabel',
    'QInput',
    'QField',
    'QImg',
    'QUploader',
    'QDialog',
    'QCard',
    'QCardSection',
    'QCardActions',
    'QBar',
    'QSpace',
    'QBar',
    'QTooltip',
    'QFab',
    'QFabAction',
    'QPageSticky',
    'QMenu',
    'QPopupProxy',
    'QScrollArea'
  ]
  conf.animations = [
    ...conf.animations,
    'fadeInRight',
    'fadeOutRight',
    'fadeInLeft',
    'fadeOutLeft'
  ]
}
module.exports = function (api) {
  // console.log(api)
  // quasar compatibility check
  // api.compatibleWith('@quasar/app', '^1.0.0-beta.18')

  // register JSON api
  api.registerDescribeApi('Blocksley', './Blocksley.json')

  // extend quasar.conf
  api.extendQuasarConf(extendQuasarConf)

  /**
   * @param {function} fn
   *   (cfg: Object, invoke: Object {isClient, isServer}) => undefined
   */

  // add/remove/change cfg (Webpack configuration Object)
  api.extendWebpack((cfg, { isClient, isServer }, api) => {
    console.log('api.extendWebpack')
    console.log('api app directory')
    console.log(api.appDir)
    /*
    cfg.plugins.push(...[
      new webpack.DefinePlugin({
        'process.env': ctx.dev ? webenv('dev') : webenv('pro')
      })
    ])
    */
    // cfg.resolve.symlinks = true
    // cfg.entry.blocksley = path.resolve(__dirname, './component')
    /*
    cfg.resolve.alias = {
      ...cfg.resolve.alias, // This adds the existing alias
      // 'blocksley': path.resolve(__dirname, './component/')
      // 'blocksley': '@blocksley/blocksley/src'
      // 'blocksley': path.resolve(api.appDir, './node_modules/@blocksley/quasar-app-extension-blocksley/src/component/'),
      // 'components': path.resolve(__dirname, 'components')
    } */
    // console.log('webpack aliases')
    // console.log(cfg.resolve.alias)
    // console.log(cfg)
  })
}