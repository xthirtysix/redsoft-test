<template lang="pug">
  footer.main-footer
    .container
      main-nav
      ul.address
        li.address__item
          a.address__link(href="tel:+74955555555") +7 (495) 555-55-55
        li.address__item
          a.address__link(href="https://maps.google.com/") г.Москва, ул.Расплетина, 24
</template>

<script>
import MainNavigation from '@/components/MainNavigation';
export default {
  name: 'Footer',
  components: {
    mainNav: MainNavigation,
  },
};
</script>

<style lang="scss">
@import '~@/scss/main.scss';

.main-footer {
  display: flex;
  width: 100%;
}

.container,
.address {
  display: flex;
  justify-content: space-between;
}

.address {
  @include list-reset;
}

.address__link {
  @include link-reset;
}
</style>
