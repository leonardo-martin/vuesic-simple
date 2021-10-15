import Discovery from "./components/discovery/Discovery.vue";
import Home from "./components/home/Home.vue";
import Playlist from "./components/playlist/PlaylistRoute.vue";

export const routes = [
  { path: "", component: Home, title: "Home" },
  { path: "/discovery", component: Discovery, title: "Discovery" },
  { path: "/playlist", component: Playlist, title: "Playlist" }
];
