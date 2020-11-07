<template lang="pug">
  article.card(:class="{'card--out-of-stock': !data.inStock}")
    .card__container
      h2.card__header {{data.name}}
      .card__price-wrapper(v-if="data.inStock")
        .card__price-container
          p.card__price(:class="data.discount && 'card__price--discount'")
            span.visually-hidden {{ data.discount ? 'Старая цена:' : 'Цена:'}}
            | {{normalizedPrice}} {{data.currency}}
          p.card__discount(v-if="data.discount")
            span.visually-hidden Цена:
            | {{normalizedDiscount}} {{data.currency}}
        button.card__btn(
          type="button"
          :class="{\
              'card__btn--wide': data.discount,\
              'card__btn--in-cart': isInCart,\
              'card__btn--in-cart-wide': isInCart && !data.discount\
              }"
          @click="buttonHandler"
        ) {{isInCart ? 'В корзине' : 'Купить'}}
      .card__price-wrapper(v-else)
        p.card__sold-description(v-if="!data.inStock") Продано на аукционе
    p.card__image
      picture
        source(:srcset=
        "`${require(`@/assets/img/${data.image}.jpg`)} 1x, ${require(`@/assets/img/${data.image}@2x.jpg`)} 2x`"
        )
        img(:src="require(`@/assets/img/${data.image}.jpg`)" width="279" height="160" :alt="data.name")
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      id: { type: Number },
      name: { type: String },
      price: { type: Number },
      discount: { type: Number },
      currency: { type: String },
      inStock: { type: Boolean },
      image: { type: String },
    },
    isInCart: { type: Boolean },
  },
  computed: {
    normalizedPrice() {
      return this.data.price.toLocaleString('ru');
    },
    normalizedDiscount() {
      return this.data.discount.toLocaleString('ru');
    },
  },
  methods: {
    buttonHandler() {
      this.isInCart
        ? this.$emit('removeFromCart', this.data.name)
        : this.$emit('addToCart', this.data.name);
    },
  },
};
</script>

<style lang="scss">
@import '~@/scss/main.scss';

.card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid $color-border;

  &__container {
    width: 100%;
  }

  &__image {
    order: -1;
    width: 100%;
  }

  &--out-of-stock {
    opacity: 0.5;
  }
}

.card__container {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  padding: 1.35rem 1.45rem 1.5rem 1.45rem;
}

.card__header {
  @include paragraph-reset;

  width: 100%;
  margin-bottom: 1.35rem;
}

.card__price-wrapper {
  display: flex;
  width: 100%;
  margin-top: auto;
  align-items: center;
}

.card__price-container {
  width: 49%;
  align-items: center;
}

.card__price,
.card__discount {
  @include paragraph-reset;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.card__price {
  &--discount {
    text-decoration: line-through;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    color: lightgray;
  }
}

.card__sold-description {
  align-self: flex-start;
  font-weight: inherit;
  font-size: 16px;
  letter-spacing: 0.1px;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
}

.card__btn {
  @include button;

  justify-self: flex-end;
  margin-left: auto;
  padding: 16px 28px 15px 28px;
  letter-spacing: 0.5px;

  &--wide {
    padding: 16px 31px 15px 31px;
  }

  &--in-cart {
    @include with-before;
    padding: 16px 9px 15px 32px;
    background-color: $color-accent;

    &::before {
      top: calc(50% - 6px);
      left: 9px;
      width: 16px;
      height: 12px;
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='13' viewBox='0 0 16 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.5315 1.80937L5.63341 11.237L1.34814 7.19237' stroke='%23F4F6F9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      background-size: 16px 12px;
      background-repeat: no-repeat;
    }
  }

  &--in-cart-wide {
    padding-left: 26px;

    &::before {
      left: 7px;
    }
  }
}

.card__image {
  @include paragraph-reset;

  box-sizing: border-box;
  max-width: 280px;
  max-height: 260px;
  line-height: 0;
  background-color: $color-bg-alter;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
