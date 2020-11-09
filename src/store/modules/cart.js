import axios from 'axios';

export default {
  state: {
    cart: [],
  },
  mutations: {
    ADD_ITEM_TO_CART(state, product) {
      state.cart.push(product);
    },
    REMOVE_ITEM_FROM_CART(state, product) {
      state.cart = state.cart.filter(item => item !== product.id);
    },
    INITIALISE_STORE(state) {
      if (localStorage.getItem('cart')) {
        Object.assign(state, JSON.parse(localStorage.getItem('cart')));
      }
    },
  },
  actions: {
    ADD_TO_CART({ commit }, item) {
      commit('SET_LOADING', item, { root: true });
      axios.get('https://jsonplaceholder.typicode.com/posts/1').then(() => {
        commit('UNSET_LOADING', item, { root: true });
        commit('ADD_ITEM_TO_CART', item.id);
      });
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
};
