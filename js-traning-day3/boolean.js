let bool = true;
let text = new Boolean(1);  //constructor
console.log(typeof(text));

Boolean.prototype.access=function (res) {  //prototype
    return res==true?"successfully accessed":"Access Denied";
}
console.log(text.access(true));

console.log(bool.toString());  //converting to string

console.log(text.valueOf());  //retrieving value

