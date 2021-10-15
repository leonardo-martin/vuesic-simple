<template>
  <div class="videoBox">
    <div class="video-skeleton" v-if="videoLoading"></div>
    <iframe
      :width="width"
      :height="height"
      @load="videoLoading = false"
      :src="url"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="video-info">
      <div class="song">
        <p class="song-title">
          {{ this.title }}
        </p>
        <p class="song-duration">{{ this.duration }}</p>
      </div>
      <div class="artist">
        <p class="artist-name">{{ this.artist }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["artist", "title", "duration", "id", "trending", "width", "height"],
  data() {
    return {
      active: true,
      videoLoading: true,
    };
  },
  methods: {
    toggleVideo() {
      this.active = !this.active;
    },
  },
  computed: {
    thumbnail() {
      return `https://img.youtube.com/vi/${this.id}/0.jpg`;
    },
    url() {
      return `https://www.youtube.com/embed/${this.id}`;
    },
  },
};
</script>
<style scoped>
.videoBox {
  margin-top: 20px;
  max-width: 100%;
  height: 300px;
  margin-right: 40px;
  flex-grow: 1;
}

.video-thumb:hover {
  cursor: pointer;
}

.video-info {
  color: #fff;
}
.video-info .song {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
}
.video-info .song-title,
.video-info .song-duration {
  margin-bottom: 0;
}
.video-info .song-duration {
  font-size: 14px;
}

.video-info .artist-name {
  margin: 0;
  font-size: 14px;
  opacity: 0.5;
}

.video-skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
  /* border: 5px solid #fff; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

@keyframes skeleton-loading {
  0% {
    background-color: rgba(255, 255, 255, 0.4);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.6);
  }
}
</style>