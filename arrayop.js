const array = [1,2,3,4,5]

// for ... of
//for( const iterator of Object )

// for(const arr of array){
//   console.log(arr)
// }


// const greetings = "Hello world"

// for(const greet of greetings){
//   console.log(`char: ${greet}`)
// }

//maps 

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America') 
map.set('USSR','Unions of Soviet Scocialist Republic') 
map.set('FR','France')

// console.log(map)
// for(const key of map){
//   console.log(key)
// }
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'USSR', 'Unions of Soviet Scocialist Republic' ]
// [ 'FR', 'France' ]

for(const [key,value] of map){
  console.log(key," -",value)
}
