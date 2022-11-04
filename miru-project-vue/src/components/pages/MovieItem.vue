<template>
  <div v-if="movie" class="data-conteiner">
    <div class="data-block__content-item-poster">
      <img
        v-if="movie.poster_path"
        v-bind:src="imgURL"
        alt=""
        class="data-block__content-item-img"
      />
      <img v-else src="../../../public/dist/img/5.movies/poster-not-found.webp" class="data-block__content-item-img" alt="poster-not-found">
      <div class="data-block__content-item-ganre">
        <p class="data-block__content-item-ganre-text" v-if="movie.genres.length > 0">{{ movie.genres[0].name }}</p>
        <p class="data-block__content-item-ganre-text" v-else>{{ noGenre }}</p>
      </div>
    </div>
    <div class="data-block__content-item-info">
      <h2 class="data-block__content-item-info-title">{{ movie.title }}</h2>
      <div class="data-block__content-item-info-caption">
        <p class="data-block__content-item-info-caption-item">
          {{ primaryReleaseDay }}
        </p>
        <p class="data-block__content-item-info-caption-item">
          {{ movie.original_language }}
        </p>
        <p class="data-block__content-item-info-caption-item">{{movie.runtime + "min"}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MoviesItem",
  props: {
    movieID: null,
    primaryReleaseDay: null,
  },
  data() {
    return {
      movie: null,
      error: null,
      noGenre: "Else",
      imgUrl: "https://image.tmdb.org/t/p/original",
      apiMovieUrl: "https://api.themoviedb.org/3/movie/",
      apiKEY: "?api_key=399190ed100bc4cf5960c22c0347d9aa",
    };
  },
  methods: {
    movieItem() {
      axios
        .get(this.apiMovieUrl + this.movieID + this.apiKEY)
        .then((response) => {
          this.movie = response.data;
          this.imgURL = "https://image.tmdb.org/t/p/original" + response.data.poster_path;
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
  },
  mounted() {
    this.movieItem();
  },
};
</script>
