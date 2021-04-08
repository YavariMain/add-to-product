export const state = () => ({
  drawerIsOpen: false,
})

export const actions = {
  setDrawerStatus({ commit, state }, status) {
    commit('SET_DRAWER_STATUS', status)
  },
}

export const mutations = {
  SET_DRAWER_STATUS(state, status) {
    state.drawerIsOpen = status
  },
}
