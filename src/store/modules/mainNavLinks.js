export default {
  state: {
    links: [
      { path: '/', name: 'Каталог' },
      { path: '/', name: 'Доставка' },
      { path: '/', name: 'Оплата' },
      { path: '/', name: 'Контакты' },
      { path: '/', name: 'О галерее' },
    ],
  },
  getters: {
    links(state) {
      return state.links;
    },
  },
};
