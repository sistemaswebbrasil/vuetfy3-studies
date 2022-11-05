<template>
  <MainLayout>
    <!-- <nav>
      <router-link to="/">Home</router-link> <v-icon icon="mdi-home" />|
      <router-link to="/about">About</router-link> <v-icon icon="mdi-information" />|
      <router-link to="/user">User</router-link> <v-icon icon="mdi-account" />
    </nav> -->
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
