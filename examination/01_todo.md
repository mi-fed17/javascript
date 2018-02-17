# Examination - Todo :memo:
> Individuell examination
> 
> Betygsskala: **IG/G/VG**

Denna uppgift går ut på att ta fram en hemsida i form av en _att göra-lista_. Du ska manipulera DOMen med hjälp av JavaScript för att lägga till och ändra innehållet på en hemsida utan att behöva ladda om sidan. Du ska använda dig utav `git` för att versionshantera uppgiften och när uppgiften är klar ska den laddas upp på din _GitHub_-sida samt lämnas in via _zenit_.

## Struktur av uppgiften
Du får lägga upp en ram för hur allting ska se ut i HTML och sedan ska en del av koden genereras automatiskt med JavaScript, så alla element måste inte skapas med JavaScript. Du kan först använda _"placeholders"_, alltså tillfälliga element för att lägga upp ungefär hur appen ska se ut och sedan lägga in funktionaliteten. Att lägga upp det snyggt och användarvänligt är något som förväntas vid det här laget så det kommer ni att få feedback på, dock är fokusen för uppgiften att lära er hur man gör effektiva uppdateringar i DOMen. Tänk på hur ni gjorde med den förra todo-uppgiften. Det krävs inte här att man använder länkar och ID men ett `id` på en todo kan vara en bra idé.

## Struktur av mappar och filer

Dina filer och din mapp måste heta enligt detta mönster vid inlämning annars får du automatiskt en försenad inlämning.

* 📁 `fornamn_efternamn_todo`
    * 📄 `index.html`
    * 📄 `main.js`
    * 📁 `css` (även `sass` om du använder det)
        * 📄 `main.css`
    * 📁 `images` (utifall du har några bilder)
    * 📄 `README.md`

I din `README.md` ska det finnas: 
 * Titel på uppgiften
 * Ditt eget namn
 * Extra ramverk/verktyg använda (bootstrap/sass etc.)

Ta bort alla bilder du inte använder. Se även till så att dina bilder inte är för stora. 

## Inlämning

Din fil måste lämnas in enligt namnmönstret och filändelsen nedan annars får du automatiskt en försenad inlämning

* Lämnas in via: **Zenit**
* Lämnas in senast: **22/2 16.30**
* Lämnas in via namnmönstret:
```
fornamn_efternamn_todo.zip
```

## Krav för G

[**Samma feedback som jag gav i PHP gäller för det mesta för JavaScript också, se igenom denna lista och ta till dig av det**](https://gist.github.com/jesperorb/9093e314bbaca9062cd481874dff81b0)

* Man ska kunna lägga till en ny _todo_ och då ska denna visas upp i en lista på sidan så att man tydligt ser att det är en todo som är oavklarad.
* Man ska kunna radera en _todo_, då tas todon bort från listan.
* Man ska kunna rensa alla _todos_, ta bort samtliga från sidan
* Man ska kunna markera en _todo_ som utförd/completed. Om en _todo_ är slutförd/done så ska det tydligt markeras att den är slutförd. När användaren markerar att _todon_ är slutförd så ska _todon_ läggas i en separat lista med en rubrik som talar om tydligt att den är slutförd. _Todon_ ska i denna process även tas bort från den andra listan. Man ska även kunna ta bort _todon_ från denna lista med slutförda _todos_.
* Semantisk HTML-struktur och tydligt upplägg av kod i både CSS-filer samt JavaScript-filer.
* Kommenterat på de ställen som kräver det. Förklara mer varför koden körs eller finns istället för vad den gör. Kommentarer är ett sätt att visa att det är du själv som har skrivit koden och är ett krav.
* Tydligt namngivna funktioner och variabelnamn. Förkorta inte variabler eller funktionsnamn samt döp inte dessa variabler och funktioner till något som bara du förstår.
* Du validerar din JavaScript kod med hjälp av verktyg som [http://esprima.org/demo/validate.html](http://esprima.org/demo/validate.html) eller liknande tjänst.

## Krav för VG

* Uppfyller samtliga krav för G
* HTML, CSS samt JavaScript är väl kommenterad, strukturerad och lättläst. Inga `console.log` ska ligga kvar i koden och kod som inte används ska tas bort helt.
* Dina manipuleringar i DOMen använder sig utav transitions och animations som gör att manipuleringarna av sidan känns smidiga och genomtänkta. När du lägger till en todo ska denna animeras in t.ex.
* Man ska inte kunna lägga till två todos med samma titel och man ska få meddelande på sidan om att man har försökt lägga till en likadan todo och todon ska inte läggas till på nytt.
* Du använder dig utav [`localStorage`](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/) för att spara dina todos till användarens webbläsare så att listan blir "permanent". När användaren kommer till hemsidan från att ha laddat om sidan så ska de tidigare todos som användaren skapat ligga kvar.
* Du lägger upp din kod väl med hjälp av funktioner. Din kod ska inte leva inuti dina `eventListeners`. Exempel på hur det borde se ut om du följer detta mönster. D.v.s man ska kunna kalla på dina funktioner utan att behöva gå genom dina event listeners:
```js
addbutton.addEventListener('click', function(){
    addTodo();
})
// Alternative approach
addButton.addEventListener('click', addTodo);
```
