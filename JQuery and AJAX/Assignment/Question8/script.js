$(document).ready(function () {

  $("#addPost").click(function () {
    $("#postList").append(`<div class="post">New Blog Post</div>`);
  });

  $("#prependPost").click(function () {
    $("#postList").prepend(`<div class="post">⭐ Featured Post</div>`);
  });

  $("#removeLast").click(function () {
    $("#postList .post").last().remove();
  });

  $("#addTag").click(function () {
    const tag = $("#tagInput").val().trim();
    if (!tag) return;

    $("#postList .post").each(function () {
      $(this).before(`<span class="tag">${tag}</span>`);
    });
  });

  $("#keyword").keyup(function () {
    const text = $(this).val().toLowerCase();

    $(".post").each(function () {
      const content = $(this).text().toLowerCase();

      $(this).removeClass("highlight");

      if (content.includes(text) && text !== "") {
        $(this).addClass("highlight");
      }
    });
  });

});
