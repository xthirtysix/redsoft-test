<template lang="pug">
  div.page
    h1.page__header Картины эпоxи Возрождения
    ul.gallery
      li.gallery__item(v-for="(painting, idx) in paintings" :key="idx")
        card(:data="painting")

</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'Gallery',
  components: {
    Card,
  },
  computed: {
    paintings() {
      return this.$store.getters.paintings;
    },
  },
};
</script>

<style lang="scss">
@import '~@/scss/main.scss';

.page__header {
  text-align: left;
}

.gallery {
  @include list-reset;

  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}

.gallery__item {
  max-width: 280px;
}
</style>
