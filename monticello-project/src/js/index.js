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
    const gotoBlockValue =
      gotoSection.getBoundingClientRect().top +
      scrollY -
      document.querySelector(".header-nav").offsetHeight;

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}
//Arrow slider
let item = 1;
const headerSlider = document.querySelector(".header");
const arrowSlider = document.querySelector(".header__arrow");
if (item == 1) {
  headerSlider.classList.add("header-active-one");
  document
    .querySelector(".header-dots__item-1")
    .classList.add("header-dots__active");
}
arrowSlider.onclick = function () {
  item++;
  if (item > 1) {
    headerSlider.classList.remove("header-active-one");
    document
      .querySelector(".header-dots__item-1")
      .classList.remove("header-dots__active");
  }
  if (item == 2) {
    headerSlider.classList.add("header-active-two");
    document
      .querySelector(".header-dots__item-2")
      .classList.add("header-dots__active");
  } else if (item > 2) {
    headerSlider.classList.remove("header-active-two");
    document
      .querySelector(".header-dots__item-2")
      .classList.remove("header-dots__active");
  }
  if (item == 3) {
    headerSlider.classList.add("header-active-three");
    document
      .querySelector(".header-dots__item-3")
      .classList.add("header-dots__active");
  } else if (item > 3) {
    headerSlider.classList.remove("header-active-three");
    document
      .querySelector(".header-dots__item-3")
      .classList.remove("header-dots__active");
  }
  if (item == 4) {
    headerSlider.classList.add("header-active-four");
    document
      .querySelector(".header-dots__item-4")
      .classList.add("header-dots__active");
  } else if (item > 4) {
    headerSlider.classList.remove("header-active-four");
    document
      .querySelector(".header-dots__item-4")
      .classList.remove("header-dots__active");
  }
  if (item == 5) {
    headerSlider.classList.add("header-active-five");
    document
      .querySelector(".header-dots__item-5")
      .classList.add("header-dots__active");
  } else if (item > 5) {
    headerSlider.classList.remove("header-active-five");
    document
      .querySelector(".header-dots__item-5")
      .classList.remove("header-dots__active");
    item = 1;
  }
  console.log(item);
};
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
const contactSuccess = document.querySelector (".contact__success")
const userNameValidation = userName.parentElement;
const userEmailValidation = userEmail.parentElement;
console.log(userNameValidation)
let formIsValid = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputFunction ();
  if (formIsValid) {
    form.remove();
    contactSuccess.classList.remove('hidden')
  } else {
    checkInputs();
  }
  
});
console.log(formIsValid)
console.log(userName)
function checkInputs() {
  let userNameValue = userName.value.trim();
  let userEmailValue = userEmail.value.trim();
  const contactControl = document.querySelector ('.contact__control');
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
function validateInputFunction () {
  if (userNameValidation.classList.contains("success") && userEmailValidation.classList.contains("success")) {
  formIsValid = true;
  } else {
  formIsValid = false; 
  }
}