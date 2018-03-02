# JavaScript 

## Innehåll

* Introduktion till programmering i JavaScript
* jQuery
* Ramverk & Bibliotek i JavaScript
* Objektorienterade implementationer i JavaScript
* Felsökning och profilering

## Kursblock

>Kursen är uppdelade i 6 olika block och till varje block är det en minst en examinerande uppgift. **Felsöknings-blocket körs i kombination med andra block men har en uppgift bunden till sig.**

| Block | Innehåll | Tid (v) |
|:---|---|---:|
| [1. __JavaScript & DOM-hantering__](#block-1--2) | Events, DOM , jQuery | 3 |
| [2. __Felsökning__](#block-1--2) | `console`, breakpoints & debugger, Prestanda, Optimera kod | (1) |
| [3. __Async & AJAX__](#block-3) | API, jQuery.ajax(), fetch, promises, callback | 4 |
| [4. __Designmönster & OOP__](#block-4) | Moduler, ES6 `class`, Constructor | 3 |
| [5. __node & npm__](#block-5) | npm, webpack & gulp, Polyfill & transpilering, Minifiering, Produktion/dev | 3 |
| [6. __Bibliotek & Ramverk__](#block-6) | Reacts ekosystem etc. | 5 |
| | | __20__ |

## Litteratur

Övergripande litteratur som kommer att användas. Till varje lektion kommer det vara vissa länkar att läsa. Dessa rekommenderas att läsas.

* [You Don't Know JavaScript](https://github.com/getify/You-Dont-Know-JS)
* [W3Schools.com ~ JavaScript](https://www.w3schools.com/js/)
* [MDN ~ Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
* [JavScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
* [JavaScript vs PHP differences ~ Lullabot](https://www.lullabot.com/articles/learning-javascript-from-php-a-comparison)

#### Länkar

Övriga länkar som kan vara bra att läsa igenom under kursens gång och samling av resurser där du kan lära dig mer om JavaScript.

* [CodeAcademy ~ JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)
* [List of Online JavaScript Resources](http://www.bafflednerd.com/learn-javascript-online/)
* [Codeanalogies ~ JavaScript](https://www.codeanalogies.com/)
* [CodeQuizzes ~ JavaScript](http://www.codequizzes.com/javascript)
* [W3resources ~ JavaScript Exercises](https://www.w3resource.com/javascript-exercises/)
* [A Drip of JavaScript](http://adripofjavascript.com/archive.html)
* [CodeAbbey](http://www.codeabbey.com/index/task_list)
* [CodingBat](http://codingbat.com/python)
* [Using prototypes in JavaScript](https://timkadlec.com/2008/01/using-prototypes-in-javascript/)
* [The Javascript Guide to Objects, Functions, Scope, Prototypes and Closures](http://hangar.runway7.net/javascript/guide)
* [Scope & Hoisting Explained](http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/)
* [Understanding `this` in JavaScript](http://unschooled.org/2012/03/understanding-javascript-this/)


## Schema

### `Block 1 + 2`

__v.5__
#### Pass 1

* JavaScript vs. PHP
    - Likheter/skillnader
* Frontend kontra backend-språk
* Grunder i JavaScript

##### länkar

* [YDKJS ~ Into Programming](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md)
* [YDKJS ~ Into JavaScript](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md)

---
__v.6__

#### Pass 2

* DOM-manipulering
    * id, class & tag
    * DOM-navigering
* Event-listeners

###### länkar

* [Introduction to the DOM ~ MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
* [JavaScript DOM Manipulation Methods ~ Plainjs.com](https://plainjs.com/javascript/manipulation/)

#### Pass 3

* Scope & Context i JavaScript
* `this` i samband med events och objekt

###### Länkar

* [The Javascript Guide to Objects, Functions, Scope, Prototypes and Closures](http://hangar.runway7.net/javascript/guide)
* [Scope & Hoisting Explained](http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/)
* [Understanding `this` in JavaScript](http://unschooled.org/2012/03/understanding-javascript-this/)

#### Pass 4

* Felsökning
    * Leta fel på rätt sätt
    * `console` är din bästa vän
    * `debugger;`

###### Länkar

* [Debug JavaScript  Google Developers](https://developers.google.com/web/tools/chrome-devtools/javascript/)
* [Using the Console ~ Chrome Developers](https://developers.google.com/web/tools/chrome-devtools/console/)
* [Styling output with CSS ~ Chrome Developers](https://developers.google.com/web/tools/chrome-devtools/console/console-write#styling_console_output_with_css)
* [Leveraging the Power of the Javascript Console in Development](https://dev.to/worldclassdev/leveraging-the-power-of-the-javascript-console-in-development-24ap)
* [`e.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

---
__v.7__

#### Pass 5

* Mer om DOM-manipulering / Fördjupning i JavaScript
* Template Literals / Stränghantering
* ES6 arrow function  `=>`
* Context
* `setTimeout` / `setInterval`

##### Länkar

* [Template Literals](https://css-tricks.com/template-literals/)
* [Scope & Hoisting Explained](http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/)
* [Understanding `this` in JavaScript](http://unschooled.org/2012/03/understanding-javascript-this/)
* [The Javascript Guide to Objects, Functions, Scope, Prototypes and Closures](http://hangar.runway7.net/javascript/guide)
* [setInterval](https://www.w3schools.com/jsref/met_win_setinterval.asp)
* [setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp)

#### Pass 6

* jQuery equivalents
    * Shorthands
    * helper functions
* Closures
* Mer om object & arrayer

##### Länkar
* [JavaScript DOM Manipulation Methods ~ Plainjs.com](https://plainjs.com/javascript/manipulation/)
* [The Javascript Guide to Objects, Functions, Scope, Prototypes and Closures](http://hangar.runway7.net/javascript/guide)
* [YDKJ ~ Scope & Closures](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)
* [https://stackoverflow.com/questions/111102/how-do-javascript-closures-work/111111#111111](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work/111111#111111)
* [FunFunFunction - this & bind](https://www.youtube.com/watch?v=GhbhD1HR5vk)

#### Pass 7

* Animering i CSS & JavaScript
* Canvas
* **Dugga i grundläggande JavaScript** 

##### Länkar

* [https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
* [https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript](https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript)
* [https://www.javascripting.com/animation/](https://www.javascripting.com/animation/)
* [https://cssanimation.rocks/principles/](https://cssanimation.rocks/principles/)
* [Animate in & out @ CodePen](https://codepen.io/jesperorb/pen/QQqBQG)
* [Animate in & out @ CodePen](https://codepen.io/jesperorb/pen/bLYadB)


---
__v.8__

#### Pass 8

* Labbassistent Anton på plats

#### Pass 9

* Handledning med inlämningsuppgiften

#### Pass 10

* Handledning med inlämningsuppgiften

---
__v.9__

### `Block 3`

#### Pass 11

* Asynkronitet i JavaScript
    * `setTimeout()` / `setInterval()`
* Event loop kontra call stack
* Hur JavaScript tolkas
* `fetch()`
* Promises & Callbacks

##### Länkar

* [setInterval](https://www.w3schools.com/jsref/met_win_setinterval.asp)
* [setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp)
* [What The Heck is the Event Loop Anyway](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* [`fetch()`](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
* [Promises](https://developers.google.com/web/fundamentals/primers/promises)
* [Promises for dummies](https://scotch.io/tutorials/javascript-promises-for-dummies)

#### Pass 12

* API:er
 * Öppna API:er
 * Skillnad WebbAPI kontra API
* REST: Representational State Transfer
* Kalla på publika API:er

##### Länkar

* [**Public APIs** by _toddmotto_ @ GitHub](https://github.com/toddmotto/public-apis)
* [**Public APIs** by _abhishekbanthia_ @ GitHub](https://github.com/abhishekbanthia/Public-APIs)
* [Programmable Web API Directory](https://www.programmableweb.com/category/all/apis)
* [API-katalogen](http://apikatalogen.se/)
* [http://www.restapitutorial.com/](http://www.restapitutorial.com/)

#### Pass 13

* Promises & Callbacks
* XMLHttpRequest & `$.ajax()`
* Kalla på publika API:er

##### Länkar

* [`fetch()`](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
* [callbackhell.com](http://callbackhell.com/)
* [Promises](https://developers.google.com/web/fundamentals/primers/promises)
* [Promises for dummies](https://scotch.io/tutorials/javascript-promises-for-dummies)
* [**Promisees - Promise-visualisering**](https://bevacqua.github.io/promisees/)
* [Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
* [Arrow Functions in JavaScript ~ Fun Fun Function @ YouTube](https://www.youtube.com/watch?v=6sQDTgOqh-I)
* [Destructuring @ Hackernoon](https://hackernoon.com/getting-to-grips-with-es6-destructuring-e5b5ddb34990)
* [Default Parameters @ MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters)


---
__v.10__

#### Pass 14

* `Promise.all` / `Promise.race`
* Integrera med PHP
* PHP-proxy för att fixa CORS-error
* Skapa och kalla på eget öppet API.

###### Länkar

* [Promise.all @ MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
* 
* [`json_encode` @ PHP.net](http://php.net/manual/en/function.json-encode.php)
* [`json_decode` @ PHP.net](http://php.net/manual/en/function.json-decode.php)
* [`file_get_contents` @ PHP.net](http://php.net/manual/en/function.file-get-contents.php)
* [Get JSON with cURL](https://stackoverflow.com/a/15617547/5836872)
* [Proxy Server @ Wikipedia](https://en.wikipedia.org/wiki/Proxy_server)


#### Pass 15

* `async / await`
* Säkerhet

##### Länkar

* [async function @ MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [Async examples @ javascript.info](https://javascript.info/async-await)
* [Async await - 6 reasons @ Hackernoon](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)

---
__v.11__

#### Pass 16

* Handledning med inlämningsuppgiften

#### Pass 17

* Handledning för inlämningsuppgiften

**Inlämning av examinerande individuell uppgift 15/3**

---
__v.12__

### `Block 4`

#### Pass 18

* Vad är ett Designmönster
* Vilka mönster kan vi applicera på JavaScript
* Olika typer av designmönster
* Module Pattern

###### Länkar

* [JavScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
* [JavaScript Design Patterns: Module Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
* [Software Design Patterns @ Wikipedia](https://en.wikipedia.org/wiki/Software_design_pattern)

#### Pass 19

* Constructor Pattern
* Prototype

###### Länkar

* [A plain english guide to prototypes](http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/)
* [JavaScript and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [Prototypes in JavaScript](https://hackernoon.com/prototypes-in-javascript-5bba2990e04b)

---
__v.13__

#### Pass 20

* Objektorienterade mönster i JavaScript
* Inheritance vs. Composition
* `class`

###### Länkar

* [Classes @ MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Classes @ Javacript.info](https://javascript.info/class)

#### Pass 21

* Objektorienterade mönster i JavaScript
* Inheritance vs. Composition
* `extends`

##### Länkar

* [Classes @ MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Classes @ Javacript.info](https://javascript.info/class)

---
__v.14__

#### Pass 22

* Funktionell programmering
    * Higher Order functions
    * Currying
* Handledning med inlämningsuppgiften

###### Länkar

* [A dirt simple introduction to higher order functions](https://medium.com/humans-create-software/a-dirt-simple-introduction-to-higher-order-functions-in-javascript-b33bf9e19056)
* [Mastering the Interview: What is functional programming])(https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)


#### Pass 23

* Handledning med inlämningsuppgiften

**Inlämning av examinerade individuell uppgift 5/4**

---
__v.15__

### `Block 5`

#### Pass 24

* Node & NPM
* `npm`
    * `require`
    * `import/export`


#### Pass 25

* Byggverktyg
    * `webpack`
    * `gulp` 

---
__v.16__

#### Pass 26

* Byggverktyg forts.

#### Pass 27

* Transpilering
* Babel
* Polyfills
* Minifiering

---
__v.17__

#### Pass 28

* Utforska Node
* Sätta upp en mindre webbserver med Node


#### Pass 29

* Deploy to produktion med Node (Heroku)
* Handledning med inlämningsuppgiften

**Inlämning av examinerande inlämningsuppgift denna vecka: 26/4**

---
__v.18__

### `Block 6`

#### Pass 30

* Bibliotek & ramverk


#### Pass 31

* Bibliotek och ramverk

---
__v.19__

#### Pass 32

* Bibliotek & ramverk


#### Pass 33

* Bibliotek & ramverk

---
__v.20__

#### Pass 34

* React
    * `create-react-app` 
    * Components
    * Nested Components
* Props


#### Pass 35

* React


#### Pass 36

* React

---
__v.21__

#### Pass 37

* React


#### Pass 38

* React

#### Pass 39

* React


---
__v.22__


#### Pass 40

* React

#### Pass 41

* React

#### Pass 42

* React







