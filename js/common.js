// 슬릭 슬라이드
$(".slides").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
});

// 스크롤리빌 애니메이션
ScrollReveal().reveal(".left_ani", {
  origin: "left",
  duration: 1000,
  distance: "250px",
  delay: 300,
});

ScrollReveal().reveal(".right_ani", {
  origin: "right",
  duration: 1000,
  distance: "250px",
  delay: 500,
});

ScrollReveal().reveal(".top_ani", {
  origin: "top",
  duration: 1000,
  distance: "250px",
  delay: 300,
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

// top버튼
$(".go_top").click(function () {
  $("html").animate({ scrollTop: 0 }, 600);
});

// 메뉴 버튼
$(".bars").on("click", function () {
  $(".nav").toggleClass("active");
  $(this).toggleClass("fixed");
  $(this).find("i").toggleClass("xi-close");
});
