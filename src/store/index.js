import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    defaultIndex: 0,
    isSlideToLoop: 0,
    clientWidth: 0,
    clientHeight: 0,
    isDownload: 0,
  },
  getters: {
    getdefaultIndex: (state) => state.defaultIndex,
    isSlideToLoop: (state) => state.isSlideToLoop,
    getClientWidth: (state) => state.clientWidth,
    getClientHeight: (state) => state.clientHeight,
    getIsDownload: (state) => state.isDownload
  },
  mutations: {
    setdefaultIndex(state, defaultIndex) {
      state.defaultIndex = defaultIndex;
    },
    setisSlideToLoop(state, isSlideToLoop) {
      state.isSlideToLoop = isSlideToLoop;
    },
    setClientWidth(state, clientWidth) {
      state.clientWidth = clientWidth;
    },
    setClientHeight(state, clientHeight) {
      state.clientHeight = clientHeight;
    },
    setIsDownload(state, isDownload) {
      state.isDownload = isDownload
    }

  },
  actions: {},
  modules: {}
});
