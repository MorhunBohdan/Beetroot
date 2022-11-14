<template>
  <div class="top-movies__main-content">
    <div class="top-movies__main-content-left">
      <div class="top-movies__main-content-left-itme one">
        <img
          class="top-movies__main-content-left-itme-img"
          :src="topImg1"
          alt=""
        />
      </div>
      <div class="top-movies__main-content-left-itme two">
        <img
          class="top-movies__main-content-left-itme-img"
          :src="topImg2"
          alt=""
        />
      </div>
      <div class="top-movies__main-content-left-itme three">
        <img
          class="top-movies__main-content-left-itme-img"
          :src="topImg3"
          alt=""
        />
      </div>
      <div class="top-movies__main-content-left-itme four">
        <img
          class="top-movies__main-content-left-itme-img"
          :src="topImg4"
          alt=""
        />
      </div>
    </div>
    <div class="top-movies__main-content-right">
      <div
        class="top-movies__main-content-right-item"
        v-for="item in top5movie"
        :key="item.top5movie"
      >
        <router-link  class="top-movies__main-content-right-item-router" v-bind:to="'/movie/' + item.id">
          <div class="top-movies__main-content-right-item-content">
            <div class="top-movies__main-content-right-item-top">
              <p class="top-movies__main-content-right-item-top-number">#</p>
              <h3 class="top-movies__main-content-right-itme-top-title">
                {{ item.title }}
              </h3>
            </div>
            <div class="top-movies__main-content-right-info">
              <div class="top-movies__main-content-right-info-text">
                <div class="top-movies__main-content-right-info-caption">
                  <p class="top-movies__main-content-right-info-caption-item">
                    {{ item.release_date }}
                  </p>
                  <p class="top-movies__main-content-right-info-caption-item">
                    {{ item.original_language }}
                  </p>
                </div>
                <div class="top-movies__main-content-right-info-rating">
                  <div
                    class="top-movies__main-content-right-info-title-rating-number"
                  >
                    {{ item.vote_average / 2 + "/5" + " " + "Rating" }}
                  </div>
                  <div
                    class="top-movies__main-content-right-info-title-rating-number"
                  >
                    {{ item.vote_count + " " + "Votes" }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TopItem",
  components: {},
  props: {
    checkboxDate: null,
  },
  data() {
    return {
      movie: null,
      error: null,
      noGenre: "Else",
      number: [1, 2, 3, 4, 5],
      imgUrl: "https://image.tmdb.org/t/p/original",
      apiDiscoverUrl: "https://api.themoviedb.org/3/discover/movie/",
      apiKEY: "?api_key=399190ed100bc4cf5960c22c0347d9aa",
      with_genres: "",
      topImg1: "",
      topImg2: "",
      topImg3: "",
      topImg4: "",
      topImg5: "",
    };
  },
  watch: {
    checkboxDate: function (value) {
      this.with_genres = "&with_genres=" + value;
      this.movieItem();
    },
  },
  methods: {
    movieItem() {
      axios
        .get(this.apiDiscoverUrl + this.apiKEY + this.with_genres)
        .then((response) => {
          this.movie = response.data.results;
          this.top5movie = this.movie.slice(0, 5);
          this.topImg1 =
            "https://image.tmdb.org/t/p/original" + this.movie[0].poster_path;
          this.topImg2 =
            "https://image.tmdb.org/t/p/original" + this.movie[1].poster_path;
          this.topImg3 =
            "https://image.tmdb.org/t/p/original" + this.movie[2].poster_path;
          this.topImg4 =
            "https://image.tmdb.org/t/p/original" + this.movie[3].poster_path;
          this.topImg5 =
            "https://image.tmdb.org/t/p/original" + this.movie[4].poster_path;
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
  },
  mounted() {
    this.movieItem();
  },
};
</script>
