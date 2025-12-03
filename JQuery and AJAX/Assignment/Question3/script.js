$(document).ready(function () {

  $(".question").click(function () {
    $(this).next(".answer").slideToggle(200);
  });

  $(".question").hover(
    function () { $(this).addClass("hovered"); },
    function () { $(this).removeClass("hovered"); }
  );

  $(".question").dblclick(function () {
    $(".answer").slideUp(200);
  });

  $(".answer-input").focus(function () {
    $(this).closest(".faq-item").addClass("highlight");
  });

  $(".answer-input").blur(function () {
    $(this).closest(".faq-item").removeClass("highlight");
  });

});
