export const state = () => ({
  drawerIsOpen: false,
})

export const actions = {
  setDrawerStatus({ commit, state }, status) {
    commit('SET_DRAWER_STATUS', status)
  },

  async getIncidents() {
    const res = await this.$axios.get(
      '/get-product-detail?slug=high-accuracy-leveler-and-straightener-machines-cut-to-length-line-machine-made-in-china-x'
    )
    return res
  },
}

export const mutations = {
  SET_DRAWER_STATUS(state, status) {
    state.drawerIsOpen = status
  },
}
