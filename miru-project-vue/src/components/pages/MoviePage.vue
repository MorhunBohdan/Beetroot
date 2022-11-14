<template>
  <section class="data-item">
    <div class="data-item__content conteiner">
      <div class="data-item__content-leftside">
        <div class="data-item__content-leftside-video" v-if="trailer">
          <iframe
            class="data-item__content-leftside-video-iframe"
            id="ytplayer"
            type="text/html"
            :src="trailer"
          ></iframe>
        </div>
        <div class="data-item__content-leftside-video" v-else>
          <img
            class="data-item__content-leftside-video-novideo"
            src="../../../public/dist/img/5.movies/video-not-found.webp"
            alt="video-not-found"
          />
        </div>
        <div class="data-item__content-leftside-info">
          <div class="data-item__content-leftside-info-top">
            <div class="data-item__content-leftside-info-top-left">
              <h2 class="data-item__content-leftside-info-top-left-title">
                {{ movie.title }}
              </h2>
              <div class="data-item__content-leftside-info-top-left-caption">
                <p
                  class="data-item__content-leftside-info-top-left-caption-item"
                >
                  {{ movie.release_date }}
                </p>
                <p
                  class="data-item__content-leftside-info-top-left-caption-item"
                >
                  {{ movie.runtime + min }}
                </p>
                <p
                  class="data-item__content-leftside-info-top-left-caption-item"
                >
                  {{ movie.status }}
                </p>
              </div>
            </div>
            <div class="data-item__content-leftside-info-top-right">
              <div class="data-item__content-leftside-info-top-right-rating">
                <div
                  class="data-item__content-leftside-info-top-right-rating-viewers"
                >
                  <div
                    class="data-item__content-leftside-info-top-right-rating-viewers-number"
                  >
                    <StarRating v-bind:ratingValue="movie.vote_average / 2" />
                  </div>
                </div>
                <div
                  class="data-item__content-leftside-info-top-right-rating-likes"
                >
                  <div
                    class="data-item__content-leftside-info-top-right-rating-likes-up"
                  >
                    <i class="fa-solid fa-thumbs-up"></i>
                    <p
                      class="data-item__content-leftside-info-top-right-rating-likes-number"
                    >
                      {{movie.vote_count + " " +"Votes"}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="data-item__content-leftside-info-description">
            <p class="data-item__content-leftside-info-description-item">
              {{ movie.overview }}
            </p>
          </div>
        </div>
        <div class="data-item__content-leftside-cast">
          <h2 class="data-item__content-leftside-cast-title">Cast</h2>
          <div class="data-item__content-leftside-cast-data">
            <div
              class="data-item__content-leftside-cast-data-item"
              v-for="cast in credits"
              :key="cast.id"
            >
              <div class="data-item__content-leftside-cast-data-item-img">
                <img
                  v-if="cast.profile_path"
                  v-bind:src="castImgURL + cast.profile_path"
                  alt=""
                  class="data-block__content-item-img"
                />
                <img
                  v-else
                  src="../../../public/dist/img/5.movies/empty-avatar.webp"
                  class="data-block__content-item-img"
                  alt="poster-not-found"
                />
              </div>
              <div class="data-item__content-leftside-cast-data-item-info">
                <h3 class="data-item__content-leftside-cast-data-item-name">
                  {{ cast.name }}
                </h3>
                <p class="data-item__content-leftside-cast-data-item-character">
                  {{ cast.character }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="data-item__content-leftside-cast-data-showmore"
          type="button"
          v-on:click="showMore()"
        >
          Show More
        </button>
      </div>
      <div class="data-item__content-rightside">
        <div class="data-item__content-rightside-poster">
          <h2 class="data-item__content-leftside-info-top-left-title">
                {{ movie.title }}
              </h2>
          <div class="data-item__content-rightside-poster-img">
            <img
              v-if="movie.poster_path"
              v-bind:src="imgURL"
              alt="Poster"
              class="data-block__content-item-img"
            />
            <img
              v-else
              src="../../../public/dist/img/5.movies/poster-not-found.webp"
              class="data-block__content-item-img"
              alt="poster-not-found"
            />
          </div>
          <div class="data-item__content-rightside-poster-genres">
            <div
              class="data-item__content-rightside-poster-genre"
              v-for="genre in genres"
              :key="genre.id"
            >
              {{ genre.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import $ from "jquery";
import StarRating from "@/components/pages/StarRating.vue";


export default {
  name: "MoviePage",
  components: {
    StarRating,
  },
  data() {
    return {
      movie: "",
      credits: "",
      trailer: "",
      min: "min",
      error: null,
      genres: null,
      ratingValue: null,
      youtube: "https://www.youtube.com/embed/",
      castImgURL: "https://image.tmdb.org/t/p/original",
      noGenre: "Else",
      apiMovieUrl: "https://api.themoviedb.org/3/movie/",
      imgUrl: "https://image.tmdb.org/t/p/original",
      apiKEY: "api_key=399190ed100bc4cf5960c22c0347d9aa",
      params: {
        api_key: "?api_key=399190ed100bc4cf5960c22c0347d9aa",
        id: useRoute().params.id,
        credits: "/credits",
        video: "/videos",
      },
    };
  },
  methods: {
    movieItem() {
      axios
        .get(this.apiMovieUrl + this.params.id + this.params.api_key)
        .then((response) => {
          this.movie = response.data;
          this.imgURL =
            "https://image.tmdb.org/t/p/original" + response.data.poster_path;
          this.genres = response.data.genres;
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    movieCredits() {
      axios
        .get(
          this.apiMovieUrl +
            this.params.id +
            this.params.credits +
            this.params.api_key
        )
        .then((response) => {
          this.credits = response.data.cast;
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    getVideo() {
      axios
        .get(
          this.apiMovieUrl +
            this.params.id +
            this.params.video +
            this.params.api_key
        )
        .then((response) => {
          this.trailer = response.data.results;
          if(this.trailer.length == 0 ) {
            this.trailer = false;
          } else {
            this.trailer.forEach((results) => {
            if (results.lenght !== 0|| results.name.include("Official Trailer")) {
              this.trailer = this.youtube + results.key
            }
          });
          }
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    showMore() {
      this.showmore = $(".data-item__content-leftside-cast");
      if (this.showmore.hasClass("show-more")) {
        this.showmore.removeClass("show-more");
      } else {
        this.showmore = $(".data-item__content-leftside-cast").addClass(
          "show-more"
        );
      }
    },
  },
  mounted() {
    this.movieItem();
    this.movieCredits();
    this.getVideo();
  },
};
</script>
