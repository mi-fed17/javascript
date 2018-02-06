# Document Object Model & JavaScript

* [PlainJS.com ~ Functions and helpers](https://plainjs.com/javascript/)
  * Bra översikt över vilka funktioner som finns i språket som kan hjälp oss att manipulera DOMen.

## Övning 1 - Skapa element med JavaScript

Utgå från denna HTML och följ sedan instruktionerna nedan.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
</head>
<body>
   
<script src="main.js"></script> 
</body>
</html>
```


1. Skapa ett nytt element av typen `<div>` på sidan med hjälp av `document.createElement()` och spara det elementet i en ny variabel.
2. Skapa ett nytt element av typen `<p>` med hjälp av `document.createTextNode()` och spara det elementet i en ny variabel.
3. Skapa en ny textnod med `document.createTextNode()` med innehållet *"Satan va kul JavaScript är!"*. 
4. Lägg till textnoden som ett child av ditt `<p>`-elementet med `element.appendChild(TextNode)`. 
5. Lägg sedan till `<p>`-elementet som ett child av `<div>`-elementet som du skapade tidigare med `appendChild`.
6. Lägg sedan till `<div>`-elementet i `<body>` med `appendChild`. 

Du borde nu ha en liknande struktur i din HTML när du laddar om sidan:
```html
<body>
    <div>
        <p>Satan va kul JavaScript är!</p>
    </div>
</body>
```

7. Lägg till ett `id` av `text` på `<p>`-elementet.
8. Hämta ut `<p>`-elementet från sidan genom att använda `document.getElementById()`. Alltså hämta elementet via dess id.
10. Ändra färgen på `<p>`-taggen genom att använda `p.style.color`. Ändra t.ex. till en röd färg. 

## Övning 2 - `innerHTML`

Ett mer risky men snabbare sätt att lägga till samma information är med funktionen `.innerHTML`. Med `.innerHTML` byter du ut hela innehållet i elementet istället för att lägga till nya barn som tidigare. Du lägger helt enkelt in en sträng som innehåller all HTML du vill lägga till.

```js
const output = document.getElementById('output');
output.innerHTML = "<p>Adding text node and element node at the same time</p>";
```

1. Skriv om koden som du gjorde tidigare så att den istället använder `.innerHTML` och lägger till samma information.

## Övning 3 - Om mig! Woho

```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>This is me!</title>
  <style type="text/css">
      .list-item {
        background-color: #666;
        color: white;;
      }
  </style>
</head>
<body>
  <h1>Facts about me</h1>
  <ul>
    <li>Nickname: <span id="nickname"></span>
    <li>Favorite food:  <span id="favoriteFood"></span>
    <li>Hometown: <span id="hometown"></span>
    <li></li>
   </ul>
  <!-- script goes here -->
 </body>
</html>
```

1. Lägg till ett script längst ner så att du kan skriva JavaScript.
2. Med JavaScript, ändra så att sidan har `font-family`: "Comic Sans";
3. Med JavaScript, ersätt varje `<span>` med din egen information
4. Loopa igenom alla `<li>`-element och lägg till klassen `.list-item` på varje `<li>`.
5. Ändra så att bara varannat list item har en annan klass.
5. Skapa en `<img>`-tagg med en bild på dig själv och lägg till den på sidan.

## Övning 4 - Boklistan

Du ska skapa en lista helt med JavaScript som listar upp en samling böcker. I listan ska man även kunna se vilka böcker som du har läst eller inte.

1. Skapa en `index.html` med en header i där det står "Min boklista",
2. Länka in ett script i botten av `body` där din kod ska ligga.
3. Använd denna array av objekt och loopa igenom den. Det kan vara en bra idé att bara använda `console.log` till en början för att se hur du får ut innehållet. Tänk på att värden och egenskaper som ligger inuti kommer vi åt genom att skriva `objectToAccess.propertyToAcces`.
```js
const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    isRead: true
  },
  {
    title: 'Darling River',
    author: 'Sara Stridsberg',
    isRead: true
  },
  {
    title: 'A book',
    author: 'Unknown',
    isRead: false
  }
];
```

4. Loopa igenom varje objekt i arrayen. För varje bok, skapa ett `<p>`-element med bokens title och författare och lägg till `<p>`-taggen på sidan (`appendChild`)
5. Gör om listan så att den använder `<ul>` och `<li>` istället för bara `<p>`-taggar.
6. Lägg till en egenskap till varje bok (efter `isRead`) som heter `url` där du lägger till en länk i form av en `string`. Gör så att denna bild visas på sidan under varje bok genom att skapa en `<img>`-tagg och sätta `src`.
7. Ändra textfärgen/bakgrundsfärgen baserat på om boken är läst eller inte när du skriver ut alla böcker.

## Övning 5

Du har följande HTML & JavaScript att arbeta med. Du får inte ändra i HTMLen och du får inte hämta flera element. Du ska bara använda `childElement`, `childNodes`, `parentElement`, `parentNode`, `nextSibling`, `previousSibling` etc. för att lösa uppgifterna. Du får alltså **bara** jobba utifrån variabeln `article` och sedan ändra innehållet utifrån den.

```html
<!-- Put this inside index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MF DOM</title>
</head>
<body>
    <h1>Welcome to my DOM!</h1>
    <main>
        <article id="first">
            <h2>I am a second heading</h2>
            <p>So semantic lorum ipsi tipsi</p>     
            <img src="" alt=""/>      
        </article>
        <article>
            <h2>New blog post!</h2>
            <p>My DOM!</p>
        </article>
    </main>
</body>
</html>
```

```js
//Put this in your main.js then work from there
const article = document.getElementById('first');
//to change h2 for example
article.firstElementChild.innerText = "I've changed!";

```

1. Ändra titeln på `<h2>` inuti `article`.
2. Lägg till en `alt`-beskrivning på `<img>`-elementet inuti `article`.
3. Ta bort `<p>`-taggen inuti `article`.
4. Ändra texten inuti `<h1>`.
5. Ändra titeln på den andra artikeln
6. Lägg till en bild med `src` samt `alt` på den andra artikeln
7. Lägg till ett `<span>` med texten `"I'm special"` i båda `<p>`-elementen på sidan.
8. Lägg till styling på båda `<span>`-elementen så att de har en annan färg än `<p>`-elementen.

## Lösningsförslag

1.
```js
const div = document.createElement('div');
const p = document.createElement('p');
const text = document.createTextNode('Satan va JavaScript är kul!');
p.appendChild(text);
div.appendChild(p);
const body = document.getElementByTagName('body');
//We have to get the first item in the array, even if there is only
//one body tag, 'getElementByTagName' will always return an array
const body = body[0];
body.appendChild(div);
```

2.
```js
const body = document.getElementByTagName('body')[0];
body.innerHTML = "<div><p>Satan va JavaScript är kul!</p></div>";
```

3.
```js
document.body.style.fontFamily = 'Comic Sans MS';
document.getElementById('nickname').innerHTML = 'Git McFetch';
document.getElementById('favoriteFood').innerHTML = '34';
document.getElementById('hometown').innerHTML = 'Alvesta';
const items = document.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
    items[i].className = 'list-item';
}
var myPicture = document.createElement('img');
myPicture.src = 'waha.png";
document.body.appendChild(myPicture);
```

4.
```js
// 1-4
const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    isRead: true
  },
  {
    title: 'Darling River',
    author: 'Sara Stridsberg',
    isRead: true
  },
  {
    title: 'A book',
    author: 'Unknown',
    isRead: false
  }
];
    
for (let i = 0; i < books.length; i++) {
  const bookParagraph = document.createElement('p');
  const bookDescription = document
    .createTextNode(books[i].title + ' by ' + books[i].author);
  bookP.appendChild(bookDescription);
  document.body.appendChild(bookParagraph);
}

// 4 - 7
const bookList = document.createElement('ul');
for (let i = 0; i < books.length; i++) {
  const bookItem = document.createElement('li');
  const bookImg = document.createElement('img');
  bookImg.src = books[i].img;
  bookItem.appendChild(bookImg);
  const bookDescription = document
    .createTextNode(books[i].title + ' by ' + books[i].author);
  bookItem.appendChild(bookDescription);
  if (books[i].isRead) {
    bookItem.style.color = 'lightsalmon';
  }
  bookList.appendChild(bookItem);
}
document.body.appendChild(bookList);
```

5.
```js
//Put this in your main.js then work from there
const article = document.getElementById('first');

//Grab the first child that is an element
article.firstElementChild.innerText = "I've changed!";
article.lastElementChild.alt = "My picture!";
//Pick out the last child that is an element
const paragraphToRemove = article.lastElementChild;
//removechild needs both the parent and the child to remove
article.removeChild(paragraphToRemove);
// Go up a step with 'parentElement' and we get 'main'. We then have to select
// the sibling to that element and change the text.
article.parentElement.previousElementSibling.innerText = "Changin deluxe";
article.nextElementSibling.firstElementChild.innerText = "I've changed too!";
const img = document.createElement('img');
img.src = "haha.png";
img.alt = "Haha";
article.nextElementSibling.appendChild(img);
const span = document.createElement('span');
const spanText = document.createTextNode("I'm special");
span.appendChild(spanText);
// children is an array of elements. the p-tag is the second element, index 1
article.children[1].appendChild(span);
article.children[1].firstElementChild.style.color = 'lightcoral';
```
