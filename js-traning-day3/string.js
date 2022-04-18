const name= 'Bilal';
const age = new String(24);  //constructor
console.log(name + age + typeof(name));

console.log(name.length);  //String length

String.prototype.getinfo =function(){  //prototype
    console.log(name);
}
name.getinfo();

console.log(name.charAt(3));  //character on location
console.log(name.charCodeAt(0));  //value of character
console.log(name.concat(" ",age));  //join two Strings
console.log(name.indexOf("l"));  //First occurred character index
console.log(name.lastIndexOf("l"));  //Last occurred character index
console.log(name.localeCompare('Bilal'));  //comparing two strings
console.log(name.match("al"));  //Return string if characters matched
console.log(name.match(/bil/i));  //Return string if characters matched(insensitive)

let text="First Second";
console.log(text.replace("Second","Third"));  //Search and replace
console.log(text.replace(/second/i,"Third"));
console.log(text.search("Second"));  //Return Position of first char of match word
console.log(text.slice(0,5));  //Return extract part
console.log(text.slice(6)); 
console.log(text.split(""));  //return array with split characters
console.log(text.split(" "));  //return array with split words
console.log(text.split(" ", 1));  //return array with limited index
console.log(text.substr(-2,6));  //return specified characters
console.log(text.substring(-2,6)); 
console.log(text.toLocaleLowerCase());  //return lowercase with local browser settings
console.log(text.toLocaleUpperCase());  //return uppercase with local browser settings
console.log(text.toLowerCase());  //return lowercase 
console.log(age.toString());  //to convert string object into string
console.log(text.toUpperCase());  //convert  into upper case
console.log(age.valueOf());  //to get primitive value of objects
console.log(text.anchor('HI'));  //return string in <a> tag
console.log(text.big());  //return string in <big> tag
console.log(text.blink());  //return string in <a> tag
