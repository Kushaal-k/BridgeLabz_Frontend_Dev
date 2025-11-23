document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  let user = document.getElementById("username");
  let pass = document.getElementById("password");

  let userReg = /^.{5,}$/;
  let passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if(!userReg.test(user.value)){
    document.getElementById("uErr").innerText = "Min 5 characters";
    return;
  }

  if(!passReg.test(pass.value)){
    document.getElementById("pErr").innerText = "Password must be strong";
    return;
  }

  alert("Login Successful");
});