document.getElementById("movieForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("mname").value;
  let email = document.getElementById("memail").value;
  let seats = document.getElementById("seats").value;

  let nameReg = /^[A-Za-z ]+$/;
  let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!nameReg.test(name) || !emailReg.test(email) || seats < 1 || seats > 10) {
    alert("Invalid input");
    return;
  }

  let booking = { name, email, seats };

  document.getElementById("ticket").innerHTML = `
    Name: ${booking.name}<br>
    Email: ${booking.email}<br>
    Seats: ${booking.seats}
  `;
});