document.getElementById("studentForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let password = document.getElementById("password");

  let nameReg = /^[A-Za-z ]+$/;
  let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneReg = /^\d{10}$/;
  let passReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/;

  validate(name, nameReg, "Only alphabets allowed", "nameError");
  validate(email, emailReg, "Invalid email format", "emailError");
  validate(phone, phoneReg, "Phone must be 10 digits", "phoneError");
  validate(password, passReg, "Password must include uppercase, number & special char", "passError");
});

function validate(input, regex, msg, errId){
  let err = document.getElementById(errId);
  if(regex.test(input.value)){
    input.style.border = "2px solid green";
    err.innerText = "";
  }else{
    input.style.border = "2px solid red";
    err.innerText = msg;
  }
}