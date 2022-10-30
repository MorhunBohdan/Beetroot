import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/pages/HomePage.vue"
import MoviesPage from "@/components/pages/MoviesPage.vue";
import MoviePage from "@/components/pages/MoviePage.vue";
import SeriesPage from "@/components/pages/SeriesPage.vue";

const routes = [
  { path: "/", alias: '/home', component: HomePage },
  { path: "/Movies", name: "Movies", component: MoviesPage },
  { path: "/Series", name: "Series", component: SeriesPage },
  { path: "/Movie", name: "Movie", component: MoviePage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
