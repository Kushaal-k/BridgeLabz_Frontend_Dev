function setGreeting() {
  const hour = new Date().getHours();
  let text = "";

  if (hour < 12) text = "Good Morning!";
  else if (hour < 18) text = "Good Afternoon!";
  else text = "Good Evening!";

  $("#greeting").text(text);
}

$(document).ready(function () {
  setGreeting();

  $("#greeting").click(function () {
    alert("You clicked the greeting!");
  });

  $("#changeBtn").click(function () {
    $("#greeting").text("Believe in yourself — you can do great things!");
  });

  $("#toggleBtn").click(function () {
    $("#welcomeMsg").toggle();
  });
});
