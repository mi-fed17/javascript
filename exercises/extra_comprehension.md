# Läsförståelseövningar

Övningarna nedan ska du läsa igenom och först gissa dig fram till vad svaret ska vara. Du ska inte kolla på lösningsförslagen och du ska inte köra koden i Chrome/Firefox/Opera/Safari. När du har skrivit ner svaren för varje övning kan du kolla om du hade rätt eller inte. Att du har rätt eller inte spelar egentligen ingen roll, huvudsaken här är att du ska förstå vad som händer. Svarade du inte som lösningsförslaget? Försök att förstå vad det var som gjorde så att du fick fel svar eller på vilket steg du tänkte snett på, jag har lämna några kommentarer men du kan behöva googla själv.

### Övning 1
> Vilka datatyper är följande uttryck? Varje ny rad är kommer visa en ny datatyp. Tips: använd typeof för att kontrollera ditt svar 

Exempelvis kan man svara att första uppgiften är datatypen `Number` och har värdet `1,01`. Se till att du förstår varför resultatet blir som det blir.

```js
1.01
true + true + false
'false'
5 && 8
5 || 8
!5
1 / 0
!!5
false || true
true && false || false && true
"123" - 0
typeof (typeof true)
"1000" / 10
123.4 - ''
2 < 3
'5' + "0" / '2'
'två' < 'tre'
'5' + "0" / '5' + 0
17 === 17.0
'1' + '5' - '4' * '2' - '3'
17 === '17'
'kalle' - 5
17.000000000000000000001 == 17
undefined || null || 0 || false || "foo"
```

### Övning 2

Vilket värde kommer variabeln `z` att ha efter att respektive kodrad har körts? Skriv ut vad `z` är på varje rad utan att köra koden.
```js
let z = 5;
z++;
--z;
z += 15;
let x = 8;
let y = 16;
z = y - x;
x = 10;
z = x++;
x = 2;
y = 5; 
x = x + y; 
y = x + y;
z = y;
```

### Övning 3
> Förklara i text hur funktionen nedan körs när vi kallar på den(dvs. i vilken ordning allt händer) i dessa scenarion:
 
* a) Vi kallar på funktionen med: `multiply(2, 2, 2);`
* b) Vi kallar på funktionen med: `multiply(2, 2);`
* c) Vi kallar på funktionen med: `multiply(2, 2, "2");`
* d) Vi kallar på funktionen med: `multiply(2, 2, function(){ return 2;});`

```javascript
function multiply(a, b, c){
    return a * b;
}
```

### Övning 4 

I koden ovan, vilka värden är parametrar och vilka värden är argument? Hur skiljer de sig åt och i vilket scope är parametrarna tillgängliga?

### Övning 5

Förklara i text hur denna funktion kommer att köras och vad som kommer att hända på varje rad: 

```js
const text = "Do not call me!";
function callMe(){
    const text = "Call me!";
    return text;
    console.log(text);
}

callMe();
```

### Övning 6
> Vad skriver följande kodrader ut?

__a)__
```js
function foo() {
  console.log("test");
}
foo("hej");
```

---

__b)__
```js
let a = foo(3);
console.log(a);
function foo(i) {
  return i * i;
}
```

---

__c)__
```js
console.log(foo(3, 5));
function foo(x, y) {
  return x * y;
}
```

---

__d)__
```js
console.log(foo(3, 5));
const foo = function(x, y) {
  return x * y;
}
```

---

__e)__
```js
let x = 2;
let y = 3
let a = foo(foo(x) + foo(y));
console.log(a);
function foo(i) {
  return 5 * i;
}
```
 
---

__f)__
```js
const person = {
    name: "Steffe",
    sayName(){
        console.log(this.name);
    }
}
person.sayName();
```

---

__g)__
```js
const person = {
    name: "Steffe",
}

function sayName(){
    console.log(this.name);
}
person.sayName = sayName;
person.sayName();
```

---

__h)__
```js
const animals = ["dog", "cat", "zebra", "horse", "cow"];
animals.shift();
console.log(`My favourite animal is ${animals[0]}`);
```

---

__i)__

```js
let a = 5;
function foo(a) {
  a++;
}
a += 2;
console.log(a);
```

---

__j)__
```js
function foo(a) {
  return a + 2;
};
function goo(x, y) {
  return x(y);
};
let a = goo(foo, 3);
console.log(a);
```

---

__k)__

```js
var text = "";
var a = {
    value: "c"
};
var b = {
    value: "a"
};
var c = {
    value: "b"
};
text = a.value + b.value + c.value;
console.log(text);
```

---

__l)__
```js
const a = 0;
const objekt = {
    a: 100,
    b: 200,
    c: 300
};
for(const value in objekt){
    a += value;
}

console.log(a);
```

---

__m)__
```js
function foo () {
  //Här returneras bar() innan funktionen har deklarerats
  return bar();
  //Dock så hoistas bar() upp ovanför return vilket gör att funktionen ändå 
  //kallas på eftersom här blir funktionen deklarerad innan return p.g.a hoist
  function bar() {
    return "FOOBAR!!";
  }
}
console.log(foo());
```

---

### Lösningsförslag

### Övning 1
```js
1.01                 // Float number, still 'Number'
// true === 1 and false which means that this is 1 + 1 + 0
true + true + false
// Just a string, you can convert it with Boolean('false')
'false'
//5 is true, so we negate that and get false
!5
// Can't divide 0, we get 'Infinity'
1 / 0
// 5 is true, negate that and get false, negate that and get true
!!5
// one must be true, the second is true
false || true
// Neither is true so we get false
true && false || false && true
// 123 as a Number, the 0 converts it to a number
"123" - 0
// Implicit conversion of "1000" to 1000 === 100
"1000" / 10
// empty string is false === 0, so nothing happens
123.4 - ''
// 2 is not bigger than 3 so we get false
2 < 3
// "5" + "0" is concatenation so "50". We can't divide a string so "2" is ignored
'5' + "0" / '2'
// comparing strings, false
'två' < 'tre'
// The '5' is ignored but the 0 is converted to a string === "500"
'5' + "0" / '5' + 0
// the decimal doesn't add anything so === true
17 === 17.0
// Only numbers are being implicit converted
'1' + '5' - '4' * '2' - '3'
// The are no strictly the same === false
17 === '17'
// But these are kinda the same === true
17 == '17'
// NaN, you can't subtract 5 from a string
'kalle' - 5
//every value before is false, which will reach 'foo' and return 'foo'
undefined || null || 0 || false || "foo"
```


### Övning 2 

```js
let z = 5;
// z = z + 1;
z++;
// z = z - 1;
--z;
// z = z + 15;
z += 15;
let x = 8;
let y = 16;
// z = 16 - 8
z = y - x;
// x = 10
x = 10;
// z = 10
z = x++;
x = 2;
y = 5; 
// x = 7
x = x + y; 
// y = 7 + 5
y = x + y;
// z = 12
z = y;
```

### Övning 3 
> Denna får ni beskriva med egna ord men här är ett ungefärlig förklaring

__a)__
Funktionen tar 3 argument för att vi har 3 parametrar, alla parametrar multipliceras med varandra inuti funktionen. Vilket gör att vi får `2 * 2 * 2` vilket för att funktionen returnerar `8`
__b)__
Vi kallar på funktionen med enbart 2 argument. Detta skulle möjligtvis kunna gå men vi har sagt att vi ska lägga ihop **alla 3 värden**, om ett av dessa värden saknas så kommer parametern (`c` i det här fallet) att bli `undefined` vilket betyder att vi gör följande `return 2 * 2 * undefined`. Detta kommer att resultera att vi får tillbaka `NaN` (Not A Number). Alternativet är att vi kollar så att alla värden finns med en if-sats och sedan lägger ihop värdena.
__c)__
JavaScript konverterar i smyg alla strängar som kan konverteras till nummer, i detta fall så kan `"2"` bli `2` och inget konstigt händer. Funktionen fungerar som den ska.
__d)__
Nej, vi kan inte skicka med en funktion heller. Funktionen förväntar sig ett värde, en funktion är en variabel men den kan inte multipliceras. Vi skulle kunna lösa detta med följande:
```js
function multiply(a, b, c){
    return a * b * c();
}
```
Men samtidigt så skulle vi då inte kunna kalla på funktionen med ett sista värde som är ett nummber, sista värdet måste här alltid vara en funktion i så fall. Dum idé!


> Förklara i text hur funktionen nedan körs när vi kallar på den(dvs. i vilken ordning allt händer) i dessa scenarion:
 
* a) Vi kallar på funktionen med: `multiply(2, 2, 2);`
* b) Vi kallar på funktionen med: `multiply(2, 2);`
* c) Vi kallar på funktionen med: `multiply(2, 2, "2");`
* d) Vi kallar på funktionen med: `multiply(2, 2, function(){ return 2;});`

```javascript
function multiply(a, b, c){
    return a * b * c;
}
```

### Övning 4

Argumenten är de värden som skickas med när vi kallar på funktionen. Dessa kan vara ensamstående värden eller variabler. Det spelar ingen roll vad variablerna heter när vi skickar med de som argument, de kommer ändå att få namnen `a,b,c` **inuti** funktionen.
```js
let blabb = 4;
let slabb = 2;
let klabb = 2;
multiply(2,2,2);
multiply(blabb, slabb, klabb);
```

Parametrarna är de variabler som är innanför paranteserna på en funktion. I det här fallet så är det `a`, `b` och `c`. I princip är det som att vi skapar nya variabler i scopet men vi behöver aldrig skriva `var` eller `let`. `a`, `b` och `c` existerar bara i funktionens scope.
```js
function multiply(a, b, c){
    let a;
    let b;
    let c;
    return a * b * c;
}
```


### Övning 5

Vi deklarerar och initierar en global variabel som är av typen `String` och som heter `text`. Vi skapar en funktion som heter `callMe`. Funktionen `callMe` deklarerar en ny variabel som också heter `text`. `text` finns i två olika scope och kan därför ha olika värden utan att störa varandra. Vi returnerar direkt detta inre värde `text` som när vi returnerar det är `"Call me!"`. Eftersom `console.log` ligger efter `return` så kommer de raderna aldrig att nås eftersom vi redan har "gått ur" funktionen, när vi skriver `return` så lämnar vi funktionen. `callMe()` kommer att returnera texten, men den kommer aldrig sparas eller skrivas ut någonstans eftersom vi varken loggar ut den eller sparar den i en variabel. 

### Övning 6

__a)__
```js
function foo() {
  console.log("test");
}
foo("hej");
```

Svar: `"test"`
Argumentet `"hej"` spelar ingen roll, vi använder det ändå inte så det försvinner bara när vi kallar på funktionen.

__b)__
```js
let a = foo(3);
console.log(a);
function foo(i) {
  return i * i;
}
```

Svar: `9`
Funktionen `foo` gångrar värdet som vi skickar in med sig själv. `a` blir därför 3*3 = 9.

__c)__
```js
console.log(foo(3, 5));
function foo(x, y) {
  return x * y;
}
```

Svar: `15`, vi kan kalla på en function declaration innan vi har skapat den. Den **hoistas** upp längst upp i scopet

__d)__
```js
console.log(foo(3, 5));
const foo = function(x, y) {
  return x * y;
}
```

Svar: `undefined is not a function` vi kan INTE kalla på en function expression innan vi har skapat den. Den **hoistas inte** upp längst upp i scopet

__e)__
```js
let x = 2;
let y = 3
let a = foo(foo(x) + foo(y));
console.log(a);
function foo(i) {
  return 5 * i;
}
```
Svar: `125`

`foo` returnernar det värde vi skickar in och gångrar det med 5. På rad tre plussar vi ihop 2 stycken returnvärden från två anrop till `foo`. Så rad tre blir

```
foo(2) === 15
foo(3) === 10
15 + 10 === 51
foo(25) === 125
```

---

__f)__
```js
const person = {
    name: "Steffe",
    sayName(){
        console.log(this.name);
    }
}
person.sayName();
```

Svar: `"Steffe"`

När vi använder `this` pekar vi mot de inre egenskaperna av ett objekt. `this.name` är där vi har skrivit `name: "Steffe`. När vi kallar på funktionen som vanligt så hämtas detta namn upp.

---

__g)__
```js
const person = {
    name: "Steffe",
}

function sayName(){
    console.log(this.name);
}
person.sayName = sayName;
person.sayName();
```
Svar: `"Steffe"`

Vi behöver inte direkt lägga funktionen i objektet. I första läget så kommer funktionen `sayName` INTE skriva ut Steffe då funktionen inte ligger i objektet. Men på näst sista raden så ger vi objektet funktionen så att objektet kommer att se ut som föregående övning och vi får samma resultat. Skulle vi kappa på funktionen som den är `sayName()` så får vi `this === window` medan om vi kallar på `person.sayName` så får vi objektets namn som är `"Steffe"`.

---

__h)__
```js
const animals = ["dog", "cat", "zebra", "horse", "cow"];
animals.shift();
console.log(`My favourite animal is ${animals[0]}`);
```
Svar: `"cat"`

---

__i)__

```js
let a = 5;
function foo(a) {
  a++;
}
a += 2;
console.log(a);
```

Svar: `7`

funktionen `foo` kallas aldrig på så det är bara den femte raden som gör någonting med `a`. Därför får vi 7 och inte 8.

---

__j)__
```js
function foo(a) {
  return a + 2;
};
function goo(x, y) {
  return x(y);
};
let a = goo(foo, 3);
console.log(a);
```

Svar: `5`

`goo`s första parameter föräntas vara en funktion eftersom vi kallar på den med den andra parametern `x(y)`. `foo` är den funktion som vi skickar med och kallar på den andra parametern med så det vi säger i `goo` är `return foo(3)`. `foo(3)` i sin tur returnerar `return 3 + 2` vilket gör att `a` är `4`;

---

__k)__
```js
var text = "";
var a = {
    value: "c"
};
var b = {
    value: "a"
};
var c = {
    value: "b"
};
text = a.value + b.value + c.value;
console.log(text);
```

Svar: `"cab"`

Vi hämtar värdet av varje egenskap `value` i de olika objekten. `value` är dock en sträng i samtliga fall och inte själva värdet. namnet `value` är nyckeln.

---

__l)__
```js
const a = 0;
const objekt = {
    a: 100,
    b: 200,
    c: 300
};
for(const value in objekt){
    a += value;
}

console.log(a);
```

Svar: **`"0abc"`**

`for..in` loopar inte igenom värdena utan enbart nyklarna. Så vi får `a,b,c` och inte `100,200,300`. Vi har redan `0` sen konkatenerar vi på bokstäverna vilket betyder att vi får **`"0abc"`**

---

__m)__
```js
function foo () {
  //Här returneras bar() innan funktionen har deklarerats.
  return bar();
  //Dock så hoistas bar() upp ovanför return vilket gör att funktionen ändå 
  //kallas på eftersom här blir funktionen deklarerad innan return p.g.a hoist
  function bar() {
    return "FOOBAR!!";
  }
}
console.log(foo());
```

Svar: `"FOOBAR!!"`

Märk också att funktionen kallas på när den returnernas. Om vi skulle skriva `return bar` så skulle vi behöva göra följande:

```js
function foo () {
  //Här returneras bar() innan funktionen har deklarerats.
  return bar();
  //Dock så hoistas bar() upp ovanför return vilket gör att funktionen ändå 
  //kallas på eftersom här blir funktionen deklarerad innan return p.g.a hoist
  function bar() {
    return "FOOBAR!!";
  }
}
const foobar = foo();
console.log(foobar());
```

Vi måste alltid kalla på funktionen `()` för att den ska köras. Annars så skickar vi bara runt variabeln som funktionen ligger i.
