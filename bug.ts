function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["John", "Jane"];
console.log(greeter(user)); //Error: Argument of type 'string[]' is not assignable to parameter of type 'string'.