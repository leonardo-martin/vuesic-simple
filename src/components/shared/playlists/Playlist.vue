<template>
  <router-link to="/playlist">
    <div
      class="card-playlist"
      @mouseover="mouseOver"
      @mouseout="mouseOver"
      :style="background"
    >
      <div class="playlist-gradient" v-if="getGradientShow"></div>
      <h4>{{ this.genre }}</h4>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["thumbnail", "id", "genre"],
  computed: {
    background() {
      return `background: url(${this.thumbnail}); background-size: cover; background-position: center;`;
    },
    getGradientShow() {
      return this.gradientShow;
    },
  },
  data() {
    return {
      gradientShow: true,
    };
  },
  methods: {
    mouseOver() {
      this.gradientShow = !this.gradientShow;
    },
  },
};
</script>
<style>
.card-playlist {
  height: 160px;
  width: 160px;
  position: relative;
  cursor: pointer;
  margin-right: 20px;
}

.card-playlist h4 {
  color: #fff;
  position: absolute;
  bottom: -5px;
  left: 15px;
}

.playlist-gradient {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2));
  pointer-events: none;
}

@media screen and (max-width: 768px) {
  .card-playlist {
    width: 30vw !important;
  }
}
</style>