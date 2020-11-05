<template lang="pug">
  article.card
    .card__container
      h2.card__header {{data.name}}
      .card__price-wrapper
        .card__price-container
          p.card__price(:class="data.discount && 'card__price--discount'")
            span.visually-hidden {{ data.discount ? 'Старая цена:' : 'Цена:'}}
            | {{normalizedPrice}} {{data.currency}}
          p.card__discount(v-if="data.discount")
            span.visually-hidden Цена:
            | {{normalizedDiscount}} {{data.currency}}
        button.card__btn(type="button") Купить
    p.card__image
      img(:src="data.img" width="200" height="100" :alt="data.name")
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      name: String,
      price: Number,
      discount: Number,
      currency: String,
      inStock: Boolean,
      img: String,
    },
  },
  computed: {
    normalizedPrice() {
      return this.data.price.toLocaleString('ru');
    },
    normalizedDiscount() {
      return this.data.discount.toLocaleString('ru');
    },
  },
};
</script>

<style lang="scss">
@import '~@/scss/main.scss';

.card {
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  width: 100%;
  min-height: 320px;

  &__container {
    width: 100%;
  }

  &__image {
    order: -1;
    width: 100%;
  }
}

.card__container {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
}

.card__header {
  @include paragraph-reset;

  width: 100%;
  margin-bottom: 2rem;
}

.card__price-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
}

.card__price-container {
  width: 50%;
  align-items: center;
}

.card__price,
.card__discount {
  @include paragraph-reset;

  font-weight: 700;
}

.card__price {
  &--discount {
    text-decoration: line-through;
    color: lightgray;
  }
}

.card__btn {
  width: 50%;
  justify-self: flex-end;
  // temp
  min-height: 3.5rem;
}

.card__image {
  @include paragraph-reset;

  min-width: 280px;
  min-height: 160px;
  background-color: $color-bg-alter;
}
</style>
