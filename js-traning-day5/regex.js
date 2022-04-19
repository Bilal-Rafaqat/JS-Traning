let data = "1-My name is Bilal, i'm a software engineer";
let match =data.match(/[is]/gi);
console.log(match)
match =data.match(/[^is]/gi);
console.log(match)
match =data.match(/[0-9]/gi);
console.log(match)
data = "re, green, red, green, gren, gr, blue, yellow";
match=data.match(/(red|green)/g);
console.log(match);

match=data.match(/n+/gi)
console.log(match);
match=data.match(/n*/gi)
console.log(match);
let text = "100, 1000 or 10000?";
match = text.match(/10?/g);
console.log(match);
match = text.match(/\d{3}/g);
console.log(match);
match = text.match(/\d{3,4}/g);
console.log(match);
match = text.match(/\d{3,}/g);
console.log(match);
match =data.match(/yellow$/gi);
console.log(match)
match =data.match(/^re/gi);
console.log(match)
data="Is this all there is";;
match =data.match(/is(?= all)/g);
console.log(match);
match =data.match(/is(?! all)/g);
console.log(match);
text = "That's hot 100%!";
match =text.match(/h.t/g);
console.log(match);
match =text.match(/\w/g);
console.log(match);
match =text.match(/\W/g);
console.log(match);
match =text.match(/\d/g);
console.log(match);
match =text.match(/\D/g);
console.log(match);
match =text.match(/\s/g);
console.log(match);
match =text.match(/\S/)
console.log(match);
match =text.match(/\bth/gi);
console.log(match);
match =text.match(/\Bat/g);
console.log(match);
text = "Visit W3Schools. Hello World!";
match =text.match(/\O/g);
console.log(match);
match =text.match(/\127/g);
console.log(match);
match =text.match(/\x57/g);
console.log(match);

let pattern = /all/g;
text = pattern.constructor;
console.log(text);
text = pattern.global;
console.log(text);
text = pattern.ignoreCase;
console.log(text);
while(pattern.test(data)==true){
console.log("Position: "+pattern.lastIndex);
}
console.log(pattern.multiline);
console.log(pattern.source);

match=pattern.exec(data);
console.log(data);
match=pattern.toString();
console.log(data);
