









// Nested Scope

function one(){
  const userName = "hitesh"
  function two(){
    const website ="youtube"
    console.log(userName);
// function one() variable userName can be accessed in two()
  }
  // console.log(website);  can n't be accessed outside of the function
  two();
}

// one();


console.log(addone(5)) // No Error
function addone(num){
  return num + 1;
}



// Expression/ Hoisting
// console.log(addTwo(5)) Error
const addTwo = function(num){
  return num + 2;
}

console.log(addTwo(5))


