# `state`, `props` & events

Förutom `props` har vi även `state`. `state` ska användas för att uppdatera UI:t och få en snabb applikation, samtidigt så är det lätt att man överanvänder `state` och krånglar till det. `state` ska oftast vara väldigt långt upp i applikationen. I vårt fall vill vi ha vårt `state` i `App` och sedan skicka ner värden till våra underkomponentener med hjälp av `props`. `props` ska vara _immutable_ (får inte ändras), medan `state` får ändras.

Att läsa:
* [Lifting State Up @ React Docs](https://facebook.github.io/react/docs/lifting-state-up.html)
* [State and Lifecycle @ React Docs](https://reactjs.org/docs/state-and-lifecycle.html)

_`this.setState({})` exempel_

```jsx
//App.js
class App extends Component {
  state = {
    visible: true,
    name: 'Palle'
  }

  handleClick = () => {
    this.setState({ visible: !this.state.visible })
  }

  render(){
    let greeting = null;
    if(this.state.visible) {
        greeting = <h1>Hello { this.state.name }! </h1>;
    }
    return(
        <div>
            { greeting }
            <button onClick={this.handleClick} > 
              Click me!
            </button>
        </div>
    );
  }
}
```

_skillnad mellan `class` och `functional`_

```jsx
// class
class Header extends Component {
  render(){    
    return(
        <h1>
          { this.props.title}
        </h1>
    );
}
```

```jsx
//Functional, no render method, just return. No `this`.
//props instead of this.props
function Header(props){ 
  return(
    <h1>
     { props.title }
    </h1>
  );
}

```


### Övningar - `state`

1. Skapa ett `<input>`-fält i din `App`-komponent. Det behöver inte vara en egen komponent.
2. Skapa en ny metod i din klass som heter `handleChange` och som tar `event` som parameter.
3. Skapa en `onChange` på ditt input-fält och sätt så att metoden `handleChange` ska köras varje gång inputfältet ändras.
4. Implementera så att `<input>`-fältet uppdaterar värdet `name` i `state`. Metoden `handleChange` ska alltså kalla på funktionen `this.setState({})` för att uppdatera värdet.
5. Gör sedan så att värdet av `name` skrivs ut någonstans på din sida. Du kan referera till värdet genom att skriva `{this.state.name}`. 
6. Gör sedan så att det du skriver in i `this.state.name` skrivs ut baklänges :sunglasses: Var ska detta göras? (tips, inte i själva statet)
7. Gör sedan så att värdet **INTE** skrivs ut om värdet innehåller ett `z`.

### Refactor

Som vi sa behöver vi skicka `state` nedåt, så vi ska refaktorera vår applikation lite.

1. Plocka ut ditt `<input>`-fält och lägg det i en egen **funktionell** komponent: `InputField.js`.
2. Skicka ned metoden `handleChange` som en `prop` till denna komponent.
3. Få applikationen att fungera som den gjorde innan du delade upp den i flera delar.
4. Använd `InputField`-komponenten två gånger, ändra sedan värdet i ett av inputfälten och sedan det andra. Hur fungerar det?

### Skapa en räknare

1. Skapa en knapp som är en egen komponent `Button` och själva knappen ska ha en `onClick`-funktion.
2. Skapa en funktion i `App.js` som uppdaterar en variabel `state` med **1** varje gång man klickar på den. Rendera ut detta `state` någonstans på din sida.
3. Skicka ner funktionen till din `Button`-komponent. Alltså ska ett värde på sidan uppdateras med _1_ varje gång vi klickar på knappen. Du måste ta nuvarande state och alltid öka det med 1.


### Extra: Let's go to the mall!

Skapa en **unik och trevlig webbshopupplevelse** med `state` och `props`!

I ditt `state` ska du ha en array av produkter som heter t.ex. `products`. Varje produkt ska vara ett objekt som har ett namn och ett pris och gärna ett `id`. Rendera ut alla produkter i arrayen så att de visas på sidan i en lista eller i varsin `<div>`. 

Varje produkt ska ha en knapp bredvid sig. När man trycker på knappen ska produkten läggas till i en annan array i ditt `state` som heter `cart`. Produkten ska alltså flyttas från ena arrayen i `state` till den andra när man trycker på knappen. __Tips__: du måste använda antingen `Array.push` eller _Spread operator_ när du ska lägga till produkten, men inte inuti `this.setState({})`.

När produkten sedan ligger i din `cart` ska man kunna ta bort produkten också. I listan över produkter ska det alltså finnas en knapp till varje produkt som tar bort produkten ur `this.state.cart`.

__Tips__: du ska använda `onClick` på dina knappar och det behövs en funktion för att göra överföringen. Du ska skicka med vad som ska lagras i den andra arrayen som ett argument i din funktion som flyttar produkten från `products` till `cart`:

```jsx
<button onClick={() => this.handleClick(product)} > Add To Cart </button>
```

_Vad kan man mer implementera? Hur många av varje produkt man vill köpa? Öka en räknare för varje produkt om man t.ex. vill köpa 2 av en produkt._



# Lösningsförslag


#### Lösningsförslag - Inputfält

```jsx
import React, { Component } from 'react';

class App extends Component {;
  state = {
    name: ''
  }

  handleChange = () => {
    this.setState({ name: e.target.value });
  }

  render() {
    //Check if the string includes the letter, conditional rendering!
    let noZ = this.state.name.includes('z') ? 'No Z please!' : this.state.name;
    return (
      <div className="App">
        <InputField handleChange={this.handleChange} value={this.state.name}/>
      { /* you can do this directly in render return or do it outside of the return */  }
        <h1>Reverse: <br/> { this.state.name.split("").reverse().join("") }</h1>
        <h1>{ noZ } </h1>
      </div>
    );
  }
}

//Put this component in a separate file called `InputField.js`
class InputField extends Component {
  render(){
    return (
      <input type="text"
           name="name"
           value={ this.props.value }
           onChange={ this.props.handleChange } />
    );
  }
}

export default App;
```

#### Lösningsförslag - Räknare

```jsx
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    //Take the current state and add 1 every time, the current state is
    //always this.state.counter
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="App">
        <Button handleClick={this.handleClick}/>
        <h1>{ this.state.counter }</h1>
      </div>
    );
  }
}

function Button(props) {
  //onClick with big C!
  return (
    <button onClick={ props.handleClick }>
        Click me!
    </button>
  );
}

export default App;
```


#### Lösningsförslag - Let's go to the mall!

```jsx
class App extends Component {
  state = {
    products: [
      "A thing",
      "Ramen",
      "A computer",
      "An evil computer"
    ],
    cart: []
  }

  addToCart = (product) => {
    /* Spread the current values, the spread returns a NEW array,
    * not bound to the old
    */
    const newCart = [...this.state.cart, product];
    this.setState({ cart: newCart });
  }

  render() {
    //To hold the elements for the for-loop
    const products = [];
    //You can use a regular for loop to create the elements
    for(let i = 0; i < this.state.products.length; i++){
      products.push(
        <div key={i}> 
          { this.state.products[i] } 
          <button onClick={() => addToCart(this.state.products[i])}>Add To Cart</button> 
        </div>
      );
    }

    // the Array.map-function makes this look more nice tho
    const cart = this.state.cart.map( (item, index) => {
      return <div key={index}> {item} </div>;
    });
    
    //Referencing the array in the return will automatically create the elements
    //from the array
    return (
      <div className="App">
        { products }
        { cart }
      </div>
    );
  }
}

export default App;
```
