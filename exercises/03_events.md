# Events

* [PlainJS.com ~ Events](https://plainjs.com/javascript/events/)
* [W3Schools.com ~ List of Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

JavaScript är ett eventdrivet språk, mycket handlar om att lyssna på förändringar, knapptryck och uppdateringar på sidan. Detta gör man med `event listeners`. Dessa kan skrivas på två olika sätt:

## Övning 1 - lägg till och ta bort element

```html
<!--Create a button that will be bound to the event listener -->
<button id="myButton">Min knapp</button>
```

```js
//Get the button from the DOM
const button = document.getElementById("myButton");

//You can use the onlick on the element directly, onclick takes
//an anonymous function as argument, the code that you want to run
//should be inside the brackets {}
button.onclick(function(){
    alert('Hej');
})

//I ususally use `addEventListener` instead. I think it looks better 
//and you can also easily change the event that is being triggered,
//there is no differens between this one and the one above tho.
button.addEventListener('click', function(){
    alert('Hej!');
})
```

1. Använd `appendChild` för att lägga till en ny `<p>`-tagg på sidan med innehållet `"JavaScript is great"` varje gång du klickar på en knapp, knappen kan ha `id="addButton"`.
2. Skapa en till knapp med `id="sparkle"`, denna knapp ska göra så att alla paragrafer ändra färg till `lightcoral` när du trycker på knappen.
3. Skapa en tredje knapp med `id="removeButton"` som tar bort dina tidigare skapade `<p>`-taggar som innehåller `"JavaScript is great!"`. Ena knappen ska alltså lägga till texten och den andra knappen ska ta bort texten.

### Övning 2 - Pizza calculator

1. Använd HTML-koden nedan för att bygga din `PizzaCalculator`. Du ska skriva in antalet personer som ni är i gruppen som ska beställa pizza. Sedan när du trycker på **Calculate Pizzas** så ska resultatet visas upp i `<div>`-en nedanför knappen. Din javascript ska alltså läsa in värdet som är i input-fältet, beräkna det nya värdet samt skriva ut det på sidan igen när du trycker på knappen.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pizza Calculator</title>
</head>
<body>
    <main>
        <label for="numberOfPeople">Number of people</label>
        <input type="text" id="numberOfPeople" placeholder="Number of people"/>
        <button id="calculatePizzas">Calculate Pizzas</button>
        <div id="output"></div>
    </main>
</body>
</html>
```

2. Gör istället så att antalet pizzor beräknas utan att du trycker på knappen, direkt när en användare har skrivit in ett värde i rutan så uppdateras `<div>`-en med `output`. För detta kan man använda: 
```js
element.addEventListener('keyup', function(){
    //Listens to when a key is being released
});
```

## Övning 3 - Växla klasser

Det lättaste och effektivaste sättet att ändra stylingen på ett element är genom att lägga till och ta bort en klass. Detta gör man med funktionen `classList`.

```html
<html>
<head>
    <meta charset="UTF-8">
    <title>classList</title>
    <style type="text/css">
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <button id="toggle">Toggle visibility</button>
    <div id="output">Hide me please</div>
</body>
</html>
```

```js
const output = document.getElementById('output');
//If we want to hide the div we add the 'hidden class'
output.classList.add('hidden');
//If we want normal behavior, remove the class, default is `display: block`
output.classList.remove('hidden');

// get the button-element
const button = document.getElementById('toggle');
//Add an onclick event listener that toggles the class.
//.toggle is a built in function bound to the classList
button.addEventListener('click', function(){
    output.classList.toggle('hidden');
})
```

1. Skapa en navigation med 3 stycken länkar. Ge navigationen ett id av `#nav`.Dessa länkar ska inte leda någonstans och ska ha `href="#"` för att förhindra att vi byter sida.
2. Gör så att den länken du klickar på får klassen `active` och att klassen `active` har någon unik styling som indikerar att vi har tryckt på den länken. Det kluriga här är att du måste dels lägga till klassen `active` på det element som du har klickat på, samtidigt så måste klassen `active` tas bort från alla andra länkar.

### Övning 4 - Discofredag

1. Gör så att varje gång du trycker på bakgrunden på sidan så ändras bakgrunden till en slumpmässig färg. Detta sker med eventet `click`.
2. Gör så att varje gång du trycker på någon knapp på tangentbordet så ändras bakgrundsfärgen. Detta sker med eventet `keydown`eller `keyup`.

### Övning 5 - Stryk mig!!

Du har följande HTML, du ska göra så att varje gång du klickar på ett `<li>`-element ska det tas bort från sidan.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>List</title>
</head>
<body>
    <ul id="todo">
        <li>Köpa mjölk</li>
        <li>Lära mig JavaScript</li>
        <li>Leka med DOMen</li>
        <li>DOOMSDAY</li>
    </ul> 
    <ul id="done">
        
    </ul>
</body>
</html>
```

### Övning 6 - Stryk mig inte, flytta mig tack

Använd samma HTML som i förra övningen. Du ska istället för att ta bort elementet när du klickar på det, flytta det till listan med `id="done"`. Så vid klick så tas det bort från första listan och läggs i den andra listan.

# Lösningförslag

### Övning 1

```js
const div = document.getElementById('output');
const paragraph = document.createElement('p');
paragraph.textContent = "JavaScript is great!";

//Get each button from the DOM
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const sparkle = document.getElementById('sparkle');

//Add an event listener to the add button that listens on 'click'
addButton.addEventListener('click', function(){
    //JavaScript will not add a new paragraph if it already
    //exists on the page. We can clone the node and create
    //a copy of it with `cloneNode`. This way we can add 
    //multiple paragraphs. We can also do a variant with `innerHTML`
    const newParagraph = paragraph.cloneNode(true);
    div.appendChild(newParagraph);
});

removeButton.addEventListener('click', function(){
    //Easiest is to get the last child and remove it.
    //alternatively get the first child and remove it
    div.removeChild(div.lastElementChild);
});

sparkle.addEventListener('click', function(){
    //'div.children' contains all our paragraphs.
    //if we want to apply something to each of the paragraphs
    //we have to loop it
    for(let p of div.children){
        p.style.color = 'lightcoral';
    }
});
```

### Övning 2 - Pizza Calculator

```js
const input = document.getElementById('numberOfPeople');
const button = document.getElementById('calculatePizzas');
const output = document.getElementById('output');

button.addEventListener('click', function(){
  const numberOfPeople = input.value;
  const pizzas = Math.ceil(numberOfPeople/3);
  output.textContent = pizzas;
})
```


```js
const input = document.getElementById('numberOfPeople');
const output = document.getElementById('output');

input.addEventListener('keyup', function(){
  const numberOfPeople = input.value;
  const pizzas = Math.ceil(numberOfPeople/3);
  output.textContent = pizzas;
});
```


### Övning 3 - navbar

```js
// Get every a-tag in the #nav
const navLinks = document.querySelectorAll('#nav a');

//Loop through all of the navlinks to listen to every click
for(const link of navLinks){
  //Add an event listener for each of the links
  link.addEventListener('click', function(){
    //Each time we click a link we must loop through
    //every link again to remove any 'active' classes
    //we have added before, otherwise they will not be removed
    for(const sibling of navLinks){
      sibling.classList.remove('active');
    }
    // 'this' refers to the element clicked, JavaScript knows
    // what 'this' means. So if we click the middle link only
    // that link will get the 'active' class.
    this.classList.add('active');
  })
} 
```

### Övning 4 - Discofredag

```js
// If we want to add an event listener to the whole page
// we can add it directly to the 'window' object
window.addEventListener('click', function(){

  /**
   * RGB stands for Red Green Blue and each color is set in a number
   * from 0-255. We can get 3 random numbers in that span with Math.Random()
   * Math.floor is to round down the number, otherwise we will get decimals.
   */

  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  //Then we add them together to create the string that will
  // be for example rgb(255,10,24);
  const rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  //Then we set the body-tag to that background-color
  document.body.style.backgroundColor = rgb;
})
```

```js
// If we want to add an event listener to the whole page
// we can add it directly to the 'window' object
window.addEventListener('keyup', function(){

  /**
   * RGB stands for Red Green Blue and each color is set in a number
   * from 0-255. We can get 3 random numbers in that span with Math.Random()
   * Math.floor is to round down the number, otherwise we will get decimals.
   */

  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  //Then we add them together to create the string that will
  // be for example rgb(255,10,24);
  const rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  //Then we set the body-tag to that background-color
  document.body.style.backgroundColor = rgb;
})
```


### Övning 5 - Stryk mig!!

```js
const listItems = document.querySelectorAll('li');

for(const item of listItems){
    item.addEventListener('click', function(){
        this.parentElement.removeChild(this);
    })
}
```

### Övning 6 - Stryk mig inte, flytta mig!

```js
const todo = document.getElementById('todo');
const done = document.getElementById('done')
const listItems = document.querySelectorAll('li');

for(const item of listItems){
    item.addEventListener('click', function(){
        todo.removeChild(this);
        done.appendChild(this);
    })
}
```
