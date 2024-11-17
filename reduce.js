const array = [1,2,3]

// const initVal = 0

// const myTotal = array.reduce((acc,curval)=>{
//   console.log(`acc: ${acc} and curval: ${curval}`)
//   return acc + curval
// },initVal)
// },0)

// const myTotal = array.reduce((acc,curval)=> acc+curval,0)
// console.log(myTotal)

const shoppingCart = [
  {
    itemName:"Js Course",
    price:2999
  },
  {
    itemName:"py Course",
    price:999
  },
  {
    itemName:"Kotlin Course",
    price:6999
  },
  {
    itemName:"Data Sc Course",
    price:12999
  }
]

const totalPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalPrice)