# PHP API + `fetch`

I ett ReST API behöver vi inte veta någonting om servern och servern behöver oftast inte veta så mycket om oss som gör förfrågan. Vi vet inte om informationen kommer från en SQL-databas eller en NoSQL-databas. Vi vet inte heller om servern är en php-server eller något annat, och det spelar ingen roll, alla servrar kan agera APIer. Vi kan skriva vårt eget API om vi behöver:

#### `GET`-request

_Om vi utgår från följande anrop i JavaScript_
```js
fetch('fetch_all_todos.php')
    .then((response) => response.json())
    .then((todos) => {
        console.log(todos);
    })
```

_Så måste vi formattera den data som skickas på det sättet som förfrågas_
```php
// fetch_all_todos.php
<?php
// Database connection
$pdo = new PDO(
    "mysql:host=localhost:8889;dbname=fetch_test;charset=utf8",
    "root",
    "root" 
);

// Select all todos in table
$get_statement = $pdo->prepare("SELECT * FROM todos");
$statement->execute();
$todos = $statement->fetchAll(PDO::FETCH_ASSOC);

// Echo the data, except in this case we are not showing the page to
// the user we are just sending the data when it is requested. In this
// case we are requesting it via fetch. We must use `json_encode` to format
// the php-array into JSON-format before we send it.
echo json_encode($todos);
```

#### `POST`-request


```js
// If you have a form, get that element from the DOM
const form = document.getElementById('form');

// Listen to the 'submit'-event, when a user presses enter or presses 'Submit'
form.addEventListener('submit', () => {
    fetch('post_todo.php',{
        method: 'POST',
        body: new FormData(form) // Create and send a FormData-object
    })
})

```

```php
$pdo = new PDO(
    "mysql:host=localhost:8889;dbname=fetch_test;charset=utf8",
    "root",
    "root" 
);

$statement = $pdo->prepare(
    "INSERT INTO todos (text, complete) 
    VALUES (:text, :complete)"
);
  
$statement->execute(array(
    ":text"     => $_POST["text"],
    ":complete" => $_POST["complete"],
));
```


## Övning

>Kan göras med de andra i gruppen, samarbeta gärna. Det finns inget facit men jag kan ge tips på hur det ska lösas.

Använd Millhouse-projektet från föregående kurs. Där var all kod upplagd så att du besöker en sida för att visa upp ett blogginlägg eller liknande. Samma när du postade ett bloginlägg så gjorde du ett request och laddade om sidan. Med AJAX så kan vi göra detta utan att ladda om sidan och uppdatera innehållet medans vi är på sidan. Du behöver dock göra endpoints (URLer) som levererar formatet i JSON.

1. Gör så att du kan anropa din MySQL-databas och hämta ut samtliga blogginlägg med hjälp av `fetch` istället och att du får tillbaka datan i `JSON`-format. Du behöver såklart lägga till en JavaScript-fil genom en script-tagg på den sida som ska hantera anropet.
2. Gör så att du kan skicka ett blogginlägg till databasen när du klickar på submit, dock ska blogginlägget postas via att du har en `submit`-event listener på formuläret som istället för PHP hanterar skickandet av formuläret. 
3. Hur ska vi göra om vi vill hämta data från en annan tabell? T.ex. att vi vill ha kommentarer till ett inlägg? Eller spara en kommentar till ett visst inlägg? Vi behöver vissa IDn, men hur kommer vi åt dessa IDn från JavaScript?
4. Teoretisk fråga: hur blir det med navigationen? Om allting kan ske från en sida, behöver vi flera sidor sidor i vår applikation? Om vi alltid är på samma sida hela tiden när vi arbetar med JavaScript, hur gör man om man vill ha en viss URL till en viss sida även om vi aldrig byter sida?
