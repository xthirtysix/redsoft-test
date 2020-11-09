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
              'card__btn--loading': data.loading,\
              }"
          @click="buttonHandler"
        ) {{isInCart ? 'В корзине' : 'Купить'}}
      .card__price-wrapper(v-else)
        p.card__sold-description(v-if="!data.inStock") Продано на аукционе
    p.card__image
      picture
        source(type="image/webp" :srcset=
        "`${require(`@/assets/img/${data.image}.webp`)} 1x, ${require(`@/assets/img/${data.image}@2x.webp`)} 2x`"
        )
        source(type="image/jpeg" :srcset=
        "`${require(`@/assets/img/${data.image}.jpg`)} 1x, ${require(`@/assets/img/${data.image}@2x.jpg`)} 2x`"
        )
        img(:src="require(`@/assets/img/${data.image}.jpg`)" width="280" height="160" :alt="data.name")
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
      loading: { type: Boolean },
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
        ? this.$emit('removeFromCart', this.data)
        : this.$emit('addToCart', this.data);
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

  &--out-of-stock {
    opacity: 0.5;
  }
}

.card__container {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-grow: 1;
  padding: 1.2rem 1.45rem 1.51rem 1.45rem;
}

.card__header {
  @include paragraph-reset;

  width: 100%;
  margin-bottom: 1.15rem;
}

.card__price-wrapper {
  display: flex;
  width: 100%;
  margin-top: auto;
  align-items: center;
}

.card__price-container {
  width: 49%;
  margin-top: -1px;
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

  position: relative;
  justify-self: flex-end;
  min-width: 112px;
  margin-left: auto;
  padding: 14px 26px 13px 27px;
  text-align: center;
  letter-spacing: 0.6px;

  &--wide {
    min-width: 118px;
  }

  &--in-cart {
    @include with-before;
    padding-left: unset;
    padding-right: 9px;
    text-align: right;
    background-color: $color-accent;

    &::before {
      top: calc(50% - 6px);
      left: 5px;
      width: 16px;
      height: 12px;
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='13' viewBox='0 0 16 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.5315 1.80937L5.63341 11.237L1.34814 7.19237' stroke='%23F4F6F9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      background-size: 16px 12px;
      background-repeat: no-repeat;
    }

    &.card__btn--wide {
      &::before {
        left: 9px;
      }
    }
  }

  &--loading::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $color-btn;
  }
  &--loading::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border-top: 2px solid $color-fg-inverted;
    border-right: 2px solid transparent;
    animation: spinner 0.6s linear infinite;
  }
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.card__image {
  @include paragraph-reset;
  order: -1;
  position: relative;
  top: -1px;
  left: -1px;
  box-sizing: content-box;
  width: 100%;
  max-width: 280px;
  max-height: 260px;
  line-height: 0;
  background-color: $color-bg-alter;
  overflow: hidden;
  border: 1px solid $color-picture-border;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
