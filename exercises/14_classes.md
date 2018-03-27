# ES6 Classes

## Övning

1. Implementera `City` och `Country` fast med `class`-syntax och låt `City` ärva från `Country` med `extends`. Samma funktionalitet som gårdagens övning fast att du använder klasser istället. Exempel på hur man implementerar en klass finns nedan:

```js
/* *
 * The class can be described as a constructor function
 * + the prototype for the constructor function
 * */
class Person {
    /* *
     * Inside the class we have a explicit constructor function
     * which creates the new object 'based' on this class.
     * */
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    /* *
     * Every function in this class is like a prototype function
     * This can be described as "Person.prototype.speak()"
     * */
    speak(){
        console.log(`Hello I'm ${this.name}`);
    }
}

const Roffe = new Person("Roffe", 44);

```

På samma sätt som med **Function Expressions** kan `class` vara anonym:

```javascript

const Person = class {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log(`Hello I'm ${this.name}`);
    }
}

const newPerson = new Person("Common D'Ordinary", 35);
```

### Class Inheritance 

```javascript
class Teacher extends Person{
    constructor(name, age){
        super(name, age)
        this.isTeacher = true;
    }
    teacherSpeak(){
        console.log('Repetition is the mother of all learning, hurr durr.')
    }

}

const newTeacher = new Teacher("Teachy McData", 101);

```

