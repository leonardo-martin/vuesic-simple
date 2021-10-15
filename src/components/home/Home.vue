<template>
  <div>
    <hero></hero>
    <b-container>
      <div class="topic mt-100">
        <h3>Playlists</h3>
        <playlists />
      </div>
      <div class="topic mt-70">
        <h1>Trending</h1>
        <trending />
      </div>
    </b-container>
    <app-footer />
  </div>
</template>
<script>
import Hero from "../shared/hero/Hero.vue";
import Playlists from "../shared/playlists/Playlists.vue";
import Trending from "../shared/queues/Trending.vue";
import Footer from "../shared/footer/Footer.vue";
export default {
  components: {
    Hero,
    Playlists,
    Trending,
    "app-footer": Footer,
  },

  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

body {
  font-family: "Poppins", sans-serif;
  background: #151515;
}
.logo {
  display: flex;
  align-items: center;
  font-family: monospace;
}
.logo h2 {
  margin-left: 10px;
}

.topic h1 {
  color: #fff;
  font-size: 40px;
  position: relative;
  margin-bottom: 0;
}

.topic h1::before {
  content: "";
  display: block;
  height: 15px;
  width: 7px;
  background: #f11515;
  position: absolute;
  left: -10px;
  bottom: 28%;
}

.topic h3 {
  color: #fff;
  margin-bottom: 20px;
}

.mt-70 {
  margin-top: 70px;
}

.mt-100 {
  margin-top: 100px;
}
</style>