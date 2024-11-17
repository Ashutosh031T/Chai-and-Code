const user = {
  username:"hitesh",
  price: 999,
  welcomeMessage:function(){
    console.log(`${this.username},welcome to website`)
    //this keyword is used to access/refer current context
    console.log(this)
  }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//   let userName = "hitesh"
//   console.log(this)
//    console.log(this.usaerName)  //print undefined because userName is not a Object
// }


const chai =()=>{
  let userName ="hitesh"
  // console.log(this.userName)  undefined
  console.log(this)
  //{}
}

// chai()

// const addTwo= (n1,n2)=>{
//   return n1+n2
// }


//implicit return
// const addTwo= (n1,n2)=>  n1+n2

// const addTwo = (n1,n2)=>(n1 + n2)

const addTwo = (n1,n2)=>({username:"hitesh"})  // parentheses is used to return Object

// console.log(addTwo(3,4))

// const myarr = [2,3,4,5,6]
