//Dates

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());

// let myDate2 = new Date("2022,1,01");

// console.log(myDate2.toString()); 

console.log(myDate.getMonth());
console.log(myDate.getDay());
myDate.toLocaleString('default',{
  hour:"numeric",
})