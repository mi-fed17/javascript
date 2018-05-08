# Hämta data från API i React

* [**Introduktion**](#introduktion)
* [**Övningar**](#ovningar)
* [**Handle CORS Client-side**](https://gist.github.com/jesperorb/6ca596217c8dfba237744966c2b5ab1e)
    * Om ni använder något annat API och får problem med **CORS** så läs detta.

## Introduktion

Statisk data är ju lite trist, när vi skapar applikationer vill vi jobba med levande och dynamisk data från externa (eller internal) källor. Som tur är finns det galet många publika API:er (_Application Programmable Interface_) att hämta data ifrån. 

Det "enklaste" sättet är att använda [`fetch API`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) som är __native__ till JavaScript och har [bra coverage (Can I Use)](http://caniuse.com/#search=fetch) på de flesta webbläsare.

### `fetch`

fetch använder sig utav JavaScripts [Promises](https://davidwalsh.name/promises) som innehåller ett värde som eventuellt är tillgängligt:
>The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

Det finns en väldigt bra playground för om man vill testa sig fram till hur Promises fungerar: [**Promisees**](https://bevacqua.github.io/promisees/)

Problemet med att kalla på API:er är att vi aldrig vet hur lång tid det tar att få tillbaka informationen eftersom den hämtas _asynkront_ och därför följer inte **AJAX** det "vanliga" kodflödet (alltså att det inte körs exakt rad för rad. Förövrigt är även `this.setState({})` asynkront :sunglasses:).

---

**MÅSTE-VIDEO FÖR ATT FATTA ASYNKRONITET I JAVASCRIPT:**

[**What the heck is the event loop anyway? by Philip Roberts**](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

---

**Viktigt att förstå att det alltid är ett Promise som returneras och att ett Promise innehåller vårt värde. Vi måste plocka ut vår JSON från detta Promise!**

```js
//skinny version
fetch("https://api.me/get")
    .then(response => response.json())           //Get JSON, implicit return
    .then(json => console.log(json))    //Log the JSON
```

```js
//fat version
fetch("https://api.me/get")
    .then(function(response){
        return response.json()
    })
    .then(function(json){ 
        console.log(json)
    });
```

När vi har har fått tillbaka vår data `json` kan vi lagra informationen i `state`!

---

Om man inte vill använda `fetch` så finns det massa andra bibliotek: [axios](https://github.com/mzabriskie/axios), [superagent](https://visionmedia.github.io/superagent/), [reqwest](https://github.com/ded/reqwest), [request](https://github.com/request/request) för att nämna några. Men `fetch` är det som är native till JavaScript.


## Övningar

## Hämta filmer!

För att underlätta testningen av att hämta information via API så ska vi i övningarna hämta data från detta temporära API:

* [`https://fend-api.herokuapp.com/movies`](http://fed17.herokuapp.com/top-movies)
    *Om du inte vill ha ut alla typ 120 filmer så kan man sätta en limit i urlen: [`http://fed17.herokuapp.com/top-movies?_limit=20`](http://fed17.herokuapp.com/top-movies?_limit=20)

API:et innehåller en array av objekt som är hämtad från IMDB:s databas. Ni ska rendera ut innehållet på er sida. Om ni vill t.ex. köra något css-ramverk så ladda ner det och importera det: `import './bootstrap.css` eller länka in CDN-länken via `public/index.html` som vanligt.

1. Använd `fetch` för att hämta arrayen från urlen ovan och lagra arrayen i ditt `state`. Detta kan göras via att kalla på en funktion som hämtar informationen eller att du laddar in informationen direkt via `componentDidMount()`. Om du är osäker på om du lyckats kan du alltid logga: `console.log(this.state)`.
2. Skapa en komponent som ska vara till för varje film, komponenten ska skriva ut filmens title, betyg samt bild på ett välformatterat sätt. Använd t.e.x bootstrap om du inte orkar cssa själv. Filmen kan vara t.ex. ett `Card` från bootstrap. Använd sedan en loop för att skapa en komponent för varje film:

```jsx
//ofullständigt exempel
import Card from './Card';
//För varje film i state, skapa en ny komponent.
const movies = this.state.movies.map(movie => <Card title={movie.title} grade={movie.grade} poster={movie.posterUrl} />)
```

3. Implementera så att man kan filtera innehållet. Återanvänd ert inputfält från tidigare i veckan och få det att istället filtrera filmerna. Filtrera t.ex. på filmens namn. Tänk tillbaka på hur du gjorde i JS1.

#### Extra

Fetch hanterar `GET` som default. Om vi vill göra något annat än en `GET` måste vi specifiera det i inställningarna. Inställningarna är ett objekt som skickas med som argument till `fetch`. Vi måste sätta metoden samt säga vilket innehåll vi ska skicka med. Du kan använda `POST`, `PATCH` och `DELETE` på alla objekt i APIet egentligen men det finns även en samling med "notes" i APIet som du kan använda:

```js
fetch("https://fed17.herokuapp.com/todos", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },  
      body: JSON.stringify({ text : "Hello!", completed: false })
  });
```

1. Testa att posta en _"todo"_ till [`https://fed17.herokuapp.com/todos`](https://fed17.herokuapp.com/todos) med hjälp av `fetch`. Värdet du skickar in ska skickas in i din request ska plockas från ett input-fält. Använd tidigare kod. Värdena som du skickar med hämtas via `state`. Statet sätts via dina event-funktioner (`onChange` t.ex.).
2. Fortsätt implementera en todoapplikation fast med detta remote API. Fast den ska kommunicera via detta API. Så applikationen ska först hämta informationen som ni gjorde med filmerna. Sedan ska varje _todo_ ha en checkbox. När man checkar i checkboxen ska ett API-call skickas till API:et som ändra `completed` på er _todo_. __Detta betyder att du måste i din komponent någonstans spara `id`__ så att du checkar i rätt _todo_. Checkbox returnerar true eller false. Checkboxar kan också lyssna på `onChange`.
3. Vilka fler saker från er gamla todo-applikation saknas? Två olika listor? `complete` och `incomplete`. Kolla på er gamla Todo-lista från JS1 t.ex. och försök implementera de delar som saknas. Kom ihåg att ta det i små steg, dela upp det i mindre delar, vad ska göras först?


## Lösningsförslag

_Sökning av filmer_

```jsx
import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    data: [],
    searchTerm: '' //value={this.state.searchTerm}
  }

  componentDidMount() {
    this.getDataFromApi(); //When <App /> is in the DOM, load the data
  }

  getDataFromApi = () => {
    fetch('https://fend-api.herokuapp.com/movies?_limit=20')
      .then(response => response.json())
      .then(data => {
        //When we are sure we have the data
        this.setState({ data: data });  
      })
      .catch(error => {
        //Else we can save an error to display later
        this.setState({ error: error })
      })
  }
  //Handle input onchange, searchTerm === <input name="searchTerm" />
  onChange = e => this.setState({ searchTerm : e.target.value})

  render() {
    //Extract the array and the searchTerm from the state, makes it easier
    //to reference, don't have to write 'this.state' all the time
    const { searchTerm, data } = this.state; 
    //Loop through
    const list = data.map((item, index) => {
      //empty string evaluates to false, so if not empty, enter if-statement. If the
      // user has written something in the inputfield
      if(searchTerm){
        //Check if the name of the item includes what we are searching for
        //If the string is in the item.name, return div with item, else return empty string
        if(item.title.includes(searchTerm)) {
          return item.title.includes(searchTerm) ? <div key={index}>{item.title} </div>;
        }
        return null; 
      }else{
        //If no search is entered, just return everything in the array
        return <div key={index}>{item.name} </div>
      }
    });
    return (
      <div className="App">
        { list } {/* List is reference to the created array above*/}
        <input type="text" onChange={this.onChange} value={this.state.searchTerm} />
      </div>
    );
  }
}

export default SearchForm;
```

### Todoapplikation via API 

```jsx
import React, { Component } from "react";

/**
 * Everthing is in the same component for better overview. I would 
 * recommend splitting it into smaller components! Bootstrap classes used.
 * add bootstrap CDN link in 'public/index.html'
 */

class App extends Component {
  /* state holds all todos from API and the input value */
  state = {
    allTodos: [],
    todoValue: ""
  };

  /* On page load, load all the todos */
  componentDidMount() {
    this.fetchAllTodos();
  }
  fetchAllTodos = () => {
    fetch(`http://fed17.herokuapp.com/todos`)
      .then(res => res.json())
      .then(json => {
        this.setState({ allTodos: json });
      });
  };

  /* Send the ID of the todo to be removed as an argument. Then pass it 
   * Along to fetch, just add the ID at the end of the url. Method: DELETE
   * to remove, headers must be added. */
  deleteTodo = (id) => {
    fetch(`https://fed17.herokuapp.com/todos/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(() => {
      /* On success, filter allTodos using the ID-argument from before. And
       * then set the state again with a new array without the todo */
      const newTodoList = this.state.allTodos.filter(todo => todo.id !== id);
      this.setState({ allTodos: newTodoList });
    });
  };

  addTodo = (e) => {
    /* onSubmit, prevent from submitting form */
    e.preventDefault();
    /* Create new todo based on value from state, default completed is false */
    const todo = {
      text: this.state.todoValue,
      completed: false
    };
    /* Make a post request to the same URL, but with method: POST
     * here we supply a body: a stringified version of our todo variable above */
    fetch("https://fed17.herokuapp.com/todos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .then(addedTodo => {
        /* On success, the API returns the created todo, it contains
         * id, text and completet. So we just have to set the state again
         * add the new todo to the current state, create a new array, and then
         * use setState() again */
        const newTodoList = [...this.state.allTodos, addedTodo];
        this.setState({ allTodos: newTodoList });
      });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    /* Create array of todos, the text, and a button that deletes the todo */
    const todoList = this.state.allTodos.map(todo => {
      return (
        <li className="list-group-item justify-content-between" key={todo.id}>
          <span> {todo.text} </span>
          { /* Use the id of the todo as argument, pass it to deleteTodo */}
          <button
            className="btn btn-outline-danger"
            onClick={() => this.deleteTodo(todo.id)}
          > x </button>
        </li>
      );
    });
    /* Below is mostly bootstrap stuff, a form with a controlled input field 
     * and the list we created above */
    return (
      <div className="App">
        <main className="container" style={ {maxWidth: "400px", marginTop: 60}}>
          <section className="row justify-content-center align-items-center">
          <form onSubmit={this.addTodo} className="form-inline">
              <input
                type="text"
                name="todoValue"
                className="form-control"
                value={this.state.todoValue}
                onChange={this.onChange}
              />
            <input type="submit" value="Add Todo" className="btn btn-primary m-3"/>
          </form>
          </section>
          <ul className="list-group">
            {todoList}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
```
