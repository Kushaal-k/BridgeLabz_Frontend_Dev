console.log("Start"); //Synchronous runs immediately 

setTimeout(() => {
    // This is a MACROTASK.
    // Macrotasks go into the "Task Queue".
    // They run ONLY after the entire microtask queue is empty.
    console.log("Performing Macrotask");
}, 0)

Promise.resolve().then(() => {
    // This is a MICROTASK.
    // Microtasks go into the "Microtask Queue".
    // JavaScript ALWAYS empties the microtask queue
    // BEFORE moving on to the macrotask queue.
    // That's why this runs before setTimeout.
    console.log("Performing Microtask");
})

console.log("End");