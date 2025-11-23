const userName = "Sam";
console.log(`Hello, welcome to the course, ${userName}`);

const name = "Sam";
const age = 21;
const student = { 
  name, 
  age, 
  greet() { 
    console.log(`Hello ${name}`); 
  } 
};
student.greet();

const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Sam", "Smith"));
