# Statisk `react` app

<img src="https://d1xwtr0qwr70yv.cloudfront.net/assets/tech/react-7b90239e805d8b06ca263be745f8ad5f.svg" height="150" width="auto" align="right" />

Vi börjar med att få känn för strukturen och komponenter i `react` innan vi trasslar in oss i interaktivtet. Vi börjar med att skapa lite olika komponenter. Först skapar vi ett nytt projekt med [`create-react-app`](https://github.com/facebookincubator/create-react-app).

```bash
npx create-react-app myAppName
cd myAppName
npm start # yarn start
```

Projektet öppnas automatiskt i webbläsaren och all din kod ska skrivas i mappen `src`. Allting annat kommer att skötas autmatiskt via `react-scripts` som i bakgrunden är `webpack` + en `node`-server.

## Övningar

Din struktur ska i slutändan se ut ungefär såhär men fungera som **en** sida: `index.html`. Alla `react`-komponenter som inte är `App.js` ska ligga i mappen `components` som du skapar själv.

`/src`
    `App.js`
    `/components`
        `Header.js`
        `Content.js`
        `Paragraph.js`
    
1. Öppna `src/App.js` och ta bort allting som returneras i `render()`-metoden. Ersätt innehållet med ett `div`-element.
3. Skapa en ny komponent som heter `Header` (Du skapar alltså filen `Header.js` som är en funktion) och renderar en `<h1>` med innehållet _"Frontendbloggen!"_ och inkludera komponenten i `App`.
4. Skapa en ny komponent som heter `Content` och inkludera komponenten i `App`. `Content` ska rendera ut en `<p>`-tagg med lite _lorem ipsum_ eller något sorts innehåll. Samt en `<h1>`-tagg med någon rubrik.
5. Skapa en komponent som heter `Paragraph.js` och kopiera in föregående _lorem ipsum_ från din `<p>`-tagg.
6. Skapa sedan __3__ st paragrafer i `Content` med hjälp av `Paragraph`-komponenter.
7. Varför gör vi på det här sättet? Varför inte bara rendera ut `<h1>` samt en `<p>` i `App`-direkt? Diskutera med en klasskamrat vad de eventulla fördelarna med detta kan vara?
8. **Utöka din sida med valfritt innehåll och bygg upp en "vanlig sida"**. Lägg till t.ex. `Sidebar.js`, `Navbar.js` eller liknande och bygg upp en standard sida fast i JavaScript och `react`. Försök att dela upp alla delar i din applikation i mindre beståndsdelar á la [_Atomic Design_](http://bradfrost.com/blog/post/atomic-web-design/) och lägg upp en struktur som känns logisk för dig.

### Styla komponenter

Vi har nu lite återanvändbart innehåll. Varje gång vi behöver en paragraf kan vi referera till `Paragraph` t.ex. (Vi ska göra det lite mer dynamiskt senare). Men vi ska göra det lite snyggare. Det finns ett antal sätt att styla på men vi ska använda det mest "klassiska": `class`. 

**Skriv css i `App.css` så att du får en respektabel förstasida med en heading, några paragrafer och om du vill ha något annat på sidan. Fokusera på html/css.**

##### CSS classes

**I _React_ måste man använda `className` istället för `class` när man ska ge en komponent en klass. Kom ihåg att en komponent är inte ren html men den renderar HTML, så `komponent !== html-element`**

```jsx
function Header(){
    return(
        <div className="row">
            <h1> Hey! </h1>
        </div>
    );
};
```

#### Inline CSS

Du kan också styla inline i React också, dessa värden blir som inline css: 

```jsx
function Header(){
    return(
        <div style={styles}>
            <h1> Hey! </h1>
        </div>
    );
}

const styles = {
    backgroundColor: "teal",
    color: "lightsalmon"
};
```

__Observera__ att `style` tar ett objekt som värde och inte en sträng. Detta betyder att om du instället skriver objektet inline också så måste du göra följande:

```jsx
//Observera dubbla curly brackets
function Header(){
    return(
        <div style={{backgroundColor: "teal", color: "lightsalmon"}}>
            <h1> Hey! </h1>
        </div>
    );
};
```


### Lösningsförslag


```jsx
//App.js
import React from 'react';
import Header from './Header.js';
import Paragraph from './Paragraph.js';

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Paragraph />
                <Paragraph />
                <Paragraph />
            </div>
        );
    }
}
```

```jsx
///Header.js
import React from 'react';

function Header() {
    return<h1> Hey from header!</h1>;
}

export default Header;
```

```jsx
//Paragraph.js
import React from 'react';

function Paragraph(){
    return(
        <p> 
            lorem ipsum bolore dolores vilken dag är din dolmio dag? 
        </p>
    );
}

export default Paragraph;
```
