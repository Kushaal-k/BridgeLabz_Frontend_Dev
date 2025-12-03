const FAIL = 0.2;

function boilWater(){
    console.log("Boiling Water...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < FAIL) return reject("Boiling Failed!!");
            console.log("Water Boiled!!");
            resolve("hot water");
        }, 2000);
    })
}

function brewCoffee(){
    console.log("Brewing Coffee...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < FAIL) return reject("Brewing Failed!!");
            console.log("Coffee Brewed!!");
            resolve("hot coffee");
        }, 2000);
    })
}

function pourCoffee(){
    console.log("Pouring into cup...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < FAIL) return reject("Pouring Failed!!");
            console.log("Coffee Poured!!");
            resolve();
        }, 2000);
    })
}


boilWater()
.then(brewCoffee)
.then(pourCoffee)
.then((final) => console.log("Coffee ready for the team!"))
.catch((err) => console.log("Error", err))