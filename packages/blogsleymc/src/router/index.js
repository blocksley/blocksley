import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function ({ store }) {
  const router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !store.state.user.isLoggedIn) {
      if (process.env.AUTH_USER && process.env.AUTH_PWD) {
        store.dispatch('login', {
          username: process.env.AUTH_USER,
          password: process.env.AUTH_PWD
        }).then(() => {
          router.push('/')
        })
      } else {
        next('/login')
      }
    } else {
      next()
    }
  })

  return router
}
