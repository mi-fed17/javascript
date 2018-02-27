# Medieinstitutets VäderPrognos (MVP) :cloud: :sunny: :zap:

* [**GitHub Repo** - https://github.com/mi-fed17/mvp](https://github.com/mi-fed17/mvp)

## Länkar

* [OpenWeatherMap - *API Documentation*](https://openweathermap.org/api)
* [API Documentation - **Current Weather**](https://openweathermap.org/current)
* [API Documentation - **Forecast**](https://openweathermap.org/forecast5)

## Instruktioner

* Gå till [OpenWeatherMap - Sign Up](https://home.openweathermap.org/users/sign_up) och registrera en ny användare om du inte redan har gjort det.
* Gå till tabben **API Keys** och kopiera den nyckeln som är en lång sträng av blandade siffror och bokstäver och spara den som en variabel i JavaScript:

![API Key](https://i.imgur.com/soOqee1.png)

* Följande url ska du kalla på för att få vädret från Stockholm. Men du byter ut `20a5e7348daf2de356fcebbb83eede5` till din egen API-nyckel som du kopierade tidigare. Du kan först testa klistra in URLen i din webbläsare, om du har gjort rätt så kommer du få tillbaka ett objekt med massa data om vädret i Stockholm.

```http
http://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=20a5e7348daf2de356fcebbb83eede5
```

* När du ska göra API-anropet så lägger du in URLen som argument till `fetch()` som nedan. Du behöver alltid ange ett sökkriteria `q=Stockholm` samt ange din API-nyckel via `appid=`. Så URLen är `http://api.openweathermap.org/data/2.5/weather` men sedan lägger vi till ett antal parametrar i URLen som säger till APIet vilken information vi vill hämta. Alla dessa parametrar ska komma efter `?`. Varje ny sökparameter separeras med `&`. Du skiljer `URL queries` från själva URLen genom frågetecknet(`?`). **Vilka queries vi måste använda skiljer sig från API till API, `appid` och `q` är de queries som används i just det här APIet**
```js
fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=20a5e7348daf2de356fcebbb83eede5')
    .then(function(response){
        return response.json();
    })
    .then(function(weatherData){
        console.log(weatherData);
    })
    .catch(function(error){
        // Handle error
    })
```

## Övningar

### Hämta extra data

1. Skriv ut vindhastigheten och från vilket håll vinden blåser. _Tips_: `wind`.
2. Skriv ut på sidan när solen går upp och när solen går ner på platsen. _Tips_: `sys`

### Prognos

Du kan också få ut en prognos för 5 dagar framåt samt var tredje timme genom att byta ut `weather` i URLen mot `forecast`. Du behöver fortfarande `appid` för din API-nyckel samt `q` eller `id` för att söka efter en stad.

```http
http://api.openweathermap.org/data/2.5/forecast?q=Stockholm&appid={DIN_API_NYCKEL}
```

Detta kommer att returnera en annan struktur på datan. Du kommer att få ut array av objekt i egenskapen `list` där väderdatan för var 3:e timme ligger.

```js
{
    cod: "200", 
    message: 0.0021, 
    cnt: 40, 
    list: Array(40), 
    city: {…}
}
```

1. Skriv ut vädret och temperaturen för var 3:e timme de kommande 5 dagarna. Du måste loopa igenom egenskapen `list` och leta upp de rätta variablerna samt skriva ut dessa i en lista eller liknande i HTML.
2. Räkna ut medeltemperaturen för de kommande 5 dagarna och skriv ut denna medeltemperatur på sidan.
