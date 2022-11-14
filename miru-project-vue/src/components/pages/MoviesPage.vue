<template>
  <section class="movie-list">
    <div class="movie-list__main conteiner">
      <div class="main-filter">
        <h2 class="main-filter__options">Filter Option</h2>
        <div class="main-filter__category">
          <div class="main-filter__category-item-wrapper">
            <h3 class="main-filter__category-title">By Category</h3>
            <div class="main-filter__category-checkboxes">
              <div
                class="main-filter__category-checkboxes-item"
                v-for="genre in genresMovieList"
                :key="genre.genresMovieList"
              >
                <input
                  class="main-filter__category-checkbox-input"
                  type="checkbox"
                  v-bind:id="genresID + genre.id"
                  name="Action"
                  v-bind:value="genre.id"
                  v-model="checkboxValues"
                  @input="fromArrayToURL"
                  @change="searchByGenre()"
                />
                <label
                  class="main-filter__category-checkbox-label"
                  v-bind:for="genresID + genre.id"
                  >{{ genre.name }}</label
                >
              </div>
            </div>
          </div>
          <div class="main-filter__category-item by-date">
            <h3 class="main-filter__category-title">By Date</h3>
            <div class="main-filter__category-date">
              <div class="main-filter__category-date-item">
                <input
                  class="main-filter__category-date-item-input"
                  type="checkbox"
                  name="Today"
                  id="today"
                  value="Today"
                  v-model="checkboxDate"
                  @change="setOption($event)"
                  v-on:click="searchByToday()"
                />
                <label class="main-filter__category-date-item-label" for="today"
                  >Today</label
                >
              </div>
              <div class="main-filter__category-date-item">
                <input
                  class="main-filter__category-date-item-input"
                  type="checkbox"
                  name="This Week"
                  id="week"
                  value="Week"
                  v-model="checkboxDate"
                  @change="setOption($event)"
                  v-on:click="searchByWeek()"
                />
                <label class="main-filter__category-date-item-label" for="week"
                  >This Week</label
                >
              </div>
              <div class="main-filter__category-date-item">
                <input
                  class="main-filter__category-date-item-input"
                  type="checkbox"
                  name="This Month"
                  id="month"
                  value="Month"
                  v-model="checkboxDate"
                  @change="setOption($event)"
                  v-on:click="searchByMonth()"
                />
                <label class="main-filter__category-date-item-label" for="month"
                  >This Month</label
                >
              </div>
              <div class="main-filter__category-date-item">
                <input
                  class="main-filter__category-date-item-input"
                  type="checkbox"
                  name="This Year"
                  v-model="checkboxDate"
                  id="year"
                  value="Year"
                  @change="setOption($event)"
                  v-on:click="searchByYear()"
                />
                <label class="main-filter__category-date-item-label" for="year"
                  >This Year</label
                >
              </div>
            </div>
          </div>
          <button
            type="button"
            class="main-filter__category-button"
            v-on:click="moviesList()"
          >
            Search
          </button>
        </div>
      </div>
      <div class="data-block">
        <h2 class="data-block__title">Movies</h2>
        <div class="main-filter__mobile">
          <div class="main-filter__category">
            <div class="main-filter__category-item">
              <div class="main-filter__category-item-wrapper first-level">
                <h3 class="main-filter__category-title">Filter</h3>
                <div class="main-filter__category-item-wrapper second-level">
                  <h3 class="main-filter__category-title">By Genre</h3>
                  <div class="main-filter__category-checkboxes third-level-one">
                    <div
                      class="main-filter__category-checkboxes-item"
                      v-for="genre in genresMovieList"
                      :key="genre.genresMovieList"
                    >
                      <input
                        class="main-filter__category-checkbox-input"
                        type="checkbox"
                        v-bind:id="genresID + genre.id"
                        name="Action"
                        v-bind:value="genre.id"
                        v-model="checkboxValues"
                        @input="fromArrayToURL"
                        @change="searchByGenre()"
                      />
                      <label
                        class="main-filter__category-checkbox-label"
                        v-bind:for="genresID + genre.id"
                        >{{ genre.name }}</label
                      >
                    </div>
                  </div>
                </div>
                <div class="main-filter__category-item-wrapper by-date second-level-two">
                  <h3 class="main-filter__category-title">By Date</h3>
                  <div class="main-filter__category-date third-level">
                    <div class="main-filter__category-date-item">
                      <input
                        class="main-filter__category-date-item-input"
                        type="checkbox"
                        name="Today"
                        id="today"
                        value="Today"
                        v-model="checkboxDate"
                        @change="setOption($event)"
                        v-on:click="searchByToday()"
                      />
                      <label
                        class="main-filter__category-date-item-label"
                        for="today"
                        >Today</label
                      >
                    </div>
                    <div class="main-filter__category-date-item">
                      <input
                        class="main-filter__category-date-item-input"
                        type="checkbox"
                        name="This Week"
                        id="week"
                        value="Week"
                        v-model="checkboxDate"
                        @change="setOption($event)"
                        v-on:click="searchByWeek()"
                      />
                      <label
                        class="main-filter__category-date-item-label"
                        for="week"
                        >This Week</label
                      >
                    </div>
                    <div class="main-filter__category-date-item">
                      <input
                        class="main-filter__category-date-item-input"
                        type="checkbox"
                        name="This Month"
                        id="month"
                        value="Month"
                        v-model="checkboxDate"
                        @change="setOption($event)"
                        v-on:click="searchByMonth()"
                      />
                      <label
                        class="main-filter__category-date-item-label"
                        for="month"
                        >This Month</label
                      >
                    </div>
                    <div class="main-filter__category-date-item">
                      <input
                        class="main-filter__category-date-item-input"
                        type="checkbox"
                        name="This Year"
                        v-model="checkboxDate"
                        id="year"
                        value="Year"
                        @change="setOption($event)"
                        v-on:click="searchByYear()"
                      />
                      <label
                        class="main-filter__category-date-item-label"
                        for="year"
                        >This Year</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="main-filter__category-button"
              v-on:click="moviesList()"
            >
              Search
            </button>
          </div>
        </div>
        <div class="data-block__content">
          <div class="data-block__content-items">
            <div
              class="data-block__content-item"
              v-for="movie in movies"
              :key="movie.id"
            >
            <router-link v-bind:to="'/movie/' + movie.id">
              <MovieItem
                v-if="movies"
                v-bind:movieID="movie.id"
                v-bind:primaryReleaseDay="movie.release_date"
              />
            </router-link>
            </div>
          </div>
          <div class="data-pagination">
            <vue-awesome-paginate
              v-if="totalResults > totalResultLimit"
              :total-items="totalResultLimit"
              :items-per-page="20"
              :max-pages-shown="1"
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
      current: null,
      currentPage: 1,
      totalResults: null,
      currentDate: "",
      firstDayWeek: null,
      currentWeek: null,
      currentMonth: null,
      currentYear: "",
      releseDateFrom: "primary_release_date.gte=",
      releseDateTo: "primary_release_date.lte=",
      thisMonth: null,
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
    moviesList() {
      axios
        .get(
          this.apiDiscoverUrl +
            this.params.api_key +
            this.params.sort_by +
            this.params.popularity +
            this.params.releseDateFilter +
            this.params.primary_release_year +
            this.params.with_genres +
            this.params.page
        )
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
        .get(this.apiMovieGenres + this.params.api_key)
        .then((response) => {
          this.genresMovieList = response.data.genres;
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    searchByGenre() {
      this.checkboxString = this.checkboxValues.join("|");
      this.params.with_genres = "&with_genres=" + this.checkboxString;
      console.log(this.params.with_genres);
    },
    searchByToday() {
      this.currentDate = new Date().toJSON().slice(0, 10);
      this.params.releseDateFilter =
        "&primary_release_date.gte=" +
        this.currentDate +
        "&primary_release_date.lte=" +
        this.currentDate;
    },
    searchByWeek() {
      this.currentDate = new Date().toJSON().slice(0, 10);
      this.current = new Date();
      this.day = this.current.getDay();
      this.diff = this.current.getDate() - this.day + (this.day == 0 ? -6 : 1);
      this.firstDayWeek = new Date(this.current.setDate(this.diff));
      this.firstDayWeek = new Date(this.firstDayWeek).toJSON().slice(0, 10);
      this.params.releseDateFilter =
        "&primary_release_date.gte=" +
        this.currentDate +
        "&primary_release_date.lte=" +
        this.currentDate;
      console.log(this.releseDateFilter);
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
      this.params.releseDateFilter =
        "&primary_release_date.gte=" +
        this.currentMonth +
        "&primary_release_date.lte=" +
        this.currentDate;
    },
    searchByYear() {
      this.currentYear = new Date().getFullYear();
      this.params.primary_release_year = "&year=" + this.currentYear;

      console.log(this.params.primary_release_year);
    },
    onClickHandler(page) {
      this.currentPage = page;
      this.params.page = "&page=" + this.currentPage;
      this.moviesList();
      window.scrollTo(0,0)
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
    this.moviesList();
    this.movieGenresList();
  },
};
</script>
<style></style>
