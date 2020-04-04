const state = {
  leftDrawerOpen: false,
  view: null,
  page: null,
  toolbar: null,
  header: null,
  footer: null,
  editor: null,
  edited: null,
  image: null
}

const getters = {
  leftDrawerOpen: (state) => state.leftDrawerOpen,
  view: (state) => state.view,
  page: (state) => state.page,
  toolbar: (state) => state.toolbar,
  header: (state) => state.header,
  footer: (state) => state.footer,
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
  setHeader: (context, header) => {
    context.commit('header', header)
  },
  setFooter: (context, footer) => {
    context.commit('footer', footer)
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
    if (state.toolbar === toolbar) {
      return
    }
    state.toolbar = toolbar
  },
  header: (state, header) => {
    state.header = header
  },
  footer: (state, footer) => {
    if (state.footer === footer) {
      return
    }
    state.footer = footer
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
