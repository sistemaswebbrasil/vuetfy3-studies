<template>
  <MainLayout>
    <p>{{ $t('message.hello', { msg: 'hello' }) }}</p>

    <router-view />
  </MainLayout>
</template>

<script>
// @ is an alias to /src
import MainLayout from '@/template/MainLayout.vue';

export default {
  name: 'HomeView',
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
