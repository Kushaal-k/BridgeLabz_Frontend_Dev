class Employee {
  constructor(id, name, dept, salary){
    this.id = id;
    this.name = name;
    this.department = dept;
    this.salary = salary;
  }

  getAnnualSalary(){
    return this.salary * 12;
  }

  applyBonus(percent){
    this.salary += (this.salary * percent / 100);
  }
}

let employees = [
  new Employee(1, "A", "IT", 30000),
  new Employee(2, "B", "HR", 25000),
  new Employee(3, "C", "Sales", 28000),
  new Employee(4, "D", "Finance", 35000),
  new Employee(5, "E", "Admin", 22000)
];

employees.forEach(e => console.log(e.getAnnualSalary()));

let totalPayout = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log("Total Annual Payout:", totalPayout);
