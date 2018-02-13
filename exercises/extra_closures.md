# Closures

Vi kan skapa en funktion inuti en annan funktion. Vi kan även returnera en anonym funktion från en funktion. T.ex.:

```js
//Deklarera en funktion i en funktion samt kalla på den funktionen inuti
//I detta fall kallas den inre funktionen på direkt inuti den yttre funktionen
function myOuterFunction(){

    function myInnerFunction(){

    }
    myInnerFunction();
}

//När vi kallar på den yttre funktionen kommer båda funktionerna att köras
myOuterFunction();

//Man kan även returnera en funktion inuti den yttre funktionen
function myOuterFunction2(){
    return function(){
      console.log('Tjena');
    }
}

//Hur vi kallar på funktionen ovan
var inner = myOuterFunction2();
//Nu lagras den inre funktionen i var inner och kan avändas som en funktion
inner();

```

När vi skapar en funktion i en annan funktion skapar vi automatiskt en _Closure_. JavaScript sparar alla variabler i den yttre funktionen så att den inre funktionen kan använda dem utifall de behövs. I vanliga fall när man kallar på en funktion så finns funktionens variabler tillgängliga när funktionen körs och när funktionen har kört klart går de inte att komma åt längre. Detta gäller dock inte _Closures_ då den inre funktionen har tillgång till den yttre funktionens variabler även fast den yttre funktionen har körts klart:

>Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created.

 
## Övning 1 - Skapa en closure

1. Skapa en funktion som heter `sayMyName`
2. Lägg till variabeln `var name = 'My Name'` i funktionen.
3. Skapa en inre funktion som heter `logMyName`
4. `logMyName` ska console.logga `"Hello my name is " + name`
5. Returnera den inre funktionen `logMyName` i slutet på den yttre funktionen `sayMyName`
6. Kalla på den yttre funktionen och lagra den i en variabel
7. Kalla på en inre funktionen som nu ligger i vår nya variabel

Vad får vi för resultat? Har varje funktion bara tillgång till sina egna variabler? 


## Övning 2 - Följa en closure

```javascript
var hidden = mystery();
var result = hidden(3);
console.log(result);

function mystery(){
  var secret = 2;
  function mystery2 ( multiplier ) { 
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}
```

Se över koden ovan och försök lista ut vad som kommer returneras när vi skriver ut `result` utan att köra koden. Använd sedan debuggern för att stega igenom koden och kolla hur programmet flödar. Du ska inte köra koden, bara när du kör igenom med debuggern.

## Övning 3 - Skapa en hierarki!

Vi ska skapa funktionskapande funktioner med hjälp av closures. Man ska kunna kalla på din funktion på detta sätt:

```javascript
const teacher = createPerson('lärare');
const student = createPerson('student');

student('Steffe');
//Hej jag heter Steffe och är student på Nackademin
teacher('Biggie');
//Hej jag heter Biggie och är student på Nackademin
teacher('Jesper');
//Hej jag heter Jesper och är lärare på Nackademin

```

Detta kan man åstadkomma med closures.

1. Vi ska alltså skapa en funktion som heter `createPerson` som har en parameter, argumentet som skickas in är om vi ska skapa en lärare eller elev: `title`.
2. Vår funktion `createPerson` ska sedan returnera en anonym funktion som tar ett argument, vad vår person ska heta: `name`.


## Lösningsförslag

### Övning 1 - Skapa en closure

```js
function sayMyName(){
  const name = 'Jesper';
  //Function deklaration först. Vi kan även direkt returnera funktionen om vi vill.
  function logMyName(){
    console.log('Hello my name is ' + name);
  }
  //Returnerar funktionen i slutet på den sayMyName.
  return logMyName;
}

/*Först kallar vi på sayMyName() som returnerar en funktion. Variabeln name finns i sayMyNames scope. När vi dock kallar på nameSayer() som använder funktionen logMyName har vi tillgång till variabeln name även fast funktionen sayMyName() har kört klart. Genom att skapa en funktion i en annan funktion skapar vi en closure som gör att variablern i en closure lever kvar även fast funktionen kört klart */

const nameSayer = sayMyName();
nameSayer();

```


```js
/* Nedan är en mer invecklad version av ovanstående kod. Lättast blir om man följer koden genom att använda breakpoints i debuggern. Här gäller samma sak som föregående kod. När vi använder av oss funktionen hidden() använder vi oss av den inre funktionen som returneras. Den inre funktionen har tillgång till yttre variabler så som var secret; som finns i vår closure. */


function mystery(){
  const secret = 2;
  //Den inre funktionen kan använda secret
  function mystery2 ( multiplier ) { 
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}

const hidden = mystery();
//Result kan använda const secret = 2; Vi skickar med argumentet som ska användas till parametern multiplier
const result = hidden(3);
console.log(result);
```


```js
//Den yttre funktionen tar en parameter som är vilken sorts person vi ska skapa, lärare eller student
function createPerson(title){

  /* `createPerson` returnerar sedan en anonym funktion som har en parameter, vilket namn eleven ska ha. Den inre funktionen kan användas för att skapa varje enskild person. Den inre funktionen får tillgång till både de yttre variablerna och den inre funktionens variabler. */
  return function(name){
    console.log(`Hej jag heter ${name} och är ${title} på Medieinstitutet`);
  };
}


/* Vi kan här med hjälp av closures återanvända kod. Vi slipper här t.ex. skapa flera olika funktioner. Vi har en funktion som skapar andra funktioner åt oss och kommer ihåg våra val */
var teacher = createPerson('lärare');
var student = createPerson('student');

//Vi kan skapa vad vi vill
var boss = createPerson('Slutboss');

boss('Ganon');
//Hej jag heter Ganon och är Slutboss på Medieinstitutet

student('Steffe');
//Hej jag heter Steffe och är student på Medieinstitutet
teacher('Biggie');
//Hej jag heter Biggie och är student på Medieinstitutet
teacher('Jesper');
//Hej jag heter Jesper och är lärare på Medieinstitutet
```

