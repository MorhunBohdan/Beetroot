<template>
  <section class="first-screen">
    <div class="movie-display conteiner">
      <div class="movie-display__description">
        <div class="movie-display__description-caption">
          <p v-for="item in caption" :key="item.caption" class="movie-display__description-item">{{item.info}}</p>
        </div>
        <div class="movie-display__description-main">
          <h1 class="movie-display__description-main-title">thunder stunt</h1>
          <p class="movie-display__description-main-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
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
      </div>
      <div class="movie-display__slider">
        <div class="movie-display__slider-poster-img">
          <a class="movie-display__slider-poster-button" href="/#"
            ><img
              src="../../public/dist/img/2.first-screen/play-button.webp"
              alt="play-button"
          /></a>
        </div>
        <div class="movie-display__slider-poster-img-two">
          <a class="movie-display__slider-poster-button" href="/#"
            ><img
              src="../../public/dist/img/2.first-screen/play-button.webp"
              alt="play-button"
          /></a>
        </div>
        <div class="movie-display__slider-poster-img-three">
          <a class="movie-display__slider-poster-button" href="/#"
            ><img
              src="../../public/dist/img/2.first-screen/play-button.webp"
              alt="play-button"
          /></a>
        </div>
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

export default {
  name: "FirstScreen",
  data() {
    return {
      caption: [
      {id: 1, info: "action"}, 
      {id: 2, info: "2017"}, 
      {id: 3, info: "english" }, 
      {id: 4, info: "1hr2min" }],
    };
  },
};
</script>
