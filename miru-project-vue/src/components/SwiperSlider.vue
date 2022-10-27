<template>
  <swiper
    :modules="modules"
    :space-between="20"
    :loop="true"
    :pagination="{clickable:true}"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }"
  >
    <swiper-slide v-for="text in swiperTextBase" :key="text.description">
    <div>
      <h1>{{text.author}}</h1>
      <p>{{text.description}}</p>
      <img :src="text.img" alt="image">
    </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Autoplay, Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import {ref} from "vue"
export default {
  name: 'SwiperComponent',
  components: {Swiper, SwiperSlide},
  setup() {
    const swiperTextBase = ref([
      {
        author: "Elon Must",
        description: "When we meet",
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg'
      },
      {
        author: "Elon Must",
        description: "When we meet",
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg'
      },
      {
        author: "Elon Must",
        description: "When we meet",
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg'
      },
      {
        author: "Elon Must",
        description: "When we meet",
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg'
      }
    ])
    return {modules:[Pagination, Autoplay], swiperTextBase}
  }
}
</script>