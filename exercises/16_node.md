# Node

**Nedan är bara om du vill testa att skriva lite backend i JavaScript och inget som behövs till kursen utan det är mer om du vill förstår dig på `node` lite mer. Det är grundläggande input output via filsystemet samt hur man sätter upp en simplare server. Är du inte intresserad, rör dig vidare till [17_bundler.md]((17_bundler.md)**

> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Sammanfattat är det **JavaScript som körs via terminalen** och som tillåter oss att skriva backend-kod i språket _JavaScript_. Några saker sker när vi gör detta. Dels så får vi tillgång till filsystemet, vi kan göra förfrågningar till vilka domän vi vill, sätta upp en webbserver etc. Detta gör att vi får ett mer generellt språk som kan göra mer än bara hemsidor.

## Övningar

### Övning 1

Skapa en modul, dvs två filer i en mapp där den ena filen inkluderar den andra mha `require`. Modulen ska ha en funktion som skriver ut någoting med `console.log`. Du behöver alltså använda `require` samt `module.exports`.

* Fråga 1: Hur kan vi göra en "privat" funktion i en fil/modul?
* Fråga 2: Varför vill vi helst exportera ett helt anonymt objekt när vi exporterar?
* Fråga 3: Kan vi importera en modul i en annan modul som exporteras? 

Lästips: [SitePoint: Understanding Module Exports](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)

### Övning 2

Skapa en enkel server med den inbyggda `http`-modulen i _node_ som skriver ut ett valfritt meddelande i webbläsaren.

Lästips: [Nodejs.org: Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)

### Övning 3

Skriv ett program som skapar en textfil och skriver en text till filen med hjälp av `fs.writeFile()`. Kom ihåg att importera `fs`-modulen.

Dokumentation: [Nodejs.org: FileSystem](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html)

### Övning 4

Skapa en textfil med 5000 tecken med valfritt innehåll (typ lorem ipsum).
Vi ska nu skriva ett program som läser in textfilen bit för bit med en `stream`. 
Varje bit som läses in ska lagras som ett element i en array. När inläsningen är klar ska programmet skriva ut antal element i arrayen samt antalet tecken i varje element.

Ett exempel på hur vi kan läsa data. Implementera arrayen och läsa från arrayen blir din uppgift.
```js
const fs = require('fs');
let fsReadStream = fs.createReadStream('textfile.txt');

let data = "";
fsReadStream.on('data', (chunk) => {
  data += chunk;
});

fsReadStream.on('end', () => {
    console.log(data);
});

```

### Övning 5

Skriv en server som läser in en textfil från samma mapp som servern och skriver ut textfilens innehåll i webbläsaren på valfritt sätt.


### Övning 6

Skriv en server med `http`-modulen som läser in en textfil, gör om resultatet till en array, slumpar fram ett element och sedan skriver ut det valda elementet till webbläsaren. Hur du väljer att dela upp innehållet till arrayen är upp till dig.

### Övning 7

Skriv ett program som hämtar data från [https://fed17.herokuapp.com/todos](https://fed17.herokuapp.com/todos) med `https.get` och sedan skriver ut resultatet med `console.log`.

**OBS: använd `const https = require('https');`** Observera s:et.

### Övning 8

Skriv ett program som hämtar från [https://fed17.herokuapp.com/top-movies](https://fed17.herokuapp.com/nobel) och ut titlarna på alla filmerna i console.log.

**OBS: använd `const https = require('https');`** Observera s:et.

### Övning 9

Skriv en server som hämtar från [https://fed17.herokuapp.com/top-movies](https://fed17.herokuapp.com/top-movies) med `http.get` och sedan visar upp alla titlar på alla filmer i webbläsaren.

**OBS: använd `const https = require('https');`** Observera s:et.

### Övning 10

Skriv en server som hämtar från [https://fed17.herokuapp.com/top-movies](https://fed17.herokuapp.com/nobel) och visar informationen från övning 9 i webbläsaren. Informationen ska vara formatterad snyggt med `html`-taggar.

**OBS: använd `const https = require('https');`** Observera s:et.

## Lösningsförslag

### Övning 1

```js
//app.js
const myModule = require('./module.js');

myModule.print();

```

```js
//module.js
module.exports = {
    print: function(){
        console.log("Mom! I'm printing!");
    }
}
```

Frågor:

1. Vi skapar funktionen utanför module.exports. Nedanför sista måsvingen. Då kan vi använda den inuti modulen men den exporteras inte
2. Så vi kan exportera flera olika egenskaper och funktioner. Vi har oftast flera olika funktioner i en modul.
3. Ja, man kan importera i flera led. Lägg helt enkelt till en `require` i `module.js` i det här fallet för att importera något

### Övning 2

```js
const http = require('http');

http.createServer((req, res) => {
    res.write("Goodbye World!");
    res.end();
}).listen(4000);
```

Superkompakt!
```js
require('http').createServer((req, res)=>{
    res.write("Goodbye World!");
    res.end();
}).listen(4000);
//4000 means we are starting the server at: localhost:4000
```

### Övning 3

```js
const fs = require('fs');

const dataToWrite = "Mom! I'm writing here! Leave me alone!";

//this will save the data to './textfile.txt'
fs.writeFile('textfile.txt', dataToWrite, (error) =>{
    if(error) console.log(error);
});

```

### Övning 4

```javascript
const fs = require('fs');
let fsReadStream = fs.createReadStream('textfile.txt');

let data = [];

fsReadStream.on('data', (chunk) => {
    data.push(chunk.toString());
});

fsReadStream.on('end', () => {
    console.log(data);
    console.log(data.length);
});

```

Testa att köra funktionen utan `toString()`, vad får du för resultat då?

### Övning 5

```javascript
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('textfile.txt', (err, data) => {
        res.write(data);
        res.end();
    });
}).listen(4000);

```

### Övning 6

Här kan man köra med antingen `createReadStream()` eller vanlig `readFile()`.

```js
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {

  let fsReadStream = fs.createReadStream('textfile.txt');
  let data = "";

  fileReadStream.on('data', (chunk) => {
    data += chunk;
  });

  fileReadStream.on('end', () => {
    let arr = data.split(',');
    response.writeHead(200, {"Content-Type":"text/plain"});
    let i = Math.floor(Math.random() * arr.length);
    let word = arr[i];
    response.write(word);
    response.end();
  });

}).listen(4000);

```


### Övning 7 

```javascript
const https = require('https');

let url = "https://fed17.herokuapp.com/top-movies";

https.get(url, (response) => {
    let data = "";
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', () => {
        console.log(data);
    });
});

```


### Övning 8

```javascript
const https = require('https');

const url = "https://fed17.herokuapp.com/top-movies";

https.get(url, (response) => {
    let data = "";
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', () => {
        let movies = JSON.parse(data);
        for(let movie of movies){
            console.log(movie.title);
        }
    });
});
```


### Övning 9/10

```javascript
const https = require('https');
const http = require('https');
const fs = require('fs');

const url = "https://fed17.herokuapp.com/top-movies";

let data = '';

//Create a server that handles the response/request
http.createServer((request, response) => {
  // Make a fetch with node
  https.get(url, (getRequest)=> {
    //Stream the data into 'data', append each chunk
    getRequest.on('data', (chunk) => {
      data += chunk;
    });
    //When all data is recieved, start the transformation
    getRequest.on('end', () => {
      //Parse from JSON
      let movies = JSON.parse(data);
      //Create a holder for the elements
      let movieList = "";
      for(let movie of movies){
          movieList += `<p>${movie.title}</p>`;
      }
      //Set the response to HTML so we can view it in the browser
      response.writeHead(200, {"Content-Type":"text/html"});
      //Write the list to the response
      response.write(movieList);
      //Send the response
      response.end();
    });
  });
}).listen(4000);
```
