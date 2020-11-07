import Vue from 'vue';
import Vuex from 'vuex';
// Modules
import mainNavLinks from '@/store/modules/mainNavLinks';
import paintings from '@/store/modules/paintings';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    ADD_ITEM_TO_CART(state, product) {
      state.cart.push(product);
    },
    REMOVE_ITEM_FROM_CART(state, product) {
      state.cart = state.cart.filter(item => item !== product);
    },
    INITIALISE_STORE(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
  },
  actions: {
    ADD_TO_CART({ commit }, item) {
      commit('ADD_ITEM_TO_CART', item);
    },
    REMOVE_FROM_CART({ commit }, item) {
      commit('REMOVE_ITEM_FROM_CART', item);
    },
  },
  getters: {
    cart(state) {
      return state.cart;
    },
  },
  modules: { mainNavLinks, paintings },
});

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

export default store;
