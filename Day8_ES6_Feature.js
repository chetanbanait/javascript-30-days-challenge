
let person = {
    name: "chetan",
    age: 30
}
console.log(`Hello ${person.name} you are ${person.age} years old`);


const multiline = `Hello
you are
22 years old`;
console.log(multiline);

let arr = ['chetan', 'vedant', 'abhijit', 'abhishek']
let [a, b, c, d] = arr;
console.log(a, b, c, d);

let obj = {
    name: 'chetan',
    author: 'chetan banait'

}
let { name, author } = obj;
console.log(name, author);

let n = [1,2,3,4,5,6,7]
let m = ['samiksha', 'chetan', 'banait']
let num = [...n, ...m]
console.log(num);

function sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
        }
        return sum;
    }
    console.log(sum(1,2,3,4,5,6,7,8))

function product(food, drinks = 1){
    return `food: ${food} and Drinks: ${drinks}`;
}
console.log(product(2, 3))
console.log(product(5))

let persons = {
    name: 'chetan',
    age: 22,
    greet: function() {
        console.log(`Hello ${this.name} you are ${this.age} years old`
            )
        }
    }
persons.greet();


let person1 = {
    name: 'chetan',
    age: 22,
    greet: function() {
        console.log(`Hello ${this.name}, you are ${this.age} years old`);
    }
};

let key = 'name';
let value = 'samiksha';
person1[key] = value;

console.log(person1);

person1.greet();