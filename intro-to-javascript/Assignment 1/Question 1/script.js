// Q1. Personalized Login Greeting

let userName = "Kushaal"; // change as needed
let hour = new Date().getHours(); // current hour (0–23)

if (hour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (hour >= 12 && hour < 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
