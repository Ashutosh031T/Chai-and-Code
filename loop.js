// for loop

// for(let i = 0; i<=10;i++){
//   const el = i;
//   if(el==5){
//     console.log("5 is best")
//     continue
//   }
// console.log(el);
// }

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// console.log("Sum of numbers:", sum);

// for (let i = 1; i <= 10; i++) {
//   console.log(`\nTable of ${i}\n`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }


// while loop
// let index = 0;
// while (index < 5) {
//   console.log(index);
//   index+=2;
// }

// do-while loop

let score = 10

do {
  console.log(score);
  score++;
} while (score < 10);
