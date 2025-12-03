$(document).ready(function () {

  let banners = $(".banner");
  let current = 0;

  $("#hideBtn").click(function () {
    banners.hide();
  });

  $("#showBtn").click(function () {
    banners.show();
  });

  $("#slideBtn").click(function () {
    banners.slideToggle(400);
  });

  $("#fadeBtn").click(function () {
    banners.fadeToggle(400);
  });

  function rotateBanners() {
    banners.eq(current).fadeOut(500);
    current = (current + 1) % banners.length;
    banners.eq(current).fadeIn(500);
  }

  banners.hide().eq(0).show();

  setInterval(rotateBanners, 5000);
});
