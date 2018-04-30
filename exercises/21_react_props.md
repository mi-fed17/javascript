# Props

> Your UI is a function of your state, and props are to components what arguments are to functions.

-- Tyler McGinnis ~ [React Aha Moments](https://tylermcginnis.com/react-aha-moments/)

Vi ska använda föregående struktur för att göra koden mer återanvändbar samtidigt som vi fördjupar oss inom just `props`. `Props` är som argument för ditt UI. Du skickar ner variabler till dina komponenter och sen kan du bestämma vad som ska renderas och hur komponenten ska renderas. Du kan tänka på dina komponenter som funktioner som tar emot ett eller flera argument, i React är dessa argument `props`. Och som i vanlig javascript **behöver inte parametrar och argument ha samma namn**

```jsx
//add a prop called 'name' to your component, the value can be,
//like in this case, a string. But it can also be an object, function,
//bool or anything!
class App extends React.Component{
    render(){
        return(
            <div>
                <Header name="Jesper"/>
            </div>
        );
    }
}

// 'this.props' contains all the props we send down, you can name them
// anything you want:  name="Jesper" === this.props.name
function Header(props){
    return <h1>Hello {props.name} </h1>;
}
```

##### Övningar - Props

1. Använd samma projekt som från föregående övning med komponenter. Implementera ovanstående kod så att du får det att fungera och att din `Header` visar ditt namn på sidan genom att ta emot värdet via `props.name`.
2. Lägg till en till `prop` på `Header`-komponenten som heter `greeting` och skicka med ett till värde som bestämmer vilken hälsningsfras som ska skrivas ut. Se till så att komponenten är uppdaterad också, spara och ladda om sidan.
3. Skapa ett objekt utanför din klass som innehåller både `greeting` samt `name`. Istället för att skicka ner två olika `props`. Skicka ner enbart ditt objekt som en ensam `prop`. Vad måste vi ändra på i komponenten för att vår kod ska fungera? Kan vi fortfarande referera till `greeting` och `name`?
4. Skicka med `props` till dina 3 likadana paragrafer och gör så att varsin paragraf får olika textfärg och font.


#### Conditional rendering

Props kan i princip vara vad som helst och behöver inte vara en sträng. Du kan skicka ner `bool`, objekt eller arrayer som `props` precis som du kan skicka vilket värde som helst till en funktion i JavaScript


##### Övningar - Conditional rendering

1. Lägg till en till `prop` på `Header` som ska heta `isVisible` och sätt den till `true`.
2. I din `Header`-komponent. Skriv en `if`-sats som använder `isVisible` och som bestämmer om `<h1>`-taggen ska visas eller inte. Testa att ändra `isVisible` till `false` efter att du har skrivit `if`-satsen och då ska `<h1>`-taggen inte synas.
3. Ta en titt på [conditional rendering@react ](https://facebook.github.io/react/docs/conditional-rendering.html). De radar upp flera olika sätt att skriva `if-satser`. Försök att implementera denna if-sats på ett annorlunda sätt än det du använde från början. Ta hjälp av dokumentationen.

#### `props.children`

**Alla komponenter behöver inte vara självslutande utan vi kan även ha omslutande komponenter.** För att komma åt innehållet inuti en komponent som är omslutande måste vi använda `props.children`. Det som läggs innanför `Button`-komponenten blir automatisk till `props.children` så vi kan i denna struktur inte döpa texten _"Click me!"_ till något annat än `props.children`. Vi ska återkomma till denna struktur längre fram i kursen och hur vi jobbar med den. 

```jsx
class App extends React.Component{
    render(){
        return(
            <div>
                <Button> Click me! </Button>
            </div>
        );
    }
}

function Button(){
    return(
        <button>
            { props.children }  //"Click me!"
        </button>
    );
}
```

##### Övningar - `props.children`

1. Implementera ovanstående kod så att du får ut rätt resultat på sidan. Använd din `<Button>`-komponent var du vill. Vi ska använda den i framtida kod.
2. Skapa en funktion i din `App`-komponent som loggar ut `"Hej"` varje gång man kallar på funktionen. Man binder en funktion till en knapp med `onClick`.
3. Testa att skicka med t.ex. en `Paragraph`-komponent inom `Button`, alltså istället för texten `"Click me!"`. Vad händer?

# Lösningsförslag

## Lösningsförslag - Props

1-2

```jsx
//add a prop called 'name' to your component, the value can be,
//like in this case, a string. But it can also be an object, function,
//bool or anything!
class App extends React.Component{
    render(){
        return(
            <div>
                <Header name="Jesper" greeting="wow just go away"/>
            </div>
        );
    }
}

// 'this.props' contains all the props we send down, you can name them
// anything you want:  name="Jesper" === this.props.name
function Header(props) {
    return(
        <h1>{props.greeting} {props.name} </h1>
    );
}
```

3.

```jsx
class App extends React.Component{
    render(){
        return(
            <div>
                <Header values={values} />
            </div>
        );
    }
}

const values = {
    name: "Jesper",
    greeting: "wow just go away"
}

//We can send an object just like in regular javascript but we have to traverse deeper into the object. 
function Header(props){
    return(
        <h1>{props.values.greeting} {props.values.name} </h1>
    );
}
```

4. 

```jsx
class App extends React.Component{
    render(){
        return(
            <div>
                <Header name="Jesper" greeting="wow just go away" />
                <Paragraph style={style1} />
                <Paragraph style={style2} />
                <Paragraph style={style3} />
            </div>
        );
    }
}

//Easiest is to create an object with each style and pass it as props
//You can also add a class to the paragraph or send individual props
const style1 = {
    color: 'teal',
    fontFamily: 'monospace'
}

const style1 = {
    color: 'lightsalmon',
    fontFamily: 'sans-serif'
}

const style3 = {
    color: 'paleviolet',
    fontFamily: 'serif'
}

function Paragraph(props){
    return(
        <p style={props.style}> What's in style? </p>
    );
}

```

## Lösningsförslag - Conditional Rendering


```jsx
class App extends React.Component{
    render(){
        return(
            <div>
                <Header values={values} isVisible={true}/>
            </div>
        );
    }
}

const values = {
    name: "Jesper",
    greeting: "wow just go away"
}
 
function Header(props){
    if(props.isVisible){
        return(
            <h1>
                {props.values.greeting} {props.values.name}
            </h1>
        );
    }else{
        return null;
    }
}
```


## Lösningsförslag - `props.children`


```jsx
class App extends React.Component{
    
    //'handleClick' belongs to the component, so when we reference it, 
    //we have to call it by 'this.handleClick'
    handleClick = () =>{
        console.log('Hej');
    }

    //onClick is a props, it doesn't have to be namned 'onClick' on the
    //component
    //this.props.children can be another component or multiple 
    //components
    render(){
        return(
            <div>
                <Button onClick={this.handleClick}> 
                    <Paragraph/> 
                </Button>
            </div>
        );
    }
}

function Button(props){
    //It does have to have the name 'onClick' on the actual button element
    //remember, Component !== html-element
    return(
        <button onClick={props.onClick}>
            { props.children } 
        </button>
    );
}