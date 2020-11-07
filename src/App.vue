<template lang="pug">
  #app
    app-header.header
    app-main.main.container
    app-footer.footer
</template>

<script>
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appMain: Gallery,
    appFooter: Footer,
  },
};
</script>

<style lang="scss">
@import '~@/scss/main.scss';

body {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: $color-bg;
  color: $color-fg;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Merriweather, 'Times New Roman', serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}

.main {
  flex: 1 0 auto;
  display: block;
}

.footer,
.header {
  flex-shrink: 0;
}
</style>
