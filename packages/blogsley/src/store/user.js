// import axios from 'axios'
import jwtDecode from 'jwt-decode'
import gql from 'graphql-tag'
const directives = process.env.STANDALONE ? '@client' : ''

const state = {
  isLoggedIn: false,
  pending: false,
  user: null
}

const getters = {
  isLoggedIn: (state) => {
    // return state.isLoggedIn
    return localStorage.getItem('user')
  },
  user: (state) => {
    return state.user
  }
}

const actions = {
  login: (info, data) => {
    const { commit, rootState } = info
    console.log(info)
    commit('login') // show spinner
    return new Promise(resolve => {
      rootState.apolloProvider.defaultClient.mutate({
        // Query
        mutation: gql`
          mutation ($data: LoginInput!) {
            login(data: $data) ${directives} {
              token
            }
          }`,
        // Parameters
        variables: {
          data
        }
      }).then((data) => {
        console.log('login success')
        console.log(data)
        state.isLoggedIn = true
        commit('loginSuccess', data.data.login)
        resolve()
      })
    })
  },
  logout: ({ commit }) => {
    commit('logout')
  }
}

const mutations = {
  login: (state) => {
    state.pending = true
  },
  loginSuccess: (state, data) => {
    if (process.env.STANDALONE) {
      state.isLoggedIn = true
      state.pending = false
      return
    }
    const token = data.token
    localStorage.setItem('user-token', token)
    const user = jwtDecode(token)
    user.token = token

    console.log('Token', token)
    console.log('User', user)

    localStorage.setItem('user', user)
    state.user = user

    state.isLoggedIn = true
    state.pending = false
  },
  logout: (state) => {
    state.isLoggedIn = false
    state.user = null
    localStorage.removeItem('user')
    localStorage.removeItem('user-token')
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
