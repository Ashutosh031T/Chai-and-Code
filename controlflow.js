const isUserLoggedIn = true
// if (isUserLoggedIn){
//   console.log("User is logged in")
// }


//loose checking
// if (2=="2"){
//   console.log("Executed")
// }

// strict checking
// if (2==="2"){
//   console.log("Executed")
// }
// else{
//   console.log("Not executed")
// }

// const score = 200

// if(score >=100){
//   let power ="fly"
//   console.log(`user power ${power}`)
// }

// console.log(`${power}`) error
// const balance = 1000
// if(balance>500) console.log(`balance ${balance}`)

const myObj={
  name:"Hitesh",
  age:25,
  city:"Delhi"
}

// console.log(Object.keys(myObj))

//Object.keys(objName) returns Array of Keys

// Nullish Coalescing Operator (??)

let val1;
val1 = 5 ?? 10

// it is used for Database Operation

let val2;
val2 = null ?? 10
// ?? it checks whether value is null or valid value . It priorized to the value over null

let val3 = null ?? 10 ?? 20


// console.log(val3) 

const iceTea = 100
iceTea >=80?console.log("Greater than 80"):console.log("Less than 80")