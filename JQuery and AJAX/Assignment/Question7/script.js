$(document).ready(function () {

  function updateCount(num) {
    $("#count").text("Matched courses: " + num);
  }

  $("#searchBox").keyup(function () {
    const text = $(this).val().toLowerCase();

    let matchCount = 0;

    $(".course").each(function () {
      const courseText = $(this).text();
      const lower = courseText.toLowerCase();

      $(this).html(courseText);

      if (lower.includes(text)) {
        matchCount++;
        $(this).show();

        const start = lower.indexOf(text);
        const end = start + text.length;

        const highlighted =
          courseText.substring(0, start) +
          "<span class='highlight'>" +
          courseText.substring(start, end) +
          "</span>" +
          courseText.substring(end);

        if (text !== "") $(this).html(highlighted);

      } else {
        $(this).hide();
      }
    });

    updateCount(matchCount);
  });

  $("#clearBtn").click(function () {
    $("#searchBox").val("");
    $(".course").each(function () {
      $(this).show();
      $(this).html($(this).text());
    });
    updateCount($(".course").length);
  });

  updateCount($(".course").length);
});
