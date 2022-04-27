let EventEmitter = require('events').EventEmitter
let myEmitter = new EventEmitter();

//Event Listners for user
myEmitter.on("new user",(user)=>{
    console.log(`${user.name} welcome to Vidly Api`);
})
  
myEmitter.on("total users",(data)=>{
    let count=0;
    for (const key in data) {
      count++;
    }
    console.log(`Total Number of User are ${count}`)
})
myEmitter.on("find user",(user)=>{
    console.log(`User ${user.name} found with ID: ${user.id}`);
})


//Event listners for Channel
myEmitter.on("new channel",(channel)=>{
    console.log(`${channel.name} Created in Vidly Api`);
})
  
myEmitter.on("all channels",(data)=>{
    let count=0;
    for (const key in data) {
      count++;
    }
    console.log(`Total Number of channels are ${count}`)
})
myEmitter.on("find channel",(channel)=>{
    console.log(`Channel ${channel.name} found with ID: ${channel.id}`);
})  
exports.myEmitter = myEmitter