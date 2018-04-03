# Map, filter & reduce

Nedan finns ett antal frågor/övningar som ska lösas genom att loopa igenom en array med länder. Informationen finns i filen **[exercise_data.js](exercise_data.js)** Det första kodblocket visar hur man löser övningarna med **map, reduce & filter** och det andra kodblocket visar hur man svarar på frågorna med "vanliga" loopar. Du kan antingen lösa själva övningarna annars så kan du bara se över vad skillnaderna mellan de olika sätten är.

## Frågor

* Skriv ut namnen på alla länder i databasen.
* Hur många bor i hela (arrayen) världen?
* Hur många bor i Europa?
* Vilket land har minst befolkning i världen?
* Vad är medelbefolkningen för länder i Afrika?
* Finns det något land som har mer än 50000000 invånare?
* Vilka länder har mellan 8 och 15 miljoner invånare?

## Lösningsförslag

* [Lösningsförslag - Map, Reduce, filter](#map-filter--reduce-1)
* [Lösningsförslag - Regular](#regular)

### Map, filter & reduce

```js
/**
 * All the country data from: http://countrymeters.info
 * @type {Array}
 */
 var countries = [
 { 
     name: "United Kingdom",
     continent: "Europe",
     population: 65270121,
     pFemale: 0.508 
 },
 { 
     name: "Republic of Ireland",
     continent: "Europe",
     population: 4708209,
     pFemale: 0.499 
 },
 { 
     name: "Australia",
     continent: "Oceania",
     population: 24482205,
     pFemale: 0.502 
 },
 { 
     name: "Taiwan",
     continent: "Asia",
     population: 23522296,
     pFemale: 0.501 
 },
 {
     name: "Uruguay",
     continent: "South America",
     population: 3446772,
     pFemale: 0.517
 },
 {
     name: "Morocco",
     continent: "Africa",
     population: 35010005,
     pFemale: 0.510
 },
 {
     name: "Nigeria",
     continent: "Africa",
     population: 188688090,
     pFemale: 0.494
 },
 {
     name: "Zimbabwe",
     continent: "Africa",
     population: 16051510,
     pFemale: 0.507
 },
 {
     name: "China",
     continent: "Asia",
     population: 1381321335,
     pFemale: 0.488
 },
 {
     name: "Mexico",
     continent: "North America",
     population: 129386794,
     pFemale: 0.507
 },
 {
     name: "Canada",
     continent: "North America",
     population: 36446796,
     pFemale: 0.504
 },
 {
     name:"Czech Republic",
     continent:" Europe ",
     population:10556351,
     pFemale: 0.509
 },
 {
     name: "Iceland",
     continent: "Europe",
     population: 332631,
     pFemale: 0.496
 }
 ];


/**
 * 1. Returns an array of only the country names
 * @param  {Array} countryArray Array of country objects
 * @return {Array}              Array of country names
 */
 function getAllCountryNames(countryArray){

     //Array.map returns a new array based on the previous array. We must provide
     //a callback function that will handle the looping 
     return countryArray.map(function(country){
         return country.name; //The new array will only contain country.name
     })
 }

/**
 * 2. Returns the total population of all countries in list
 * @param  {Array} countryArray Array of country objects
 * @return {Number}             Sum of population
 */
 function getGlobalPopulation(countryArray){

     //The reduce function here has the following parameters: previous value & current value
     //and we get a single number returned. Reduce reduces many numbers to one.
     return countryArray.reduce(function(totalPopulation, country){

         //Here we are basically doing a for-loop that does: sum += i;
         return totalPopulation + country.population;
     }, 0) //0 as the second argument so totalPopulation starts at 0
 }

/**
 * 3. Get a continents population based on passed parameter
 * @param  {Array} countryArray  Array of country objects
 * @param  {String} continent    Continent to search for
 * @return {Number}              Total population of continent
 */
 function getContinentPopulation(countryArray, continent){
     
     //We can chain together multiple higher order functions
     //First we filter the array, if the objects continent is the same as
     //the parameter, it will be pushed into the new array.
     return countryArray
     .filter(function(country){
         return country.continent == continent;
     })
     //Then we take the newly create array and we reduce the values to a sum
     .reduce(function(totalPopulation, country){
         return totalPopulation + country.population;
     }, 0);
 }

/**
 * 4. Gets the least populated country in the list
 * @param  {Array} countryArray  Array of country objects
 * @return {Object}              Single country object
 */
 function getLeastPopulatedCountry(countryArray){
     return countryArray
     .reduce(function(previousValue, value){
         return previousValue.population < value.population ? previousValue : value; 
     })
 }

/**
 * 5. Get average population of all countries on a continent
 * @param  {Array}     countryArray    Array of country objects
 * @param  {String}    continent       The chosen continent
 * @return {Number}                    The average population
 */
 function getContinentAveragePopulation(countryArray, continent){
     var countries = countryArray.filter(function(country){
         return country.continent == continent;
     });
     var totalPopulation = countries.reduce(function(totalPop, country){
         return totalPop += country.population;
     }, 0);
     return (totalPopulation/countries.length).toFixed(0);
 }

/**
 * 6. Gets countries with population above a certain value
 * @param  {Array} countryArray  Array of country objects
 * @param  {Number} min          The minimum value
 * @return {Array}               Array of countries fitting the criteria
 */
 function getCountriesWithPopulationAbove(countryArray, min){
    //Returns a new array containing only countries with pop above min
     return countryArray.filter(function(country){
         return country.population > min;
     })
 }

/**
 * 7. Gets countries between a interval
 * @param  {Array} countryArray  Array of country objects
 * @param  {Number} min          Minimum population
 * @param  {Number} max          Maximum population
 * @return {Object}              Array of countries that fit the criteria
 */
 function getCountriesWithPopulationBetween(countryArray, min, max){
     //Just like a if statement, the filter function can take multiple conditions
     return countryArray.filter(function(country){
         return country.population > min && country.population < max;
     })
 }

/**
 * Helper function that prints the data passed to it with console log
 * @param  {any} data Can be any type of data
 * @return {void}     console.log
 */
 function print(data){
     if(typeof data === 'array'){              //If it's an array, map every value
         data.map(function(countryData){
             console.log(countryData);
         })
     }
     console.log(data);                        //else just print the value
 }

//1
 print(getAllCountryNames(countries));
//2
 print(getGlobalPopulation(countries));
//3
 print(getContinentPopulation(countries, 'Europe'));
//4
 print(getLeastPopulatedCountry(countries));
//5
 print(getContinentAveragePopulation(countries, 'Africa'));
//6
 print(getCountriesWithPopulationAbove(countries, 50000000));
//7
 print(getCountriesWithPopulationBetween(countries, 8000000 , 15000000));
```


### Regular

```js
/**
 * All the country data from: http://countrymeters.info
 * @type {Array}
 */
var countries = [
{ 
    name: "United Kingdom",
    continent: "Europe",
    population: 65270121,
    pFemale: 0.508 
},
{ 
    name: "Republic of Ireland",
    continent: "Europe",
    population: 4708209,
    pFemale: 0.499 
},
{ 
    name: "Australia",
    continent: "Oceania",
    population: 24482205,
    pFemale: 0.502 
},
{ 
    name: "Taiwan",
    continent: "Asia",
    population: 23522296,
    pFemale: 0.501 
},
{
    name: "Uruguay",
    continent: "South America",
    population: 3446772,
    pFemale: 0.517
},
{
    name: "Morocco",
    continent: "Africa",
    population: 35010005,
    pFemale: 0.510
},
{
    name: "Nigeria",
    continent: "Africa",
    population: 188688090,
    pFemale: 0.494
},
{
    name: "Zimbabwe",
    continent: "Africa",
    population: 16051510,
    pFemale: 0.507
},
{
    name: "China",
    continent: "Asia",
    population: 1381321335,
    pFemale: 0.488
},
{
    name: "Mexico",
    continent: "North America",
    population: 129386794,
    pFemale: 0.507
},
{
    name: "Canada",
    continent: "North America",
    population: 36446796,
    pFemale: 0.504
},
{
    name:"Czech Republic",
    continent:"Europe",
    population:10556351,
    pFemale: 0.509
},
{
    name: "Iceland",
    continent: "Europe",
    population: 332631,
    pFemale: 0.496
}
];



/**
 * 1. Returns an array of only the country names
 * @param  {Array} countryArray Array of country objects
 * @return {Array}              Array of country names
 */
function getAllCountryNames(countryArray){
    //Create an array to store all the country names
    var countryNames = [];
    for(var i = 0; i < countryArray.length; i++){
        // Loop through the array of objects and push only the name to the temporary array
        // Each object has an index. That index is i which increases by one every loop
        countryNames.push(countryArray[i].name);
    }
    //Return the temporary array
    return countryNames;
}

/**
 * 2. Returns the total population of all countries in list
 * @param  {Array} countryArray Array of country objects
 * @return {Number}             Sum of population
 */
function getGlobalPopulation(countryArray){
    var population = 0;
    for(var i = 0; i < countryArray.length; i++){
        //Instead of pushing to an array we just add the new value with the previous value
        //The same as writing population = population + countryArray[i].population
        population += countryArray[i].population;
    }
    return population;
}

/**
 * 3. Get a continents population based on passed parameter
 * @param  {Array} countryArray  Array of country objects
 * @param  {String} continent    Continent to search for
 * @return {Number}              Total population of continent
 */
function getContinentPopulation(countryArray, continent){
    var population = 0;
    for (var i = 0; i < countryArray.length; i++){
        //Here we want to check if the objects continent is the same as the supplied
        //argument when we call the function. If it is, we add the population
        //If no objects with the supplied continent is found we would return 0
        if(countryArray[i].continent == continent){
            population += countryArray[i].population;
        }
    }

    return population; //return the sum of the population
}

/**
 * 4. Gets the least populated country in the list
 * @param  {Array} countryArray  Array of country objects
 * @return {Object}              Single country object
 */
function getLeastPopulatedCountry(countryArray){
    var country = {};

    //We take the first country population as start value
    var min = countryArray[0].population;
    for (var i = 0; i < countryArray.length; i++){
        //We then compare every population to this minimum value
        //if we find a smaller one, we enter the if-statement
        if (countryArray[i].population < min){
            //If we find a smaller value, we replace the country-variable
            country = countryArray[i];
        }
    }
    return country; //then we return the country-object
}

/**
 * 5. Get average population of all countries on a continent
 * @param  {Array}     countryArray    Array of country objects
 * @param  {String}    continent       The chosen continent
 * @return {Number}                    The average population
 */
function getContinentAveragePopulation(countryArray, continent){
    var totalPopulation = 0;
    for(var i = 0; i < countryArray.length; i++){

        //If it's the right continent based on the supplied argument
        if(countryArray[i].continent == continent){

            //Add the country population
            totalPopulation += countryArray[i].population;
        }
    }
    //Then divide the total population with the number of countries on the continent
    return (totalPopulation/countryArray.length).toFixed(0); //.toFixed() removed decimals
}



/**
 * 6. Gets countries with population above a certain value
 * @param  {Array} countryArray  Array of country objects
 * @param  {Number} min          The minimum value
 * @return {Array}               Array of countries fitting the criteria
 */
function getCountriesWithPopulationAbove(countryArray, min){
    var countries = [];
    for(var i = 0; i < countryArray.length; i++){
        if(countryArray[i].population > min){
            countries.push(countryArray[i]);
        }
    }
    return countries;
}

/**
 * 7. Gets countries between a interval
 * @param  {Array} countryArray  Array of country objects
 * @param  {Number} min          Minimum population
 * @param  {Number} max          Maximum population
 * @return {Object}              Array of countries that fit the criteria
 */
function getCountriesWithPopulationBetween(countryArray, min, max){
    var filteredCountries = []
    for (var i = 0; i < countryArray.length; i++) {
        if(countryArray[i].population > min && countryArray[i].population < max){
            filteredCountries.push(countryArray[i]);
        }
    }
    return filteredCountries;
}

/**
 * Helper function that prints the data passed to it with console log
 * @param  {any} data Can be any type of data
 * @return {void}     console.log the data
 */
function print(data){
    if(typeof data === 'array'){            //If it's an array, map every value
        data.map(function(countryData){
            console.log(countryData);
        })
    }
    console.log(data);                      //else just print the value
}


// 1
print(getAllCountryNames(countries));
// 2
print(getGlobalPopulation(countries));
// 3
print(getContinentPopulation(countries, "Europe"));
// 4
print(getLeastPopulatedCountry(countries));
// 5
print(getContinentAveragePopulation(countries, "Europe"));
// 6
print(getCountriesWithPopulationAbove(countries, 50000000));
// 7
print(getCountriesWithPopulationBetween(countries, 8000000 , 15000000))

```

