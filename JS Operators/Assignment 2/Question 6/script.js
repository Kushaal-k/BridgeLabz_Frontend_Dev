// Q6. Event-Based Counter Simulation

let count = 0;

// Increment function
function increment() {
    count++;
    console.log("Count:", count);

    function showUpdate() {
        console.log("Nested Function Count:", count);
    }
    showUpdate();
}

// Decrement function
function decrement() {
    count--;
    console.log("Count:", count);

    function showUpdate() {
        console.log("Nested Function Count:", count);
    }
    showUpdate();
}

// Simulated clicks
increment();
increment();
decrement();
