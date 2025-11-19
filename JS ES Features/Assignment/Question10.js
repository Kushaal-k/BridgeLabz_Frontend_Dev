function outer() {
    console.log(count);
    var count = 5;
    function inner() {
        console.log(count);
        var count = 10;
    }
    inner();
}
outer();



// Outer function context:
// count → undefined

// Then it becomes:
// count → 5

// Inner function context:
// count → undefined

// Then becomes:
// count → 10

// They DO NOT overlap.
// Each function has its own “box” of variables.