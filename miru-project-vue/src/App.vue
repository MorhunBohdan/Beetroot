<template>
  <HeaderComponent/>
  <FirstScreen/>
  <PopularMovies/>
  <TopMovies/>
  <FooterComponent/>
  
</template>

<script>
import '../libraries/normalize/normalize.min.css'
import '../libraries/fontawesome/css/all.min.css'
import '../libraries/icomoon/style.css'
import HeaderComponent from './components/HeaderComponent.vue'
import FirstScreen from './components/First-screen.vue'
import PopularMovies from './components/Popular-movies.vue'
import TopMovies from './components/TopMovies.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FirstScreen,
    PopularMovies,
    TopMovies,
    FooterComponent
  }
}
</script>

<style>
@import  "../public/dist/css/style.min.css" 
</style>
