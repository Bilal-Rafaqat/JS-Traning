const cron = require('node-cron');
const EventEmitter = require('events');
const event = new EventEmitter();
let sec = 5; 
let time = cron.schedule('* * * * * *', () =>  {
    console.log(`${sec--} sec left`);
    if(sec==-1)
    {
        event.emit("stop time");
        console.log(`Timeout`);  
    }

}, {
  scheduled: false
});
event.on("stop time",()=>{
   time.stop();
})
exports.time=time