// AOS.init();
$("#tigger-mode").click(function () {
  $(".mobile-main-div").toggleClass("active");
  $(this).toggleClass("active");
});

$("#toggle-mode").click(function () {
  $(".header").toggleClass("light");
  $(".screen-1").toggleClass("light");
  $(".screen-2").toggleClass("light");
  $(".screen-3").toggleClass("light");
  $(".screen-4").toggleClass("light");
  $(".screen-5").toggleClass("light");
  $(".screen-6").toggleClass("light");
  $(".screen-7").toggleClass("light");
  $(".footer").toggleClass("light");
  $(".element-main-d").toggleClass("light");
});
$("#dark-mode").click(function () {
  $(".header").toggleClass("light");
  $(".screen-1").toggleClass("light");
  $(".screen-2").toggleClass("light");
  $(".screen-3").toggleClass("light");
  $(".screen-4").toggleClass("light");
  $(".screen-5").toggleClass("light");
  $(".screen-7").toggleClass("light");
  $(".footer").toggleClass("light");
  $(".element-main-d").toggleClass("light");
});

$(".tab-div div").click(function () {
  $(".tab-div div").removeClass("active");
  $(this).addClass("active");
});

let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
$(".spans").find("div").eq(swiper.snapIndex).toggleClass("active");
$(".eco-controller").find("div").eq(swiper.snapIndex).toggleClass("active");

swiper.on("slideChange", function (e) {
  $("#snapIndex").text(e.activeIndex + 1 + "/4");

  $(".spans").find("div").removeClass("active");
  $(".spans").find("div").eq(e.activeIndex).toggleClass("active");
});

let ecoSwiper = new Swiper(".ecoSwiper", {
  spaceBetween: 16,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
  },
});

ecoSwiper.on("slideChange", function (e) {
  $(".eco-controller").find("div").removeClass("active");
  $(".eco-controller").find("div").eq(e.activeIndex).toggleClass("active");
});

let newSwiper = new Swiper(".newSwiper", {
  spaceBetween: 16,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
  },
});

newSwiper.on("slideChange", function (e) {
  $("#news-controller").attr("value", newSwiper.progress);
  if (e.isEnd) {
    console.log("?what?");
    $("#news-controller").attr("value", 1);
  }
});
