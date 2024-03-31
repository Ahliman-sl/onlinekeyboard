"use strict";
const button = document.querySelectorAll(".key");
const space = document.querySelector(".space");
const deleteBtn = document.querySelector(".del");
const screen = document.querySelector(".screen");
const capsLock = document.querySelector(".capslock");
const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
const keyboard = document.querySelector(".keyboard");

let pressedKeys = [];
let capslockClicked = false;

const capsLockfunc = function () {
  capslockClicked = !capslockClicked; // toggle
};
capsLock.addEventListener("click", capsLockfunc);

button.forEach(function (key) {
  key.addEventListener("click", function () {
    // Reach the .key element textcontent
    const keyText = capslockClicked
      ? key.textContent.toUpperCase()
      : key.textContent.toLowerCase();
    // Show them on screen
    pressedKeys.push(keyText);
    screen.value = pressedKeys.join("");
  });
});

// Adding space
space.addEventListener("click", function () {
  pressedKeys.push(" ");
});

// Delete button
deleteBtn.addEventListener("click", function () {
  pressedKeys.pop();
  screen.value = pressedKeys.join("");
});
//Caps Lock

// HANDLE KEYBOARD

// Resize
window.addEventListener("resize", function () {
  if (window.innerWidth <= 853) {
    document.querySelector(".capslock").innerText = "CL";
  } else {
    document.querySelector(".capslock").innerText = "Caps Lock";
  }
});

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  keyboard.classList.toggle("active");
});
