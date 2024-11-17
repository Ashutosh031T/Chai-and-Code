// const userEmail = "user@example"
// const userEmail =""

// if(userEmail){
//   console.log("Got Email")
// }
// else{
//   console.log("No Email")
// }

/*
falsy Values
false, 0, -0, BigInt 0, "" , null ,undefined, NaN
*/
/*
truthy Values
"0"(surprised), "false", " ",[],{}, function(){}-> (Empty Function)
*/
//check array in if case
const arr =[]
if(arr.length===0){
  console.log("Array is empty")
}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
  console.log("Object is empty")
}


