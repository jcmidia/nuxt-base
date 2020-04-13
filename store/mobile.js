export const state = () => ({
  isMobile: false,
  mobileBreakpoint: 768,
});

export const mutations = {
  change(state, value) {
    state.isMobile = value;
  },
};
