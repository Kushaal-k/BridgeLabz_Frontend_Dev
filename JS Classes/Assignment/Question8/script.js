let user = { name: "John", email: "john@mail.com", age: 21 };

let nameInput = document.getElementById("uname");
let emailInput = document.getElementById("uemail");
let ageInput = document.getElementById("uage");

nameInput.value = user.name;
emailInput.value = user.email;
ageInput.value = user.age;

document.getElementById("userForm").addEventListener("submit", function(e){
  e.preventDefault();

  user.name = nameInput.value;
  user.email = emailInput.value;
  user.age = Number(ageInput.value);

  document.getElementById("output").innerText = JSON.stringify(user, null, 2);
});