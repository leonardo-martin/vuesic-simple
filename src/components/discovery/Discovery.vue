<template>
  <div class="discovery" :style="background">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-5">
          <p class="more-info">
            <span class="year">{{
              this.discovery[this.discoveryItem].date
            }}</span>
            <span class="divide"></span>
            <span class="genre">{{
              this.discovery[this.discoveryItem].genre
            }}</span>
            <span class="divide"></span>
            <span class="duration">{{
              this.discovery[this.discoveryItem].duration
            }}</span>
          </p>
          <h1>{{ this.discovery[this.discoveryItem].title }}</h1>
          <h3>{{ this.discovery[this.discoveryItem].artist }}</h3>
          <p class="description">
            {{ this.discovery[this.discoveryItem].description }}
          </p>
        </div>
        <div class="col-md-6">
          <div class="video-container">
            <div class="video-skeleton" v-if="!this.videoLoading">
              <div class="loading-circle"></div>
            </div>
            <iframe
              width="560"
              height="315"
              :src="url"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  computed: {
    background() {
      const thumbnail = this.discoveryItem
        ? this.discovery[this.discoveryItem].background
        : null;
      return `background: linear-gradient(0deg, rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${thumbnail});`;
    },
    url() {
      return `https://www.youtube.com/embed/${
        this.discovery[this.discoveryItem].id
      }`;
    },
  },
  data() {
    return {
      discovery: [],
      discoveryItem: 0,
      videoLoading: true,
    };
  },

  created() {
    let discoveryPromise = this.$http.get(
      "https://apivuesic-default-rtdb.firebaseio.com/videos.json"
    );
    discoveryPromise
      .then((res) => res.json())
      .then((discovery) => {
        this.videoLoading = false;
        this.discovery = discovery;
        this.discoveryItem = Math.floor(Math.random() * this.discovery.length);
      });
  },
};
</script>
<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.video-container iframe,
.video-skeleton {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.discovery {
  height: 100vh;
  width: 100vw;
  background: #121212;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background-size: cover !important;
  background-position: center !important;
  display: flex;
  align-items: center;
}

.discovery p.more-info {
  color: #fff;
  display: flex;
  align-items: center;
}

.discovery p.more-info span.divide {
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: #fff;
  display: inline-block;
  margin: 0 10px;
}

.discovery h1 {
  color: #fff;
  font-weight: 700;
  font-size: 3.4rem;
  margin-bottom: 0;
}

.discovery h3 {
  color: #f11515;
  font-weight: 600;
  font-size: 2.2rem;
  margin-top: -5px;
}

.discovery p.description {
  color: #fff;
  opacity: 0.8;
  margin-top: 30px;
}

.loading-circle {
  border: 5px solid #fefefe;
  border-top: 5px solid #f11515;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  animation: loading 1s infinite linear;
}

.video-skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
  /* border: 5px solid #fff; */
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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