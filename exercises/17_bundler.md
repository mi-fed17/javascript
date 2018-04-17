# Module Bundler (Parcel & Webpack)

## Node & `require`

I **node** finns ingen `index.html` som binder samman alla våra resurser (`.js`, `.css` etc.) men vi måste ändå ha ett sätt att kommunicera mellan filer på ett enkelt sätt. Detta löser node med att man exporterar och importerar explicit från varje fil, liknande som sass förutom att här måste vi även vara explicit med vad vi exporterar. Vi kan även välja att **inte** exportera allting i filen så vissa variabler kan vara "privata" till själva filen medan andra kan vara "publika" för resten av dina filer.

```js
//index.js
const person = require('./person.js');
// const { name, age } = require('./person'); //destructure
console.log(person.name, person.age);
```

```js
//person.js
const person = {
    name: "Jesper",
    age: 1000
};

// module.exports = whatever you want to export, function, class, const, object
// in this case we are exporting an object.
module.exports = person;
```

Varje variabel i varje fil måste manuellt exporteras och importeras, annars känner inte filerna till varandra. **Varje fil blir en egen modul** och varje fil är skiljd från varandra. Här ovan exporterar vi ett helt objekt, vilket är det vi oftast brukar göra från varje modul, alternativt har vi massa separata funktioner som sedan exportas som ett objekt.

## Module Bundlers & `import/export`

Beteendet ovan fungerar **enbart i node**, d.v.s. på backend-sidan. Det finns forfarande **inga** webbläsare som kan hantera den här sortens uppdelning i moduler. Dock vill alla ha detta beteende på frontend-sidan eftersom det underlättar vid större projekt. Lösningen var att skapa ett extra verktyg som kan paketera kod på detta sätt och sedan spotta ut en färdig fil som kan läsas av browsern. Tänk som `sass`, `sass`-filer kan inte läsas av webbläsaren, därför måste vi alltid ha ett verktyg som Scout/sass igång som kan konvertera till `.css` som en webbläsare kan använda. 

Dessa verktyg brukar samlat kallas **module bundlers** eller **bundlers** och det finns massor av dem, målet är dock alltid detsamma: __paketera källkod som inte kan läsas av en webbläsare så att den kan läsas av en webbläsare__.

Tyvärr så är JavaScript-communityt inte överens om vilken syntax som ska användas när detta ska göras. I `node` är det nästan alltid `require` som ovan (även om du kan använda bundlers i backend och därmed få `import/export`), men när vi kommer till _bundlers_ på frontend-sidan så använder nästan samtliga `import/export`. `import/export` är i princip bara syntaktiskt socker över `require` och löser samma problem som tidigare fast på syntaktiskt snyggare sätt.

```js
//index.js
import person from './person.js';
// import { name, age } from './person.js';
console.log(person.name, person.age);
```

```js
//person.js
const person = {
    name: "Jesper",
    age: 1000
};
export default person;
```

_Observera att vi använder `./` när det är våra egna filer som vi själva har skapat. Är det ett bibliotek som vi har installerat från någon annan så använder vi inte `./`_

## Parcel

* [Parcel](https://parceljs.org/getting_started.html)

_Parcel_ är en ny uppstickare som förenklar den här processen. Märk att de flesta använder `webpack`. För en nybörjare är _Parcel_ enklast då verktyget inte kräver någon konfiguration, något som de flesta andra verktyg nästan alltid kräver.

0 . Installera [`node`](https://nodejs.org/en/) på din dator och se till så att det fungerar. Detta gör du genom att i terminalen skriva `node --version`, då borde du få tillbaka ett versionsnummer. Om det står: `command not found` eller liknande så rekommenderar jag att starta om datorn och testa igen.

1 . Installera _Parcel_ globalt på din dator via terminalen via `npm`. Om du i detta steg får massa error där det står **EACCES** och du sitter på Mac, [följ dessa instruktioner](https://docs.npmjs.com/getting-started/fixing-npm-permissions):
```bash
npm install --global parcel-bundler
```

2 . Skapa en ny mapp med valfritt namn (men inte `parcel`)

3 . Ställ dig i mappen i terminalen, se till så att du verkligen har använt `cd` för att komma in i mappen, bekräfta detta genom att skriva kommandot `pwd`.

4 . Initiera ett nytt `npm`-projekt i mappen, ungefär som `git init`. Flaggan (argumentet) `-y` säger att kommandot ska automatiskt besvara alla frågor som ställs, dessa frågor behöver du inte bry dig om just nu så vi skippar dem med `-y`. Detta kommer även att skapa en fil i den mappen du står i som heter `package.json` och som du inte ska ta bort eller modifiera. Du kan läsa mer om vad denna är under rubriken: [`package.json`](#package.json).
```bash
npm init -y
```

5 . Skapa en `index.html` samt en `index.js` i mappen med följande innehåll. Det viktiga är att din index länkar in en script-fil på detta sätt och att `index.html` och `index.js` ligger i samma mapp.

```html
<!-- index.html -->
<html>
<body>

  <script src="./index.js"></script>
</body>
</html>
```

```js
//index.js
document.body.innerHTML = "Hello from index.js!";
```

6 . Gå till din terminal igen och kör följande kommando, detta kommando kommer att starta upp en `http://localhost:1234` som lyssnar på förändringar i dina filer och uppdaterar din hemsida när du gör en ändring:

```bash
parcel index.html
```

7 . Nu kan vi även använda `import/export` i våra JavaScript-filer. Skapa en ny fil i din rootmapp (den mapp du står i) som heter `fishFacts.js` och som har följande innehåll:

```js
const fishFacts = [
    "Fishes are fun",
    "All goldfishes can code"
];

export function printFishFacts(){
    for(let fishFact of fishFacts){
        console.log(fishFact);
    }
}
```

Importera sedan den funktionen som du har exporterat i din `index.js`-fil:

```js
import { printFishFacts } from './fishFacts.js';

printFishFacts();
```

Observera här att funktionen har brackets runt sig vid import `{}`, detta måste vi ha när vi har __named imports__ d.v.s när vi enbart har använt nyckelordet `export`, då **måste** även namnet på funktionen vara detsamma i båda filerna. Observera även att det inte går att använda själva variabeln `fishFacts` då vi inte har valt att exportera den. Väl inne i `fishFacts.js` kan vi använda variabeln och de filer som importerar denna funktion kan använda variabeln men vi har inte gjort den tillgänglig direkt via variabelnamnet.

8 . För att använda **SASS** så måste vi först installera `node-sass` som har hand om att konvertera sass via terminalen och via node:
```
npm install --save-dev node-sass
```

9 . Skapa sedan en `style.css` i samma mapp som de andra filerna du har skapat.

10 . Vi kan nu importera in `.scss`-filer in direkt i vår `index.js` och Parcel kommer sköta att konvertera sass åt oss. Observera att vi länkar våra filer som vi använder VIA `index.js` och inte använder `index.html` för att skapa `link`-taggar eller `script`-taggar. Så här fungerar de flesta bundlers. De tar in alla tillgångar via JavaScript för att sedan konvertera dem till rätt fil och vi arbetar sällan i `index.html`:

```js
import './.scss';

import { printFishFacts } from './fishFacts.js';

printFishFacts();
```

##### Default exports

*[`import/export` cheat sheet](https://gist.github.com/vasco3/22b09ef0ca5e0f8c5996#modules)

Alternativet till _named exports_ är att använda  `export default` och göra så att funktionen som exporteras är den som väljs som standard:

```js
const fishFacts = [
    "Fishes are fun",
    "All goldfishes can code"
];

export default function printFishFacts(){
    for(let fishFact of fishFacts){
        console.log(fishFact);
    }
}
```

När vi sedan importerar det som exporteras från `./fishFacts.js` utan brackets `{}` så kommer det alltid att vara den variablen (kan vara en funktion, class, objekt, vad som helst) som har `default` framför sig. Det betyder också att vi kan döpa den till vad vi vill när vi importerar den.

```js
import renamedFishFunction from './fishFacts.js';

renamedFishFunction();
```

Funktionen heter fortfarande `printFishFacts` i `./fishFacts.js` men i `./index.js` så heter funktionen `renamedFishFunction` även fast det är samma funktion.

Vi kan i en och samma fil även ha både `default` och icke-`default`, i en fil får enbart **1** `default` finnas:

```js
export const fishFacts = [
    "Fishes are fun",
    "All goldfishes can code"
];

export const isFish = true;

export default function printFishFacts(){
    for(let fishFact of fishFacts){
        console.log(fishFact);
    }
}
```

```js
import renamedFishFunction, { fishFacts, isFish } from './fishFacts.js';

renamedFishFunction();
```

Här ovan så kan vi säga att om vi importerar något utan curly brackets `{}` så kommer importen bestå av `printFishFacts`. Vi kan bara ha en `default export` men hur många `export` som helst, alla dessa variabler som är exporterade med enbart `export` måste då importeras innanför `{}` separerade med komma. Vi måste även separerade _named imports_ från _default import_ med ett komma.

##### Grouped named imports

Om vi enbart har _named exports_ i en fil så kan vi klumpa ihop dem som en och samma import genom att använda `as`:

```js
export const fishFacts = [
    "Fishes are fun",
    "All goldfishes can code"
];

export const isFish = true;

export function printFishFacts(){
    for(let fishFact of fishFacts){
        console.log(fishFact);
    }
}
```

```js
import * as fish from './fishFacts.js';

fish.fishFacts;
fish.isFish;
fish.printFishFacts();
```

Här importerar vi samtliga exporterade variabler och funktioner från `./fishFacts.js` och lägger samtliga värden i ett objekt som heter `fish`. Asterisken `*` betyder att vi vill importera allt och sedan säger vi med `as` att vi vill döpa om dessa till `fish`.

## Webpack

* [https://webpack.js.org/](https://webpack.js.org/)

Webpack är det mest använda verktyget för att sköta bundling av tillgångar på ett effektivt sätt. Detta verktyg används oftast av ramverk som `React`/`Vue` etc. och det underlättar väldigt mycket om man har lite koll på `webpack` när man börjar med olika JavaScript-ramverk då alla ramverk använder `import/export` och därmed behöver en bundler.

Med webpack får du mer styrning och kontroll över hur denna bundling fungerar och du kan utöka hur du vill. Dock betyder det här också att du måste hålla på och konfigurera webpack efter dina önskemål. Senaste versionen av webpack (v.4) behöver inte någon konfiguration samma som Parcel men det är då väldigt lite som följer med så du kommer ändå vilja att utöka funktionaliteten så viss konfiguration måste ändå göras oavsett.

0 . Installera [`node`](https://nodejs.org/en/) på din dator och se till så att det fungerar. Detta gör du genom att i terminalen skriva `node --version`, då borde du få tillbaka ett versionsnummer. Om det står: `command not found` eller liknande så rekommenderar jag att starta om datorn och testa igen.

1 . Skapa en ny mapp med valfritt namn (inte `webpack` för då blir det trubbel)
2 . `cd` in i mappen
3 . Initiera ett nytt `npm`-projekt i mappen, ungefär som `git init`. Flaggan (argumentet) `-y` säger att kommandot ska automatiskt besvara alla frågor som ställs, dessa frågor behöver du inte bry dig om just nu så vi skippar dem med `-y`. Detta kommer även att skapa en fil i den mappen du står i som heter `package.json` och som du inte ska ta bort eller modifiera. Du kan läsa mer om vad denna är under rubriken: [`package.json`](#package.json).
```bash
npm init -y
```
4 . Skapa en till mapp i denna mapp som heter `src`
5 . I mappen `src` så skapar du en fil som heter `index.js` och som har följande innehåll:
```js
//index.js
document.body.innerHTML = "Hello from index.js!";
```
6 . Skapa en mapp som heter `dist`
6 . I mappen `dist` så skapar du en fil som heter `index.html` med följande innehåll. Observera att vi refererar till en fil som heter `main.js` men som vi inte har skapat ännu, webpack kommer att skapa den här filen åt oss.
```html
<!-- index.html -->
<html>
<body>

  <script src="./main.js"></script>
</body>
</html>
```

7 . Installera senaste versionen av `webpack` samt `webpack-cli` till ditt projekt lokalt genom att använda flaggan `--save-dev`. Detta betyder att du installerar detta enbart i mappen som du står i för tillfället. Det går även att installera för hela datorn men det är något som webpack själva inte rekommenderar.
```bash
npm install --save-dev webpack webpack-cli
```

8 . Testa om det fungerar genom att skriva följande i terminalen då du står i rootmappen:

```bash
./node_modules/.bin/webpack
```

Alternativt om du har en ny version av node så kan du även skriva

```bash
npx webpack
```

Om det fungerade så borde du ha en fil som heter `main.js` i din `dist`-mapp som innehåller den koden du skrev i `.src/index.js` plus massa annan konstig kod. Öppnar du upp `index.html` i din webbläsare så borde du se ett resultat. Nu kan du även använda `import/export` på samma sätt som med Parcel.

### `webpack.config.js`

Om vi vill utöka funktionaliteten eller styra vad våra filer ska heta efter att de har blivit bearbetade så måste vi skapa en config-fil som hanterar detta. Du kommer förr eller senare nå en punkt både med Parcel och Webpack där du vill ha kontroller över vad som skapas och hur det skapas.

1 . I rootmappen skapar du en ny fil som heter `webpack.config.js` och som innehåller följande information:

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

Här definierar vad vår **entry point** är, d.v.s. var den filen vi skriver vår källkod i ligger. Filen ligger i mappen `src` och heter `index.js` så vi skriver `./src/index.js`, vi utgår alltid från rootmappen, där vår config ligger. Vi måste även säga till webpack var den färdiga koden ska hamna då vi är färdiga med att omvandla och lägga ihop vår kod. `output` är ett objekt där vi definerar vad vår fil ska heta `'bundle.js'`, om du vill att den ska heta något annat så döper du filen här. Vi måste även specificera `path`, d.v.s. i den mappen som den färdiga koden ska hamna, samma som med `css` och `scss`-mapparna. Oftast använder man här `path.resolve(__dirname, 'dist')`. `__dirname` är ett reserverat ord och betyder rootmappen, detta är för att försäkra oss om att vi alltid utgår från rootmappen. `'dist'` är vad vi döper vår output-mapp till, även här kan du döpa den till någon annat om du vill men vanligast är `'dist'` (för _"distribution"_) eller `'build'` (syftar på att vi har _"byggt"_ våra filer).

2 . Vi kan fortfarande länka tillgångar så som `css`, bilder och andra JavaScript filer via din `index.html` som du har gjort tidigare. Det kan t.ex. länka in bootstrap eller Google Fonts genom att lägga till en `link` innanför `<head>`. Dessa filer kommer inte webpack veta om eller bry sig om. De enda filerna som webpack bryr sig om just nu är den entry point som du angav i konfigurationen, webpack hanterar allt som har med JavaScript att göra. **MEN** man brukar nästan alltid låta webpack hantera alla sina tillgångar VIA JavaScript eftersom man då kan sköta allt från samma konfiguration samt optimera dessa tillgångar vid behov. En sån tillgång är `.css`, som vi kan använda via webpack. För att låta webpack ta hand om våra `.css`-filer men först måste vi installera en **loader** som har hand om att ladda in css:

```bash
npm install --save-dev style-loader css-loader
```

3 . Sen måste vi säga till webpack att den ska hantera alla filer som slutar på `.css` på ett speciellt sätt, detta gör vi i `webpack.config.js`:

```js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};
```

Vi skapar en ny regel som gäller enbart för filer som slutar på `.css`. Vi använder ett **[Regex](https://regexone.com/)** för att hitta alla dessa filer. Sen säger vi `use`, använd de tidigare installerade **loaders** för att konvertera filerna. Vi kan senare lägga till mer inställningar och t.ex. lägga till `.scss` också, men för nu kan vi nöja oss med denna inställning.

4 . Du kan nu skapa en fil i `src` som heter `style.css` och som innehåller denna css:

```css
/* ./src/style.css */
body {
    background-color: #000;
}
```

5 . I `./src/index.js` kan du nu importera din css. Observera att det inte är `import from` utan bara `import`.

```js
// ./src/index.js
import './style.css';

document.body.innerHTML = "Hello from index.js!";
```

6 . All tillgånger eller _"assets"_ måste ha en egen **loader** i webpack. Vill du t.ex. ladda in bilder lokalt direkt i JavaScript och använda denna bild som en variabel behöver du `file-loader` och du behöver först installera  `file-loader` via `npm` och sedan skapa en regel för den i din `webpack.config.js`. Läs mer här: [Asset Management @ webpack](https://webpack.js.org/guides/asset-management/)

7 . Om vi vill ha **SASS** så kan vi hyffast enkelt lägga till det som en **loader**:
```bash
npm install --save-dev sass-loader node-sass
```

8 . Och vi måste sedan konfigurera vår regel att använda denna loader. Observera att vi letar med ett regex efter `.scss` istället och vi anger alla 3 loaders.
```js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};
```

Vi borde nu kunna skapa en `.scss` fil och länka den istället:
```js
// ./src/index.js
import './style.scss';

document.body.innerHTML = "Hello from index.js!";
```


## package.json

Filen `package.json` ska ligga i rootmappen och den måste alltid finnas och alltid versionshanteras. Den måste alltid finnas innan du kör någon `npm install` eftersom det är den filen som håller reda på om du har installerat ett tillägg eller inte. Denna fil skapas automatiskt när du skriver: `npm init`. **Varje gång** du skriver `npm install` så ska du antingen skriva:
```bash
npm install --save-dev webpack
```

```bash
npm install --save webpack
```

Utan `--save-dev` eller `--save` så kommer paketet inte sparas som en **dependency** i din `package.json`-fil. Om du öppnar din `package.json` så ska du kunna se alla saker du har installerat till projektet, om det du har installerat inte finns i listan i `package.json` så har du glömt `--save` eller `--save-dev`.

Ordet _dependency_ betyder _"beroende"_ och namnet signalerar att **vi är beroende** av denna kod för att vårt projekt ska fungera. Om vi skulle glömma `--save-dev` eller `--save` så skulle det fungera temporärt för oss eftersom vi har installerat det lokalt på vår egen dator precis. Dock så skulle vår `package.json`-fil inte spara den informationen om att projektet behöver denna kod för att fungera. Detta betyder att varje person som ska använda sig av eller jobba på vårt projekt kommer inte att veta att vårt projekt är beroende av den kod vi har installerat via `npm install`.

Varje dependency som vi installerar via `npm install` sparas ner i en mapp som heter `node_modules`. `node_modules` ska i princip **aldrig** versionshanteras och **aldrig** pushas upp till GitHub. Detta betyder att varje gång någon ska klona vårt projekt så får inte personen med dessa dependencies eftesom vi har inte har pushat upp mappen `node_modules` och måste själv installera dessa. Därför blir `package.json` viktig. När en annan person klonar ner vårt projekt så skriver den personen följande för att installera **SAMTLIGA DEPENDENCIES** som är kopplade till vårt projekt:
```bash
npm install
```

Personen som har klonat ner projektet behöver inte installera och spara varje dependency separat utan all information om vad projektet behöver för dependecies finns sparat i `package.json` om vi har använt flaggorna `--save` eller `--save-dev`. Då behöver personen enbart skriva `npm install` och då kommer all kod som vårt projekt behöver att sparas ner i `node_modules`.

## npm please

Det finns många skumma buggar med `npm` och hur de installerar kod. På Windows fungerar `npm` oftast sämre än på Linux och MacOS. Om du får error relaterade till npm är det enklast att börja om på ny kula. I terminalen eller Git Bash, kör följande kodrader i den mapp som du har ditt projekt i:

```
rm -rf node_modules package-lock.json
npm install
```

Detta tar bort mappen `node_modules` samt en extra fil som heter `package-lock.json` och installerar alla dependencies på nytt. Observera att det är `package-lock.json` vi tar bort och **inte** `package.json`. `package.json` ska aldrig tas bort.

