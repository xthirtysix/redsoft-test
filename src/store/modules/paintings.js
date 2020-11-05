export default {
  state: {
    paintings: [
      {
        name: '«Рождение Венеры» Сандро Боттичелли',
        price: 2e6,
        discount: 1e6,
        currency: '$',
        inStock: true,
      },
      {
        name: '«Тайная вечеря» Леонардо да Винчи',
        price: 3e6,
        discount: undefined,
        currency: '$',
        inStock: true,
      },
      {
        name: '«Сотворение Адама» Микелланджело',
        price: 6e6,
        discount: 5e6,
        currency: '$',
        inStock: true,
      },
      {
        name: '«Урок анатомии» Рембрандт',
        price: 2e6,
        discount: undefined,
        currency: '$',
        inStock: false,
      },
    ],
  },
  getters: {
    paintings(state) {
      return state.paintings;
    },
  },
};
