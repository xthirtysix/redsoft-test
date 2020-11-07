export default {
  state: {
    paintings: [
      {
        id: 1000,
        name: '«Рождение Венеры» Сандро Боттичелли',
        price: 2e6,
        discount: 1e6,
        currency: '$',
        inStock: true,
        image: 'the-birth-of-venus',
      },
      {
        id: 1001,
        name: '«Тайная вечеря» Леонардо да Винчи',
        price: 3e6,
        discount: undefined,
        currency: '$',
        inStock: true,
        image: 'the-last-supper',
      },
      {
        id: 1002,
        name: '«Сотворение Адама» Микеланджело',
        price: 6e6,
        discount: 5e6,
        currency: '$',
        inStock: true,
        image: 'the-creation-of-adam',
      },
      {
        id: 1003,
        name: '«Урок анатомии» Рембрандт',
        price: 2e6,
        discount: undefined,
        currency: '$',
        inStock: false,
        image: 'the-anatomy-lesson',
      },
    ],
  },
  getters: {
    paintings(state) {
      return state.paintings;
    },
  },
};
