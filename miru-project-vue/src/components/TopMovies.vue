<template>
  <section class="top-movies">
    <div class="top-movies__main conteiner">
      <div class="top-movies__main-top">
        <h2 class="top-movies__main-top-title">Top 5 Movies</h2>
        <div class="top-movies__main-top-filter-mobile">
          Genre
          <div class="first-level-top-menu">
            <div
              class="top-movies__main-top-filter-item-mobile"
              v-for="genre in slisedGenresList"
              :key="genre.slisedGenresList"
            >
              <input
                class="top-movies__main-top-filter-item-input"
                type="radio"
                v-bind:id="genresID + genre.id"
                name="All"
                v-bind:value="genre.id"
                v-model="checkboxDate"
                @change="setOption($event)"
                @input="fromArrayToURL"
              />
              <label
                class="top-movies__main-top-filter-item-label"
                v-bind:for="genresID + genre.id"
                >{{ genre.name }}</label
              >
            </div>
          </div>
        </div>
        <div class="top-movies__main-top-filter">
          <div
            class="top-movies__main-top-filter-item"
            v-for="genre in slisedGenresList"
            :key="genre.slisedGenresList"
          >
            <input
              class="top-movies__main-top-filter-item-input"
              type="radio"
              v-bind:id="genresID + genre.id"
              name="All"
              v-bind:value="genre.id"
              v-model="checkboxDate"
              @change="setOption($event)"
              @input="fromArrayToURL"
            />
            <label
              class="top-movies__main-top-filter-item-label"
              v-bind:for="genresID + genre.id"
              >{{ genre.name }}</label
            >
          </div>
        </div>
      </div>
      <TopItem v-bind:checkboxDate="checkboxDate" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import TopItem from "@/components/pages/TopItem.vue";

export default {
  name: "TopMovies",
  components: {
    TopItem,
  },
  data() {
    return {
      movies: null,
      error: null,
      genresMovieList: null,
      slisedGenresList: null,
      checkboxDate: [],
      checkboxValues: [],
      checkboxInput: null,
      checkboxString: "",
      checkboxID: null,
      genresID: "genre-",
      imgUrl: "https://image.tmdb.org/t/p/original",
      apiDiscoverUrl: "https://api.themoviedb.org/3/discover/movie/?",
      apiMovieGenres: "https://api.themoviedb.org/3/genre/movie/list?",
      apiKEY: "api_key=399190ed100bc4cf5960c22c0347d9aa",
      params: {
        api_key: "api_key=399190ed100bc4cf5960c22c0347d9aa",
        sort_by: "&sort_by=",
        popularity: "popularity.desc&",
        releseDateFilter: "",
        primary_release_year: "",
        with_genres: "",
        page: "",
      },
    };
  },
  methods: {
    movieGenresList() {
      axios
        .get(this.apiMovieGenres + this.params.api_key)
        .then((response) => {
          this.genresMovieList = response.data.genres;
          this.slisedGenresList = this.genresMovieList.slice(0, 6);
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    setOption(event) {
      this.checkedDate = event.target;
      if (this.checkedDate.checked) {
        this.checkboxDate = [event.target.value];
      } else {
        this.checkboxDate = [];
        this.params.releseDateFilter = "";
        this.params.primary_release_year = "";
      }
    },
  },
  mounted() {
    this.movieGenresList();
  },
};
</script>
