// TODO:FIXME:  importing kits and models here to avoid circular references
import kits from '../kits'
import models from '../models'

export const fake = {
  kits: kits,
  models: models
}

const state = {
  models: null,
  kits: null,
}

const getters = {
  models: (state) => state.models,
  kits: (state) => state.kits,
}

const actions = {
}

const mutations = {
}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
