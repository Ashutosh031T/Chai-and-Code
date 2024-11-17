//Arrays
// const myArray=[0,1,2,3,4,5]

// const myHeros=["shaktiman", "Thor","naagraja"]

// const myArr=new Array(1,2,3,4,5)
// console.log(myArr[2])

// myArray.push(6)
// myArray.push(7)
// myArray.pop()
// add element to the oth position
// myArray.unshift(8) 

// myArray.shift()
//removes from first position
// myArray.shift()

// console.log(myArray.includes(9))  return true if value exists else false

// console.log(myArray.indexOf(7)) return -1 if value is not found else return index of value
// console.log(myArray.indexOf(4))

// const newArray = myArray.join();
// console.log(typeof newArray)

//slice, splice

// arrObj.slice(a,b) returns a section of array
// console.log("A",myArr);
// const myn1=myArr.slice(1,3);   

// console.log(myn1)
// console.log("B",myArr)

// const myn2=myArr.splice(1,3)
// console.log(myn2)
// console.log("C",myArr)


//

const mrvl_heros=["Thor","Ironman","Spiderman"]
const dc_heros=["Superman","Flash","Batman"]
// mrvl_heros.push(dc_heros)
// console.log(mrvl_heros)
// O/P: [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]


// const heros=mrvl_heros.concat(dc_heros)

// OP: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

//Spread Operator
const heros =[...mrvl_heros,...dc_heros]
// OP: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const arr=[1,2,3,[4,5,[6,7]]]

// const rarray=arr.flat(Infinity)
// OP: [ 1, 2, 3, 4,5, 6, 7 ]

// const rarray=arr.flat(1)
// OP: [ 1, 2, 3, 4, 5,[5,7]]

let n1=23
let n2="Asss"
let n3=[1,2,3,4]
console.log(Array.from("Hitesh")) // ['H','i','t','e','s','h']
console.log(Array.isArray("Hitesh")) //false
const ra=Array.of(n1,n2,n3)
console.log(ra)