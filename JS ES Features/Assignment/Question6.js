"use strict";

let userLimit = prompt("Enter number of rows:", "5");
let limit = Number(userLimit) || 5;

for (let i = 1; i <= limit; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}


"use strict";

// var limit = 5;

// for (var i = 1; i <= limit; i++) {
//   var row = "";

//   debugger;  // pause in VS Code

//   for (var j = 1; j <= i; j++) {
//     row += "* ";
//   }

//   console.log(row);
// }
