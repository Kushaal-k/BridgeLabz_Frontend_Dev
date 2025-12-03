function design(cb) {
  setTimeout(() => {
    console.log("Designing...");
    cb();
  }, 1000);
}

function build(cb) {
  setTimeout(() => {
    console.log("Building...");
    cb();
  }, 1000);
}

function test(cb) {
  setTimeout(() => {
    console.log("Testing...");
    cb();
  }, 1000);
}

function deploy(cb) {
  setTimeout(() => {
    console.log("Deploying...");
    cb();
  }, 1000);
}

function celebrate(cb) {
  setTimeout(() => {
    console.log("Celebrating ");
    cb();
  }, 1000);
}

// Callback Hell Demo
design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {
          console.log("Pipeline completed!");
        });
      });
    });
  });
});


function wait(stage) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(stage);
      resolve();
    }, 1000);
  });
}

async function runPipeline() {
  await wait("Designing...");
  await wait("Building...");
  await wait("Testing...");
  await wait("Deploying...");
  await wait("Celebrating");

  console.log("Pipeline completed!");
}

runPipeline();


// Callback hell:
// - Deep nesting
// - Hard to trace errors
// - Hard to maintain

// Async/await:
// - Looks like normal top-to-bottom code
// - No nesting → flat and clean
// - Easier to debug and reason about
// - Uses Promises internally (modern, standard practice)
