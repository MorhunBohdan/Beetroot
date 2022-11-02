<template>
 <section class="movie-list">
  <div class="movie-list__main conteiner">
    <div class="movie-list__main-filter">
      <h2 class="movie-list__main-filter-options">Filter Option</h2>
      <div class="movie-list__main-filter-category">
        <div class="movie-list__main-filter-category-item">
          <h3 class="movie-list__main-filter-category-title">By Category</h3>
          <div class="movie-list__main-filter-category-checkboxes">
          <div class="movie-list__main-filter-category-checkboxes-item" v-for="genre in genresMovieList" :key="genre.genresMovieList">
            <input class="movie-list__main-filter-category-checkbox-input" type="checkbox" v-bind:id="genresID + genre.id" name="Action" v-bind:value="genre.id" v-model="checkboxValues" @input="fromArrayToURL">
            <label class="movie-list__main-filter-category-checkbox-label" v-bind:for="genresID + genre.id">{{genre.name}}</label>
          </div>
        </div>
      </div>
      <button type="button" class="movie-list__main-filter-category-button" v-on:click="searchByGenre()">Search</button>
    </div>
  </div>
    <div class="data-block">
      <h2 class="data-block__title">Movies</h2>
      <div class="data-block__content">
        <div class="data-block__content-filter">
          <a class="data-block__content-filter-item" href="">Today</a>
          <a class="data-block__content-filter-item" href="">This Week</a>
          <a class="data-block__content-filter-item" href="">This Month</a>
          <a class="data-block__content-filter-item" href="">Newest</a>
        </div>
        <div class="data-block__content-items">
          <div class="data-block__content-item" v-for="movie in movies" :key="movie.id">
            <MovieItem  v-if="movies" v-bind:movieID="movie.id"/>
          </div>
        </div>
      </div>
      <div class="movie-list__main-movies-content-pagination">
      </div>
    </div>
  </div>
 </section>
</template>

<script>
import axios from 'axios';
import MovieItem from "@/components/pages/MovieItem.vue";

export default {
  name: 'MoviesPage',
  components: {
    MovieItem
  },
  data() {
    return {
      movies: null,
      error: null,
      genresMovieList: null,
      checkboxValues: [],
      checkboxInput: null,
      checkboxString: "",
      checkboxID: null,
      testURL: "https://api.themoviedb.org/3/discover/movie/?",
      test: null,
      genresID: "genre-",
      imgUrl: "https://image.tmdb.org/t/p/original",
      apiDiscoverUrl: "https://api.themoviedb.org/3/discover/movie/?",
      apiMovieGenres: "https://api.themoviedb.org/3/genre/movie/list?",
      apiKEY: "api_key=399190ed100bc4cf5960c22c0347d9aa",
      params: {
        api_key: "399190ed100bc4cf5960c22c0347d9aa",
      }
    }
  },
  methods: {
    moviesList() {
      axios.get(this.apiDiscoverUrl, {params: this.params})
      .then(response => {
        this.movies = response.data.results;
      })
      .catch(e => {
        this.error.push(e)
      })
    },
    movieGenresList() {
      axios.get(this.apiMovieGenres, {params: this.params})
      .then (response => {
        this.genresMovieList = response.data.genres;
      })
      .catch(e => {
        this.error.push(e)
      })
    },
    searchByGenre () {
      this.checkboxString = this.checkboxValues.join();
      this.params.with_genres = this.checkboxString;
      axios.get(this.apiDiscoverUrl, {params: this.params})
      .then(response => {
        this.movies = response.data.results;
        console.log(this.movies)
      })
      .catch(e => {
        this.error.push(e)
      })
    }
  },
  mounted() {
    this.moviesList();
    this.movieGenresList();
  }
}
</script>