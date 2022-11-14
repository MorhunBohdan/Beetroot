<template>
  <section class="first-screen">
    <div class="mask-img">
      <img class="mask-img-img" src="" alt="" />
    </div>
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
          depth: 9048,
          modifier: 7.5,
          slideShadows: true,
        }"
        :loop="true"
        :autoplay="{
          delay: 6500,
          disableOnInteraction: false,
        }"
        :pagination="false"
        :modules="modules"
        class="swiper-desc"
        v-if="movies"
      >
        <swiper-slide v-for="item in movies" :key="item.movies">
          <div
            class="movie-display__description"
            style="background: rgba(19, 19, 19, 1);padding: 30px;border-radius: 20px;"
          >
            <div class="movie-display__description-caption">
              <p class="movie-display__description-item">
                {{ item.release_date }}
              </p>
              <p class="movie-display__description-item">
                {{ item.original_language }}
              </p>
              <p class="movie-display__description-item">
                {{ item.vote_average / 2 + "/5" + " " + "Vote Averege" }}
              </p>
            </div>
            <div class="movie-display__description-main">
              <h1 class="movie-display__description-main-title">
                {{ item.title }}
              </h1>
              <p class="movie-display__description-main-text">
                {{ item.overview }}
              </p>
              <div class="movie-display__description-main-buttons">
                <router-link  class="movie-display__description-btn-wathch-router" v-bind:to="'/movie/' + item.id">
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
                </router-link>
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
            depth: 260,
            modifier: 4.0,
            slideShadows: true,
          }"
          :loop="true"
          :autoplay="{
            delay: 6500,
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
      bg: "",
      bacgroundImgs: [],
      imgUrl: "https://image.tmdb.org/t/p/original",
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
          this.bacgroundImgs = response.data.results;
          this.changeBacground();
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    changeBacground() {
      this.bgImgArray = this.bacgroundImgs.map((poster_path) => {
        return this.imgUrl + poster_path.poster_path;
      });
      this.firstScreen = document.querySelector(".mask-img");
      if (this.bgImgArray) {
        this.bgImgArray;
        this.index = 0;
        this.bg = "",
        this.bgImgArray.forEach(function (value, index) {
          setTimeout(function () {
            this.imgTeg = document.querySelector(".mask-img-img")
            this.imgTeg.setAttribute("src", value)
            this.bg = index
          },index * 6900);
        });
        
      }
    },
  },
  mounted() {
    this.moviesList();
  },
};
</script>
