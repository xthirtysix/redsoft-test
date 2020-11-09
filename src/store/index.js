import Vue from 'vue';
import Vuex from 'vuex';
// Modules
import mainNavLinks from '@/store/modules/mainNavLinks';
import paintings from '@/store/modules/paintings';
import cart from '@/store/modules/cart';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { mainNavLinks, paintings, cart },
});

store.subscribe((mutation, state) => {
  localStorage.setItem('cart', JSON.stringify(state.cart));
});

export default store;
