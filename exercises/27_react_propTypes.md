# PropTypes & Context

För att lättare upptäcka när vi skickar ner fel `props` kan vi definiera vilka värden som ska skickas ner med **Typechecking**. Vi kan snabbare upptäcka fel och åtgärda dessa. Detta var först något som hörde till `react`-biblioteket men har senare lagt i ett separat _npm_-paket:

 * [`prop-types` @ github](https://github.com/facebook/prop-types)
 * [_Typechecking with PropTypes_ @ react](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)

Du behöver alltså installera det med `npm`:

```bash
npm install --save prop-types
```

eller med [`Yarn`](https://yarnpkg.com/lang/en/):

```bash
yarn add prop-types
```

Med `prop-types` kan vi kolla vilka värden som skickas ner via `props` och ge en varning om fel värde skickas ner. 

* [**Full lista över vad man kan kolla**](https://facebook.github.io/react/docs/typechecking-with-proptypes.html#proptypes)

Vi kan lägga till **typechecking** med `prop-types` på två olika sätt, en äldre variant och en nyare variant:

_vanligaste och mest använda varianten_
```jsx
import React from 'react';
import PropTypes from 'prop-types';

function Button({onClick, title}){
  return <button onClick={onClick}> {title} </button>
}

Button.propTypes = {
  title: PropTypes.string,
  onClick : PropTypes.func.isRequired
}

Button.defaultProps = {
  title: "Login"
}

```

_nyare variant för ES6-`class`_
```jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component{
  static propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func.isRequired
  }
  static defaultProps = {
    title: 'Login'
  }
  render(){
    return(
      <button onClick={this.props.onClick} title={this.props.title} >
        { this.props.title } 
      <button>
    );
  }
}
export default Button;
```


## Övningar

### propTypes & defaultProps

1 . Ordna så att dessa komponenter har rätt `propTypes` enligt vad som står i beskrivningen ovan varje komponent.

* **Arrayen som skickas ner via props får enbart vara en array fylld med objekt. Arrayen måste skickas ner.**

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function List(props){
  const list = props.data
    .map(item => <li key={item.id}> {item.title} </li>)
  return(
    <ul>
      { list }
    </ul>
  )
}

```

* **`props.data` får enbart vara en array av strängar, `isVisible` får enbart vara en `bool`. Båda props måste finnas.** 

```jsx
function StringList(props){
  const list = props.data
    .map((item,index) => <li key={index}> {item} </li>)

  if(props.isVisible){
      return(
        <div>
          { list }
        </div>
      )
   }else{
     return null;
   }
}
```

* **`type`, `name`, `value` ska vara strängar, `style` ska vara ett objekt av strängar. `onChange` ska vara en funktion. Om inget värde skickas ner via `type` så ska defaultvärdet vara `"text`. Detta går att lösa på 3 olika sätt, använd ett. `onChange`, `value` och `name` måste finnas.**

```jsx
function InputField(props){
  return <input
            type={props.type}
            name={props.name}
            value={props.value}
            style={props.style}
            onChange={props.onChange} />
}
```

* **`onClick` är en nödvändig funktion. Det får enbart finnas ett element eller sträng som skickas ner via `props.children`. `className` får enbart vara ett utav två värden: `"btn-primary"` eller `"btn-secondary"`. `onClick` och `children` måste finnas.**

```jsx
function Button(props){
  return <button onClick={props.onClick} className={`btn ${props.className}`} > 
  {props.children} 
  </button>
}

```

2 . Lägg till `propTypes` till dina egna komponenter som du tidigare har skapat. T.ex. dina knappar från igår, `Card`-komponenten från filmuppgiften eller login-formuläret från tidigare. PropTypes är inget som måste finnas men det hjälper en att upptäcka fel snabbare.

