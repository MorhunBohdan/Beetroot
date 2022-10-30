
<template>
  <HeaderComponent />
  <MainComponent />
  <FooterComponent />
</template>

<script>
import "../libraries/normalize/normalize.min.css";
import "../libraries/fontawesome/css/all.min.css";
import "../libraries/icomoon/style.css";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
};
</script>

<style>
@import "../public/dist/css/style.min.css";
</style>
