function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log("Hello from Person");
};

function Faculty(department) {
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.teach = function () {
  console.log("Teaching in " + this.department);
};

function Professor(subject) {
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.research = function () {
  console.log("Researching " + this.subject);
};

// Object
const prof = new Professor("AI");

prof.sayHello();   // from Person
prof.teach();      // from Faculty
prof.research();   // from Professor
