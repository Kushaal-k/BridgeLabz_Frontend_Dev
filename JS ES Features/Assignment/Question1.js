const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

console.log("=== Detailed Conversion Report ===\n");

for (let value of apiData) {
    
    const num = Number(value);     
    const bool = Boolean(value);    
    const str = String(value);      

    if (!isNaN(num) && value !== " " && value !== "100px") {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(value);
    }

    console.log(`Original: ${value}`);
    console.log(`Number:  ${num}`);
    console.log(`Boolean: ${bool}`);
    console.log(`String:  "${str}"\n`);
}

console.log("=== Summary ===");
console.log("Valid numeric values:", validNumbers);
console.log("Invalid numeric values:", invalidNumbers);
