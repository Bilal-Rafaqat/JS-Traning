//creating object of Number class
let value = new Number(35);  //constructor
console.log(typeof(value));  //type is Object

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

Number.prototype.toAdd=function (a,b) {  //prototype
    return a+b;
}
console.log(value.toAdd(1,2));

let a =1234564;  //Converting number to exponential number
console.log(a.toExponential(2));

let b=12.3456;  //Fixing Number
console.log(b.toFixed(2));

console.log(a.toLocaleString("en-US", {style:"currency", currency:"USD"}));  //String with optional properties
console.log(b.toLocaleString());

let time = new Date();  //converting to string
time = time.toString();
console.log(typeof(time));

console.log(b.toPrecision(2));  //Fix Length

console.log(value.valueOf());  //Display Primitive value