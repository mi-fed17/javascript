# Forms and Refs 

Vi ska fortsätta på tidigare övning gällande filmerna som renderas ut i vårt UI med hjälp av `fetch`, `this.setState({})` och `map`. Vi ska utöka vår applikation med fler inputfält och filtering.

* [**Forms @ react documentation**](https://facebook.github.io/react/docs/forms.html)
    *  Exempel ur dokumentationen på olika inputfält     


## Övningar

### Inputs

1. Om du inte redan har gjort det från föregående övning, implementera en sökfunktion som söker igenom arrayen med filmer och visar _'live'_ sökresultat när man söker i inputfältet.
2. Plocka ut några eller alla genrer som finns i listan. Skapa en `<select>` som innehåller `<option>`-taggar med dessa genres. Koppla en `onChange` till `<select>`-taggen och gör så att listan filtreras efter den genren som du väljer.
3. Skapa en `<input type="checkbox">`-tagg som togglar om t.ex. er `<Header>` ska visas på sidan eller inte. **Obs: På `<input type="checkbox">` vill man kolla efter `e.target.checked`**
4. Skapa en till `<input type="checkbox">` som togglar om listan ska visa poster-bilderna eller inte.
5. Fortsätt implementera _LoginForm_ som vi gjorde under lektionen. Få det att fungera i din applikation så att användarnamn och lösenord loggas ut eller visas någonstans i din applikation när vi trycker på login-knappen.
6. Lägg in validering så att lösenordet måste vara minst 8 tecken långt för att kunna läggas in. Om det inte är 8 tecken långt, visa upp ett error av något slag.
7. Implementera flera olika valideringar så att du får olika error beroende på vad felet är. T.ex.: visa och fokusera olika inputfält beroende på om lösenordet är fel eller användarnamnet är fel, validera om det är en valid email-adress.
8. Vid "lyckad" inloggning, se till så att hela applikationen får tillgång till användarens data och den visas upp någonstans på sidan.


### Extra - Info om refs

Refs har några få användningsområden och ska användas sparsamt. Men det hjälper en att förstå lite mer om hur React fungerar. Vi kan alltid komma åt DOMen som vanligt om vi vill även om det inte är reactigt:

```js
const inputValue = document.getElementById('myInput').value;
```

`refs` fungerar lite enligt samma logik, den sparar all information i DOMen istället för React, men vi vill ha informationen i React så att vi kan manipulera den enklare. Men vi kan referera till en vis __nod__ i DOMen om vi vill:

```jsx
handleChange = () => {
    //Reference to the node saved in our component
    console.log(this.input.value)
}
render(){
    return(
    <div>
        <input
            ref={node => {this.input = node;}} { /* Save the node to this.input */}
            name="inputValue"
            placeholder="Input using refs"
            onChange={this.handleChange}
            />
    </div>
    );
}
```


Om vi har denna nod så kan vi fokusera den, det kan vara användbart: 

```jsx
componentDidMount(){
    this.input.focus();
}
```


## Lösningsförslag

### Sökfunktionalitet, filtrera på genre & sökfält

```jsx
//App.js
import React, { Component } from "react";
import InputField from "./components/InputField";
import SelectField from './components/SelectField';
import List from "./components/List";

class App extends Component {
  /* State will hold all movies fetched, genre to filter by for the
   * select input and a filtered list of movies */
  state = {
    allMovies: [],
    moviesByGenre: [],
    genre: '',
    searchTerm: ''
  };

  componentDidMount() {
     fetch(`https://fend-api.herokuapp.com/movies?_limit=20`)
       .then(response => response.json())
       .then(json => {
         this.setState({ allMovies: json });
       });
    }

  filterByGenre = (e) => {
    /* Function bound to the select-field. e.target.value is based on 
     * <option value=""/>. e.target.value === genre to filter by */
    const moviesByGenre = this.state.allMovies.filter((movie) => {
      /* movie.genres is an array so we have to use includes for example
       * if the array contains our value, return the whole object. moviesByGenre
       * will contain all movies where this statement is true */
      return movie.genres.includes(e.target.value)
    })
    /* Set both the new filtered list and the genre to filter by */
    this.setState({ moviesByGenre: moviesByGenre, genre: e.target.value });
  }

  /* Generic onChange-handler, updates all text inputs state */
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    /* Destructure, pick all values from this state for easier referencing */
    const { genre, moviesByGenre, allMovies, searchTerm } = this.state;
    /* If genre is selected, return the filtered array, else, return all movies
     * This value will get past to the List-component that renders the movies */
    let moviesToRender = genre ? moviesByGenre : allMovies;
    /* If there is some input in the text input, filter again, else, just return
     * the list unfiltered, empty string always false */
    moviesToRender = searchTerm ? moviesToRender.filter(movie => movie.title.includes(searchTerm)) : moviesToRender;
    return (
      <div className="App">
        {
          /* InputField extracted to a separate component, App still holds
           * its state, the onChange is in App but gets passed down */
        }
        <InputField
          name="searchTerm"
          value={searchTerm}
          onChange={this.onChange}
        />
        {
          /* Pass down the filter function to the select field, also pass
          * down this.state.genre so the select field updates according to
          * the state. genre === this.state.genre */ 
        }
        <SelectField onChange={this.filterByGenre} value={genre} />
        {
          /* moviesToRender will either contain allMovies or moviesByGenre
           * depending if a genre has been selected  */
        }
        <List data={moviesToRender}/>
      </div>
    );
  }
}

export default App;
```

```jsx
//List.js
import React from "react";

/* List is in charge of just mapping through the array
 * passed to it */
function List(props) {
  const list = props.data.map((item, index) => <p key={index}>{item.title} </p>)
  return <section>{list}</section>;
}
export default List;
```

```jsx 
//SelectField.js
import React from "react";

/* Stateless component, only state in App.js. the event handling
 * is just passed down but is being performed in App.js, same as
 * the selected value */
function SelectField(props) {
  return (
    <select onChange={props.onChange} value={props.value}>
      <option value=""> All </option>
      <option value="Drama"> Drama </option>
      <option value="Action"> Action </option>
      <option value="Crime"> Crime </option>
      <option value="Adventure"> Adventure </option>
    </select>
  );
}
export default SelectField;
```

```jsx
//InputField.js
import React from "react";

/* The input has no state, state is handled in App.js
 * controlled component, but the control is in App.js */
function InputField(props) {
  return (
    <input
      type="text"
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
}
export default InputField;
```