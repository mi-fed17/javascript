# Övningar - JavaScript

**Vissa av dessa övningar känner ni igen sen tidigare och vissa är nya och mer specifika för JavaScript, t.ex. när ni ska använda `prompt`. Antingen så gör ni om övningarna i JavaScript eller så letar ni upp övningar som ni inte gjort förut. Det kan dock vara bra att göra om övningar sen tidigare då ni vet hur de ska lösas, då kan ni fokusera mer på att lära er syntaxen i JavaScript.**

## Länkar

* [You Don't Know JavaScript ~ Up And Going](https://github.com/getify/You-Dont-Know-JS/tree/master/up%20%26%20going)
* [w3Schools.com - JavaScript](https://www.w3schools.com/js/)

## Innehåll

<!-- MarkdownTOC bracket="round" autolink="true" markdown_preview="github" -->

- [Selektion](#selektion)
    - [Kvot och rest](#kvot-och-rest)
    - [Kokar vattnet?](#kokar-vattnet)
    - [Går det att bada?](#g%25C3%25A5r-det-att-bada)
    - [Hästtokig!](#h%25C3%25A4sttokig)
    - [Vad blir det för middag?](#vad-blir-det-f%25C3%25B6r-middag)
    - [Vad blir det för middag 2](#vad-blir-det-f%25C3%25B6r-middag-2)
    - [Frågesport](#fr%25C3%25A5gesport)
- [Iteration](#iteration)
    - [For-loopar](#for-loopar)
    - [FOR - Summera](#for---summera)
    - [While & Modulo - Skriv ut jämna tal](#while--modulo---skriv-ut-j%25C3%25A4mna-tal)
    - [FOR - Fårinvasion](#for---f%25C3%25A5rinvasion)
    - [Mjau Machine!](#mjau-machine)
    - [FOR - Fårepidemi](#for---f%25C3%25A5repidemi)
    - [FOR FOR - Multiplikation](#for-for---multiplikation)
- [Funktioner](#funktioner)
    - [Multiply](#multiply)
    - [Calculate](#calculate)
    - [Maxing, relaxing, acting all cool](#maxing-relaxing-acting-all-cool)
    - [Maxing, not relaxing](#maxing-not-relaxing)
    - [Refaktorera](#refaktorera)
    - [Mjau Machine Reborn](#mjau-machine-reborn)
    - [The Horror](#the-horror)
    - [Even and Odd](#even-and-odd)
    - [Calcy](#calcy)
    - [String checker](#string-checker)
    - [String converter](#string-converter)
    - [String extractor](#string-extractor)
- [Arrayer](#arrayer)
    - [Komma åt värden i en array](#komma-%25C3%25A5t-v%25C3%25A4rden-i-en-array)
    - [Ändra ett värde i en array](#%25C3%25A4ndra-ett-v%25C3%25A4rde-i-en-array)
    - [Loopa genom en array](#loopa-genom-en-array)
    - [Loopa och multiplicera](#loopa-och-multiplicera)
    - [Filtrera array efter längd på innehållet](#filtrera-array-efter-l%25C3%25A4ngd-p%25C3%25A5-inneh%25C3%25A5llet)
    - [Filtrera array beroende på innehåll](#filtrera-array-beroende-p%25C3%25A5-inneh%25C3%25A5ll)
    - [Filtrera array baserad på sträng eller nummer](#filtrera-array-baserad-p%25C3%25A5-str%25C3%25A4ng-eller-nummer)
- [Arraymetoder](#arraymetoder)
    - [Pop Pop!](#pop-pop)
    - [Push](#push)
    - [Shift](#shift)
    - [Unshift](#unshift)
    - [Splice](#splice)
    - [Splice 2  - The Return](#splice-2----the-return)
    - [concat](#concat)
    - [Sort 1](#sort-1)
    - [Sort 2](#sort-2)
    - [Reverse](#reverse)
- [Objekt](#objekt)
    - [Intro](#intro)
    - [Skapa ett objekt](#skapa-ett-objekt)
    - [Skriv ut innehållet i ett objekt](#skriv-ut-inneh%25C3%25A5llet-i-ett-objekt)
    - [Skapa en kopia av ett objekt](#skapa-en-kopia-av-ett-objekt)
    - [Ta bort en egenskap från ett objekt](#ta-bort-en-egenskap-fr%25C3%25A5n-ett-objekt)
    - [Ändra ett värde i ett objekt](#%25C3%25A4ndra-ett-v%25C3%25A4rde-i-ett-objekt)
    - [Loopa genom ett objekt](#loopa-genom-ett-objekt)
    - [Loopa igenom properties](#loopa-igenom-properties)
    - [En funktion som skriver ut objektet](#en-funktion-som-skriver-ut-objektet)

<!-- /MarkdownTOC -->


## Selektion

### Kvot och rest

Skriv ett program som läser in ett tal (med prompt) och beräknar heltalskvoten och resten när talet divideras med 2. Resten av divisionen fås när talet beräknas med modulo 2 (%). Heltalsdivision beräknas med \ . Det se ut på följande sätt:

prompt: 10
Heltalskvoten av talet dividerat med 2 är: 5
Resten av talet modulo 2 är: 0
prompt: 5
Heltalskvoten av talet dividerat med 2 är: 2
Resten av talet modulo 2 är: 1

### Kokar vattnet?

Undefined vill ha ett alarm som anger om vattnet kokar eller inte. Han vill även att man visar när det når 50 grader så att han är beredd! Om det inte är 50 eller 100 grader så skall det endast säga att det inte kokar.

1. Läs in hur många grader vattnet är (prompt)
2. Om vattnet är 100 grader skriv ut: Vattnet kokar!
3. Om vattnet är 50 grader skriv ut: Det är halvägs nu!
4. Annars skriv ut: Vattnet kokar inte

### Går det att bada?

Null gillar att bada, dock tar vattnet ibland slut hemma och dessutom kan värmen variera ganska mycket. Skriv ett program som kollar om det finns vatten och om det är tillräckligt varmt.

1. Läs in om det finns vatten (true /false)
2. Läs in hur många grader vattnet är
3. Om det finns vatten och det är varmare än 30 grader skriv ut: ”Varsågod och bada!”
4. Om det INTE finns vatten eller det är kallare än 30 grader skriv ut: ”Det går inte att bada.”

### Hästtokig!

Iffy äger ett stall med hästar av typerna A-ponny, B-ponny och C-ponny. Iffy skall för första gången anordna en tävling. Tävlingsreglerna är följande: För att få tävla måste man fyllt 12år. För att få tävla på A-ponny måste man väga under 30kg, B-ponny under 50kg och C-Ponny under 65kg. Algoritmen ser således ut som sådan:

1. Läs in användarens ålder
2. Om åldern är under 12 år så:

    2.1. Skriv ut: ”Du är för ung för att tävla!”

    2.2. Låt inte användaren fortsätta

3. Om åldern inte är under 12 år så

    3.1. Läs in användarens vikt

    3.1.1. Om vikten är under eller lika med 30kg skriv ut: ”A-ponny”

    3.1.2. Om vikten är under eller lika med 50kg, och över 30kg skriv ut ”B-ponny”

    3.1.3. Om vikten är under eller lika med 65kg och över 50kg skriv ut ”C-ponny”

    3.1.4. Om vikten är över 65kg skriv ut ”Det finns inga ponnys för denna viktklass ”

### Vad blir det för middag?

Ibland kan det vara fördelaktigt att använda sig av switch-satser istället för if-satser. I denna uppgift skall ni använda er av switch.
Ditt program ska skriva ut vilket rätt som ska tillagas beroende på vilken dag som skrivs in i prompten.

1. Läs in dag ifrån användaren
2. Om dagen är…
    
    2.1. … måndag skriv ut: Kyckling

    2.2. … tisdag skriv ut: Pannkaka

    2.3. … onsdag skriv ut: Ärtsoppa

    2.4. … torsdag skriv ut: Gryta

    2.5. … fredag skriv ut: Kalv

    2.6. … lördag skriv ut: Vegetariskt

    2.7. … söndag skriv ut: Kålsoppa


I vilka fall kan det vara smidigt att använda switch-satser istället för if-satser? När gäller vice versa? Svara i text.

### Vad blir det för middag 2

Ta din kod som du gjorde från förra uppgiften. Nu ska du dock med hjälp av en __fall-through__ göra så att programmet skriver ut "Kålsoppa" för fredag, lördag och söndag. Du ska alltså skriva "Kålsoppa" endast en gång men den switchen ska gälla för flera dagar.

### Frågesport

Skapa en frågesportsapplikation där användare
med hjälp av en prompt får besvara minst 5 frågor.
Applikationen ska även fråga efter användarens namn och lagra detta.


Applikationen ska hålla koll på om användaren svarar rätt,
och i så fall öka antalet rätta svar med 1.

När fem frågor är besvarade ska text liknande den nedan skrivas ut i dokumentet:

1-2 Rätta svar: "Nully won bronze!"
3-4 Rätta svar: "Nully won silver!"
5   Rätta svar: "Wow, Nully went gold!"
0   Rätta svar: "This is a sad day for sports"

## Iteration

Ibland behöver vi göra samma sak många gånger. Ibland behöver vi göra samma sak fast med en liten variation flera gånger. Så fort vi behöver göra någonting flera gånger bör vi se det som en ledtråd till att vi behöver iterera.
Som tumregel kan du tänka att vi använder for-loopar när vi vet hur många varv vi vill ”snurra” (iterera), och while-loopar när vi inte vet antalet varv.

### For-loopar
Låt oss färska upp minnet med hur man skriver en for-loop. Vi exemplifierar genom att skriva en snutt kod som skriver ut 0 till 10

```javascript
for(var i = 0; i <= 10; i++){
    console.log(i);
}
```

Men låt oss analysera vad som händer i rad två lite närmare. När vi definierar en for-loop kan vi se det som att vi ger den tre saker separerade med semi-kolon (;). Dessa tre är i ovan exempel:

1. var i = 0;
2. i < 10;
3. i++;

Detta kan översätta ungefär till:

1. Deklarera en variabel vi vill använda som räknare.
2. Definiera ett condition, hur länge vi ska räkna
3. Inkrementera en variabel, hur mycket vår räknare ska öka

### FOR - Summera

Använd loopen ovan, fast istället för att skriva ut varje siffra: Lägg ihop sifforna i en ny variabel samt skriv ut den variabeln med console.log

### While & Modulo - Skriv ut jämna tal

Skriv en while-loop med ett condition som gör så att endast siffror som är __jämna tal__ skrivs ut till konsolen.

Låt loopen göra detta från 10 till 0.
Använd koden nedan:

```javascript
var num = 10;
while(){
    //Din kod
}
```

### FOR - Fårinvasion

Mina får förökar sig snabbt och jag behöver en webbapp som kan räkna ut hur 
många de kommer att vara inom ett år. Varje månad kommer fåren att
multipliceras med 4. 

Använd dessa tre variabler nedanför:

```javascript
var numberOfSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;
```

För att sedan skriva ut detta för varje månad:

```bash
Output:
There will be 16 sheep after 1 month(s)!
There will be 64 sheep after 2 month(s)!

```

### Mjau Machine!

Jag vill ha ett program som mjauar!

Programmet fungerar som så att den frågar användaren efter hur många mjau den vill ha. Om användaren skriver "3", ska programmet svara med "mjau mjau mjau". Om användaren skriver "4" ska programmet svara med "mjau mjau mjau mjau". Om användaren skriver "0" ska programmet "avslutas", d.v.s. inte ta in mer input.
Programmet ska fungera som följande: 

1. Läs in ett tal ifrån användaren
2. Om talet är inte är 0

    a. Skriv lika många "mjau" som talet, i rad

    b. Återgå till 1
    
3. Annars skriv ut ":(" och låt inte användaren fortsätta skriva in siffror.

### FOR - Fårepidemi

Det här funkar inte! Även om vi halverar antalet får är
det fortfarande alldeles för många. Implementera följande 
conditions innan vi går mot en epedemi!

1. Om månaden är en multipel av 4, hitta 75% av populationen.
Logga ut antalet i formatet som visas nedanför. Ta sedan bort
detta antal från totala antalet får.

2. Annars, om populationen är över 10000, hitta hälften av populationen.
Logga ut antalet i formatet som visas nedanför. Ta sedan bort 
detta antal från totala antalet får.

Använd följande format för att logga ut information:
Removing `<number>` sheep from the population.

Antalet får ska fortfarande alltid multipliceras med 4,
du behöver alltså inte editera någon redan existerande kod sedan tidigare


KORREKT OUTPUT:

There will be 16 sheep after 1 month(s)!

There will be 64 sheep after 2 month(s)!

There will be 256 sheep after 3 month(s)!

Removing 192 sheep from the population.

There will be 256 sheep after 4 month(s)!

There will be 1024 sheep after 5 month(s)!

There will be 4096 sheep after 6 month(s)!

There will be 16384 sheep after 7 month(s)!

Removing 12288 sheep from the population.

There will be 16384 sheep after 8 month(s)!

Removing 8192 sheep from the population.

There will be 32768 sheep after 9 month(s)!

Removing 16384 sheep from the population.

There will be 65536 sheep after 10 month(s)!

Removing 32768 sheep from the population.

There will be 131072 sheep after 11 month(s)!

Removing 98304 sheep from the population.

There will be 131072 sheep after 12 month(s)!


### FOR FOR - Multiplikation

Använd nested for loops, alltså en for-loop i en for-loop för att lösa denna uppgift.

Din kod ska skriva ut multiplikationstabellen upp till 10 enligt följande struktur:

```
1 2 3 4 5 6 7 8 9 10
----------------------
2 4 6 8 10 12 14 16 20
----------------------
3 6 9 12 15 18 21 24 27 30
```

## Funktioner

Om du har glömt bort ser en funktion ut på detta sätt:

```javascript
function functionName(parameter){
    return parameter;
}
```

Det som är innanför paranteserna är en __parametrar__. De parametrar som skickas med kan användas inom funktionen utan att deklareras och vi kan använda parametern inom vår funktion. Funktionen är dock bara HUR programmet ska funka och funktionen gör ingenting förrän vi kallar på funktionen och skickar med värden. Detta betyder att vi kan skapa kod som KAN användas men används bara när vi bestämmer oss för att kalla på koden.

Om vi ska skicka med värden skickar vi med dem som __argument__. De argument vi skickar med till funktionen blir funktionens parametrar. Om vi ska kalla på en funktion samt skicka med ett argument gör vi på följande sätt:

```javascript
function functionName(parameter){
    console.log(parameter)
}

functionName('Jesper');
//Output: Jesper
```

### Multiply

1. Skapa en namngiven funktion: multiply, som tar in 2 _parametrar_.
I funktionen, multiplicera dessa nummer med varandra och console.loggar resultatet av multiplikationen. Du får använda vilka namn du vill på parametrarna.

2. Kalla på din funktion multiply med siffrorna 8,4 som _argument_

Om du gjort rätt ska du få siffran 32.

### Calculate

1. Skapa en funktion som heter calculate och som istället tar 3 parametrar och sedan multiplicerar de två första parametrarna med varandra och delar värdet med den tredje parametern, alltså: `param1 * param2 / param3`.
3. Console.logga svaret
2. Kalla sedan på din funktion med valfria värden.

### Maxing, relaxing, acting all cool

1. Skriv en funktion som heter `highestNumber` som tar två tal som parametrar.
2. Funktionen ska sedan jämföra vilket av talet som är störst och console.logga det största talet.
3. Kalla på din funktion med två valfria värden.

### Maxing, not relaxing

1. Använd funktionen som du skapade i förra övningen.
2. Båda parametrarna kan dock vara samma värde. Lägg till kod som console.loggar ut "Samma värde" om båda parametrarna är likadana. 
3. Vi kan även skicka med andra värden än t.ex. heltal. Vi skulle kunna skicka med en sträng, detta vill vi dock inte. Se till så att din funktion console.loggar "Inte ett nummer" om något av värdena är något annat än ett nummer. Detta kan man göra med den inbyggda funktionen: __[isNaN()](http://www.w3schools.com/jsref/jsref_isnan.asp)__

### Refaktorera

Koden ovan är dock inte optimal. För det mesta vill vi att funktioner endast returnerar värden. En funktions uppgift ska ju vara att returnera värden så att vi kan återanvända vår kod. När vi har massa console.log på det här sättet blir koden svårare att återanvända så vi vill nu skriva om våra funktioner så att de endast returnerar värden.

__Refaktorera__ dina funktioner som du tidigare skapade: 

* De två första funktionerna (multiply och calculate) ska __returnera__ det slutgiltiga värdet av beräkningarna.
* Den tredje funktionen `highestNumber` ska __returnera__ det högsta värdet av de två värden som skickas in som parametrar. Om dock värdet inte är ett nummer ska funktionen returnera `false` och om de båda parametrarna är samma värde ska funktionen returnera _"Samma värde"_

Spara värdena som returneras på följande sätt:

```javascript
var multiplyAnswer = multiply(5,5);
```

Samt console.logga resultaten.

### Mjau Machine Reborn

Eftersom __alla__ gillar katter så ska vi refaktorera vår Mjau Machine.

Du ska skriva en funktion som ska ha samma funktionalitet som vår ursprungliga Mjau Machine men nu i form av en funktion.

Den ska ta antalet mjau som en parameter och köras tills mjau == 0.


### The Horror

Nedan är en helt onödig funktion som console.loggar "The Horror! The Horror!". Varför denna funktion finns kommer vi aldrig få veta men vi ska nu använda den till denna övning.

```javascript
function theHorror() {
  console.log('The horror! The Horror!');
}

```

1. Du ska göra om funktionen till en anonym funktion som sparas i en variabel som heter `theHorror`.
2. Testa att kalla på funktionen både före och efter den är deklarerad och se vilken av anropen som alertar något. (Kolla längst till höger i konsolen för att se vilken rad som körs i din kod)
2. Du ska sedan även göra om funktionen till en anonym funktion som kallar på sig själv när din sida laddas. (Kolla genomgången för tips)
3. Hur skulle vi kunna skicka med ett argument in i den anonyma funktionen?

### Even and Odd

Använd while-loopen du skapade från i tisdags enligt uppgiften:

>Skriv en while-loop med ett condition som gör så att endast siffror som är jämna tal skrivs ut till konsolen.


Denna loop ska du nu göra om till en funktion som tar 2 parametrar.
* Första parametern ska vara siffran som loppen ska räkna ner ifrån, alltså hur många värden funktionen ska gå igenom.
* Andra parametern ska vara om funktionen ska skriva ut jämna eller ojämna värden (even or odd)

### Calcy

Skriv en funktion som tar 2 parametrar. Parametrarna ska vara två heltal. Funktionen ska multiplicera heltalen utan att använda *-operatorn.


### String checker

Till uppgifterna nedan kan det vara bra att kolla igenom: 
__[String Methods @ w3Schools.com](http://www.w3schools.com/js/js_string_methods.asp)__

Skriv en funktion som tar in en parameter. Parametern ska vara en string. Funktionen ska sedan returnera strängens längd på detta sätt:

```bash
"Strängen du matade in är 14 tecken lång"
```

### String converter

Skapa en funktion som heter `convertString`, funktionen ska ta två parametrar. Den första parametern ska vara en sträng som skickas med, typ: "Goodbye World". Den andra parametern som skickas med ska bestämma om strängen ska konverteras till bara stora bokstäver eller bara små bokstäver.

### String extractor

Skapa en funktion som tar en parameter, argumentet som skickas in ska vara en sträng. Funktionen ska sedan returnera det sista tecknet i strängen som skickas in.
(substr samt length kan användas här)


## Arrayer

Nedan kommer lite övningar för att öva er på att jobba med arrayer. För att skapa en array använder man följande syntax:

```javascript
var myArray = [];
```

Detta skapar en tom array, `[]` indikerar att det är en array som skapas.

```javascript
var myArray = [ 1, 2, 3];
```

Varje värde i en array är separerade med ett komma. Det ska dock inte vara ett komma efter det sista värdet. Detta är en array med tre värden. Värde 1 har index 0, värde 2 har index 1 samt värde 3 har index 2. Platsen i arrayen börjar räknas ifrån 0.

### Komma åt värden i en array

Vi ska börja med att skriva ut olika värden i en array. Om vi har en array som denna:

```javascript
var yourArray = [23, 45, 54, 12, 77];
```

1. Skriv ut det första och sista värdet (23 & 77) i denna array med hjälp av console.log. 
2. Vilka index ligger värdena på?

### Ändra ett värde i en array

Om vi redan har en array som den ovan kan vi även direkt ändra på ett visst värde på samma sätt som när vi tilldelar en variabel ett värde med `=`.

1. Ändra sista värdet i `yourArray` genom att tilldela det nya värdet `1`.
2. Console.logga arrayen efter att du har lagrat det nya värdet för att se att värdet verkligen har ändrats.

### Loopa genom en array

För att komma åt alla värden i en array vill vi ju inte skriva in varenda index, speciellt inte om vi inte vet hur lång arrayen är, alltså hur många värden som finns inuti den. Vi kan inte bara skriva ut hela innehållet i  arrayen med `console.log(myArray);` heller, det kommer bara att skriva ut hela arrayen och inte alla värden för sig. Tur att loopar finns.

Du har denna array:

```javascript
var bestArray = [ 1, 2, 3, 4, 5];
```

Nu ska du loopa igenom arrayen och skriva ut varje värde i arrayen. Tänk på att längden av en array kan man ta ut med `.length` samt att varje värde i en array har ett index som man kommer åt värdet ifrån.

### Loopa och multiplicera

Använd samma array som tidigare. Nu ska du dock loopa igenom arrayen och multiplicera varje värde i arrayen med summan av det föregående värdet. D.v.s, 1 * 2 * 3.. etc.

Spara värdet i en `var sum` och console.logga sedan ut denna variabel efter att loopen har körts klart

### Filtrera array efter längd på innehållet

Du ska utgå från följande array:

```javascript

var okArray = [ "fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];
```

Du ska loopa igenom arrayen och console.logga dess värden. Dock ska din loop inte skriva ut strängar som är längre än 5 tecken. `"fine"`, `"FINE"`, `"good"` och `"sweet"` ska alltså skrivas ut men inte `"whatisthisstuff?"` och `"i don't even live here"`. 

Kom ihåg att man kan ta ut en strängs längd på samma sätt som man tar ut längden på en array.

### Filtrera array beroende på innehåll

Om vi kan filtrera efter hur lång en sträng är kan vi även filtera arrayen baserat på andra kriterier. Om vi använder samma array som tidigare ska vi nu bara skriva ut strängen i arrayen om strängen är `"fine"`. Detta gäller alltså för både `"fine"` och `"FINE"`.

### Filtrera array baserad på sträng eller nummer

```javascript
var worstArrayYet = ["string", true, 42, "another string", 54, null, 12];

```

Vi kan använda `typeof` eller `isNaN()` för att vad för typ någonting är, om det t.ex. är en funktion eller en sträng. Ta hjälp av `typeof` eller `isNaN()för att lösa denna uppgift.

Du ska loopa igenom arrayen `worstArrayYet` och ska sedan console.logga varje sträng som förekommer i arrayen. Men om värdet i arrayen är ett nummer ska det värdet läggas till i `var sum;` för att sedan console.loggas. Om det är något annat än en sträng eller ett nummer ska ingenting ske.

## Arraymetoder

### Pop Pop!

Ibland vill man ta bort ett värde ur en array, då finns det olika inbyggda metoder man kan använda. Det vanligaste brukar vara att man använder `.pop()`. `.pop()` tar ut det sista värdet ur en array.

```javascript
var popArray = [5, "hello", 54, 17, 23];
```

1. Poppa sista värdet i arrayen ovan. 
2. Fortsätt poppa tills arrayen är tom skriv ut i console.log efter varje pop
3. Console.logga arrayen till slut för att se att alla värden är borta.

### Push

Nu har vi tagit bort alla värden, det var ju dumt. Men vi kan lägga till nya värden med `.push()`. `.push()` lägger till ett nytt värde sist i arrayen.

```javascript
popArray.push(12);
```

1. Lägg till ett nytt värde i din array med push.
2. Lägg till två nya värden samtidigt med push!

### Shift

`.shift()` tar också ut värden ur en array. Denna metod tar dock ut det första värdet i en array.

1. Shifta arrayen två gånger med `.shift()`
2. Console.logga arrayen efter varje gång du shiftar för att se innehållet i arrayen.

### Unshift

Det finns även en `.unshift()` som är `.shift()`s motsats. Istället för att lägga värdet sist i arrayen som `.pop()` gör så läggs värdet nu först i arrayen.

1. Använd `.unshift()` för att lägga till två valfria värden i arrayen.
2. Logga ut arrayen efter varje `.unshift()` för att se resultatet.

### Splice

`.splice()` används för att ta ut den del av en array. Man kan skicka med ett argument som säger vilket index som beskärningen ska ske. Splice fungerar ungefär som `.substring()`. 

1. Ta ut de 2 sista värdena i din array med metoden `.splice()`.
2. Ta ut de 2 sista värdena i din array med metoden `.splice()` och lagra dessa värden i en ny array.
3. Logga ut båda arrayerna för att se innehållet efteråt.

### Splice 2  - The Return

Splice kan även ta ett andra argument så som substring. Det andra värdet blir hur många värden som ska plockas ut. `.splice(0,2)` börjar på index 0 och tar ut två värden.

1. Ta ut de två mellersta värdena i din array och lagra dem i en ny array.

### concat

```javascript
var myArray1 = [1,2,3];
var myArray2 = [4,5,6];
```

Metoden `.concat()` kan sätta ihop två arrayer till en array. Vi har stött på ordet _concat_ förut, det är ett vanligt förekommande ord som betyder att man sätter ihop två saker.

1. Sätt ihop arrayerna ovan med hjälp av `.concat()` och lagra den nya arrayen i en ny variabel.

### Sort 1

Det finns en inbyggd sorteringsfunktion som kan användas på arrayer som sorterar alla värden i arrayen baserat på dess värde. 

1. Sortera arrayen nedan med hjälp av `.sort()`
2. Console.logga sedan arrayen så att du ser att arrayen har blivit sorterad

```javascript

var sortingArray = [ 45, 23, -5, 12];
```

### Sort 2

Men hur blir det när vi ska sortera värden som inte är nummer?

Sortera följande array med `.sort()` och se vad som händer! Testa att använda olika sorters värden och se hur det sorteras.

```javascript

var crazySort = ["string", "hej", "what", "wordsyo"];
```

### Reverse

Det finns redan en inbyggd funktion som vänder på vår array så vi slipper loopa igenom och vända på den själva

1. Använd `.reverse()` för att vända på din numera sorterade array!


## Objekt

### Intro
Objekt är grunden till det mesta i JavaScript. Nästan allting i JavaScript är ett objekt. Enkelt sagt används de för att lagra data på liknande sätt som en array men ett objekt är mer användbart. Delvis är det mer användbart eftersom man kan namnge alla variabler man sparar istället för att referera till dem via ett index. Objekt har olika `property` som är bundet till ett `value`. Property är namnet man refererar till som när vi använder oss av en variabel, `value` är värdet på denna property.

```javascript

var myObject = {};

```

Ett objekt skapas på detta sätt med hjälp av två curly brackets för att indikera att det är ett objekt.

```javascript

var teacher = {
    name: 'Jesper',
    age: 25
};
```

Ovan har vi ett enkelt objekt. Precis som med en array öppnar vi och stänger objektet med brackets. Varje par är separerade med komman. För att visa vad som är en property name och vad som är value separerar vi dem med kolon: `:`. Nu kan vi använda oss av dessa värden på detta sätt med punktnotation:

```javascript

var teacher = {
    name: 'Jesper',
    age: 25
};

console.log(teacher.name);
//Output: Jesper
```

### Skapa ett objekt

Skapa ett liknande objekt som ovan. Objektet ska dock den här gången vara ett album, alltså en skiva. Variabeln ska heta `var album` och ska ha tre properties: `albumName`, `artist`, `year`. 
* `albumName` ska vara en sträng med namn på valfritt album
* `artist` ska vara artisten som gjort albumet i form av en sträng
* `year` ska vara utgivet år i form av ett nummer.

Skriv sedan ut ditt objekt med console.log

### Skriv ut innehållet i ett objekt

För att komma åt en specifik property kan vi använda två sätt:

```javascript
album["albumName"];

album.albumName;
```

Det nedre är att föredra men det förekommer tillfällen där vi måste använda den övre notationen på vissa sätt så det är bra att känna till båda. Båda sätten ovan kommer att skriva ut samma värde. 

Skriv ut någon av dina properties i ditt objekt med båda av dessa sätten.

### Skapa en kopia av ett objekt

Du ska nu skapa en ny variabel som heter `var dublett`. I denna variabel ska du nu tilldela ditt album som du skapade i förra övningen. Du ska sedan logga ut både variabeln `album` samt variabeln `dublett` för att se vad de har för innehåll.

### Ta bort en egenskap från ett objekt

Man kan ta bort en property from ett objekt helt genom att skriva `delete object.property` om vi nu skulle vilja ta bort året från vårt objekt från tidigare skulle vi då skriva `delete album.year`. 

1. Ta bort någon av properties från objektet `dublett` som ni skapade tidigare
2. Console.logga sedan ut båda objektet: `album` samt `dublett` för att se deras innehåll är.


### Ändra ett värde i ett objekt

* Ändra ett värde i ett av objekten, antingen `album` eller `objekt`. 
* Console.logga sedan båda objekten
* Vad för innehåll har de båda objekten efter operationen?

### Loopa genom ett objekt

För att loopa igenom objekt finns det speciella loopar som underlättar iterationen för oss. `for..in`-loopen låter oss enkelt loopa igenom properties i ett objekt.

```javascript
for(property in object){
    console.log(property);
}
```

* Använd `for..in`-loopen för att skriva ut alla dina properties i objektet som du skapade tidigare.

### Loopa igenom properties

Just nu får vi bara ut properties men vi får inte ut alla värden. Varje värde i varje propertiy kan kallas på genom `object.property` eller genom `object["property]`, då får vi ut värdet. Detta kan även användas om man ska få ut värdena i en loop.

```javascript
for(property in object){
    console.log(object[property]);
}
```

För varje iteration i loopen får vi ut vad propertien heter. Denna property kan vi sedan använda för att komma åt ett värde i en property genom att hämta värdet från objektet med `object[property]`. Istället för att komma åt värdet via ett index använder man nu istället namnet på propertien.

1. Loopa igenom och skriv ut varje värde i ditt tidigare skapade objekt
2. Loopa igenom och skriv ut namnet på varje property samt värdet på den propertyn


### En funktion som skriver ut objektet

1. Skapa en funktion `printContent` som tar ditt (ett) objekt som argument. 
2. Funktionen ska sedan skriva ut alla värden i objektet och returnera en sträng på liknande sätt: `The album Blue by Joni Mitchell was release in 1971`.

