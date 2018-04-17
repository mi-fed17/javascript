class Person {
  constructor(name, age){
    this._name = name;
    this.age = age;
  }
  get name(){
    return this._name;
  }
  set name(name){
    if(name == ''){
      console.log('NONO!');
    } else {
      this._name = name;
    }
  }
  printName(){
    console.log(this.name);
  }
}

class Teacher extends Person {
  constructor(name, age){
    super(name, age);
    this.occupation = "Teacher";
  }
  printOccupation(){
    console.log(this.occupation);
  }
}

const newPerson = new Person("Jesper", 500, "Teacher");
newPerson;
const newTeacher = new Teacher("Jesper", 500);
newTeacher
newPerson.printName();

function AnotherPerson(name, age){
  this.name = name;
  this.age = age;
}

AnotherPerson.prototype.printTitle = function(){
  console.log(this.title);
}

const anotherOne = new AnotherPerson("Jesper", 500);
anotherOne