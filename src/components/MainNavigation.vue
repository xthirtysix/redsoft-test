<template lang="pug">
  ul.main-nav
    li.main-nav__item
      a.main-nav__logo(href="https://google.com")
        img(
          :src="logo"
          width="48"
          height="48"
          alt="Логотип The Famous"
        )
    li.main-nav__item(v-for="link in links")
      a.main-nav__link(:href="link.path") {{link.name}}
</template>

<script>
import logo from '@/assets/img/logo.svg';

export default {
  name: 'MainNavigation',
  data() {
    return {
      logo,
    };
  },
  computed: {
    links() {
      return this.$store.getters.links;
    },
  },
};
</script>

<style lang="scss">
@import '~@/scss/main.scss';

.main-nav {
  @include list-reset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.main-nav__item {
  line-height: 0;

  &:last-of-type a {
    margin-right: 0;
  }
}

.main-nav__logo {
  display: block;
  margin-right: 2.5rem;
  line-height: 0;
}

.main-nav__link {
  @include link-reset;

  display: block;
  line-height: 21px;
  margin-right: 2.05rem;
  padding: 0.45rem 0.5rem 0.55rem;
}
</style>
