// Utility to create a 1–2 second random delay
function randomDelay() {
  return 1000 + Math.random() * 1000;
}

// Creates a step function that returns a Promise with success/failure
function createStep(message) {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.25; // 25% failure chance

    setTimeout(() => {
      if (fail) return reject(message + " FAILED!");

      resolve(message + " done");
    }, randomDelay());
  });
}

// Step functions
function takeOrder()   { return createStep("Order taken"); }
function prepare()     { return createStep("Food prepared"); }
function pack()        { return createStep("Package ready"); }
function dispatch()    { return createStep("Out for delivery"); }
function deliver()     { return createStep("Delivery completed"); }

// ----------------------------------------------
// MAIN PIPELINE USING async/await
// ----------------------------------------------
async function runPipeline() {
  console.log("Start Pipeline");

  try {
    // await pauses the async function until the Promise resolves.
    // BUT it does NOT block the entire JavaScript thread —
    // it simply instructs JS to continue later once the Promise finishes.

    console.log("Step 1:", await takeOrder());   // async task in microtask queue
    console.log("Step 2:", await prepare());
    console.log("Step 3:", await pack());
    console.log("Step 4:", await dispatch());
    
    console.log(await deliver()); // final step
  } 
  catch (err) {
    console.log("Pipeline failed!");
    console.log("Reason:", err);
    return; // stop pipeline
  }

  console.log("Delivery completed!");
}

// Run it
runPipeline();
