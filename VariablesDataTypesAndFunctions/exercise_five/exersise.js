function Person(name) {
  this.name = name;
}
const John = new Person("John Doe");

// pt 1 of exersize
function welcome(name) {
  return `Hello ${name} !`;
}

// pt 2 of exersize
function welcomeObject(person) {
  person.welcomeMessage =()=> {
    return `Hello ${person.name}`;
  };
}

welcomeObject(John);

console.log(John.welcomeMessage());
