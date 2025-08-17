//1.  String Methods
fullName = " Amal Elsayed ";
console.log(fullName.length);

newFullName = fullName.trim();
console.log(newFullName);
console.log(newFullName.length);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

firstName = newFullName.split(" ")[0];
console.log(firstName);

console.log(fullName.includes("amal"));



//2.  Array Methods
fruits = ['apple', 'banana', 'mango'];

fruits.push('orange');
console.log(fruits);

fruits.unshift('kiwi');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits.indexOf('mango'));

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

let Bfruits = fruits.filter(fruit => fruit[0] === "B" || fruit[0] === "b");
console.log(Bfruits);

fruits.forEach((fruit , index) => {
    console.log(`fruit ${index+1} is ${fruit}`);
});



//3. Math
let randomNumber = Math.floor(Math.random()*10) +1;
console.log(randomNumber);

console.log(Math.round(5.1));
console.log(Math.round(5.6));

console.log(Math.trunc(5.1));
console.log(Math.trunc(5.6));

console.log(Math.floor(5.1));
console.log(Math.floor(5.6));

console.log(Math.ceil(5.1));
console.log(Math.ceil(5.6));


let squareRoot = Math.sqrt(64);
console.log(squareRoot);

let maxNumber = Math.max(3,8,20,1);
console.log(maxNumber);

let minNumber = Math.min(3,8,20,1);
console.log(minNumber);



//4.  Ternary Operator  
age1 = 20;
age1 >= 18 ? console.log('Adult') : console.log('Minor');



//5. Object
let person = {
    name:"Aya",
    age:21,
    address : "cairo",
    displayInfo: function(){
        console.log (`Name : ${this.name}`);
        console.log (`Age : ${this.age}`);
        console.log (`Address : ${this.address}`)
    },
    contact :{
        phone : "01023486484",
        email : "aya@gmail.com",
        displayContactInfo: function(){
            console.log(`Phone : ${this.phone}`);
            console.log(`Email : ${this.email}`);
        }
    }
    };
person.displayInfo();
person.contact.displayContactInfo();

person.address = "Alexandria";
person.displayInfo();


//6. Destructuring
let {name, age, contact:{phone}} = person;
console.log(name);
console.log(age);
console.log(phone);

let [firstFruit, secondFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit); 


//7. Spread / Rest Operators
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [1, 2, 3, 4, 5, 6];
console.log(arr3);

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));       
console.log(sum());               



//8. template literal
name = "Amal";
age = 21;
console.log(`Hello ${name}, you are ${age} years old.`)