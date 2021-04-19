export const state = () => ({
  sidebar: false,
  alertA: true,
  alertB: true
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  toggleA (state) {
    state.alertA = !state.alertA
  },
  toggleB (state) {
    state.alertB = !state.alertB
  }
}
