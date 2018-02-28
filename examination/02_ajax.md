# Examination `Async & API` :satellite:

<img align="right" width="180" height="auto" src="http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg" alt="JavaScript Logo">

De flesta applikationer och hemsidor på webben idag är dynamiska och hämtar data från olika servrar kopplade till speciella öppna databastjänster. Sättet vi kommer åt informationen är oftast via ett **API** (Application Programmable Interface). Detta brukar oftast vara ett **ReST API** som levererar `json`-data som vi sedan måste _konsumera_ med **AJAX**.

## Uppgift :pencil:

Du ska skapa en applikation som hämtar data från ett eller flera öppna APIs och visar upp denna data på en `html`-sida. Vilken data du hämtar och hur den visas upp är upp till dig och baserat på vilket/vilka APIer du väljer. Exempel på vilka API:er du kan använda till uppgiften finns i listan nedan **Du får inte skapa en väderapp**. **Observera att även om ett API är "öppet" så betyder det inte att det går att användas hur som helst och det brukar finnas en hel del säkerhetsbegränsningar: [en guide om hur du kan lösa vissa säkerhetsrelaterade problem finns på denna länk](https://gist.github.com/jesperorb/6ca596217c8dfba237744966c2b5ab1e)**

Du får bara använda vanlig JavaScript för att hantera AJAX och inte använda  jQuery för detta. Om du vill använda någon annan teknologi/bibliotek/ramverk för andra saker än AJAX så går nog det bra bara du kollar av med mig innan du börjar använda det. Huvudfokusen för denna uppgift ska vara att hämta och hantera information asynkront via AJAX.

Du får använda `fetch` eller `XMLHttpRequest` för att hämta informationen från ett öppet API. Vilken metod för att hämta hem data är upp till dig bara den hämtas via AJAX och laddas in dynamiskt.

**Se till att ha ett tydligt mål med vad du ska bygga innan du sätter igång. Gör upp en lista över vilken funktionalitet som ska finnas, hur det ska se ut. Lägg tid på förarbetet.**


#### Listor på APIer att använda

* [**Public APIs** by _toddmotto_ @ GitHub](https://github.com/toddmotto/public-apis)
* [**Public APIs** by _abhishekbanthia_ @ GitHub](https://github.com/abhishekbanthia/Public-APIs)
* [Programmable Web API Directory](https://www.programmableweb.com/category/all/apis)
* [API-katalogen](http://apikatalogen.se/)

## Struktur av mappar och filer

Dina filer och din mapp **måste** heta enligt detta mönster vid inlämning annars får du automatiskt en försenad inlämning och du får lämna in en komplettering.

* 📁 `fornamn_efternamn_todo`
    * 📄 `index.html`
    * 📁 `js`/`scripts`
        * 📄 `main.js`
    * 📁 `css` (även `sass` om du använder det)
        * 📄 `main.css`/`style.css` 
    * 📁 `images` (utifall du har några bilder)
    * 📄 `README.md`

* Din kod ska finnas på __GitHub__ och ha en tydlig `README` med följande information:
    - ditt namn
    - länk till projektet live på GitHub Pages samt länk till själva GitHub-repositoriet.
    - kort beskrivning av applikationen, dess syfte och funktionalitet.
    - punktlista med vilka teknologier du använt.
    - kort beskrivning av det API/APIer du använt samt länk till dem.
    - kortfattat om din arbetsprocess och vad som skulle kodmässigt kunna förbättras. Man kan t.ex. ha en "TODO"-sektion i ens `README` med saker som skulle kunna implementeras om tid fanns.
* Din kod ska även vara deployad live via [GitHub Pages](https://pages.github.com/) och man ska kunna besöka den färdiga sidan live. (Detta görs enklast genom att pusha upp en branch i ditt repo som heter `gh-pages`)

## Krav för G 

* **Hämtar data från ett eller flera öppna APIer som serverar data i form av `json`. Valet av API är helt fritt.**
    - **Du ska göra flera olika anrop till APIet** och **inte** bara 1 simpel `GET`-request till APIet och visa upp resultatet.
* **Visar upp hämtade data på ett strukturerat sätt i `html`**. 
* Användaren kan på något sätt styra över vilken information som hämtas, d.v.s. någon form av urval finns som exempelvis ett sökfält, kategorier eller liknande som man kan filtera innehållet via. Vid filtering ska ett nytt AJAX-anrop skickas till APIet/APIerna med sökning eller filtreringskriterierna, alternativ att den existerande datan filtreras ut.
* Du genomför projektet självständigt och skriver all kod själv samt att du förväntas kunna berätta om all din kod och visa att du behärskar det du skrivit.
* Du **uppvisar god förståelse för AJAX och asynkron kommunikation** och hur man jobbar asynkront i JavaScript.
* Du **error-hanterar dina anrop** och all eventuell input från `input`-fält.
* Du använder **semantisk och tydligt strukturerad HTML5** och har en **responsiv design**.
* Din `html`, `css` och `js` är:
    - Fungerande
    - Korrekt indenterad
    - Väl strukturerad och lättläst
    - Kommenterad efter behov (t.ex. vid mer svårlästa funktioner så ska kodflödet kommenteras)
* **Projektet versionshanteras både lokalt och via GitHub**

[**Markdown Cheat Sheet för att skriva README**](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Krav för VG

* Ditt gränssnitt är tydligt gentemot användaren när data laddas och när data är färdigladdat från servern. T.ex. har en laddningsindikator som indikerar när information laddas in. Ditt gränssnitt ger tydlig feedback till användaren när något går fel eller när någonting uppdateras på sidan så att användaren alltid vet vad som pågår på sidan.
* Du får inte ha några `console.log` liggandes som skriver ut information när applikationen är färdig.
* Du ska "cacha" den data som är hämtad i användaren webbläsare. Om användaren försöker göra ett anrop allt för ofta ska anropet enbart hämta den data som redan finns lagrad i användarens webbläsare. Du får själv välja spannet som denna data ska lagras, t.ex. att lagra hämtad data i 10-30 min. _Tips: `localStorage`_.
* Uppvisar kunskap om `context` samt `scope` och hur synkrona och asynkrona funktioner exekveras i relation till `context` och `scope`. Samt visar god förståelse för `Promises` och hur de används i kombination med asynkrona anrop.
* Du lägger upp din kod väl med hjälp av funktioner. Din kod ska inte leva inuti dina `eventListeners` eller inuti dina `fetch`-anrop. Samtlig funktionalitet borde ligga i separata funktioner och du uppvisar god kunskap om hur data skickas mellan dessa funktioner.

## Presentation av kod :speaker:

Ni presenterar projektet live för läraren på ett lektionstillfälle.
Ett presentationsschema kommer att läggas upp på GitHub, Zenit och i Slack när vi närmar oss presentationstillfället.

* Demo av applikationen
* Visa och förklara de viktigaste delarna av din applikation och kunna förklara hur du har tänkt när du har kodat.
* Var beredd på att få frågor på hur du har kodat och varför du har kodat.

### Inlämning av kod

_Betyg_: **IG/G/VG**

_Sista inlämningsdag_: **15/3** kl. **16.30**

_Lämnas in på zenit under_: **Inlämningsuppgift 2 - AJAX**

_Lämnas in enligt följande namnmönster och följande format_:

`fornamn_efternamn_ajax.zip` 
