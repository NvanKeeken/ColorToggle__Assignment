// All the variables
const dropdownMenu = document.querySelector(".menu__colors");
const hamburgerMenu = document.querySelector(".menu__button");
const navMenu = document.querySelector(".menu");

// colors
const homeColor = document.querySelector(".color__home");
const colorRed = document.querySelector(".color__red");
const colorOrange = document.querySelector(".color__orange");
const colorPurple = document.querySelector(".color__purple");
const backgroundColor = document.querySelector("body");
const colorGreen = document.querySelector(".color__green");

// color radiobuttons
const homeColorButton = document.querySelector(".color__homeButton");
const colorRedButton = document.querySelector(".color__redButton");
const colorOrangeButton = document.querySelector(".color__orangeButton");
const colorPurpleButton = document.querySelector(".color__purpleButton");
const colorGreenButton = document.querySelector(".color__greenButton");

//  Bonus: Backgroundcolor text styling
const text = document.querySelector("body h2");
text.innerHTML = "The backgroundcolor is grey";
text.style.display = "inline";
text.style.position = "fixed";
text.style.right = "50%";
text.style.transform = "translate(160px, 300px)";

// Bonus: hamburgermenu open en close on mousehover
const openMenu = function () {
  hamburgerMenu.addEventListener("mouseover", function () {
    dropdownMenu.classList.remove("menu__colorsClose");
    dropdownMenu.classList.add("menu__colorsOpen");
  });
};

const closeMenu = function () {
  navMenu.addEventListener("mouseleave", function () {
    dropdownMenu.classList.add("menu__colorsClose");
  });
};

// Colortoggle menu on click
let colorToggle = function () {
  homeColorButton.addEventListener("click", function () {
    backgroundColor.classList.remove(
      "red-background",
      "orange-background",
      "purple-background",
      "green-background"
    );
    backgroundColor.classList.toggle("grey-background");
    dropdownMenu.classList.remove("menu__colorsOpen");
    text.innerHTML = "The backgroundcolor is grey";
  });

  colorRedButton.addEventListener("click", function () {
    backgroundColor.classList.remove(
      "grey-background",
      "orange-background",
      "purple-background",
      "green-background"
    );
    backgroundColor.classList.add("red-background");
    dropdownMenu.classList.remove("menu__colorsOpen");
    text.innerHTML = "The backgroundcolor is red";
  });

  colorOrangeButton.addEventListener("click", function () {
    backgroundColor.classList.remove(
      "grey-background",
      "red-background",
      "purple-background",
      "green-background"
    );
    backgroundColor.classList.add("orange-background");
    dropdownMenu.classList.remove("menu__colorsOpen");
    text.innerHTML = "The backgroundcolor is orange";
  });

  colorPurpleButton.addEventListener("click", function () {
    backgroundColor.classList.remove(
      "grey-background",
      "orange-background",
      "red-background",
      "green-background"
    );
    backgroundColor.classList.toggle("purple-background");
    dropdownMenu.classList.remove("menu__colorsOpen");
    text.innerHTML = "The backgroundcolor is purple";
  });

  colorGreenButton.addEventListener("click", function () {
    backgroundColor.classList.remove(
      "grey-background",
      "orange-background",
      "purple-background",
      "red-background"
    );
    backgroundColor.classList.toggle("green-background");
    dropdownMenu.classList.remove("menu__colorsOpen");
    text.innerHTML = "The backgroundcolor is green";
  });
};

// Bonus: colortoggle menu with keyboard
window.addEventListener("keydown", function (e) {
  const red = document.querySelector(".color__red");
  const backgroundColor = document.querySelector("body");
  if (e.keyCode == 49) {
    backgroundColor.classList.remove(
      "purple-background",
      "orange-background",
      "red-background",
      "green-background"
    );
    backgroundColor.classList.toggle("grey-background");
    text.innerHTML = "The backgroundcolor is grey";
  } else if (e.keyCode == 50) {
    backgroundColor.classList.remove(
      "grey-background",
      "orange-background",
      "purple-background",
      "green-background"
    );
    backgroundColor.classList.toggle("red-background");
    text.innerHTML = "The backgroundcolor is red";
  } else if (e.keyCode == 51) {
    backgroundColor.classList.remove(
      "grey-background",
      "purple-background",
      "red-background",
      "green-background"
    );
    backgroundColor.classList.toggle("orange-background");
    text.innerHTML = "The backgroundcolor is orange";
  } else if (e.keyCode == 52) {
    backgroundColor.classList.remove(
      "grey-background",
      "orange-background",
      "red-background",
      "green-background"
    );
    backgroundColor.classList.toggle("purple-background");
    text.innerHTML = "The backgroundcolor is purple";
  } else if (e.keyCode == 53) {
    backgroundColor.classList.remove(
      "grey-background",
      "orange-background",
      "red-background",
      "purple-background"
    );
    backgroundColor.classList.toggle("green-background");
    text.innerHTML = "The backgroundcolor is green";
  }
});

//   calling the functions
closeMenu();
openMenu();
colorToggle();
