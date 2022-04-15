function add(a,b){
    return a+b;    //Return statement
}
let value=add(1,2);  //Calling Function with parameters
console.log(value);


function place_order(order){ //Nested Function
    cook(order);
function cook(order){
 console.log(`${order} is ready`)
}
}
place_order('burger');


let sum = function(a,b){ //Function Literals
    return a+b;
}
console.log(sum(1,6));