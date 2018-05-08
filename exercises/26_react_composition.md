# Composition

## Introduktion

Komponentstrukturen gör det möjligt för oss att återanvända redan existerande komponenter till nya komponenter. Det finns en rad olika sätt att komponera komponenter och nedan är två sätt som utgår från att man använder CSS-klasser för att ändra utseendet. Om man inte ännu har koll på `spread syntax` i JavaScript och JSX så börjar det bli dags att kolla upp det:

  * [Spread Syntax @ MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)
  * [JSX Spread @ React](https://zhenyong.github.io/react/docs/jsx-spread.html)


Ett annat vanligt förekommande ord är `Higher Order Functions`:
>A function which takes a function as an argument and/or returns a function.

Exempel på `Higher Order Functions` är *map, filter & reduce*. Dessa tar en funktion som argument och returnerar en ny array baserad på den arrayen man loopar igenom.
  * [**A Dirt Simple Introduktion to Higher Order Functions**](https://medium.com/humans-create-software/a-dirt-simple-introduction-to-higher-order-functions-in-javascript-b33bf9e19056)

Relaterat till detta begrepp har vi även `Higher Order Components` (eller *HOCs*) som bygger på samma tänk och kan förklaras enklast som: _en komponent som returnerar en annan komponent_. I det andra exemplet nedan används en `HOC`. Det är ett viktigt begrepp i React och många bibliotek bygger på denna struktur. Dock blir det snabbt komplicerat och man får välja själv om man vill fördjupa sig mer. Detta är då ett bra intro:

 * [__A Gentle Introduktion to React's Higher Order Components__](https://www.robinwieruch.de/gentle-introduction-higher-order-components/)

---

Exempel på struktur:

```jsx
//Button.js
function Button(props){
  return(
    <button className={ `button ${ props.className }` } >
      { props.title }
    </button>
  )
}
```
```jsx
//PrimaryButton.js
import React from 'react';
import Button from './Button';

function PrimaryButton(props){
  return(
    <Button {...props} className="primary" />
  )
}

//Usage
//<PrimaryButton title="Click me!"/>
```

---

```jsx
//Button.js
function Button(props){
  const className = props.primary ? 'button primary' : 'button';
  return(
    <button className={ className } >
      { props.title }
    </button>
  )
}

//Usage, props without "=" defaults to true
//<Button primary title="Click me"/>
```


## Övningar

### Komponera komponenter

För att öva på att skapa komponenter och återanvända komponenter ska vi återskapa __Bootstraps__ egna "komponenter" fast i React-komponenter: 
  * [Bootstrap 4](http://getbootstrap.com/) 


1. Använd valfri struktur (se exempel ovan) för att återskapa minst 3 av dessa knappar och fokusera på att få in flödet, d.v.s. hur `props` skickas ner:
![Bootstrap Buttons](https://i.imgur.com/sbDMO41.png)

2. Fortsätt med att återskapa några av följande knappar, det ska gå att skicka med flera props, t.ex.: `<Button outline primary />` eller `<OutlinedPrimaryButton />`
![Bootstrap outlined buttons](https://i.imgur.com/OWCOZFp.png)

### Skicka upp state

Gör så att varje knapp har sitt eget `state`, detta för att se hur vi kan skicka upp state från en komponent. Vi kommer dock behöva skicka argument till våra `onClick` i slutuppgiften så det måste sitta, [för exempel i ren JavaScript, se denna kod](https://jsfiddle.net/238f9zkm/). Det första vi måste göra är att göra komponenten __stateful__. Tänk dig att denna knapp ska ligga i `<App />` om vi nu har state lokalt i denna knapp, hur får vi upp det till `<App/>` och skriver ut värdet i `<App />`? Det som saknas är det som frågetecken.

```jsx
import React, {Component} from 'react';

//Add a class
class Button extends Component {
  //Add state
  state ={
    value: 'Value from inside the button'
  }
  //Add a local onClick function
  onClick = (????) => {
    // ???????? we want to send up this.state.value
  }
  //Add render method
  render(){ 
    //Reference this.props instead of just props, className is just a local var
    const className = this.props.primary ? 'button primary' : 'button';
    return(
      <button onClick={ ?????? } className={ className } >
        { this.props.title }
      </button>
    )
  }
}
```


### Att göra

Om du inte redan har gjort det återbesök följande övningar och gör dem, se till så att reacts flöde sitter, lösningsförslag finns till båda övningarna. Strukturera om övningarna så att de använder mindre komponenter om du inte redan gjort det, försök förminska användandet av `state`:

  * [__Lets go to the mall__](https://github.com/FEND16/javascript3/blob/master/exercises/03_state_props.md#extra-lets-go-to-the-mall)
  * [__Todolista via API__](https://github.com/FEND16/javascript3/blob/master/exercises/05_async_api.md#extra)