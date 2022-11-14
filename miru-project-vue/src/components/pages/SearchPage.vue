<template>
  <section class="movie-list">
    <div class="movie-list__main conteiner">
      <div class="main-filter">
        <h2 class="main-filter__options">Filter Option</h2>
        <div class="main-filter__category">
          <div v-if="typeSearch == 'movie?'" class="main-filter__category-item-wrapper">
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
          <div v-else class="main-filter__category-item-wrapper">
            <h3 class="main-filter__category-title">By Category</h3>
            <div class="main-filter__category-checkboxes tv">
              <div
                class="main-filter__category-checkboxes-item"
                v-for="genre in genresTvList"
                :key="genre.genresTvList"
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
          <div v-if="typeSearch == 'movie?'" class="main-filter__category-item by-date">
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
          <div v-else class="main-filter__category-item by-date">
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
                  v-on:click="searchByTodayTV()"
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
                  v-on:click="searchByWeekTV()"
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
                  v-on:click="searchByMonthTV()"
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
                  v-on:click="searchByYearTV()"
                />
                <label class="main-filter__category-date-item-label" for="year"
                  >This Year</label
                >
              </div>
            </div>
          </div>
          <div class="main-filter__category-item by-type">
            <h3 class="main-filter__category-title">By Type</h3>
            <div class="main-filter__category-type">
              <div class="main-filter__category-type-item">
                <input
                  class="main-filter__category-type-item-input"
                  type="radio"
                  name="Movies"
                  id="Movies"
                  value="movie"
                  v-model="checkboxType"
                  @change="setOptionTypeRadio($event)"
                 
                />
                <label
                  class="main-filter__category-type-item-label"
                  for="Movies"
                  >Movies</label
                >
              </div>
              <div class="main-filter__category-type-item">
                <input
                  class="main-filter__category-type-item-input"
                  type="radio"
                  name="tv"
                  id="tv"
                  value="tv"
                  v-model="checkboxType"
                  @change="setOptionTypeRadio($event)"
                  
                />
                <label class="main-filter__category-type-item-label" for="tv"
                  >TV Series</label
                >
              </div>
            </div>
          </div>
          <button
            type="button"
            class="main-filter__category-button"
            v-on:click="discoverByCategory()"
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
                <div class="main-filter__category-item-wrapper second-level-search">
                  <h3 class="main-filter__category-title">By Type</h3>
                  <div class="main-filter__category-checkboxes third-level-one">
                    <div class="main-filter__category-type-item">
                <input
                  class="main-filter__category-type-item-input"
                  type="radio"
                  name="type"
                  id="Movies"
                  value="movie"
                  v-model="checkboxType"
                  @change="setOptionTypeRadio($event)"
                 
                />
                <label
                  class="main-filter__category-type-item-label"
                  for="Movies"
                  >Movies</label
                >
              </div>
              <div class="main-filter__category-type-item">
                <input
                  class="main-filter__category-type-item-input"
                  type="radio"
                  name="type"
                  id="tv"
                  value="tv"
                  v-model="checkboxType"
                  @change="setOptionTypeRadio($event)"
                  
                />
                <label class="main-filter__category-type-item-label" for="tv"
                  >TV Series</label
                >
              </div>
                  </div>
                </div>
                <div
                  class="main-filter__category-item-wrapper by-date second-level-two"
                >
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
              v-on:click="discoverByCategory()"
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
              <div class="wrapper" v-if="typeSearch == 'movie?'" >
                <router-link v-if="movies" v-bind:to="'/movie/' + movie.id">
                  <MovieItem
                    v-bind:movieID="movie.id"
                    v-bind:primaryReleaseDay="movie.release_date"
                  />
                </router-link>
              </div>
              <div class="wrapper" v-else >
                <router-link v-if="movies" v-bind:to="'/movie/' + movie.id">
                  <SeriesItem
                    v-bind:movieID="movie.id"
                    v-bind:primaryReleaseDay="movie.release_date"
                  />
                </router-link>
              </div>
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
import { useRoute } from "vue-router";
import SeriesItem from "@/components/pages/SeriesItem.vue";

export default {
  name: "SearchPage",
  components: {
    MovieItem,
    SeriesItem,
  },
  data() {
    return {
      totalResultLimit: 10000,
      movies: null,
      error: null,
      genresMovieList: null,
      genresTvList: null,
      checkboxType: [],
      typeSearch: "movie?",
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
      discoverType: "movie",
      imgUrl: "https://image.tmdb.org/t/p/original",
      apiDiscoverUrl: "https://api.themoviedb.org/3/discover/" +  this.discoverType + "/?",
      apiSearchUrl: "https://api.themoviedb.org/3/search/",
      apiMovieGenres: "https://api.themoviedb.org/3/genre/movie/list?",
      apiTvGenres: "https://api.themoviedb.org/3/genre/tv/list?",
      apiKEY: "api_key=399190ed100bc4cf5960c22c0347d9aa",
      params: {
        type: "movie?",
        api_key: "api_key=399190ed100bc4cf5960c22c0347d9aa",
        sort_by: "&sort_by=",
        popularity: "popularity.desc&",
        releseDateFilter: "",
        primary_release_year: "",
        with_genres: "",
        page: "",
        query: "&query=" + useRoute().params.query,
      },
    };
  },
  watch: {
    "$route.params.query": {
      handler: function (query) {
        this.params.query = "&query=" + query;
        
        this.moviesList();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    moviesList() {
      axios
        .get(
          this.apiSearchUrl +
            this.params.type +
            this.params.api_key +
            this.params.sort_by +
            this.params.popularity +
            this.params.releseDateFilter +
            this.params.primary_release_year +
            this.params.with_genres +
            this.params.page +
            this.params.query
        )
        .then((response) => {
          this.movies = response.data.results;
          
          this.check = response;
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
    tvGenresList() {
      axios
        .get(this.apiTvGenres + this.params.api_key)
        .then((response) => {
          this.genresTvList = response.data.genres;
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    searchByGenre() {
      this.checkboxString = this.checkboxValues.join("|");
      this.params.with_genres = "&with_genres=" + this.checkboxString;
      
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
        this.firstDayWeek +
        "&primary_release_date.lte=" +
        this.currentDate;
      
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

      
    },
    searchByTodayTV() {
      this.currentDate = new Date().toJSON().slice(0, 10);
      this.params.releseDateFilter =
        "&first_air_date.gte=" +
        this.currentDate +
        "&first_air_date.lte=" +
        this.currentDate;
    },
    searchByWeekTV() {
      this.currentDate = new Date().toJSON().slice(0, 10);
      
      this.current = new Date();
      this.day = this.current.getDay();
      this.diff = this.current.getDate() - this.day + (this.day == 0 ? -6 : 1);
      this.firstDayWeek = new Date(this.current.setDate(this.diff));
      this.firstDayWeek = new Date(this.firstDayWeek).toJSON().slice(0, 10);
     
      this.params.releseDateFilter =
        "&first_air_date.gte=" +
        this.firstDayWeek +
        "&first_air_date.lte=" +
        this.currentDate;
      
    },
    searchByMonthTV() {
      this.currentDate = new Date().toJSON().slice(0, 10);
      this.current = new Date();
      this.currentMonth = new Date(
        this.current.getFullYear(),
        this.current.getMonth(),
        2
      );
      this.currentMonth = new Date(this.currentMonth).toJSON().slice(0, 10);
      this.params.releseDateFilter =
        "&first_air_date.gte=" +
        this.currentMonth +
        "&first_air_date.lte=" +
        this.currentDate;
    },
    searchByYearTV() {
      this.currentYear = new Date().getFullYear();
      this.params.primary_release_year = "&first_air_date_year=" + this.currentYear;

      
    },
    onClickHandler(page) {
      this.currentPage = page;
      this.params.page = "&page=" + this.currentPage;
      this.moviesList();
      window.scrollTo(0,0)
    },
    setOptionType(event) {
      this.checkedType = event.target;
      
      if (this.checkedType.checked) {
        this.checkboxType = [event.target.value];
        
        this.searchByType();
      } else {
        this.checkboxType = [];
        this.params.type = "movie?";
        
        
      }
    },
    setOptionTypeRadio(event) {
      this.checkedType = event.target;
      
      if (this.checkboxType == "movie") {
        this.params.type = this.checkboxType + "?";
        
        this.typeSearch = this.params.type
        this.moviesList();
        
      } else {
        this.params.type = this.checkboxType + "?";
        this.typeSearch = this.params.type
        this.moviesList();
        
      }
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
    discoverByCategory() {
      this.discoverType = this.checkboxType,
      this.apiDiscoverUrl = "https://api.themoviedb.org/3/discover/" +  this.discoverType + "/?",
      axios
        .get(
          this.apiDiscoverUrl +
            this.params.api_key +
            this.params.sort_by +
            this.params.popularity +
            this.params.releseDateFilter +
            this.params.primary_release_year +
            this.params.with_genres +
            this.params.page +
            this.params.query
        )
        .then((response) => {
          this.movies = response.data.results;
          
          this.check = response;
          this.totalResults = response.data.total_results;
        })
        .catch((e) => {
          this.error.push(e);
        });
    }
  },
  mounted() {
    this.moviesList();
    this.discoverByCategory();
    this.movieGenresList();
    this.tvGenresList();
  },
};
</script>
<style>
.second-level-search {
  display: none;
  position: absolute;
  top: 70px;
  left: 0;
  z-index: 10;
}
.second-level-search {
  align-items: center;
}
.second-level-search:hover {
  height: 200px;
  cursor: pointer;
}
.second-level-search:hover .third-level-one {
  display: flex;
  height: 830px;
  cursor: pointer;
}
.first-level:hover .second-level-search {
  display: flex;
  cursor: pointer;
}
.second-level-search:hover .third-level-one {
  height: 60%;
}
</style>

