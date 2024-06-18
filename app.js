console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  addHobby(hobby) {
    this.hobbies.push(hobby);
  }
  removeHobby(hobby) {
    const index = this.hobbies.indexOf(hobby);
    if (index > -1) {
      this.hobbies.splice(index, 1);
    }
  }
  greeting() {
    console.log("Hello fellow person!");
  }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
        super (name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }
    greeting () {
        console.log("Hello fellow coder")
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const person1 = new Person("John", 2, "New York", ["reading", "painting", "pottery", "baking"]);
console.log(person1.name);
console.log(person1.pets);
console.log(person1.residence);
console.log(person1.hobbies);
person1.addHobby("biking");
console.log(person1.hobbies);
person1.removeHobby("painting");
console.log(person1.hobbies);

const coder1 = new Coder("Madison", 2, "Alabama", ["skiing", "reading", "cooking", "yoga", "knitting"]);
console.log(coder1.name);
console.log(coder1.pets);
console.log(coder1.residence);
console.log(coder1.hobbies);
coder1.addHobby("biking");
console.log(coder1.hobbies);
coder1.removeHobby("cooking");
console.log(coder1.hobbies);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
    constructor () {
        this.result = 0;
    }
    subtract(a, b = this.result) {
        this.result = b - a;
        return this.result;
    }

    add(a, b = this.result) {
        this.result = a + b;
        return this.result;
    }

    multiply(a, b = this.result) {
        this.result = a * b;
        return this.result;
    }

    divide(a, b = this.result) {
        if (a === 0) {
            console.log('error, division by 0');
        return
        }
        this.result = b / a;
        return this.result;
    }
    displayResult() {
        console.log(this.result);
    }
}

const calc = new Calculator();
calc.add(5, 3);
calc.displayResult();

calc.subtract(5, 3);
calc.displayResult();

calc.multiply(5, 3);
calc.displayResult();

calc.divide(3, 6);
calc.displayResult();

