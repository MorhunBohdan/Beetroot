<template>
  <header class="header">
    <div class="header-main conteiner">
      <div class="header-burger">
        <span class="header-burger__item"></span>
      </div>
      <img
        class="header-main__logo"
        src="../../public/dist/img/1.header/logo.svg"
        alt="Miru"
      />
      <div class="header-main__search">
        <i class="fa-solid fa-magnifying-glass header-main__search-icon"></i>
        <input
          :value="searchInput"
          @input="searchValue"
          class="header-main__search-textarea"
          placeholder="Search titles here..."
          maxlength="50"
        />
      </div>
      <nav class="header-main__navbar">
        <a
          v-for="item in navmenu"
          class="header-main__navbar-item"
          :href="item.url"
          :key="item.navmenu"
          >{{ item.name }}</a
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
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      searchInput: "",
      navmenu: [
        { id: 1, name: "Home", url: "Home" },
        { id: 2, name: "Movies", url: "Movies" },
        { id: 3, name: "Series", url: "Series" },
      ],
      buttons: {
        sign: "Sign in",
        register: "Register",
        watchlist: "Wathclist",
      },
    };
  },
  methods: {
    searchValue(e) {
      this.searchInput = e.target.value;
    },
  },
};
</script>

<style></style>
