const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (let emp of employees) {

  try {
    if (!emp.name || !emp.salary || !emp.years) {
      throw new Error("Some data is missing.");
    }

    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (isNaN(salary) || isNaN(years)) {
      throw new Error("Salary or years is not a valid number.");
    }

    let bonus;
    if (years > 3) {
      bonus = salary * 0.1;
    } else {
      bonus = salary * 0.05;
    }

    console.log(`Employee: ${emp.name}`);
    console.log(`Salary: ${salary}`);
    console.log(`Years: ${years}`);
    console.log(`Bonus: ${bonus}`);

  } catch (error) {
    console.log("Error:", error.message);
  }

}
