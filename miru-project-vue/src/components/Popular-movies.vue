<template>
  <section class="popular-movies">
    <div class="popular-movies__mask"></div>
    <div class="popular-movies__content conteiner">
      <div class="popular-movies__content-top">
        <h2 class="popular-movies__content-top-title">
          Popular Movies this month
        </h2>
        <router-link to="Movies/">
          <a class="popular-movies__content-top-more" href="/#"
          >View more <i class="fa-solid fa-angle-right"></i
        ></a>
        </router-link>
      </div>
      <div class="popular-movies__content-grid">
        <div class="popular-movies__content-grid-item p-one">
          <router-link class="router-link" v-bind:to="'/movie/' + id1">
            <div class="overlay"></div>
            <img
              class="popular-movies__content-grid-img"
              :src="imgPopular1"
              alt="post"
            />
            <div class="popular-movies__content-grid-text">
              <h2 class="popular-movies__content-grid-title main-grid">
                {{ title1 }}
              </h2>
              <div class="popular-movies__content-grid-caption">
                <p class="popular-movies__content-grid-year">{{ time1 }}</p>
              </div>
            </div>
          </router-link>
        </div>

        <div class="popular-movies__content-grid-item p-two">
          <router-link class="router-link" v-bind:to="'/movie/' + id2">
            <div class="overlay"></div>
            <img
              class="popular-movies__content-grid-img"
              :src="imgPopular2"
              alt="post"
            />
            <div class="popular-movies__content-grid-text">
              <h2 class="popular-movies__content-grid-title">{{ title2 }}</h2>
              <div class="popular-movies__content-grid-caption">
                <p class="popular-movies__content-grid-year">{{ time2 }}</p>
              </div>
            </div>
          </router-link>
        </div>

        <div class="popular-movies__content-grid-item p-three">
          <router-link class="router-link" v-bind:to="'/movie/' + id3">
            <div class="overlay"></div>
            <img
              class="popular-movies__content-grid-img"
              :src="imgPopular3"
              alt="post"
            />
            <div class="popular-movies__content-grid-text">
              <h2 class="popular-movies__content-grid-title">{{ title3 }}</h2>
              <div class="popular-movies__content-grid-caption">
                <p class="popular-movies__content-grid-year">{{ time3 }}</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="popular-movies__content-grid-item p-four">
          <router-link class="router-link" v-bind:to="'/movie/' + id4">
            <div class="overlay"></div>
            <img
              class="popular-movies__content-grid-img"
              :src="imgPopular4"
              alt="post"
            />
            <div class="popular-movies__content-grid-text">
              <h2 class="popular-movies__content-grid-title">{{ title4 }}</h2>
              <div class="popular-movies__content-grid-caption">
                <p class="popular-movies__content-grid-year">{{ time4 }}</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="popular-movies__content-grid-item p-five">
          <router-link class="router-link" v-bind:to="'/movie/' + id5">
            <div class="overlay"></div>
            <img
              class="popular-movies__content-grid-img"
              :src="imgPopular5"
              alt="post"
            />
            <div class="popular-movies__content-grid-text">
              <h2 class="popular-movies__content-grid-title">{{ title5 }}</h2>
              <div class="popular-movies__content-grid-caption">
                <p class="popular-movies__content-grid-year">{{ time5 }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "PopularMovies",
  data() {
    return {
      populars: "",
      bacgroundImgs: [],
      imgPopular: "https://image.tmdb.org/t/p/original",
      imgPopular1: "",
      imgPopular2: "",
      imgPopular3: "",
      imgPopular4: "",
      imgPopular5: "",
      title1: "",
      title2: "",
      title3: "",
      title4: "",
      title5: "",
      time1: "",
      time2: "",
      time3: "",
      time4: "",
      time5: "",
      id1: "",
      id2: "",
      id3: "",
      id4: "",
      id5: "",
      apiDiscoverUrl: "https://api.themoviedb.org/3/discover/movie/?",
      apiMovieUrl: "https://api.themoviedb.org/3/movie/",
      params: {
        api_key: "api_key=399190ed100bc4cf5960c22c0347d9aa",
        sort_by: "&sort_by=",
        popularity: "popularity.desc&",
        releseDateFilter: "",
      },
    };
  },
  methods: {
    popularByMonth() {
      this.searchByMonth();
      axios
        .get(
          this.apiDiscoverUrl +
            this.params.api_key +
            this.params.sort_by +
            this.params.popularity +
            this.params.releseDateFilter
        )
        .then((response) => {
          this.populars = response.data.results;
          this.imgPopular1 =
            "https://image.tmdb.org/t/p/original" +
            this.populars[0].poster_path;
          this.imgPopular2 =
            "https://image.tmdb.org/t/p/original" +
            this.populars[1].poster_path;
          this.imgPopular3 =
            "https://image.tmdb.org/t/p/original" +
            this.populars[2].poster_path;
          this.imgPopular4 =
            "https://image.tmdb.org/t/p/original" +
            this.populars[3].poster_path;
          this.imgPopular5 =
            "https://image.tmdb.org/t/p/original" +
            this.populars[4].poster_path;
          this.title1 = this.populars[0].title;
          this.title2 = this.populars[1].title;
          this.title3 = this.populars[2].title;
          this.title4 = this.populars[3].title;
          this.title5 = this.populars[4].title;
          this.time1 = this.populars[0].release_date;
          this.time2 = this.populars[1].release_date;
          this.time3 = this.populars[2].release_date;
          this.time4 = this.populars[3].release_date;
          this.time5 = this.populars[4].release_date;
          this.id1 = this.populars[0].id;
          this.id2 = this.populars[1].id;
          this.id3 = this.populars[2].id;
          this.id4 = this.populars[3].id;
          this.id5 = this.populars[4].id;
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
      this.params.releseDateFilter =
        "&primary_release_date.gte=" +
        this.currentMonth +
        "&primary_release_date.lte=" +
        this.currentDate;
    },
  },
  mounted() {
    this.popularByMonth();
  },
};
</script>
