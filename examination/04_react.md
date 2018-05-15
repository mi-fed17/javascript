# Examination - React

> Det finns två alternativ för denna inlämningsuppgift. Du ska välja **enbart 1** av dessa och utföra den. Uppgifterna ligger på ungefär samma svårighetsnivå och inlämningstiden är densamma för båda. Båda uppgifterna har fokus och ett huvudsakligt mål att lära er att hantera `state` och `props` och dela upp en sida i mindre komponenter.

## Val 1 - Dashboard UI

Ett **Dashboard UI** används ofta i administrationssammanhang och är vanligt förekommande. Du använde t.ex. ett sådant gränssnitt i admin-panelen i WordPress. En dashboard består oftast av flera stycken olika _widgets_ som oftast ser ut som olika kort som beskriver eller visar upp information om systemet, CMSet eller vad som nu administreras.

![Tabler Dashboard](https://camo.githubusercontent.com/cd92edc2d8fa925325026c2f13dc827e6063d333/68747470733a2f2f7461626c65722e6769746875622e696f2f6173736574732f696d616765732f64617368626f6172642e706e67)
_[Tabler UI Kit example](https://github.com/tabler/tabler)_

Nu har vi inget system att administrera via en dashboard så du ska göra en personlig variant med vanligt förekommande produktionsverktyg eller information som kan vara användbar. Du får lägga till egna kort/komponenter utöver de som listas nedan. Huvudsaken är inte exakt vilka kort som ska kunna visas på sidan utan att korten ska vara enskilda komponeter och att varje kort ska hantera sitt eget state.

### Tekniska krav för G

* Sidan ska ha ett kort som visar upp den senast valutakursen för SEK -> EUR (eller valfri valuta) från [https://fixer.io](https://fixer.io). Detta kort ska ha en uppdateringsknapp, när man trycker på denna knapp ska valutakursen hämtas på nytt och uppdatera den kurs man ser på kortet. Man ska även kunna se datumet när denna valutakurs senast uppdaterades.
* Sidan ska ha ett kort med en timer. Du kan ha ett förinställt intervall, t.ex. 5 minuter, eller ha så att man själv kan välja intervallet. När du trycker på en knapp på kortet ska timern räknas ner. När timern når `0` ska kortet ändra färg till t.ex. rött och det ska även komma upp en knapp som gör att man kan nollställa timern och börja om.
* Sidan ska ha ett kort med en klocka enligt formatet: HH:mm:ss (alltså timmar:minuter:sekunder)
* Sidan ska ha ett kort som fungerar som en "kom ihåg"-lapp, som en post-it. Detta kort måste alltså komma ihåg vad du har skrivit in genom att använda `localStorage`/`sessionStorage`.
* Sidan ska ha ett kort som visar upp det senaste vädret för en förinställd plats, t.ex. Stockholm. Till detta kan du t.ex. använda samma vädertjänst som vi använde i tidigare övningar kopplat till API-uppgiften.
* Du delar upp din applikation i flera mindre komponenter. Skapar du ett formulär kan du t.ex. döpa det till `<SubmitForm />`. `<SubmitForm />` kan i sin tur har underkomponenter så som `<InputField />` och `SubmitButton />`.
* Innehåller dina komponenter ingen logik (`state` t.ex.) så ska de vara **Stateless components**, d.v.s. använda sig utav `function` och inte `class`. `<InputField />` behöver t.ex. inte ha sitt eget `state` och kan därför vara en  `function`. `<SubmitForm />` behöver troligtvis ha ett eget state så `<SubmitForm />` ska i så fall vara en `class`.
* Du ska ha en mapp inuti `src` som heter `components` där dina komponenter ska ligga, denna mapp kan i sin tur ha undermappar.
* För styling får du använda ett ramverk som t.ex. _Bootstrap_ eller _Semantic UI_. Eller ska kan du skriva din `css` helt själv. Vilket sätter du väljer att styla dina komponenter är upp till dig men upplägget och användning av styling ska vara __konsekvent__. Du får använda bibliotek så som [`styled components`](https://www.styled-components.com/)
* Din kod versionhanteras via GitHub och ska ha en README som innehåller ditt namn, länk till repot och eventuell länk till live-sidan om du har deployat din applikation
* Kommenterat vid behov

### Krav för VG

* Du visar god förståelse för `namespaces`, `context` och `scope` i din applikation och hur `this` fungerar.
* Din applikation ska vara färdig för produktion och inte innehålla några större fel eller läcka information från utvecklingsfasen. Man ska i princip aldrig i applikationen som användare stå och fundera: "Vad händer eller vad var det som hände?".
* Upplägget i din kod samt i ditt gränssnitt ska vara väl genomtänkt och ha en tydlig struktur. Väldefinierade komponenter, väl namngivet state, props och funktioner t.ex.

## Val 2 - Incremental Game

Ett incremental game är ett spel där man får poäng genom att klicka på ett objekt på skärmen. När man har klickat ett antal gånger har man samlat ihop ett visst antal poäng, dessa använder man sedan som valuta för att köpa uppdateringar som klickar åt en eller gör så att man får mer poäng vid varje klick. Sedan köper man bättre och bättre uppdatering och får mer poäng. Ert spel behöver dock inte vara kakbaserat utan ni får använda vilka bilder och element ni vill för att skapa ert spel, spelet ska dock följa ett visst tema.

* [Exempel: Cookie Clicker](http://orteil.dashnet.org/cookieclicker/)

Dessa spel har oftast många element med liknande funktioner och struktur men tar in olika värden. Detta blir ett bra tillfälle att öva på att göra kod som inte upprepar sig själv. Om man upptäcker att man skriver samma kod väldigt ofta på många ställen ska man då se över sin kod och se om man kan göra sin kod återanvändbar. Förhoppningsvis ska denna uppgift låta er öva på just den här aspekten. Vidare är det väldigt många olika `state` som måste hanteras, något som React är bra på att göra.

### Krav för G

* Man ska kunna skriva in spelarens namn när man kommer till sidan genom ett input-fält sedan ska detta visas upp i högra hörnet på sidan. När man har fyllt i sitt namn ska input-fältet försvinna.
* Spelarens poäng ska öka varje gång man klickar på ett visst objekt på sidan, fortsätter man klicka på detta objekt får man mer och mer poäng. Spelarens poäng ska lagras i `state`.
* Det ska finnas uppgradering som blir tillgängliga beroende på hur mycket man har klickat: Det ska finnas minst 5 olika uppgraderingar som ökar poängen i olika takt. Ju "dyrare" uppgradering, desto mer ska ens poäng öka. En uppgradering kan t.ex. kosta 50 klick, då dras dessa klick bort från ens nuvarande samling av klick, uppgraderingen i sin tur gör så att varje gång du klickar så ökar ens samling av klick med 2 varje gång. Hur mycket dessa uppgraderingar ska kosta och hur ökningen av kostnaden ska ske får ni själva bestämma.
* Uppgraderingarna ska bli dyrare eller svårare att skaffa desto fler av dem man köper. En uppgradering kan t.ex. kosta 15 klick första gången man köper den och sedan ökar kostnaden med 5 klick varje gång man köper en till av den.
* Minst en av uppgraderingarna ska göra så att poängen ökas automatiskt enligt ett visst intervall. Denna uppgradering ska alltså göra så att man slipper klicka men får poäng ändå, men man kan ändå klicka för att få poäng snabbare.
* Du delar upp din applikation i flera mindre komponenter. Skapar du ett formulär kan du t.ex. döpa det till `<SubmitForm />`. `<SubmitForm />` kan i sin tur har underkomponenter så som `<InputField />` och `SubmitButton />`.
* Innehåller dina komponenter ingen logik (`state` t.ex.) så ska de vara **Stateless components**, d.v.s. använda sig utav `function` och inte `class`. `<InputField />` behöver t.ex. inte ha sitt eget `state` och kan därför vara en  `function`. `<SubmitForm />` behöver troligtvis ha ett eget state så `<SubmitForm />` ska i så fall vara en `class`. 
* Du ska ha en mapp inuti `src` som heter `components` där dina komponenter ska ligga, denna mapp kan i sin tur ha undermappar.
* För styling får du använda ett ramverk som t.ex. _Bootstrap_ eller _Semantic UI_. Eller ska kan du skriva din `css` helt själv. Vilket sätter du väljer att styla dina komponenter är upp till dig men upplägget och användning av styling ska vara __konsekvent__. Du får använda bibliotek så som [`styled components`](https://www.styled-components.com/)
* Din kod versionhanteras via GitHub och ska ha en README som innehåller ditt namn, länk till repot och eventuell länk till live-sidan om du har deployat din applikation
* Kommenterat vid behov.

### Krav för VG

* Du visar god förståelse för `namespaces`, `context` och `scope` i din applikation och hur `this` fungerar.
* Din applikation ska vara färdig för produktion och inte innehålla några större fel eller läcka information från utvecklingsfasen. Man ska i princip aldrig i applikationen som användare stå och fundera: "Vad händer eller vad var det som hände?".
* Upplägget i din kod samt i ditt gränssnitt ska vara väl genomtänkt och ha en tydlig struktur. Väldefinierade komponenter, väl namngivet state, props och funktioner t.ex.

## Inlämning

_Betygsgrad_: **IG/G/VG**

_Datum för inlämning_ : **1/6 23.55**

_Format för inlämning_:

`fornamn_efternamn_react.zip`

* **Mappen för ditt projekt ska ha samma namn som `.zip`-filen och du ska zippa ner hela mappen.**
* **INGA `NODE_MODULES` I ZIP-FILEN**
* **ENBART .ZIP (INTE .RAR, .GZIP eller .7z)**