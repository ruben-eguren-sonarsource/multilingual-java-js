// Basic JavaScript Example

// 1. Variables and Data Types
const name = "John";
const age = 30;
const isActive = true;
const skills = ["JavaScript", "Java", "Python"];

// 2. Function
function greet(person) {
  return `Hello, ${person}!`;
}

// 3. Arrow Function
const add = (a, b) => a + b;

// 4. Object
const user = {
  name: "Jane",
  age: 25,
  email: "jane@example.com"
};

// 5. Array Methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const filtered = numbers.filter(num => num > 2);

// 6. Class
class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  getResult() {
    return this.value;
  }
}

// 7. Usage Examples
console.log(greet(name));
console.log("5 + 3 =", add(5, 3));
console.log("Doubled numbers:", doubled);
console.log("Filtered numbers:", filtered);

const calc = new Calculator(10);
console.log("Result:", calc.add(5).subtract(2).getResult());
