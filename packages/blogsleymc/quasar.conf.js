path = require('path');
webpack = require('webpack')
config = require('./config')

CopyWebpackPlugin = require('copy-webpack-plugin')

const distDir = '../../dist'
const publicPath = '/'

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'dexie',
      'axios',
      'apollo',
      'lazyload',
      'tippy',
      'resizable',
      'blogsley'
    ],

    css: [
      'app.styl',
      'codemirror.styl'
    ],

    extras: [
      'roboto-font',
      'material-icons',
      'mdi-v3'
      // 'ionicons-v4',
      // 'fontawesome-v5',
      // 'eva-icons'
    ],

    framework: {
      // all: true, // --- includes everything; for dev only!

      components: [
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QSeparator',
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
        'QTooltip',
        'QFab',
        'QFabAction',
        'QMenu',
        'QPopupProxy',
        'QLinearProgress'
      ],

      directives: [
        'Ripple',
        'ClosePopup'
      ],

      // Quasar plugins
      plugins: [
        'Notify'
      ]

      // iconSet: 'fontawesome-v5'
      // lang: 'de' // Quasar language
    },

    supportIE: false,

    build: {
      distDir,
      publicPath,
      env: config(ctx.dev),
      scopeHoisting: true,
      vueRouterMode: 'history',
      vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      uglifyOptions: {
        compress: { drop_console: true }
      },
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        })
        cfg.plugins.push(...[
          new webpack.DefinePlugin({
            'process.env': config(ctx.dev)
          })
        ])
        if(!ctx.dev) {
          cfg.plugins.push(
            new CopyWebpackPlugin([
              {
                from: '_redirects',
                to: cfg.output.path
              }
            ])  
          )
        }
      }
    },

    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },

    // animations: 'all' --- includes all animations
    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [{
          urlPattern: /storage/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'storage-images'
          }
        }]
      },
      manifest: {
        name: 'Blogsley',
        short_name: 'Blogsley-PWA',
        description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#007d7e',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    cordova: {
      // id: 'org.cordova.quasar.app'
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack (cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
