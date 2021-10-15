<template>
  <div class="list-trending">
    <div v-for="video of videoFiltered" :key="video.id">
      <video-box
        :title="video.title"
        :artist="video.artist"
        :duration="video.duration"
        :id="video.id"
        width="380px"
        height="220px"
      />
    </div>
  </div>
</template>

<script>
import Video from "../cards/videos/Video.vue";
export default {
  components: {
    "video-box": Video,
  },
  data() {
    return {
      videos: [],
    };
  },

  created() {
    let videosPromise = this.$http.get(
      "https://apivuesic-default-rtdb.firebaseio.com/videos.json"
    );
    videosPromise
      .then((res) => res.json())
      .then((videos) => (this.videos = videos));
  },

  computed: {
    videoFiltered() {
      return this.videos.filter((element) => element.trending === true);
    },
  },
};
</script>

<style scoped>
.list-trending {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  flex-grow: 1;
}
.list-trending::-webkit-scrollbar {
  display: none;
}
.list-trending {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media screen and (min-width: 768px) {
  .list-trending {
    width: 80vw;
  }
}
</style>