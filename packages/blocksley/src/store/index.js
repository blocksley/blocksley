// TODO:FIXME:  importing kits and models here to avoid circular references
import kits from '../kits'
import models from '../models'

const state = {
  models: null,
  kits: null,
  view: null,
  toolbar: null,
  editor: null,
  edited: null,
  image: null,
  leftDrawerOpen: false,
}

const getters = {
  models: (state) => state.models,
  kits: (state) => state.kits,
  view: (state) => state.view,
  toolbar: (state) => state.toolbar,
  $editor: (state) => state.editor,
  edited: (state) => state.edited,
  $image: (state) => state.image,
  leftDrawerOpen: (state) => state.leftDrawerOpen,
}

const actions = {
  setView: ({ commit }, data) => {
    commit('view', data)
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
  },
  setLeftDrawerOpen: ({ commit }, value) => {
    commit('leftDrawerOpen', value)
  },
  toggleLeftDrawer: ({ commit, state }) => {
    commit('leftDrawerOpen', !state.leftDrawerOpen)
  }
}

const mutations = {
  view: (state, data) => {
    state.view = data
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
  },
  leftDrawerOpen: (state, data) => {
    state.leftDrawerOpen = data
  }
}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
