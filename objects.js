// singolton
//Object.create

// object literals
// Object types also known as JSON objects

const mySym = Symbol("key1")
const JsUser = {
  name:"Hitesh",
  "full name": "Hitesh Choudhury", // can't be accessed directly by using . 
  // mySym: "key1", //  Not a symbol it is a string 
  [mySym]:"mykey1", // It is a symbol
  age:30,
  location:"Jaipur",
  email:"hitesgh@gmail.com",
  isLoggedIn:false,
  lastLogin:["Monday", "Tuesday"]
}
// console.log(JsUser.email)
//or
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
JsUser.email ="hitesh@tcs.com"
// Object.freeze(JsUser)  // freeze the changes
// JsUser.age =18
// console.log(JsUser)

// JsUser.greeting = function(){
//   console.log("Hello, JS Users")
// }

// console.log(JsUser.greeting)
// console.log(JsUser.greeting())
// JsUser.greetingTwo = function(){
//   console.log(`Hello, ${this.name}`)
// }
// console.log(JsUser.greetingTwo())
// console.log(JsUser)

// Object.Shingolton

// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id="23abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regUser ={
  email: "sam@gmail.com",
  fullName: {
    userfullname:{
      firstName: "Sam",
      lastName: "Smith"
    }
  }
}

// console.log(regUser.fullName.userfullname.firstName)

// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
// const obj4={3:"a",4:"b"}
// const obj5={3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1,obj2)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({},obj1,obj2,obj4,obj5)

// const obj3 = {...obj1, ...obj2,... obj4}
// console.log(obj3)


const users =[
  {
    id:1,
    email:"ash@gmail.com",
  },
  {
    id:2,
    emial:"h@gmail.com"
  },

]

console.log(users[1])

console.log(Object.keys(tinderUser)) // returns array of keys
console.log(Object.values(tinderUser)) // returns array of values
console.log(Object.entries(tinderUser)) // returns arrays of keys and values arrays

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //