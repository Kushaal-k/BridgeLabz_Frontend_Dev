$(document).ready(function () {
  const usedEmails = ["test@example.com", "hello@gmail.com"];

  function markInvalid(selector) {
    $(selector).css("border", "2px solid red");
  }

  function markValid(selector) {
    $(selector).css("border", "2px solid green");
  }

  $("#registerBtn").click(function () {
    let valid = true;

    $("#success").text("");

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val();

    if (name === "") {
      markInvalid("#name");
      valid = false;
    } else markValid("#name");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailPattern.test(email);

    if (!emailValid || usedEmails.includes(email.toLowerCase())) {
      markInvalid("#email");
      valid = false;
    } else markValid("#email");

    if (password.length < 8) {
      markInvalid("#password");
      valid = false;
    } else markValid("#password");

    if (valid) {
      $("#success").text("Registration Successful!");
    }
  });
});
