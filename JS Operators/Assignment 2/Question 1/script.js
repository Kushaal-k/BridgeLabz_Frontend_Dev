// Q1. Scope Conflict Resolver

let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable

    
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Total Salary: ${salary}`);
}


calculateSalary(true); 
calculateSalary(false);  

console.log("Global Bonus Still:", bonus); // Global unaffected
