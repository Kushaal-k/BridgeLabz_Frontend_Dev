class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    const total = this.marks.reduce((sum, m) => sum + m, 0);
    const avg = total / this.marks.length;

    if (avg >= 80) return "A";
    else if (avg >= 60) return "B";
    else if (avg >= 40) return "C";
    else return "F";
  }
}

const s1 = new Student("Rahul", [80, 90, 70]);
const s2 = new Student("Amit", [50, 60, 55]);
const s3 = new Student("Neha", [30, 25, 40]);

console.log(s1.name, s1.calculateAverage());
console.log(s2.name, s2.calculateAverage());
console.log(s3.name, s3.calculateAverage());
