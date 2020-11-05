<template lang="pug">
  header.main-header
    .container
      main-nav.main-header__nav
      .main-header__search.search
        label(for="search")
          input#search(type="text" name="search" placeholder="Поиск по названию картины")
        button.search__btn Найти
</template>

<script>
import MainNavigation from '@/components/MainNavigation';

export default {
  name: 'Header',
  components: {
    'main-nav': MainNavigation,
  },
};
</script>

<style lang="scss">
@import '~@/scss/main.scss';

.main-header {
  display: flex;
  width: 100%;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
