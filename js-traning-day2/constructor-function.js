function car(){
      this.model='BMW i8';
      this.color='black';
      this.bodyKit='sports kit';
      this.carNumber=1212;
}
const bmw = new car();
for (const key in bmw) {
      console.log(`${key}: ${bmw[key]} `)
}
