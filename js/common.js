// 슬라이드
$(".slides").slick({
  autoplay: true,
  arrows: false,
  fade: true,
});

// 햄버거메뉴
var bars = $(".bars");
var nav = $(".nav");

bars.on("click", function () {
  nav.toggleClass("active");
  $(this).find("i").toggleClass("xi-close");
});

// 스크롤 애니메이션
ScrollReveal().reveal(".left_ani", {
  origin: "left",
  duration: 1000,
  distance: "250px",
  delay: 10,
});

ScrollReveal().reveal(".right_ani", {
  origin: "right",
  duration: 1000,
  distance: "250px",
  delay: 300,
});

ScrollReveal().reveal(".top_ani", {
  origin: "top",
  duration: 1000,
  distance: "250px",
  delay: 0,
});

ScrollReveal().reveal(".bottom_ani", {
  origin: "bottom",
  duration: 1000,
  distance: "250px",
  delay: 300,
});

// 패러렉스
$(".banner.item_01").parallax({ imageSrc: "images/slide_02.jpg" });
$(".banner.item_02").parallax({ imageSrc: "images/slide_03.jpg" });

// 탑으로..
$(".go_top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
});
