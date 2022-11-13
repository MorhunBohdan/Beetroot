<template>
  <section class="first-screen">
    <div class="movie-display conteiner">
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :observer="true"
          :observeSlideChildren="true"
          :observeParents="true"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 748,
            modifier: 3.5,
            slideShadows: true,
          }"
          :loop="true"
          :autoplay="{
            delay: 1500,
            disableOnInteraction: false,
          }"
          :pagination="false"
          :modules="modules"
          class="swiper-desc"
          v-if="movies"
        >
          <swiper-slide v-for="item in movies" :key="item.movies">
              <div class="movie-display__description" style="background: rgba(19,19,19,1);padding:30px; border-radius: 20px;">
                <div class="movie-display__description-caption">
                <p
                  class="movie-display__description-item"
                >
                  {{ item.release_date }}
                </p>
                <p
                  class="movie-display__description-item"
                >
                  {{ item.original_language }}
                </p>
                <p
                  class="movie-display__description-item"
                >
                  {{ item.vote_average / 2 + "/5" + " " + "Vote Averege" }}
                </p>
              </div>
              <div class="movie-display__description-main">
                <h1 class="movie-display__description-main-title">{{item.title}}</h1>
                <p class="movie-display__description-main-text">
                 {{item.overview}}
                </p>
                <div class="movie-display__description-main-buttons">
                  <button
                    class="movie-display__description-btn-wathch"
                    type="button"
                  >
                    Watch Now
                    <img
                      class="movie-display__description-btn-wathch-icon"
                      src="../../public/dist/img/2.first-screen/button-play.svg"
                      alt="login-icon"
                    />
                  </button>
                  <button
                    class="movie-display__description-btn-wathclist"
                    type="button"
                  >
                    Add to Wathclist
                  </button>
                </div>
              </div>
              </div>
          </swiper-slide>
        </swiper>
      <div class="movie-display__slider">
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :observer="true"
          :observeSlideChildren="true"
          :observeParents="true"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 248,
            modifier: 3.5,
            slideShadows: true,
          }"
          :loop="true"
          :autoplay="{
            delay: 1500,
            disableOnInteraction: false,
          }"
          :pagination="false"
          :modules="modules"
          class="swiper-img"
          v-if="movies"
        >
          <swiper-slide v-for="url in movies" :key="url.movies">
            <router-link v-bind:to="'/movie/' + url.id">
              <img
                class="movie-display__slider-poster-img"
                :src="imgUrl + url.poster_path"
              />
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="recent-watched">
      <div class="recent-watched__top">
        <h2 class="recent-watched__top-title">Recent Watched</h2>
        <div class="recent-watched__top-pagination">
          <i class="fa-solid fa-circle"></i><i class="fa-solid fa-circle"></i
          ><i class="fa-solid fa-circle"></i><i class="fa-solid fa-circle"></i>
        </div>
      </div>
      <div class="recent-watched__slider">
        <div class="recent-watched__block">
          <div class="recent-watched__block-img"></div>
          <div class="recent-watched__block-description">
            <p class="recent-watched__block-description-genre">test</p>
            <h2 class="recent-watched__block-description-title">Test Title</h2>
            <p class="recent-watched__block-description-year">2020</p>
          </div>
        </div>
        <div class="recent-watched__block">
          <div class="recent-watched__block-img"></div>
          <div class="recent-watched__block-description">
            <p class="recent-watched__block-description-genre">test</p>
            <h2 class="recent-watched__block-description-title">Test Title</h2>
            <p class="recent-watched__block-description-year">2020</p>
          </div>
        </div>
        <div class="recent-watched__block">
          <div class="recent-watched__block-img"></div>
          <div class="recent-watched__block-description">
            <p class="recent-watched__block-description-genre">test</p>
            <h2 class="recent-watched__block-description-title">Test Title</h2>
            <p class="recent-watched__block-description-year">2020</p>
          </div>
        </div>
        <div class="recent-watched__block">
          <div class="recent-watched__block-img"></div>
          <div class="recent-watched__block-description">
            <p class="recent-watched__block-description-genre">test</p>
            <h2 class="recent-watched__block-description-title">Test Title</h2>
            <p class="recent-watched__block-description-year">2020</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../public/dist/css/swiper-img.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import axios from "axios";

export default {
  name: "FirstScreen",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      movies: "",
      imgUrl: "https://image.tmdb.org/t/p/original/",
      apiDiscoverUrl: "https://api.themoviedb.org/3/discover/movie/?",
      apiMovieUrl: "https://api.themoviedb.org/3/movie/",
      params: {
        api_key: "api_key=399190ed100bc4cf5960c22c0347d9aa",
        sort_by: "&sort_by=",
        popularity: "popularity.desc&",
      },
    };
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination, Autoplay],
    };
  },
  methods: {
    moviesList() {
      axios
        .get(
          this.apiDiscoverUrl +
            this.params.api_key +
            this.params.sort_by +
            this.params.popularity
        )
        .then((response) => {
          this.movies = response.data.results;
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    movieItem(swiperURL) {
      this.swiperTest = swiperURL;
      console.log(this.swiperTest);
      axios
        .get(this.imgUrl + swiperURL)
        .then((response) => {
          this.url = response.data;
          console.log(this.url);
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
  },
  mounted() {
    this.moviesList();
    this.movieItem();
  },
};
</script>
