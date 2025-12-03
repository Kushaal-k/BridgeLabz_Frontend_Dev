function fetchBugs(callback) {
    setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

function getBugs(callback){
    return new Promise((resolve, reject) => {
        const failed = Math.random() < 0.3;

        setTimeout(() => {
            if(failed) return reject("API Failure!")

            resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000)
    })
}

getBugs()
.then((bugs) => {
    console.log("Bugs Fetched Successfully!!");
    console.table(bugs);
})
.catch((err) => {
    console.log(err);
})