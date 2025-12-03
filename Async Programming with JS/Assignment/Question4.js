const FAIL = 0.3;

function ServerA(){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(Math.random() < 0.3) return reject("Server A Failed!");
            resolve("Response from Server A")
        }, 2000)
    })
    
}
function ServerB(){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(Math.random() < 0.3) return reject("Server B Failed!");
            resolve("Response from Server B")
        }, 2000)
    })
    
}

Promise.all([ServerA(), ServerB()])
.then(() => {
    console.log("Deployment Completed for all servers!");
})
.catch((err) => {
    console.log(err);
})

Promise.race([ServerA(), ServerB()])
.then((result) => {
    console.log("Fastest Response -> ", result);
})
.catch((err) => {
    console.log(err);
})