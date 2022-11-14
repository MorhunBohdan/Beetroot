<template>
  <swiper
    :grabCursor="true"
    :effect="'creative'"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    :loop="true"
    :autoplay="{
      delay: 2600,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="movie-display__description">
      <div class="movie-display__description-caption">
        <p class="movie-display__description-item"></p>
      </div>
      <div class="movie-display__description-main">
        <h1 class="movie-display__description-main-title"></h1>
        <p class="movie-display__description-main-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <div class="movie-display__description-main-buttons">
          <button class="movie-display__description-btn-wathch" type="button">
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
    </swiper-slide>
    <swiper-slide class="movie-display__description">
      <div class="movie-display__description-caption">
        <p class="movie-display__description-item"></p>
      </div>
      <div class="movie-display__description-main">
        <h1 class="movie-display__description-main-title"></h1>
        <p class="movie-display__description-main-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <div class="movie-display__description-main-buttons">
          <button class="movie-display__description-btn-wathch" type="button">
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
    </swiper-slide>
    <swiper-slide class="movie-display__description">
      <div class="movie-display__description-caption">
        <p class="movie-display__description-item"></p>
      </div>
      <div class="movie-display__description-main">
        <h1 class="movie-display__description-main-title"></h1>
        <p class="movie-display__description-main-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <div class="movie-display__description-main-buttons">
          <button class="movie-display__description-btn-wathch" type="button">
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
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "swiper/css/pagination";

import "../../public/dist/css/swiper-desc.css";

// import required modules
import { EffectCreative,  Autoplay} from "swiper";

export default {
  name: "SwiperImg",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCreative, Autoplay],
    };
  },
};
</script>
