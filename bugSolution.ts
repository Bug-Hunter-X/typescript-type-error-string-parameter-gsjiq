function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["John", "Jane"];

//Solution 1: Iterate over the array
user.forEach(name => console.log(greeter(name)));

//Solution 2: Modify the function to handle arrays
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(", ");
}
console.log(greeterArray(user));

//Solution 3: Destructure the array if only one element is expected
const [firstName] = user;
console.log(greeter(firstName));