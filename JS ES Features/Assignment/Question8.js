// "use strict"

// function demo(a, a) {
// total = 10;
// delete total;
// }
// demo(5, 10);

// Reason 1: Duplicate parameters confuse the function scope

// ES6+ requires unique parameter names so the engine can properly map variables.

// Reason 2: Undeclared variables are dangerous

// total = 10 creates a global variable by accident.
// Strict mode forbids this to avoid bugs.

// Reason 3: Deleting a variable breaks the language design

// Variables are not meant to be removed at runtime.
// Only object properties can be deleted.

//Corrected ES6 Version
"use strict";

function demo(a, b) {
  let total = 10;

  console.log("a:", a);
  console.log("b:", b);
  console.log("total:", total);
}

demo(5, 10);
