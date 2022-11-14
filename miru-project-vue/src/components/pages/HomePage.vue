
<template>
  <FirstScreen />
  <PopularMovies />
  <TopMovies />
</template>

<script>

import FirstScreen from "@/components/First-screen.vue";
import PopularMovies from "@/components/Popular-movies.vue";
import TopMovies from "@/components/TopMovies.vue";

export default {
  name: "HomePage",
  components: {
    FirstScreen,
    PopularMovies,
    TopMovies,
  },
};
</script>

<style>
</style>