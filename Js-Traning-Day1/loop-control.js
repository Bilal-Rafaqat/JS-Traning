for (let i = 0; i < 5; i++) { //break statement
  if (i === 2) break; 
    console.log("The number is " + i);
}

for (let i = 0; i < 5; i++) {  //continue statement
  if (i === 3) { console.log(`i is ${i} statement continues`)
      continue; 
    }
  console.log("The number is " + i);
}

const players=["Ahmed", "bilal", "Ali", "saad"] //Control flow with Lable 
  let data='';
  list: {
    data+= players[0]+' ';
    data+= players[1]+' ';
    data+= players[2]+' ';
    break list;
    data+= players[4]+' ';
  }
 console.log(data);