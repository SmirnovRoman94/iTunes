<template>
  <v-toolbar dark color="blue">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title class="white--text">
      <nuxt-link class="title" to="/">iTunes Search</nuxt-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" icon>
      <v-icon>refresh</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
</script>
<style scoped>
.title {
  text-decoration: none !important;
}
.title:visited{
  color: white;
}
</style>
