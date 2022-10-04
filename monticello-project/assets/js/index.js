//Sticky header
window.onscroll = function() {myFunction()};

let header = document.querySelector(".header-nav");
let headerHeading = document.querySelector(".header-heading")
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    headerHeading.classList.add("space")
  } else {
    header.classList.remove("sticky");
    headerHeading.classList.remove("space")
  }
}
//Header menu slider
const navLinks = document.querySelectorAll ('.header-nav__menu-item[data-goto]');
  navLinks.forEach (navLinks => {
    navLinks.addEventListener('click', clickOnMenu);
  });
  function clickOnMenu(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoSection = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoSection.getBoundingClientRect().top + scrollY - document.querySelector('.header-nav').offsetHeight;

      window.scrollTo ({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
//Header burger menu
let burger = document.getElementsByClassName('header-burger')[0];
let headerWrapper = document.getElementsByClassName('header-nav__wrapper')[0];
burger.addEventListener("click", function(e) {
    burger.classList.toggle('header-burger__active')
    headerWrapper.classList.toggle('header-nav__wrapper-active')
}, false);