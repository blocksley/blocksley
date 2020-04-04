export const NET_STANDALONE = 0
export const NET_SERVER = 1

const state = {
  netMode: NET_STANDALONE
}

const getters = {
  netMode: (state) => state.netMode,
  standAlone: (state) => state.netMode === NET_STANDALONE
}

const actions = {
  setNetMode: ({ commit }, value) => {
    commit('netMode', value)
  }
}

const mutations = {
  netMode: (state, data) => {
    state.netMode = data
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
