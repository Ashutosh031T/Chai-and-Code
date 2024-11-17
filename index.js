let user ={
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001"
  },
  hobbies: ["reading", "painting", "traveling"]
}

let userTwo= user
userTwo.name = "Nishul Vasisth";
console.log(userTwo.name);
console.log(user.hobbies[1]);