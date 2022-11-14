<template>
  <footer class="footer">
    <div class="footer-main conteiner">
      <div class="footer-main__content">
        <div class="footer-main__content-miru">
          <img
            class="footer-main__content-miru-logo"
            src="../../public/dist/img/1.header/logo.svg"
            alt="Miru"
          />
          <p class="footer-main__content-miru-text">
            Miru is video streaming lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <div class="footer-main__content-miru-social">
            <h3 class="footer-main__content-title">Follow Us</h3>
            <div class="footer-main__content-miru-social-links">
              <a class="footer-main__content-miru-social-link" href=""
                ><i class="fa-brands fa-facebook-f"></i
              ></a>
              <a class="footer-main__content-miru-social-link" href=""
                ><i class="fa-brands fa-youtube"></i
              ></a>
              <a class="footer-main__content-miru-social-link" href=""
                ><i class="fa-brands fa-twitter"></i
              ></a>
              <a class="footer-main__content-miru-social-link" href=""
                ><i class="fa-brands fa-linkedin-in"></i
              ></a>
              <a class="footer-main__content-miru-social-link" href=""
                ><i class="fa-brands fa-instagram"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="footer-main__content-qucklinks">
          <h3 class="footer-main__content-title">Quick Links</h3>
          <div class="footer-main__content-qucklinks-list">
            <router-link class="footer-main__content-qucklinks-list-item" to="/Home">
              Home
            </router-link>
            <router-link class="footer-main__content-qucklinks-list-item" to="/Movies">
              Movies
            </router-link>
            <router-link class="footer-main__content-qucklinks-list-item" to="/Series">
              Series
            </router-link>
            <a class="footer-main__content-qucklinks-list-item" href=""
              >Login</a
            >
            <a class="footer-main__content-qucklinks-list-item" href=""
              >Sign Up</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="footer-copyright">
      <div class="footer-copyright__main conteiner">
        <p class="footer-copyright-text">
          MIRU VIDEO STREAMING - © 2020 All Rights Reserved
        </p>
        <p class="footer-copyright-author">Made with ♥ by Peterdraw</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>
