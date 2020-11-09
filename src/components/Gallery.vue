<template lang="pug">
  div.page
    h1.page__header Картины эпоxи Возрождения
    ul.gallery
      li.gallery__item(v-for="(painting, idx) in paintings" :key="idx")
        card(
          :data="painting"
          :isInCart="!!~cart.indexOf(painting.id)"
          @addToCart="addToCart"
          @removeFromCart="removeFromCart"
        )

</template>

<script>
import Card from '@/components/Card';
import { mapActions } from 'vuex';

export default {
  name: 'Gallery',
  components: {
    Card,
  },
  computed: {
    paintings() {
      return this.$store.getters.paintings;
    },
    cart() {
      return this.$store.getters.cart;
    },
  },
  beforeCreate() {
    this.$store.commit('INITIALISE_STORE');
  },
  methods: {
    ...mapActions(['ADD_TO_CART', 'REMOVE_FROM_CART']),
    addToCart(item) {
      this.ADD_TO_CART(item);
    },
    removeFromCart(item) {
      this.REMOVE_FROM_CART(item);
    },
  },
};
</script>

<style lang="scss">
@import '~@/scss/main.scss';

.page__header {
  margin-bottom: 2.4rem;
}

.gallery {
  @include list-reset;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .gallery__item:nth-child(4n) {
    margin-right: 0;
  }

  &::after {
    content: '';
    flex: auto;
  }
}

.gallery__item {
  box-sizing: border-box;
  display: flex;
  min-height: 329px;
  width: calc(1 / 4 * 100% - (1 - 1 / 4) * 2rem);
  margin-right: 2rem;
  margin-bottom: 2rem;
}
</style>
