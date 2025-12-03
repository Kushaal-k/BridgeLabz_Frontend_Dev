
console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// JavaScript has two main task queues:

// 1. Microtask Queue

// Contains:

// Promise .then() callbacks

// async/await reactions

// queueMicrotask()

// 2. Macrotask Queue

// Contains:

// setTimeout

// setInterval

// DOM events

// I/O callbacks