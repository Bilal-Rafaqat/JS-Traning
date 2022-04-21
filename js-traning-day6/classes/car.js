function makeClass(){
    class Car {  //Class
    constructor(brand) {
      this.carname = brand;
    }
    static hello() {  // static method
      return `Car Name is `;
    }
  }
  let name = document.getElementById("name").value;
  console.log(name);
  mycar = new Car(name);  //class object
  
  document.getElementById("car").innerHTML = Car.hello() + name;  //calling function 
}