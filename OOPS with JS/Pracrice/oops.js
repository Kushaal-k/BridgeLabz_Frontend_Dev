//Inheritance 

class Person{
    constructor(name, age){
        this.name = name
        this.age = age 
    }
    showInfo(){
        console.log(`Name : ${this.name} \nAge: ${this.age}`);
    }
}

class Student extends Person{
    constructor(name, age){
        super(name,age)
    }

    showInfo(){
        console.log("I'm a Child");
    }
}

const stud3 = new Student("Kushaal", 20)
stud3.showInfo()