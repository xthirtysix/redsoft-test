<template lang="pug">
  ul.main-nav
    li.main-nav__item
      a.main-nav__logo(href="https://google.com")
        img(
          src="https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwjpvcPT5OrsAhWRl4sKHWnjB1UQPAgI"
          width="48"
          height="48"
          alt="Логотип The Famous"
        )
    li.main-nav__item(v-for="link in links")
      a.main-nav__link(:href="link.path") {{link.name}}
</template>

<script>
export default {
  name: 'MainNavigation',
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
  flex-wrap: wrap;
}

.main-nav__link {
  @include link-reset;
}
</style>
