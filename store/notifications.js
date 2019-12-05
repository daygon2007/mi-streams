export const state = () => ({
  alertA: true,
  alertB: true
})

export const mutations = {
  toggleA (state) {
    state.alertA = !state.alertA
  },
  toggleB (state) {
    state.alertB = !state.alertB
  }
}
