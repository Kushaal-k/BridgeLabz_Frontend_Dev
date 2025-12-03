$(document).ready(function () {

  function showMessage(text) {
    $("#message").text(text);
  }

  $("#subscribeBtn").click(function () {
    showMessage("Notifications Enabled!");
  });

  $("#unsubscribeBtn").click(function () {
    showMessage("Notifications Disabled!");
  });

  $("#topics").on("click", ".topic", function () {
    $(this).toggleClass("active");
    showMessage("Topic updated: " + $(this).text());
  });

  $("#addTopicBtn").click(function () {
    const newTopic = $("#newTopicInput").val().trim();
    if (newTopic) {
      $("#topics").append(`<div class="topic">${newTopic}</div>`);
      showMessage("New topic added: " + newTopic);
    }
  });

  $("#removeClickBtn").click(function () {
    $("#topics").off("click", ".topic");
    showMessage("Topic click events disabled!");
  });

});
