$(document).ready(function () {

  $(".manager").click(function () {
    $(".employee").removeClass("highlight");
    $(this).nextUntil(".manager, .dept-title").addClass("highlight");
  });

  $(".employee").hover(
    function () {
      $(this).find(".contact").show();
    },
    function () {
      $(this).find(".contact").hide();
    }
  );

  $(".dept-title").click(function () {
    $(this).parent().children().addClass("highlight");
  });

  $("#randomBtn").click(function () {
    const employees = $(".employee");
    const randomIndex = Math.floor(Math.random() * employees.length);
    const randomEmp = employees.eq(randomIndex);

    $(".employee").removeClass("highlight");
    randomEmp.siblings(".employee").addClass("highlight");
  });

  $(".manager").dblclick(function () {
    const dept = $(this).parent();
    dept.find(".employee").slideToggle();
  });

});
