<template>
  <router-link class="button" :to="path">{{ text }}</router-link>
</template>

<script>
export default {
  props: ["text", "path"],
};
</script>

<style>
a.button {
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 15px 30px;
  cursor: pointer;
  text-decoration: none;
}

a.button:hover {
  border: 2px solid transparent;
  background: #f11515;
  color: #fff;
  transition: all 0.3s ease;
}
</style>