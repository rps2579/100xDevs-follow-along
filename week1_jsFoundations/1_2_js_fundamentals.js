/**
 * SIMPLE PRIMITIVES
 */
let a = 1;
a = 2;
console.log(a); 

const b = 1;
// b = 2; // error, bcoz const cant be changed
console.log(b); 

// DATA TYPES
// common data types in JS are: strings numbers and boolean
// let name = 'Pranay'; // Using variable name as 'name' is deprecated
let firstName = 'Pranay';
let age = 27;
let isMarried = false;

console.log('My name is ' + firstName + ' and I am ' + age + ' years old.');

// Conditional Statements
// if else
// if (isMarried) { // Since JS is loosely typed, it is better to compare isMarried === true
if (isMarried === true) {
    console.log(firstName + ' is married.');
}
else {
    console.log(firstName + ' is not married.');
}

// loops
// for loop
for (let i=0; i<10; i++) {
    console.log(i);
}

/**
 * COMPLEX PRIMITIVES
 */
let name1 = 'Pranay';
let name2 = 'Prakash';
let name3 = 'Pragya';
const names = ['Pranay', 'Prakash', 'Pragya'];

// iterating over an array
for (let i=0; i<names.length; i++) {
    console.log(names[i]);
}
names.forEach((val, ind) => {
    console.log(val);
})

// array methods
// push - adds an element to the end of the array
names.push('Pranav');
console.log(names);

// pop - removes the last element from the array
names.pop();
console.log(names);

// unshift - adds an element to the beginning of the array
names.unshift('Pranav');
console.log(names);

// shift - removes the first element from the array
names.shift();
console.log(names);

// indexOf - returns the index of the element in the array
console.log(names.indexOf('Prakash'));

// includes - returns true if the element is present in the array
console.log(names.includes('Pranay'));

// OBJECTS
// objects are key-value pairs
let person = {
    name: 'Pranay',
    age: 27,
    isMarried: false
};

console.log(person);

// accessing object properties
console.log(person.name);
console.log(person['name']);

// updating object properties
person.name = 'Pranav';
person['age'] = 28;
console.log(person);

// adding new properties to the object
person.city = 'Bangalore';
person['country'] = 'India';
console.log(person);

// deleting properties from the object
delete person.city;
delete person['country'];
console.log(person);

// arrays of objects
let people = [
    {
        name: 'Pranay',
        age: 27,
        isMarried: false
    },
    {
        name: 'Pranav',
        age: 28,
        isMarried: false
    }
];

// iterating over an array of objects
people.forEach((person) => {
    console.log(person.name);
});
for (let i=0; i<people.length; i++) {
    console.log(people[i]['name']);
}

/**
 *  FUNCTIONS
 */ 
// a function is a block of code that can be reused
// function declaration
function greet() {
    console.log('Hello World!');
}
function greetWithName(name) {
    console.log('Hello ' + name + '!');
}
const greetWithSmiley = function(name) {
    console.log('Hello ' + name + ' :)');
}
let sumOfTwoNumbers = (a, b) => {
    return a + b;
}

// calling a function
greet();
greetWithName('Pranay');
greetWithSmiley('Pranav');

// Functions can take functions as arguments and return functions as well. This is called higher order functions.
function printSum(a, b, sumFn) {
    console.log('The sum of ' + a + ' and ' + b + ' is ' + sumFn(a, b));
}

// passing a function as an argument
printSum(2, 3, sumOfTwoNumbers);

// returning a function
function getSumFunction() {
    return sumOfTwoNumbers;
}