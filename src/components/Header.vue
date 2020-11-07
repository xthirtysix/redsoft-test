<template lang="pug">
  header.main-header
    .container
      main-nav.main-header__nav
      .main-header__search.search
        label(for="search")
          input.search__input#search(type="text" name="search" placeholder="Поиск по названию картины")
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
  margin-bottom: 45px;
  padding: 1.5rem 0;
  border-bottom: 1px solid $color-border;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.search {
  display: flex;
}

.search__input {
  box-sizing: border-box;
  min-width: 293px;
  padding: 14px 8px 15px 16px;
  font-family: inherit;
  letter-spacing: 0.4px;
  background-color: $color-bg;
  border: 1px solid $color-border;
  border-radius: 0;
  outline: none;

  &::placeholder {
    color: $color-fg-placeholder;
  }
}

.search__btn {
  @include button;

  padding: 13px 37px 14px;
  font-family: inherit;
  letter-spacing: 0.4px;
  border: none;
  border-radius: 0;
}
</style>
