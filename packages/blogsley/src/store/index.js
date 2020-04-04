import Vue from 'vue'
import Vuex from 'vuex'

import main from './main'
import user from './user'
import net from './net'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      main,
      user,
      net
    }
  })

  return Store
}
