"use strict";

const isTouchDevice = "ontouchstart" in document.documentElement;

disableScroll();
if (!isTouchDevice && !isSafari && !isIOS) smoothScroll();

window.onresize = () => {
  resizeBodyHeight();
};

window.onload = () => {
  enableScroll();
  resizeBodyHeight();
};

// Functions

function disableScroll() {
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "";
}

function smoothScroll() {
  document.querySelector(".viewport").classList.add("SmoothScroll");

  new SmoothScroll({
    target: document.querySelector(".smoothcontainer"),
    scrollEase: 0.08,
    maxOffset: 500,
  });
}

function resizeBodyHeight() {
  document.body.style.height =
    document.querySelector(".viewport").scrollHeight + "px";
}
