# Stränghantering

* [Gå till övningar](#Övningar)
* [Gå till Lösningsförslag](#lösningsförslag)

## Introduktion ~ Strängar
Det datatyp som ni kommer hantera mest är `String`. Det mesta som syns på en hemsida är text eller länkar vilket i sin tur är strängar. Därför är det bra att hålla koll på hur man hanterar och manipulerar strängar. Strängar används även när man ska lägga till stora block med _HTML_ till DOMen med [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) samt [`insertAdjacentHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML).

_Standard ES5 sätt att hantera konkatenering (sätta ihop strängar)_
```js
const person = {
    name: 'Jesper',
    age: 1000
}

const output = "Hello my name is " + person.name + " and I am " + person.age " years old";
```

_ES6 Template literals för konkatenering_
```js
const person = {
    name: 'Jesper',
    age: 1000
}

// backticks ``, make sure they are the right way
const output = `Hello my name is ${person.name} and I am ${person.age} years old`;
```

## Introduktion ~ `innerHTML` & `insertAdjacentHTML`

Ibland vill vi lägga till stora block med kod på en och samma gång. Då blir det jobbigt att hela tiden skriva `document.createElement()` och `.appendChild()`. Dessutom blir det som med strängkonkatenering väldigt svårläst efter ett tag, speciellt när man ska slänga in variabler i smeten.

T.e.x om vi ska skapa följande html enbart med JavaScript så har vi några alternativ.
```html
<div class="container">
    <p class="name">Jesper</p>
    <p class="age">1000</p>
</div>
```

_Standard sätt att hantera HTML-block i DOMen_
```js
const output = document.getElementById('output');

const person = {
    name: 'Jesper',
    age: 1000
}

// Step by step creates a lot of code
const container = document.createElement('div');
container.className = "container";
const nameP = document.createElement('p');
const ageP = document.createElement('p');
nameP.innerText = person.name;
nameP.className = "name";
ageP.innerText = person.age;
ageP.className = "age";
outerDiv.appendChild(nameP);
outerDiv.appendChild(ageP);
output.appendChild(outerDiv)
```

_ES6 med template literals + `innerHTML`_
```js
const output = document.getElementById('output');

const person = {
    name: 'Jesper',
    age: 1000
}

// Template literals doesn't care about linebreaks, easy to input variables
output.innerHTML = `
    <div class="container">
        <p class="name">${person.name}</p>
        <p class="age"> ${person.age}</p>
    </div>`;
```

_ES6 med template literals + `insertAdjacentHTML`_
```js
const output = document.getElementById('output');

const person = {
    name: 'Jesper',
    age: 1000
}

// Template literals doesn't care about linebreaks
container = `
    <div class="container">
        <p class="name">${person.name}</p>
        <p class="age"> ${person.age}</p>
    </div>`;

// We can also choose to insert 'beforebegin', 'beforeend' and 'afterend'
output.insertAdjacentHTML('afterbegin', container);
```

## Övningar

Länkar att använda:
 * [String Methods ~ W3Schools.com](https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php)
 * [Template Literals ~ CSS-Tricks](https://css-tricks.com/template-literals/)

**Om du fastnar på en övning så hoppa över till nästa**.

#### Övning 1

__a)__
Gör om följande kod så att den använder template literals:

```js
const numberOfPeople = 10;
const pizzasPerPerson = 3;

console.log("You are " + numberOfPeople + " people and there is one pizza for every " + pizzasPerPerson + " person. This means that you have to buy " + Math.ceil(numberOfPeople / pizzasPerPerson) + " pizzas!");

```

__b)__

Gör om följande kod så att den använder `innerHTML` samt _template literals_ för att skapa HTMLen. _Tips: du behöver bara `document.body.innerHTML =`_

```js
const container = document.createElement('div');
div.classList.add('img-container');
const img = document.createElement('img');
img.src = "images/img.png";
img.alt = "Wtf is this image, ugh!";
img.height = "200px";
img.width ="200px";
div.appendChild(img);
document.body.appendChild(div);
```

__c)__

Du ska återskapa en HTML-struktur med hjälp av JavaScript och `insertAdjacentHTML`. Du ska alltså inte lägga den nedre HTMLen i din `index.html`. Det enda du ska ha i `<body>` är detta:

```html
<p id="content">A nice picture<p>
```

Men du ska skapa detta:

```html
<div class="img-container">
    <img src="http://www.exoticanimalsforsale.net/img/Quokka-for-sale.jpg" alt="Wtf is this image, ugh!" height="200" width="200" />
    <p id="content">A nice <span>picture<span><p>
</div>`
```

Men du har enbart denna JavaScript:

```js
const content = document.getElementById('content');
```

Utgå från denna variabel `content` och bygg sedan upp HTML-strukturen utifrån den med `insertAdjacentHTML`.

#### Övning 2

Skriv en funktion som gör om en sträng, en mening, till en array av strängar som exemplet nedan. _Tips: använd `split()`_

_exempel_
```
'Hello my name is Jesper' ->
[ 
    'Hello',
    'my',
    'name',
    'is',
    'Jesper'
];
```

Funktionen borde se ut något som såhär:

```js
const result = splitIntoArray('Hello my name is Jesper');
```

#### Övning 3

Skriv en funktion som gör om första tecknet i en mening till stor bokstav. _Tips: använd `charAt()` och `slice()`_
_exempel_
```
'hello my name is jesper' ->
'Hello my name is jesper'
```

#### Övning 4

Skriv en funktion som gör om alla första tecken i samtliga ord till stor bokstav. _Tips: använd `split()`_ 
_exempel_
```
'hello my name is jesper' ->
'Hello My Name Is Jesper'
```

#### Övning 5

Skriv en funktion som gör om en större text till ett **excerpt** och där du kan bestämma hur långt utdraget ska vara. _Tips: använd `substr()/substring()`_

```
'This is a long text that describes the content of my blogpost, on some sites I wish to shorten this text' ->
'This is a long text that describes the content of my blogpost...'
```

#### Övning 6

Skriv en funktion som gör om **snake_case** till **camelCase**. _Tips: använd `split()` och `join()`_

```
'my_snake_function' ->
'mySnakeFunction'
```

#### Övning 7 

Gör om övning 6 så att du kan skicka med ett andra argument till funktionen som bestämmer vilket casing som ska användas. _Tips: använd `split()` och `join()`_

```js
changeCase('my_snake_function', 'camel');
changeCase('my_snake_function', 'hyphen');
```

#### Övning 8

Skriv en funktion som tar en sträng som argument och sedan returnerar den strängen baklänges

_exempel_
```js
'jesper' ->
'repsej'
```

#### Övning 9

Skriv två funktioner med namn `getMonth` och `getDay` som plockar ut månad respektive dag ur en datumsträng (`'2018-02-20'`). Skriv med hjälp av dessa fuktioner en till funktion med namnet `daysBetween` som räknar ut hur många dagar det är mellan två datum. Du kan utgå från till en början att du ska räkna ut dagarna mellan två datum på samma månad. Om du vill kan du sedan gå vidare med att försöka få fram hur det blir om två datum är på olika månader. _Tips: använd `substr/substring`_
_exempel_
```
getDay('2018-02-20')    // === 20
getMonth('2018-02-20')  // === 2

daysBetween('2018-02-20', '2017-02-24') === 4 

```

#### Övning 10

Skriv en funktion som översätter argumentet som skickas in till rövarspråk.

_exempel_
```
"Hej mitt namn är Waboo" ->
"Hohejoj momitottot nonamomnon äror Wawaboboo"
```

#### Övning 11

Du har följande array och du ska skriva ut arrayen och samtliga `reviews` i arrayen med hjälp av `innerHTML` eller `insertAdjacentHTML` så att den får strukturen som du ser nedanför arrayen. D.v.s. att varje objekt i arrayen ska bli en egen artikel. Hur du stylar artikeln är upp till dig.
    
```js
const reviews = [
    { 
        name: 'Golden Gate Bridge',
        location: 'San Fransisco',
        grade: 8,
        author: 'Petronella',
        message: 'Visit the bridge at sunset for an absolute magnificent experience!',
        date: '2017-08-12'
    },
    { 
        name: 'Colors',
        location: 'Berlin',
        grade: 9,
        author: 'Sofia',
        message: 'Wow, awesome second hand store! Pay by the kilo.',
        date: '2015-09-23'
    },
    { 
        name: 'Pizzeria En Till',
        location: 'Köping',
        grade: 6,
        author: 'Jonne',
        message: 'Pizza is pizza.',
        date: '2018-01-01'
    }
];

```

```html
<article class="review-container">
    <h2>San Fransisco: Golden Gate Bridge<h2>
    <p class="content">'Visit the bridge at sunset for an absolute magnificent experience!'</p>
    <footer>
        <p class="grade">Grade: 8/10</p>
        <p class="metadata">By Petronella @ 2017-08-12</p>
    </footer>
</article>
```

#### Övning 12

Jag har inga fler övningar men ta en titt på W3Resources hemsida för att få tips på vad du kan göra för olika grejer. Väldigt många funktioner med lösningsförslag. En del kan ha lite utdaterad syntax men de funkar fortfarande bra.

* [https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php](https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php)
* [https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php](https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php)

## Lösningsförslag

### Övning 1
__a)__
```js
const numberOfPeople = 10;
const pizzasPerPerson = 3;

console.log(`You are ${numberOfPeople} people and there is one pizza for every ${pizzasPerPerson} person. This means that you have to buy ${Math.ceil(numberOfPeople / pizzasPerPerson)} pizzas!`);
```

__b)__

```js
document.body.innerHTML = `
    <div class="img-container">
        <img src="images/img.png" alt="Wtf is this image, ugh!" height="200" width="200" />
    </div>`;
```

__c)__

```js
const content = document.getElementById('content');

content.insertAdjacentHTML('beforeend', `<span>picture</span>`);
content.insertAdjacentHTML('beforebegin', `<div class="img-container">
  <img src ="http://www.exoticanimalsforsale.net/img/Quokka-for-sale.jpg" alt = "Wtf is this image, ugh!" height = "200" width = "200" />`);
content.insertAdjacentHTML('afterend', `</div>`);

```

### Övning 2
```js
function splitIntoArray(stringToSplit){
    // split is a built in function that takes an argument,
    // the argument tells the function how to split the
    // string, in this case we split at each space
    return stringToSplit.split(' ');
}

console.log(splitIntoArray('Hello my name is Jesper'));
```

### Övning 3

```js
function capitalizeWord(stringToCapitalize){
    // extract first letter
    let firstLetter = stringToCapitalize.charAt(0);
    // convert it to uppercase
    firstLetter = firstLetter.toUpperCase();
    // slice extracts a part of the string, starting att index 1,
    // we start at 1 and proceed to the last index
    const restOfSentence = stringToCapitalize.slice(1);
    // Put first letter + first of sentence together, concat
    return firstLetter + restOfSentence;
}
```

### Övning 4

```js
function splitIntoArray(stringToSplit) {
  return stringToSplit.split(' ');
}

function capitalizeWord(stringToCapitalize) {
  // extract first letter
  let firstLetter = stringToCapitalize.charAt(0);
  // convert it to uppercase
  firstLetter = firstLetter.toUpperCase();
  // slice extracts a part of the string, starting att index 1
  const restOfSentence = stringToCapitalize.slice(1);
  // Put first letter + first of sentence together, concat
  return firstLetter + restOfSentence;
}

/* Reuse the prevous functions! We have alread written half of
   the code already */

function capitalizeAllWords(stringToCapitalize) {
  // Split the string into an array with prevous method
  const arrayOfWords = splitIntoArray(stringToCapitalize);
  // Create a new array to store the transformed values
  const newArray = [];
  // Loop through all the words in the array
  for (const word of arrayOfWords) {
    // Use the function from before
    const uppercaseWord = capitalizeWord(word);
    // When the word has been capitalized, push it
    // to the new array
    newArray.push(uppercaseWord);
  }
  // We can easily join an array with 'join', the argument
  // ' ' specifies that each word should be glued together with
  // a space
  return newArray.join(' ');
}

console.log(capitalizeAllWords("hello my friend"));
```

#### Övning 5

```js
function excerpt(stringToShorten, amount){
    //substr(start index, end index)
    return stringToShorten.substr(0, amount);
}

console.log(excerpt("Hello how are you mister sister?", 12)) //Hello how are
```


#### Övning 6

```js
function capitalizeWord(stringToCapitalize) {
  // extract first letter
  let firstLetter = stringToCapitalize.charAt(0);
  // convert it to uppercase
  firstLetter = firstLetter.toUpperCase();
  // slice extracts a part of the string, starting att index 1
  const restOfSentence = stringToCapitalize.slice(1);
  // Put first letter + first of sentence together, concat
  return firstLetter + restOfSentence;
}

function changeCase(stringToConvert) {
  //Convert string to an array for easy handling
  const wordArray = stringToConvert.split('_')
  // We will create a new array again
  const newArray = [];
  // Loop through all strings in the array
  for (let i = 0; i < wordArray.length; i++) {
    // if it's the first word, no capitalizing
    if(i > 0){
      const capitalizedWord = capitalizeWord(wordArray[i]);
      newArray.push(capitalizedWord);
    } else {
      // Otherwise, just push the word
      newArray.push(wordArray[i]);
    }
    
  }
  // no space in the argument, just an empty string
  return newArray.join('');
}

console.log(changeCase('snake_case_casing'));
```

#### Övning 7

```js
function capitalizeWord(stringToCapitalize) {
  // extract first letter
  let firstLetter = stringToCapitalize.charAt(0);
  // convert it to uppercase
  firstLetter = firstLetter.toUpperCase();
  // slice extracts a part of the string, starting att index 1
  const restOfSentence = stringToCapitalize.slice(1);
  // Put first letter + first of sentence together, concat
  return firstLetter + restOfSentence;
}

function changeCase(stringToConvert, case) {
  //Convert string to an array for easy handling
  const wordArray = stringToConvert.split('_')
  // We will create a new array again
  const newArray = [];
  // Loop through all strings in the array
  for (let i = 0; i < wordArray.length; i++) {
    // if it's the first word, no capitalizing
    if(i > 0 && case === 'camel' ){
      const capitalizedWord = capitalizeWord(wordArray[i]);
      newArray.push(capitalizedWord);
    } else {
      // Otherwise, just push the word
      newArray.push(wordArray[i]);
    }
    
  }
  if(case === 'camel'){
    return newArray.join('');
  } else {
    return newArray.join('-');
  }  
}

console.log(changeCase('snake_case_casing', 'hypen'));
```

#### Övning 8

```js
function reverse(stringToReverse){
  return string.split('').reverse().join('');
}

// Same function as above but I have made the steps
// separate. This is what happens above
function reverse(stringToReverse){
    const wordArray = stringToReverse.split('');
    const reversed = wordArray.reverse();
    const joinedArray = reversed.join('');
    return joinedArray;
}

console.log(reverse("jesper"));
```

#### Övning 9

```js
function getDay(dateString){
    return dateString.split('-')[2];
}

function getMonth(dateString){
    return dateString.split('-')[1];
}

function daysBetween(firstDate, secondDate){
    const firstDay = getDay(firstDate);
    const secondDay = getDay(secondDate);
    return secondDate - firstDate;
}

```

#### Övning 10

```js
// Hold on tight
function yarr(string) {
  // Define which our vowels are so we can look for them
  const vowels = ["a", "e", "i", "o", "u", "y", "å", "ä", "ö"];
  // We first have to split the words
  const words = string.split(' ');
  // Create an empty array to hold all the finished words
  const yarrArray = [];
  // Loop through each word
  for(const word of words){
    // But we also have to loop through each char
    // so we split that too
    const charsInWord = word.split('');
    // An create a array to hold all the chars in a word
    let wordArray = [];
    // Loop through all chars
    for(const char of charsInWord){
      // If the array of vowels includes our char
      // we have a vowel and we can just push it to the
      // array
      if (vowels.includes(char)) {
        wordArray.push(char);
      } else {
        // else we have to apply our rule:
        // H -> HOH, F -> FOF and so on
        const yarredChar = `${char}o${char}`;
        // The we can push it
        wordArray.push(yarredChar);
      }
    }
    // When we are done with each word, join it again
    // then push it to the big array with all the words
    yarrArray.push(wordArray.join(''));
  }
  // When we are all done we can join the array of words
  // and return it
  return yarrArray.join(' ');
}

console.log(yarr('Hello everyone'));
```

#### Övning 11

_lösningsförslag 1_
```js
for (const review of reviews) {
  let htmlBlock = `
  <article class="review-container">
    <h2> ${review.location}: ${review.name} </h2>
    <p class="content"> ${review.message}</p>
    <footer>
      <p class="grade"> ${review.grade} /10 </p>
      <p class="metadata">By ${review.author} @ ${review.date} </p>
    </footer>
  </article>`;
  output.insertAdjacentHTML('beforeend', htmlBlock);
}

```

_lösningsförslag 2_
```js
let htmlBlock = "";
for(const review of reviews){
  htmlBlock += `
  <article class="review-container">
    <h2> ${review.location}: ${review.name} </h2>
    <p class="content"> ${review.message}</p>
    <footer>
      <p class="grade"> ${review.grade} /10 </p>
      <p class="metadata">By ${review.author} @ ${review.date} </p>
    </footer>
  </article>`;
}
output.innerHTML = htmlBlock;
```
