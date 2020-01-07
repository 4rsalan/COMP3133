//Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals and for..of

const greeter = (myArray, counter) => {
    let greetText = `Hello`;
    myArray.forEach(item => console.log(`${greetText} ${item}`))
};

greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"]);
//Using destructuring assignment syntax and the spread operator, write a function will capitalize the first letter of a string.

const capitalize = str =>{
    let letters = [...str];
    letters[0] = letters[0].toUpperCase();
    return letters.join("");
};

console.log(capitalize("foobar"));

//•	Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case the first character of each Color in the following array..
const CapitalizedColors = arr =>{
    return arr.map(word =>{
        return word[0].toUpperCase() + word.substr(1);
    });
};

console.log(CapitalizedColors(['red', 'green', 'blue']));

//•	Using array.proto.filter create a function that will filter out all the values of the array that are less than twenty.
const FilterLessThan20 = arr =>{
    return arr.filter(x => x < 20);
};

console.log(FilterLessThan20([1,60,34,30,20,5]));

//•	Using array.proto.reduce create calculate the sum and product of a given array.

const calculateSum = arr =>{
    const sum = (acc, current) => acc + current;
    return arr.reduce(sum);
};

console.log(calculateSum([1,2,3,4]));

const calculateProduct = arr =>{
    const prod = (acc, current) => acc * current;
    return arr.reduce(prod);
};

console.log(calculateProduct([1,2,3,4]));

/*•	Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives from Car Class.
The parameters for the Car class is the model and year. The parameters for the subclass is the model, year and balance.
•	Use the super key word in the Sedan subclass to set the model and name in base Car constructor.
 */

class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    details(){
        return `${this.model} ${this.year}`;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }

    info(){
        return `${this.model} has a balance of $${this.balance}`;
    }
}

const car = new Car("Pontiac Firebird", 1976);
console.log(car.details());

const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());
