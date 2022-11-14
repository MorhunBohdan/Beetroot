<template>
  <div class="data-item__content-leftside-info-top-right-rating-viewers-number">
    <div class="stars-outer">
      <div class="stars-inner"></div>
    </div>
    <span class="number-rating">{{ roundedNumber }}</span>
  </div>
</template>

<script>


export default {
  name: "StarRating",
  props: {
    ratingValue: null,
  },
  data() {
    return {
      movie: null,
      error: null,
      style: "style=width",
      ratingStar: "",
      width: 0,
      widthTwo: "width=",
      ratingNumber: "",
      roundedNumber: "",
    };
  },
  watch: {
    ratingValue: function(value) {
      this.pasedRatingValue = value
      this.ratingNumber = value
      this.roundedNumber = Math.round(this.ratingNumber * 10)/10;
      this.starPercentage = (this.pasedRatingValue / this.starsTotal) * 100;
      this.starPercentageRounded = `${
        Math.round(this.starPercentage / 10) * 10
      }%`;
      document.querySelector(
        `.stars-inner`
      ).style.width = this.starPercentageRounded;
    }
  }, 
  methods: {
    starsCalc() {
      this.starsTotal = 5;
      this.starPercentage = (this.ratingStar / this.starsTotal) * 100;
      this.starPercentageRounded = `${
        Math.round(this.starPercentage / 10) * 10
      }%`;
      document.querySelector(
        `.data-item__content-leftside-info-top-right-rating-viewers-number .stars-inner`
      ).style.width = this.starPercentageRounded;
      
    },
  },
  mounted () {
    this.starsCalc();
  }
};
</script>

<style>
.data-item__content-leftside-info-top-right-rating-viewers-number {
}
.stars-outer {
  position: relative;
  display: flex;
}
.stars-outer::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  color: #151515;
  font-size: 20px;
}
.stars-inner::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  color: #f8ce0b;
  font-size: 20px;
}
.stars-inner {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0%;
}
.number-rating {
}
</style>
