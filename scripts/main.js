const rightBtn = document.querySelector(".right-arrow-btn");
const leftBtn = document.querySelector(".left-arrow-btn");
const rightBtnIcon = document.querySelector(".right-arrow-icon");
const leftBtnIcon = document.querySelector(".left-arrow-icon");

const rightBlue = "../assets/svg/right-arrow-blue.svg";
const rightDefault = "../assets/svg/right-arrow-white.svg"; 
const leftBlue = "../assets/svg/left-arrow-blue.svg";
const leftDefault = "../assets/svg/left-arrow-white.svg"; 

// changes icon colour when button is hovered or not.
// only used for left and right arrows.
function hoverStateButton(btn, icon, hoverSrc, defaultSrc) {
  btn.addEventListener("mouseenter", () => {
    icon.src = hoverSrc;
  });
  btn.addEventListener("mouseleave", () => {
    icon.src = defaultSrc;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hoverStateButton(rightBtn, rightBtnIcon, rightBlue, rightDefault);
  hoverStateButton(leftBtn, leftBtnIcon, leftBlue, leftDefault);
});