<template>
  <div class="corpo">
    <nav-header :user="'Leonardo'"></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/shared/header/Header.vue";

export default {
  components: {
    "nav-header": Header,
  },
};
</script>

<style>
body {
  background: #000;
}
</style>
