// Promises
function a1(){
    return new Promise((resolve) => {
        console.log("First")
        resolve()
    })
}

function b1(){
    return new Promise((resolve) => {
        console.log("Second")
        resolve()
    })
}

function c1(){
    return new Promise((resolve) => {
        console.log("Third")
        resolve()
    })
}

a1()
.then(b1)
.then(c1)
.catch((err) => console.log("Errrrrrrrrrrrrrrrorrrrrrrrrrrrrrrrrrrrrrrrrr!"))



async function run(){
    await a1()
    await b1()
    await c1()
}

