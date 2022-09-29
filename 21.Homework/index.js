//Задание 1
const bodyElement = document.querySelector("body");
bodyElement.insertAdjacentHTML("afterbegin", '<ol class="music-list"></ol>');
const olElement = document.querySelector(".music-list");

let playList = [
  {
    author: "LED ZEPPELIN",

    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",

    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",

    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",

    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",

    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",

    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",

    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",

    song: "ENTER SANDMAN",
  },
];

playList.forEach(function (value) {
  let li = document.createElement("li");
  li.className = "music-list__item";
  olElement.appendChild(li);
  li.innerHTML =
    '<h2 class="music-list__author">' +
    value.author +
    "</h2>" +
    '<p class="music-list__song">' +
    value.song +
    "</p>";
});

//Задание 2

const button = document.createElement("a");

button.className = "button";
button.innerHTML = "Відкрити";
olElement.after(button);

const modalWindow = document.createElement("textarea");

modalWindow.className = "textarea";
modalWindow.setAttribute("placeholder", "Залишити свій коментарій");
modalWindow.style.display = "none";
button.after(modalWindow);

const buttonClose = document.createElement("a");

buttonClose.className = "button";
buttonClose.innerHTML = "Закрити";
buttonClose.style.display = "none";
modalWindow.after(buttonClose);

button.onclick = function () {
  modalWindow.style.display = "block";
  buttonClose.style.display = "flex";
  button.style.display = "none";
};
buttonClose.onclick = function () {
  modalWindow.style.display = "none";
  buttonClose.style.display = "none";
  button.style.display = "flex";
};

//Задание 3
const conteiner = document.createElement("div");
conteiner.className = "conteiner";
buttonClose.after(conteiner);

const mainTrafficLight = document.createElement("div");
mainTrafficLight.className = "traffic-light";
conteiner.prepend(mainTrafficLight);

const controlTrafficLight = document.createElement("div");
controlTrafficLight.className = "control-traffic-light";
conteiner.append(controlTrafficLight);
controlTrafficLight.innerHTML =
  '<p class="control-text">' + "Change Light" + "</p>";

const topTrafficLight = document.createElement("div");
topTrafficLight.className = "top-traffic-light";
mainTrafficLight.prepend(topTrafficLight);

const midTrafficLight = document.createElement("div");
midTrafficLight.className = "mid-traffic-light";
mainTrafficLight.append(midTrafficLight);

const bottomTrafficLight = document.createElement("div");
bottomTrafficLight.className = "bottom-traffic-light";
mainTrafficLight.append(bottomTrafficLight);

let item = 0;
controlTrafficLight.onclick = function () {
  item++;
  if (item == 1) {
    topTrafficLight.setAttribute("id", "red");
  } else if (item >1) {
    topTrafficLight.removeAttribute("id", "red");
  }
  if (item == 2) {
    midTrafficLight.setAttribute("id", "orange");
  } else if (item >2) {
    midTrafficLight.removeAttribute("id", "orange");
  }
  if (item == 3) {
    bottomTrafficLight.setAttribute("id", "green");
  } else if (item > 3) {
    bottomTrafficLight.removeAttribute("id", "green");
    item = 0;
  }
};
