//Sticky header
window.onscroll = function () {
  myFunction();
};

let header = document.querySelector(".header-nav");
let headerHeading = document.querySelector(".header-heading");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    headerHeading.classList.add("space");
  } else {
    header.classList.remove("sticky");
    headerHeading.classList.remove("space");
  }
}
//Header menu slider
const navLinks = document.querySelectorAll(".header-nav__menu-item[data-goto]");
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", clickOnMenu);
});
function clickOnMenu(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoSection = document.querySelector(menuLink.dataset.goto);
    console.log(gotoSection);
    const gotoBlockValue =
      gotoSection.getBoundingClientRect().top +
      scrollY -
      document.querySelector(".header-nav").offsetHeight;
    console.log(gotoBlockValue);
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}
//Arrow slider
let item = 0;
const headerSlider = document.querySelector(".header");
const arrowSlider = document.querySelector(".header__arrow");

arrowSlider.onclick = function () {
  item++;
  if (item == 1) {
    headerSlider.className = "header section_1 header-active-one";
  }
  if (item == 2) {
    headerSlider.className = "header section_1 header-active-two";
  }
  if (item == 3) {
    headerSlider.className = "header section_1 header-active-three";
  }
  if (item == 4) {
    headerSlider.className = "header section_1 header-active-four";
  }
  if (item == 5) {
    headerSlider.className = "header section_1 header-active-five";
  }
  if (item > 5) {
    headerSlider.className = "header section_1";
    item = 0;
  }
  console.log(item);
};
//Header swiper
const swipe1 = new Swiper(".swiper1", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
  },
  slidesPerView: 1,
  spaceBetween: 5,
});
//Header burger menu
let burger = document.getElementsByClassName("header-burger")[0];
let headerWrapper = document.getElementsByClassName("header-nav__wrapper")[0];
burger.addEventListener(
  "click",
  function (e) {
    burger.classList.toggle("header-burger__active");
    headerWrapper.classList.toggle("header-nav__wrapper-active");
  },
  false
);

//Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  // If we need pagination
  pagination: {
    el: ".news-dots",
  },
  autoplay: {
    delay: 4000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    960: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1325: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

//map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.66861, lng: -73.8999 },
    zoom: 13,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ],
  });
  const marker = new google.maps.Marker({
    position: { lat: 40.67873, lng: -73.89944 },
    map: map,
    animation: google.maps.Animation.BOUNCE,
    title: "Monticello",
    icon: {
      url: "https://i.postimg.cc/30jd33nS/Pin.png",
      scaledSize: new google.maps.Size(106, 106),
    },
  });
}

window.initMap = initMap;

//form validation
const form = document.querySelector(".contact__form");
const userName = document.querySelector(".contact__name");
const userEmail = document.querySelector(".contact__email");
const contactSuccess = document.querySelector(".contact__success");
const userNameValidation = userName.parentElement;
const userEmailValidation = userEmail.parentElement;
let formIsValid = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputFunction();
  console.log(userName);
  if (formIsValid && !userName.value == "" && !userEmail.value == "") {
    form.classList.add("hidden");
    contactSuccess.classList.remove("hidden");
    if (form.classList.contains("hidden")) {
      setTimeout(resetForm, 5000);
      function resetForm() {
        form.classList.remove("hidden");
        contactSuccess.classList.add("hidden");
        userName.value = "";
        userEmail.value = "";
        userNameValidation.className = "contact__control";
        userEmailValidation.className = "contact__control";
      }
    }
  } else {
    checkInputs();
  }
});
function checkInputs() {
  let userNameValue = userName.value.trim();
  let userEmailValue = userEmail.value.trim();
  const contactControl = document.querySelector(".contact__control");
  if (userNameValue === "") {
    setErrorFor(userName, "User name is empty");
  } else {
    setSuccess(userName);
  }
  if (userEmailValue === "") {
    setErrorFor(userEmail, "Email is empty");
  } else if (!isEmail(userEmailValue)) {
    setErrorFor(userEmail, "Email is not valid");
  } else {
    setSuccess(userEmail);
  }
}
function setErrorFor(input, message) {
  const contactControl = input.parentElement;
  const spanError = contactControl.querySelector(".contact__error");
  spanError.innerText = message;
  contactControl.className = "contact__control error";
}
function setSuccess(input) {
  const contactControl = input.parentElement;
  contactControl.className = "contact__control success";
}
function isEmail(userEmail) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    userEmail
  );
}
function validateInputFunction() {
  if (
    userNameValidation.classList.contains("success") &&
    userEmailValidation.classList.contains("success")
  ) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }
}
