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
      <div class="movie-list__main-filter-category-item">
        <h3 class="movie-list__main-filter-category-title">By Date</h3>
          <div class="movie-list__main-filter-category-date">
            <button class="movie-list__main-filter-category-date-item" type="button" v-on:click="searchByToday()">Today</button>
            <button class="movie-list__main-filter-category-date-item" type="button" v-on:click="searchByWeek()">This Week</button>
            <button class="movie-list__main-filter-category-date-item" type="button" v-on:click="searchByMonth()">This Month</button>
            <button class="movie-list__main-filter-category-date-item" type="button" v-on:click="searchByYear()">This Year</button>
          </div>
        </div>
      <button type="button" class="movie-list__main-filter-category-button" v-on:click="searchByGenre()">Search</button>
    </div>
  </div>
    <div class="data-block">
      <h2 class="data-block__title">Movies</h2>
      <div class="data-block__content">
        <div class="data-block__content-items">
          <div class="data-block__content-item" v-for="movie in movies" :key="movie.id">
            <MovieItem  v-if="movies" v-bind:movieID="movie.id" v-bind:primaryReleaseDay="movie.release_date"/>
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
      genresID: "genre-",
      curentDate: "",
      curentWeek: "",
      curentMonth: "",
      curentYear: "",
      releseDateFrom: "primary_release_date.gte=",
      releseDateTo: "primary_release_date.lte=",
      thisMonth: "",
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
    },
    searchByToday() {
      this.curentDate = new Date().toJSON().slice(0,10);
      this.releseDateFrom = "&primary_release_date.gte=" + this.curentDate + "&primary_release_date.lte=" + this.curentDate
      axios.get(this.apiDiscoverUrl + this.apiKEY + this.releseDateFrom )
      .then(response => {
        this.movies = response.data.results;
        console.log(this.movies)
      })
      .catch(e => {
        this.error.push(e)
      })
    },
    searchByWeek () {
      this.curentDate = new Date().toJSON().slice(0,10);
      this.curent = new Date();
      this.curentWeek = new Date(this.curent.setDate(this.curent.getDate() - this.curent.getDay() + 2));
      this.curentWeek = new Date(this.curentWeek).toJSON().slice(0,10);
      this.releseDateFrom = "&primary_release_date.gte=" + this.curentWeek + "&primary_release_date.lte=" + this.curentDate
      axios.get(this.apiDiscoverUrl + this.apiKEY + this.releseDateFrom )
      .then(response => {
        this.movies = response.data.results;
        console.log(this.movies)
      })
      .catch(e => {
        this.error.push(e)
      })
    },
    searchByMonth () {
      this.curentDate = new Date().toJSON().slice(0,10);
      this.curent = new Date();
      this.curentMonth = new Date (this.curent.getFullYear(), this.curent.getMonth(),2)
      this.curentMonth = new Date(this.curentMonth).toJSON().slice(0,10);
      this.releseDateFrom = "&primary_release_date.gte=" + this.curentMonth + "&primary_release_date.lte=" + this.curentDate
      axios.get(this.apiDiscoverUrl + this.apiKEY + this.releseDateFrom )
      .then(response => {
        this.movies = response.data.results;
        console.log(this.movies)
      })
      .catch(e => {
        this.error.push(e)
      })
    },
    searchByYear () {
      this.curentYear = new Date().getFullYear()
      this.params.primary_release_year = this.curentYear
      console.log( this.params.primary_release_year)
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
