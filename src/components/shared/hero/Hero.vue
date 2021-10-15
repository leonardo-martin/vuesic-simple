<template>
  <div class="hero">
    <div class="background-overlay"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.hero {
  background: url("/src/assets/bg_01.jpg");
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -999;
}

.background-overlay {
  background-image: linear-gradient(180deg, #000000a8 0%, #151515 85%);
  /* background: #000; */
  height: 100%;
  width: 100%;
  opacity: 1;
}
</style>