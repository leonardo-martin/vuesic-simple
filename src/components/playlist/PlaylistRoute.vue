<template>
  <div class="playlist-listing mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="img-genre"></div>
        </div>
        <div class="col-md-8">
          <h2>Rock</h2>
          <p class="genre-description">
            Rock music is a broad genre of popular music that originated as
            "rock and roll" in the United States in the late 1940s and early
            1950s, developing into a range of different styles in the mid-1960s
            and later, particularly in the United States and the United Kingdom.
            It has its roots in 1940s and 1950s rock and roll, a style that drew
            directly from the blues and rhythm and blues genres of
            African-American music and from country music. Rock music also drew
            strongly from a number of other genres such as electric blues and
            folk, and incorporated influences from jazz, classical, and other
            musical styles. For instrumentation, rock has centered on the
            electric guitar, usually as part of a rock group with electric bass,
            drums, and one or more singers.
          </p>
        </div>
      </div>
      <div class="row pb-5 mb-5">
        <div class="col-md-4" v-for="video of videoFiltered" :key="video.id">
          <video-box
            :title="video.title"
            :artist="video.artist"
            :duration="video.duration"
            :id="video.id"
            width="400px"
            height="280px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Video from "../shared/cards/videos/Video.vue";
export default {
  components: {
    "video-box": Video,
  },
  computed: {
    titulo() {
      return "teste";
    },
    videoFiltered() {
      return this.videos.filter((element) => element.genre === "Rock");
    },
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
};
</script>

<style>
h2 {
  font-size: 5rem;
  color: #fff;
  font-weight: bold;
}

.playlist-listing ul {
  list-style: none;
  padding: 0;
  margin-top: 50px;
}

li.playlist-item {
  margin: 0;
  padding: 30px 0;
  border-bottom: 1px solid #2a2a2a;
  display: flex;
}

p.genre-description {
  color: #fff;
  text-align: justify;
  margin-top: 20px;
}

.img-genre {
  background: url("https://images.pexels.com/photos/375893/pexels-photo-375893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 380px;
}
</style>