class Student {
  fullName: string;
  // public 修饰的属性直接会作为实例属性
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return "Hello, " + person.firstName + person.lastName;
}

const user = new Student('jane', 'M.', "User")

document.body.innerHTML = greeter(user);
