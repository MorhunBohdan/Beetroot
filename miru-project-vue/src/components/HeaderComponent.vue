<template>
  <header class="header">
    <div class="header-main conteiner">
      <div class="header-burger" v-on:click="navbar()">
        <span class="header-burger__item"></span>
      </div>
        <img
          class="header-main__logo"
          src="../../public/dist/img/1.header/logo.svg"
          alt="Miru"
          @click="toTop()"
        />
      <div class="header-main__search">
        <i class="fa-solid fa-magnifying-glass header-main__search-icon"></i>
        <router-link to="">
          <input
            v-model="searchInput"
            v-on:keyup.enter="searchValue(e)"
            class="header-main__search-textarea"
            placeholder="Search titles here..."
            maxlength="50"
            role="link"
          />
        </router-link>
      </div>
      <nav class="header-main__navbar">
        <router-link
          v-for="item in navmenu"
          class="header-main__navbar-item"
          :to="item.url"
          :key="item.navmenu"
          >{{ item.name }}</router-link
        >
      </nav>
      <button class="header-main__btn-watchlist" type="button">
        <span class="header-main__btn-watchlist-icon icon-heart"></span
        >{{ buttons.watchlist }}
      </button>
      <div class="header-login">
        <button class="header-login__btn-signin" type="button">
          {{ buttons.sign }}
        </button>
        <button class="header-login__btn-register" type="button">
          {{ buttons.register }}
        </button>
      </div>
      <div class="header-login-mobile">
        <button class="header-login-mobile__btn-watchlist" type="button">
          <span
            class="header-login-mobile__btn-watchlist-icon icon-heart"
          ></span>
        </button>
        <a class="header-login-mobile__link" href="/#"
          ><i class="fa-solid fa-user header-login-mobile__login-icon"></i
        ></a>
      </div>
    </div>
  </header>
  <div class="sidebar-overlay"></div>
  <nav class="sidebar">
    <div class="sidebar-top">
      <img
        class="sidebar-top__logo"
        src="../../public/dist/img/1.header/logo.svg"
        alt="Miru"
      />
      <div class="sidebar-top__login">
        <div class="sidebar-top__login-mask"></div>
        <div class="sidebar-top__login-user">
          <a class="sidebar-top__login__link" href="/#"
            ><i class="fa-solid fa-user sidebar-top__login-icon"></i
          ></a>
        </div>
        <button class="sidebar-top__login-btn-signin" type="button">
          {{ buttons.sign }}
        </button>
        <button class="sidebar-top__login-btn-register" type="button">
          {{ buttons.register }}
        </button>
      </div>
    </div>
    <router-link
      v-for="item in navmenu"
      class="sidebar__item"
      :to="item.url"
      :key="item.navmenu"
      >{{ item.name }}</router-link
    >
    <div v-if="this.$route.name == 'Movies'" class="sidebar__filter"></div>
    <div v-else-if="this.$route.name == 'Series'" class="sidebar__filter">
      <p>Series</p>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      searchInput: "",
      searchRoute: "",
      query: "",
      navmenu: [
        { id: 1, name: "Home", url: "/Home" },
        { id: 2, name: "Movies", url: "/Movies" },
        { id: 3, name: "Series", url: "/Series" },
      ],
      buttons: {
        sign: "Sign in",
        register: "Register",
        watchlist: "Wathclist",
      },
    };
  },
  methods: {
    searchValue() {
      this.query = this.searchInput;
      this.$router.push({ path: `/Search/${this.query}` });
    },
    navbar() {
      {
        const navMenu = document.querySelector(".sidebar");
        const navOverlay = document.querySelector(".sidebar-overlay");
        const navButton = document.querySelector(".header-burger");

        navButton.addEventListener("click", () => {
          navMenu.classList.add("sidebar-open");
          navOverlay.classList.add("sidebar-overlay-open");
        });

        navOverlay.addEventListener("click", () => {
          navMenu.classList.remove("sidebar-open");
          navOverlay.classList.remove("sidebar-overlay-open");
        });
      }
    },
    toTop() {
      window.scrollTo(0,0)
    }
  },
};
</script>

<style></style>
