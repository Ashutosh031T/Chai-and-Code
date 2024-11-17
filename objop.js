
const myLang ={
  js:"JavaScript",
  cpp:"C++",
  py:"Python",
  swift:"Apple OS"
}

// for (const key in myLang){
  // console.log(key)
  // console.log(myLang[key])  // destructured to keys values
// }

// Array's keys are also known as its index


const coding =["java","python","JS","CPP"]

// for each loop
// coding.forEach( function (item){

  // callback function has no name  eg function(parameters){ defination}
  // console.log(item)

// })

// coding.forEach((item,index,arr)=>{
//   console.log(item,index,arr)
// })

// function printMe(item){
// console.log(item)
// }
// coding.forEach(printMe)

const myCoding=[
{
    langName:"JavaScript",
    fileName:"js"
},
{
  langName:"Java",
  fileName:"java"
},
{
  langName:"Python",
  fileName:"py"
}
]

myCoding.forEach((item)=>{
  // console.log(item.langName, item.fileName)
  console.log(item.langName)
})
