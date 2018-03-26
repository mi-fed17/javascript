# Prototypes & Constructor Calls

1. **Gör övningen `06_objects_and_context.md` om du inte redan har gjort den**
2. Fortsätt med dessa övningar

## Objects & Prototypes

Objekt är nästan allt i JavaScript. Om vi ska spara större samlingar så använder vi oftast en array av objekt. Dessa objekt i sin tur kanske vi skapar med antingen en `Constructor Call` eller med `Object.create()`. Alla objekt i JavaScript har en `prototyp` som används för att dela funktioner och egenskaper mellan objektet för att man inte ska behöva repetera kod och för att visa tillhörighet. Du ska i denna övning öva på att skapa objekt på olika sätt, dels med `Constructor` och dels med `Object.create`.

>Detta är enbart två sätt att implementera detta och ingen av dem är direkt "standard". Det beror på vad du ska skapa för projekt, storlek, vad projektet
ska göra. Principen om prototypkedjan är dock densamma i varje implementation
som finns där ute. Det är viktigare att förstå prototypkedjan än att lära sig en enskild implementation. Samtidigt så är dessa två implementationer inte helst skiljda åt: man måste inte använda en implementation strikt, man kan blanda implementationerna.


##### Länkar att använda

* [Object.create() | A Drip Of JavaScript](http://adripofjavascript.com/blog/drips/basic-inheritance-with-object-create.html)
* [Inheritance with Constructor | A Drip Of JavaScript](http://adripofjavascript.com/blog/drips/basic-inheritance-with-javascript-constructors.html)
* [YDKJ - this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)

# Övningar

## DJUR

1.  Det ska finnas ett "huvuddjur" som minst 2 djur ärver av. Tänk på att "Huvuddjuret" ska ha egenskaper som är gemensamma för de tre andra djuren så att de ej behöver repeteras.

2. Dina tre djurobjekt ska vara unika från varandra men ärva gemensamma egenskaper från huvuddjuret. Ett attribut du ska ha med är om djuret anses
farligt för människan eller inte.

3. Skapa en instans av vardera av de 2 djuren, inte av huvuddjuret. Lagra sedan dessa 2 djur i en array.

4. Skapa en for-loop som stegar igenom arrayen och skapar tre divar i body på ditt dokument. Divarna ska i sin tur innehålla information om djuren som kommer direkt från objekten. Om djuret är farligt ska bakgrundfärgen på div-en vara röd, om inte, grön.

## STÄDER

1. Du ska skapa en `Constructor`-funktion som ska skapa ett nytt `Country`-objekt. Ett `Country` består av `name`, `continent`, `population`, ``
2. Kalla sedan på `Country`-funktionen och skapa två `Country`-objekt.
3. Lägg till två funktioner på prototypen till denna `constructor`-funktion. Funktionerna kommer alltså att vara kopplade till `Country`s prototyp. Den ena funktionen ska skriva ut befolkningen i landet i en snygg sträng och den andra ska göra samma sak fast med kontinenten, typ _"This country is in Africa"_. Testa kalla på de funktioner du skapat på varje enskilt `Country`-objekt för att se att de fungerar.
4. Skapa en ny `City`-constructor. `City`-constructorn ska ha samma egenskaper som `Country` förutom att den ska ha en ny egenskap: `country` (landet staden ligger i) och `name` ska nu istället vara namnet på staden.
5. Ändra på din `City`-constructor fast använd den här gången `call` för att kalla på `Country`-functionen för att återanvända dess parametrar. Kom ihåg att `City` nu har en ny egenskap: `country` som måste lagras och som inte finns i `Country`-funktionen.

```javascript
function City(){
    Country.call(obj, parameters);
}

```


6. Återskapa ovanstående funktionalitet med `Object.create`. För att skapa en prototyp åt ett objekt så måste du kalla på `Object.create` med ett objekt som innehar dina prototyp-funktioner.

# Lösningsförslag

## DJUR
```js
let animal = {
  eat: function() {
    console.log("Omnomnomnom");
  },
  sleep: function() {
    console.log("zzZZzzzZZ");
  },
  isDangerous: false
}

function Dog() {
  this.bark = function() {
    console.log("Voffvoff");
  }
}

function Bird () {
  this.fly = function () {
    console.log("Flapflapflapflap")
  }
  isDangerous = true;
}

Dog.prototype = animal;
Bird.prototype = animal;

var fido = new Dog();
var kalle = new Bird();

let animalsArray = [fido, kalle];

kalle.sleep();
kalle.fly();
```


## STÄDER 

```js
/*============================================
=            Constructor Function            =
============================================*/

/**
 * Remember that these are only two ways of doing this and 
 * none of them are really considered "standard". It all depends
 * on what your project is, how big it is, what it will do etc.
 * These are just base principles which almost every other pattern use.
 * The main thing here is the prototype chain and how it works not specific
 * implementations
 */

/**
 * Constructor function that creates a new Country
 * @param {String} name       Name of country
 * @param {String} continent  Which continent
 * @param {Number} population Population of country
 */
function CountryConstructor(name, continent, population, pFemale){
  this.name = name;               //Every property is stored in this
  this.continent = continent;     //this is the object that is created
  this.population = population;   //when you call this function with new
}

/**
 * Prototype function that prints the population of the object
 * The function is bound to the Constructor function that
 * creates the objects, therefore every new object that is created
 * with CountryFunction will have these prototype-functions
 * @return {void} console.log
 */
CountryConstructor.prototype.printPopulation = function(){

  //Prints the name and the population
  console.log(`${this.name} population is ${this.population}`);
}

/**
 * Prototype function that prints the population of the object
 * @return {void} console.log
 */
CountryConstructor.prototype.printContinent = function(){

  //Prints the name and which continent
  console.log(`${this.name} is situated in ${this.continent}`);
}

/**
 * Function that loops through every property in an object and print
 * its value. The this.hasOwnProperty() is used to stop the for..in loop
 * from looping through inherited properties. Try removing it and see what
 * happens. It does not always have to be used but it's best practice
 * if you want to ensure not to loop through inherited properties
 * @return {void} console.log
 */
CountryConstructor.prototype.toString = function(){
  for (let prop in this){
      if(this.hasOwnProperty(prop)){
        console.log(this[prop]);
      }
    }
}

/**
 * Object created with the Constructor. Will have all the functions that
 * the CountryConstructor has because we did 
 * @type {Country}
 */
var USA = new CountryConstructor('USA', 'North America', 5004040404);

/**
 * Constructor function that inherits from Country by calling
 * Country in the contructor
 * @param {String} name       Name of city
 * @param {String} country    Name of country
 * @param {String} continent  Name of continent
 * @param {Number} population Total population
 */
function CityConstructor(name, country, continent, population){

  //We borrow the CountryConstructor and call it with new context.
  //this refers to the created CityConstructor Object. But we have 
  //a new property that differs from the CountryConstructor. So we 
  //have to add that too. We don't have data on the pFemale variable so
  //we can skip that.
  CountryConstructor.call(this, name, continent, population);
  this.country = country;
}

//For the City contructor to inherit the Country constructors
//functions we must assign the property manually
CityConstructor.prototype = new CountryConstructor();


//We can not create new Cities and Countries with these two Constructor-functions
let USA = new CountryConstructor('USA', 'North America', 50003030, 0.45);
let NewYork = new CityConstructor('New York', 'USA', 'North America', 5000000);

USA.printContinent();


/*=====================================
=            Object.create            =
=====================================*/

/**
 * Prototype object used for creating Country objects. Basically just
 * an object with a set of functions inside. Remeber that everything is
 * an object so it's not that weird that this is just a simple object. It doesn't
 * do exactly everything the constructor do but the base principle is the same.
 * You let an object inherit functions from another object. 
 * @type {Object}
 */
var Country = {
  printPopulation: function(){
    console.log(`${this.name} is situated in ${this.continent}`);
  },
  printContinent: function(){
    console.log(`${this.name} is situated in ${this.continent}`);
  }
}

/**
 * City object created by creating an object based on the
 * Country object. Inherits the functions that the Country Object has.
 * @type {Object}
 */
var City = Object.create(Country)

/**
 * Create an single City Object based on the City object. The City
 * object basicly just have the two inherited functions.
 * @type {Object}
 */
var Stockholm = Object.create(
    City, 
    {   name: { value: 'Stockholm' },   // { name: { value: 'Stockholm' } }
        country: { value: 'Sweden'},    // Awkward syntax but must be written
        continent: { value: 'Europe'},  // This way because it takes more params
        population: { value: 5000000}   // than just value. 
    }
);


Stockholm.printPopulation();
```

