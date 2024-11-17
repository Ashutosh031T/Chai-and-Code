// Immedietly Invoked  Function Expression (IIFE)

(function chai(){
//named IIFE
  console.log("IIFE")
})
();

// ; is used to end of stop IIFE expression 

((name)=>{

//unnamed IIFE
  console.log(`${name} enjoys IIFE`)
}
)
('hitesh')

