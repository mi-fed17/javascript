# AJAX med `fetch()`

**Asynchronous JavaScript And XML** är det enda sättet för JavaScript att prata med en databas. I första stadiet kommer vi att använda en databas som jag själv har satt upp. Det finns 3 "tabeller" att hämta ifrån:

* `todos`
* `top-movies`
* `popular-movies`

**`todos` får manipulerar hur som helst (`POST`, `PATCH`, `PUT`, `DELETE`) men `top-movies` och `popular-movies` får bara hämtas ifrån, d.v.s. bara `GET`-requests får ske till `top-movies` samt `popular-movies`.**

Strukturen för att manipulera detta API samt de flesta andra resurser som finns på nätet är följande (**CRUD**):

_Hämta alla todos_
`GET` -> `http://fed17.herokuapp.com/todos`
_Skapa en ny todo_
`POST` -> `http://fed17.herokuapp.com/todos`
_Hämta **en** todo via ID_
`GET` -> `http://fed17.herokuapp.com/todos/1`
_Ta bort **en** todo via ID_
`DELETE` -> `http://fed17.herokuapp.com/todos/1`
_Uppdatera **en** todo via ID_
`PATCH` -> `http://fed17.herokuapp.com/todos/1`
_Ersätta **en** todo via ID_
`PUT` -> `http://fed17.herokuapp.com/todos/1`

Fullständiga instruktioner över allt som kan göras med databasen finns här:
* [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

## Övningar

### Övning - movies

1. I databasen finns även en tabell med `top-movies` samt `popular-movies`hämtade från **IMDB**, båda tabellerna har samma utseende. Hämta de 20 bästa filmerna i databasen genom att göra en `GET`-request och använda queryn `_limit=20` för att begränsa antalet filmer som hämtas:
```http
http://fed17.herokuapp.com/top-movies?_limit=20
```
Lista sedan upp dessa filmer som kommer tillbaka som en lista i DOMen med namn IMDB-betyg. Samma sak som med todos-uppgiften men här måste vi vänta på svaret från databasen. **Kom ihåg att värdet som kommer tillbaka är JSON och måste göras om till JavaScript**
2. Lista även upp varje films genres som ytterligare en lista eller med valfri styling, bara så att det är tydligt att det är filmens genres.
3. Till varje film finns även ett antal relaterade filmer(`alsoLiked`) som är baserade på vad användarna som gillat den nuvarande filmen mer har gillat för filmer, eller filmer som är likartade. Lista även upp dessa filmer eller de 3 första relaterade filmerna i en lista eller på något sätt så att det är tydligt att de relaterade filmerna hör till en viss film.

### Övning - todos

1. Hämta alla todos och visa upp de i en snygg lista i HTML. Du behöver göra en `GET`-request med `fetch()`. Se över koden från genomgången för att få hjälp. Du ska alltså lägga manipulera och lägga till DOM-element efter att du har fått tillbaka svaret från databasen, d.v.s inuti `then()`. **Kom ihåg att värdet som kommer tillbaka är JSON och måste göras om till JavaScript**
2. Gör så att när du trycker på enter eller när du trycker på en knapp på sidan så skickas en `POST`-request till APIet med det du skrev i input-fältet. Här måste du alltså ha en eventListener bunden till input-fältet som i i den examinerande uppgiften men istället för att lägga till element direkt i DOMen ska värdet skickas med `fetch()` till databasen.
3. Gör så att listan med todos uppdateras, d.v.s DOMen uppdaters när du skapar en ny todo enligt punkt 2. Du måste alltså både skicka en `fetch()`-request samt skapa elementet i DOMen på valfritt sätt.
4. Gör så att du kan toggla `complete`-värdet genom en `fetch()`-request. Om du ska manipulera enbart ett värde ska du använda metoden `PATCH` samt enbart skicka med det värde som ska ändras i `body`.

