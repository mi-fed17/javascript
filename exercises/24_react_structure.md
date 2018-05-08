# React component structure

Det finns väldigt många sätt att lägga upp sina komponentern samt styla dem. Även om det finns vissa **mönster** som är vanliga kokas det mesta ner till personliga preferenser samt hur alla andra på projektet man jobar på har valt att lägga upp strukturen.

När man jobbar med *react* så kan man ta inspiration från [**Atomic Design**](http://bradfrost.com/blog/post/atomic-web-design/). Denna metodologi säger bara dock hur vi skulle kunna göra men inte hur vi rent praktiskt gör det. Det är upp till oss själva.

![Separation of Concerns](http://i.imgur.com/G8lNs02.png)
_[Source: Let there by peace on CSS by _Cristiano Rastelli_](https://speakerdeck.com/didoo/let-there-be-peace-on-css)_


## Övning

**I grupper av 3 ska ni återskapa följande sida på valfritt sätt:**

* [React example site - Reactive Components](https://mi-fed17.github.io/react-example/)

Huvudsaken är här inte att _"göra rätt"_ utan att försöka strukturera upp sidan så att den känns rimlig för er. Diskutera vilken struktur som alla är mest överens om.

**När ni är klara med er sida så ska ni jämföra er lösning med en annan grupp och diskutera i grupperna hur ni har löst vissa moment:**

* Vilka komponenter har ni? Jämför kan ni göra vissa komponenter mindre? Eller kan ni rentav göra vissa komponenter större?
* Hur använder ni `props` och skickar ner värden?
* Vilka komponenter är **Stateless/Functional Components** och vilka är `classes`? Och varför gjorde ni den uppdelningen?
* Hur löste ni **CSS**en. `className`, inline style, separata css-filer eller en övergripande css? Sätts olika klasser i komponenten eller ändrar ni varianter med _inline style_

---

Några exempel på hur man kan komponerna sina komponenter med komposition. Man måste inte följa dessa utan de finns som inspiration:

* [**React composition cheat sheet**](https://github.com/xat/react-component-composition-cheatsheet)

Några exempel på hur man kan styla sina komponenter och utöka sin komponenter utan att behöva repetera kod. Nedan är tre exempel på hur man kan komponera en knapp som kan ändra utseende beroende på `props`:

##### _className med inline style som sätts via `props`_
```jsx
export default function Button({ color, handleClick }) {
  return (
    <button style={ { backgroundColor: color } }
            className="button"
            onClick={ handleClick }>
        Click me!
    </button>
  );
}
```

---

##### _enbart inline style med `props`_
```jsx
export default function Button({ color, handleClick }) {
  let style={
    backgroundColor: color,
    border: "1px solid teal",
    color: "#333"
  }
  return (
    <button style={ style }
            onClick={ handleClick }>
        Click me!
    </button>
  );
}
```

---

##### _composition_
```jsx 
//Button.js
export default function Button({ handleClick,  style }) {
  return (
    <button onClick={handleClick} 
            className="button"
            style={ style }>
        Click me!
    </button>
  );
}

//PrimaryButton.js
import Button from './Button';

export default function PrimaryButton(props) {
  return (
    <Button {...props} style={ { backgroundColor: 'lightsalmon' }  } />
  );
}
```





