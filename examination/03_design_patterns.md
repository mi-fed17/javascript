# Examinerande uppgift- Musikinstitutet
> **Design Patterns & API**
> 
> **Gruppuppgift: 3 personer**
> 
> Betygsskala: **IG/G/VG**

## Uppgift

Ni ska skapa en applikation som är ett grafiskt gränssnitt till ett redan existerande API: **[Musikinstitutet](https://folksa.ga/)**. I APIet kan ni hämta, lagra, ta bort och uppdatera information om låtar, album, artister samt playlists. APIet bygger mycket på att hämta och skicka data med hjälp av olika `id`. Det är mycket information som ska bearbetas så ett bra *förarbete* (upplägg av wireframe, flödesschema, kodstilguide samt hur ni arbetar med git) kommer att underlätta arbetet.

Till applikationen ska ni implementera ett eller flera designmönster så som:

* _Module Pattern_ / _Revealing Module Pattern_
* _Class Pattern (keyword `class`)_
* _Contructor Pattern_/_Prototype Pattern_

Ni ska gruppera funktionalitet som hör ihop och ni ska separera **View** från **Model** (**Controller** om ni känner att det behövs). Fokus för uppgiften kommer att ligga på strukturering av kod och _Separation of Concerns_.

## Mål

Denna examinerande uppgift ska fokusera på att utnyttja de designmönster som finns tillgängliga för att strukturera upp er kod. Vidare är målet att fortsätta utforska AJAX och att arbeta med APIer och främst utforska metoderna `POST`/`PATCH`/`DELETE`.

## **VIKTIGT**: `.gitignore`

Kom ihåg att lägga till en `.gitignore` **INNAN** ni kör `git init`/ `git add`/`git commit`. Bra saker att ignorera när ni jobbar i grupp är sådant som är autogenererat:

```
css
.DS_Store
*.log
```

## Krav

Ni har ganska stor frihet gällande vilken information som ska visas upp samt hur den ska visas upp. Kraven nedan är de saker som gränssnittet **minst** måste kunna göra:

* Sidan ska kunna visa upp olika listor med **Tracks**, **Albums**, **Artist** och **Playlists**.
* Via sidan ska man kunna lägga till ett nytt **Track**, ett nytt **Album**, en ny **Artist** och en ny **Playlist**. Sidan behöver alltså ha ett formulär för var och en av dessa saker.
* Man ska kunna rösta på en **Playlist**, ett **Album** eller ett **Track**.
* Man ska kunna kommentera på en **Playlist** och man ska kunna se kommentarer för en **Playlist**.
* Man ska via sidan kunna få upp **Playlist**s med högst betyg.
* Man ska kunna söka efter en **Playlist**/**Album**/**Track** eller **Artist** baserat på dess titel samt även kunna söka baserat på vilken genre.
* Man ska kunna ta bort ett **Track**, en **Playlist**, ett **Album**, en **Comment** samt en **Artist**.
* Koden är uppdelad i olika moduler där ni separerar ren logik så som `fetch`-anrop från kod som hanterar att uppdatera sidan och DOMen. Det som vi ser på sidan ska vara separerat från den kod som arbetar i bakgrunden.
* Ni **uppvisar god förståelse för AJAX och asynkron kommunikation** och hur man jobbar asynkront i JavaScript.
* Ni **error-hanterar era anrop** och ser till så att användaren inte kan skicka in felaktiga eller tomma värden in i APIet.
* Sidan ger tydlig feedback när något går fel, något laddas långsamt eller när något inte existerar.
* Ni använder **semantisk och tydligt strukturerad HTML5** och har en **responsiv design**. Koden ska även vara **tillgänglig** (Accessability), detta blir extra viktigt nu när ni har många formulär, se till så att alla formulär är formatterade korrekt.
* Er `html`, `css` och `js` är:
    - Fungerande
    - Korrekt indenterad
    - Väl strukturerad och lättläst
    - Kommenterad efter behov (t.ex. vid mer svårlästa funktioner så ska kodflödet kommenteras)
* **Projektet versionshanteras både lokalt och via GitHub**

## Struktur av mappar och filer

Dina filer och din mapp **måste** heta enligt detta mönster vid inlämning annars får du automatiskt en försenad inlämning och du får lämna in en komplettering. Ni får ha mer javascript-filer än `main.js`.

* 📁 `gruppnamn_musikinstitutet`
    * 📄 `index.html`
    * 📁 `js`/`scripts`
        * 📄 `main.js`
    * 📁 `css` (även `sass` om ni använder det)
        * 📄 `main.css`/`style.css` 
    * 📁 `images` (utifall ni har några bilder)
    * 📄 `README.md`

* Er kod ska finnas på __GitHub__ och ha en tydlig `README` med följande information:
    - gruppens namn
    - länk till projektet live på GitHub Pages samt länk till själva GitHub-repositoriet.
    - Övrig information som kan vara intressant att veta, verktyg som använts etc.
* Er kod ska även vara deployad live via [GitHub Pages](https://pages.github.com/) och man ska kunna besöka den färdiga sidan live. (Detta görs enklast genom att pusha upp en branch i ditt repo som heter `gh-pages`)

## Inlämning

_Sista inlämningsdag_: **12/4** kl. **16.30**

_Betyg_: **IG/G/VG**

**VG baseras på hur väl upplagd och genomtänkt koden och gränssnittet är. För att nå ett högre betyg krävs det att sidan känns som en färdig produkt och att de val som tagits i upplägg av kod och gränssnitt känns väl genomtänkta och genomarbetade**

_Lämnas in på zenit under_: **Inlämningsuppgift 3 - Musikinstitutet**

_Lämnas in enligt följande namnmönster och följande format_:

`gruppnamn_musikinstitutet.zip`


