<template>
  <div class="playlists-list">
    <div v-for="playlist of playlists" :key="playlist.id">
      <playlist
        :title="playlist.genre"
        :thumbnail="playlist.thumbnail"
        :genre="playlist.genre"
      />
    </div>
  </div>
</template>
<script>
import Playlist from "./Playlist.vue";
export default {
  components: {
    Playlist,
  },
  data() {
    return {
      playlists: [],
    };
  },
  created() {
    let playlistsPromise = this.$http.get(
      "https://apivuesic-default-rtdb.firebaseio.com/playlists.json"
    );
    playlistsPromise
      .then((res) => res.json())
      .then((playlists) => (this.playlists = playlists));
  },
};
</script>
<style scoped>
.playlists-list {
  display: flex;
  overflow-x: auto;
}
.playlists-list::-webkit-scrollbar {
  display: none;
}
.playlists-list {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media screen and (min-width: 768px) {
  .playlists-list {
    width: 80vw;
  }
}
</style>