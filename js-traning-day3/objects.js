//User define object
const student = {
    name: 'Bilal',  //properties
    age: 24,
    degree: 'BS SE',
    getdata: function(){  //Method
        return'Name: '+this.name +
              ' age: '+ this.age +
              ' Degree: '+this.degree;      
         
    }
}
console.log(student.getdata());

//By defining class for object 
class Student{
    constructor(name,age,degree){
        this.name=name;
        this.age=age;
        this.degree=degree;
    }
    getdata(){
        return'Name: '+this.name +
              ' age: '+ this.age +
              ' Degree: '+this.degree;
    }
}
const person= new Student('ali',24,'SE');
console.log(person.getdata());