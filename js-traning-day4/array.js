const games = ['Farcry','Valorant','CS-Go'];
let players = new Array('ali','ahmed','usman');
console.log(games);
console.log(players);
console.log(players.length);

Array.prototype.uCase = function (){  //prototype
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
      }
}
games.uCase();
console.log(games);

console.log(games.concat(players));  //connect two arrays

const numbers = [15,22,50,31,14,50]  
function checkNum(num){
    return num > 0;
}
console.log(numbers.every(checkNum));  //check for array //true if all true

function checkAdult(num){
    return num>=18;
}
console.log(numbers.filter(checkAdult));  //filter array which passes the test

let sum=0;
function add(num){
    sum += num;
}
numbers.forEach(add);
console.log(sum);  // for each 

console.log(numbers.indexOf(50));  //for checking first index in array
console.log(games.join('and'));  //add sepration with words
console.log(numbers.lastIndexOf(50));  //for checking last index in array

function multi(num){
    return num*2;
}
console.log(numbers.map(multi));  // return by mutliplying with each value

players.pop();
console.log(players);  //remove last element from array

players.push('bilal','yousaf');
console.log(players);  //add new value at the end of array

console.log(numbers.reduce(reduNum))  //call reduce function for each element
function reduNum(num){
    return sum - num;
}
console.log(numbers.reduceRight(rReduNum))  //call reduce function for each element
function rReduNum(num){
    return sum - num;
}
console.log(games.reverse());  //reverse order
console.log(games.shift());  //remove first element
games.unshift();  //add new in start
console.log(games.unshift());
console.log(numbers.slice(4,6));  // return selected elements

function checkAge(num){
    return num>=18;
}
console.log(numbers.some(checkAge));  //checks if any array elements pass a test

console.log(numbers.sort());  //sort in ascending order
console.log(numbers.splice(0,2));  //add and remove element in array(index, howmany, items)
console.log(numbers.splice(3,1,"14","15"));
console.log(numbers);
console.log(players.toString());  //convert to string
