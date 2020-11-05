import Vue from 'vue';
import Vuex from 'vuex';
// Modules
import mainNavLinks from '@/store/modules/mainNavLinks';
import paintings from '@/store/modules/paintings';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { mainNavLinks, paintings },
});
