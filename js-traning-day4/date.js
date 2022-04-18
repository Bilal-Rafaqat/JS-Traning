const date = new Date();
Date.prototype.myMonth = function(){  //prototype
    if (this.getMonth()==0) {return "January"};
if (this.getMonth()==1) {return "February"};
if (this.getMonth()==2) {return "March"};
if (this.getMonth()==3) {return "April"};
if (this.getMonth()==4) {return "May"};
if (this.getMonth()==5) {return "June"};
if (this.getMonth()==6) {return "July"};
if (this.getMonth()==7) {return "August"};
if (this.getMonth()==8) {return "September"};
if (this.getMonth()==9) {return "October"};
if (this.getMonth()==10) {return "November"};
if (this.getMonth()==11) {return "December"};
}
console.log(date.myMonth());

console.log(date.getDate());  
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.getTimezoneOffset());
console.log(date.getUTCDate());
console.log(date.getUTCDay());
console.log(date.getUTCFullYear());
console.log(date.getUTCHours());
console.log(date.getUTCMilliseconds());
console.log(date.getUTCMinutes());
console.log(date.getUTCMonth());
console.log(date.getUTCSeconds());
console.log(date.getYear());

date.setDate(11)
console.log(date);
date.setFullYear(2020)
console.log(date);
date.setHours(15)
console.log(date);
date.setMilliseconds(190)
console.log(date);
date.setMinutes(11)
console.log(date);
date.setSeconds(11)
console.log(date);
date.setMonth(2)
console.log(date);
date.setTime(13000000000000);
console.log(date);
date.setUTCDate(2)
console.log(date);
date.setUTCFullYear(2023)
console.log(date);
date.setUTCHours(15)
console.log(date);
date.setUTCMilliseconds(2)
console.log(date);
date.setUTCMinutes(2)
console.log(date);
date.setUTCMonth(2)
console.log(date);
date.setUTCSeconds(2)
console.log(date);
date.setYear(2222)
console.log(date);

console.log(date.toDateString());
console.log(date.toGMTString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(date.toString());
console.log(date.toTimeString());
console.log(date.toUTCString());
console.log(date.valueOf());
console.log(Date.UTC(2021,04,20));
console.log(Date.parse("2021-07-07"));
