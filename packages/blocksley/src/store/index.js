import views from '../views'
import models from '../models'

const state = {
  models: null,
  views: null,
  leftDrawerOpen: false,
  view: null,
  page: null,
  toolbar: null,
  editor: null,
  edited: null,
  image: null
}

const getters = {
  models: (state) => models,
  views: (state) => views,
  leftDrawerOpen: (state) => state.leftDrawerOpen,
  view: (state) => state.view,
  page: (state) => state.page,
  toolbar: (state) => state.toolbar,
  $editor: (state) => state.editor,
  edited: (state) => state.edited,
  $image: (state) => state.image
}

const actions = {
  setLeftDrawerOpen: ({ commit }, value) => {
    commit('leftDrawerOpen', value)
  },
  toggleLeftDrawer: ({ commit, state }) => {
    commit('leftDrawerOpen', !state.leftDrawerOpen)
  },
  setView: ({ commit }, data) => {
    commit('view', data)
  },
  setPage: ({ commit }, data) => {
    commit('page', data)
  },
  setToolbar: (context, toolbar) => {
    context.commit('toolbar', toolbar)
  },
  setEditor: (context, editor) => {
    context.commit('editor', editor)
  },
  setEdited: (context, edited) => {
    context.commit('edited', edited)
  },
  setImage: (context, image) => {
    context.commit('image', image)
  }
}

const mutations = {
  leftDrawerOpen: (state, data) => {
    state.leftDrawerOpen = data
  },
  view: (state, data) => {
    state.view = data
  },
  page: (state, data) => {
    state.page = data
  },
  toolbar: (state, toolbar) => {
    state.toolbar = toolbar
  },
  editor: (state, editor) => {
    state.editor = editor
  },
  edited: (state, edited) => {
    state.edited = edited
  },
  image: (state, image) => {
    state.image = image
  }
}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
