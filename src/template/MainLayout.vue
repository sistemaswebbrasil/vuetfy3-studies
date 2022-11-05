<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary> Teste</v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <nav>
          <router-link to="/">Home</router-link> <v-icon icon="mdi-home" />|
          <router-link to="/about">About</router-link> <v-icon icon="mdi-information" />|
          <router-link to="/albums">Albums</router-link> <v-icon icon="mdi-information" />|
          <router-link to="/user">User</router-link> <v-icon icon="mdi-account" />
        </nav>

        <slot />
        <v-row> </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'MainLayout',
  data: () => ({ drawer: null }),
};
</script>
