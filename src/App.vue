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
body {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  flex: 1 0 auto;
}

.footer,
.header {
  flex-shrink: 0;
}
</style>
