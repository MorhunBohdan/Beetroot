import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/pages/HomePage.vue"
import MoviesPage from "@/components/pages/MoviesPage.vue";
import MoviePage from "@/components/pages/MoviePage.vue";
import SeriesPage from "@/components/pages/SeriesPage.vue";
import SerialPage from "@/components/pages/SerialPage.vue";
import SearchPage from "@/components/pages/SearchPage.vue";


const routes = [
  { path: "/", alias: '/home', component: HomePage },
  { path: "/Movies", name: "Movies", component: MoviesPage },
  { path: "/Series", name: "Series", component: SeriesPage },
  { path: "/Search/:query", name: "Search", component: SearchPage },
  { path: "/Movie/:id", name: "Movie", component: MoviePage },
  { path: "/Series/:id", name: "Serial", component: SerialPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});

export default router;
