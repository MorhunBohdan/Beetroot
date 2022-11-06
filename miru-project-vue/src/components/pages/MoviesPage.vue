<template>
  <section class="movie-list">
    <div class="movie-list__main conteiner">
      <div class="movie-list__main-filter">
        <h2 class="movie-list__main-filter-options">Filter Option</h2>
        <div class="movie-list__main-filter-category">
          <div class="movie-list__main-filter-category-item">
            <h3 class="movie-list__main-filter-category-title">By Category</h3>
            <div class="movie-list__main-filter-category-checkboxes">
              <div
                class="movie-list__main-filter-category-checkboxes-item"
                v-for="genre in genresMovieList"
                :key="genre.genresMovieList"
              >
                <input
                  class="movie-list__main-filter-category-checkbox-input"
                  type="checkbox"
                  v-bind:id="genresID + genre.id"
                  name="Action"
                  v-bind:value="genre.id"
                  v-model="checkboxValues"
                  @input="fromArrayToURL"
                />
                <label
                  class="movie-list__main-filter-category-checkbox-label"
                  v-bind:for="genresID + genre.id"
                  >{{ genre.name }}</label
                >
              </div>
            </div>
          </div>
          <div class="movie-list__main-filter-category-item by-date">
            <h3 class="movie-list__main-filter-category-title">By Date</h3>
            <div class="movie-list__main-filter-category-date">
              <div class="movie-list__main-filter-category-date-item">
                <input
                  class="movie-list__main-filter-category-date-item-input"
                  type="checkbox"
                  name="Today"
                  id="today"
                  value="Today"
                  v-model="checkboxDate"
                  @change="setOption($event)"
                  v-on:click="searchByToday()"
                />
                <label
                  class="movie-list__main-filter-category-date-item-label"
                  for="today"
                  >Today</label
                >
              </div>
              <div class="movie-list__main-filter-category-date-item">
                <input
                  class="movie-list__main-filter-category-date-item-input"
                  type="checkbox"
                  name="This Week"
                  id="week"
                  value="Week"
                  v-model="checkboxDate"
                  @change="setOption($event)"
                  v-on:click="searchByWeek()"
                />
                <label
                  class="movie-list__main-filter-category-date-item-label"
                  for="week"
                  >This Week</label
                >
              </div>
              <div class="movie-list__main-filter-category-date-item">
                <input
                  class="movie-list__main-filter-category-date-item-input"
                  type="checkbox"
                  name="This Month"
                  id="month"
                  value="Month"
                  v-model="checkboxDate"
                  @change="setOption($event)"
                  v-on:click="searchByMonth()"
                />
                <label
                  class="movie-list__main-filter-category-date-item-label"
                  for="month"
                  >This Month</label
                >
              </div>
              <div class="movie-list__main-filter-category-date-item">
                <input
                  class="movie-list__main-filter-category-date-item-input"
                  type="checkbox"
                  name="This Year"
                  v-model="checkboxDate"
                  id="year"
                  value="Year"
                  @change="setOption($event)"
                  v-on:click="searchByYear()"
                />
                <label
                  class="movie-list__main-filter-category-date-item-label"
                  for="year"
                  >This Year</label
                >
              </div>
            </div>
          </div>
          <button
            type="button"
            class="movie-list__main-filter-category-button"
            v-on:click="searchByGenre()"
          >
            Search
          </button>
        </div>
      </div>
      <div class="data-block">
        <h2 class="data-block__title">Movies</h2>
        <div class="data-block__content">
          <div class="data-block__content-items">
            <div
              class="data-block__content-item"
              v-for="movie in movies"
              :key="movie.id"
            >
              <MovieItem
                v-if="movies"
                v-bind:movieID="movie.id"
                v-bind:primaryReleaseDay="movie.release_date"
              />
            </div>
          </div>
          <div class="data-pagination">
            <vue-awesome-paginate
              v-if="totalResults > totalResultLimit"
              :total-items="totalResultLimit"
              :items-per-page="20"
              :max-pages-shown="5"
              v-model="currentPage"
              :on-click="onClickHandler"
              paginate-buttons-class="btn"
              active-page-class="btn-active"
              back-button-class="back-btn"
              next-button-class="next-btn"
            >
              <template #prev-button>
                <span>
                  <img
                    src="../../../public/dist/img/pagination/previous-btn.svg"
                    height="25"
                  />
                </span>
              </template>
              <template #next-button>
                <span>
                  <img
                    src="../../../public/dist/img/pagination/next-btn.svg"
                    height="25"
                  />
                </span>
              </template>
            </vue-awesome-paginate>
            <vue-awesome-paginate
              v-else
              :total-items="totalResults"
              :items-per-page="20"
              :max-pages-shown="5"
              v-model="currentPage"
              :on-click="onClickHandler"
              paginate-buttons-class="btn"
              active-page-class="btn-active"
              back-button-class="back-btn"
              next-button-class="next-btn"
            >
              <template #prev-button>
                <span>
                  <img
                    src="../../../public/dist/img/pagination/previous-btn.svg"
                    height="25"
                  />
                </span>
              </template>
              <template #next-button>
                <span>
                  <img
                    src="../../../public/dist/img/pagination/next-btn.svg"
                    height="25"
                  />
                </span>
              </template>
            </vue-awesome-paginate>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import MovieItem from "@/components/pages/MovieItem.vue";

export default {
  name: "MoviesPage",
  components: {
    MovieItem,
  },
  data() {
    return {
      totalResultLimit: 10000,
      movies: null,
      error: null,
      genresMovieList: null,
      checkboxDate: [],
      checkboxValues: [],
      checkboxInput: null,
      checkboxString: "",
      checkboxID: null,
      genresID: "genre-",
      current: "",
      currentPage: 1,
      totalResults: null,
      currentDate: "",
      firstDayWeek: "",
      currentWeek: "",
      currentMonth: "",
      currentYear: "",
      releseDateFrom: "primary_release_date.gte=",
      releseDateTo: "primary_release_date.lte=",
      thisMonth: "",
      imgUrl: "https://image.tmdb.org/t/p/original",
      apiDiscoverUrl: "https://api.themoviedb.org/3/discover/movie/?",
      apiMovieGenres: "https://api.themoviedb.org/3/genre/movie/list?",
      apiKEY: "api_key=399190ed100bc4cf5960c22c0347d9aa",
      params: {
        api_key: "399190ed100bc4cf5960c22c0347d9aa",
      },
    };
  },
  methods: {
    moviesList() {
      axios
        .get(this.apiDiscoverUrl, { params: this.params })
        .then((response) => {
          this.movies = response.data.results;
          this.totalResults = response.data.total_results;
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    movieGenresList() {
      axios
        .get(this.apiMovieGenres, { params: this.params })
        .then((response) => {
          this.genresMovieList = response.data.genres;
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    searchByGenre() {
      this.checkboxString = this.checkboxValues.join();
      this.params.with_genres = this.checkboxString;
      axios
        .get(this.apiDiscoverUrl, { params: this.params })
        .then((response) => {
          this.movies = response.data.results;
          this.totalResults = response.data.total_results;
          console.log(this.movies);
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    searchByToday() {
      this.currentDate = new Date().toJSON().slice(0, 10);
      this.releseDateFrom =
        "&primary_release_date.gte=" +
        this.currentDate +
        "&primary_release_date.lte=" +
        this.currentDate;
      axios
        .get(this.apiDiscoverUrl + this.apiKEY + this.releseDateFrom)
        .then((response) => {
          this.movies = response.data.results;
          this.totalResults = response.data.total_results;
          console.log(this.movies);
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    searchByWeek() {
      this.currentDate = new Date().toJSON().slice(0, 10);
      this.current = new Date();
      this.day = this.current.getDay();
      this.diff = this.current.getDate() - this.day + (this.day == 0 ? -6 : 1);
      this.firstDayWeek = new Date(this.current.setDate(this.diff));
      this.firstDayWeek = new Date(this.firstDayWeek).toJSON().slice(0, 10);
      console.log(this.firstDayWeek);
      this.releseDateFrom =
        "&primary_release_date.gte=" +
        this.firstDayWeek +
        "&primary_release_date.lte=" +
        this.currentDate;
      axios
        .get(this.apiDiscoverUrl + this.apiKEY + this.releseDateFrom)
        .then((response) => {
          this.movies = response.data.results;
          this.totalResults = response.data.total_results;
          console.log(this.movies);
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    searchByMonth() {
      this.currentDate = new Date().toJSON().slice(0, 10);
      this.current = new Date();
      this.currentMonth = new Date(
        this.current.getFullYear(),
        this.current.getMonth(),
        2
      );
      this.currentMonth = new Date(this.currentMonth).toJSON().slice(0, 10);
      this.releseDateFrom =
        "&primary_release_date.gte=" +
        this.currentMonth +
        "&primary_release_date.lte=" +
        this.currentDate;
      axios
        .get(this.apiDiscoverUrl + this.apiKEY + this.releseDateFrom)
        .then((response) => {
          this.movies = response.data.results;
          this.totalResults = response.data.total_results;
          console.log(this.movies);
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    searchByYear() {
      this.currentYear = new Date().getFullYear();
      this.params.primary_release_year = this.currentYear;
      console.log(this.params.primary_release_year);
      axios
        .get(this.apiDiscoverUrl, { params: this.params })
        .then((response) => {
          this.movies = response.data.results;
          this.totalResults = response.data.total_results;
          console.log(this.movies);
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    onClickHandler(page) {
      this.currentPage = page;
      this.params.page = this.currentPage;
      this.moviesList();
    },
    setOption(event) {
      this.checkedDate = event.target;
      
      if (this.checkedDate.checked) {
        this.checkboxDate = [event.target.value];
      } else {
        this.checkboxDate = []
      }
      
      console.log(this.checkedDate);
    },
  },
  mounted() {
    this.moviesList();
    this.movieGenresList();
  },
};
</script>
<style></style>
