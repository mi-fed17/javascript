# Separation of Concerns
> **Gruppövning**

> Concerns are the different aspects of software functionality. For instance, the "business logic" of software is a concern, and the interface through which a person uses this logic is another.

* [Separation of Concerns @ Wikipedia](https://en.wikipedia.org/wiki/Separation_of_concerns)
* [Model View Controller @ Wikipedia](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

## Övning

1. Klona ner eller ladda ner [**todo-app**](https://github.com/mi-fed17/todo-app) som ligger uppe på GitHub.
2. Läs igenom hela koden i `main.js` och försök få dig en förståelse över hur applikationens flöde är, läs kommentarerna och kolla igenom alla rader innan du fortsätter.
3. Utan att koda, dela upp koden i olika delar som hör tillsammans (gruppera med penna och papper eller ett tomt dokument). Vilka delar hanterar det grafiska, att visa upp värden i HTML? Vilka delar hanterar den rena logiken? Att bara beräkna nya värden på de gamla, att spara värden till databasen/browsern. Du ska huvudsakligen dela upp applikationen i en **View**-del och en **Model**-del. Men vilka andra delar kan man behöva ha? Finns det funktioner som inte passar in i dessa två grupperingar? Diskutera varför i sådana fall och vad man skulle kalla denna gruppering.
4. Gör denna uppdelning med var och en av era egna applikationer som ni har gjort. Kan ni dela upp era egna applikationer i detta mönster på ett enkelt sätt eller måste det ske en hel del omstrukturering? Vad är det som gör att ni inte kan dela upp koden i dessa olika delar?
5. Gruppera koden i `main` i **todo-app** så att den är uppdelad i minst **2** olika _moduler_. Dessa moduler kan vara vanliga objekt där olika funktioner ligger inuti. Ett exempel är nedan:
```js
const View = {
    displayList(items){
        const list = document.getElementById('list');
        for(let item of items){
            list.innerHTML += `<li>${ item }</li>`
        }
    }
}

const Model = {
    sortList(list){
        return list.sort();
    }
}

let list = [1,2,5,4,9,1];

Model.sortList(list);
View.displayList(list);
```
