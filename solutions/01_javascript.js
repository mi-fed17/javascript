
/****************************************
*  LÖSNINGSFÖRSLAG TILL SELECTION   *
****************************************/

//Uppgift 1 - Kvot och rest

var number = prompt('Skriv in ett nummer');

/*Dividerar talet med 2. Nu kommer vi inte få ett heltal om vi delar på något
som inte är delbart med 2. Detta ska vi lösa senare i kursen :) */
console.log('Heltalskvoten av talet dividerat med 2 är ' + number/2);
//Vi kan dock få ut om talet har rest med hjälp av modulo som skriver ut vår rest
console.log('Resten av talet modulo 2 är ' + number % 2);


//Uppgift 2 - Kokar vattnet?
//Läser in värdet som skickas in i prompt (det vi skriver in i rutan)
var doesItBoil = prompt('Vilken grad är vattnet?');

//Använder loose jämförelse (==) eftersom det värde som kommer in via prompt är en string 
if( doesItBoil == 100){
  console.log('Det kokar!');
}else if (doesItBoil == 50){
  console.log('Det är halvvägs nu!');
}else{
  console.log('Vattnet kokar inte');
}

//Uppgift 3 - Går det att bada?
var water = prompt('Finns det vatten?');

//Beroende på hur noga man vill kolla input, all input är case sensitive
if(water == "Ja" || water == "ja"){
  /*Bara om det finns vatten behöver vi kolla hur många grader vattnet är
  annars kan vi hoppa direkt till else-satsen i slutet*/
  var degrees = prompt('Hur många grader är vattnet?');
  //Kolla om graderna är över 30
  if (degrees > 30){
    console.log('Varsågod och bada!');
  /*Om det inte är över 30 så är det under 30, d.v.s vi behöver 
  inte göra en ytterligare if-sats som kollar det */
  }else{
    console.log('Det går inte att bada');
  }
  //Om det inte finns vatten kan vi hoppa till en else-sats istället
}else{
  console.log('Det går inte att bada');
}


//Uppgift 4 - Hästtokig!

var age = prompt('Hur gammal är du?');

/*Vi behöver bara kolla vilken ponny som behövs om ålder är inne, därför kan
vi lägga till de if-satser som kollar vikt inuti vår första if-sats. Det gör 
så att vi slipper köra kod som inte behövs köras. */

if (age > 12){
  //Väl inne i if-satsen kan vi fråga efter vikt och spara i en ny variabel
  var vikt = prompt('Vikt?');

  /*Kollar först om vikten är mindre än 30. Vad vi kollar först är dock beroende av
  vilka värden vi förväntar oss, nu förväntar vi oss att de flesta värden ska vara
  under 65. Vi skulle t.ex. kunna kolla först om vikten är över 65*/
  if(vikt <= 30){
    console.log('A-ponny');
  //Sedan kollar vi spannet mellan 30 och 50
  }else if(vikt <= 50 && vikt > 30){
    console.log('B-ponny');
  //Till sist kollar vi spannet mellan 50 och 65
  }else if(vikt <= 65 && vikt > 50){
    console.log('C-ponny');
  }else{
    console.log('Det finns inga ponnys för denna viktklass');
  }
}else{
  console.log('Du är för ung för att tävla!')
}

//Uppgift 5 och 6 - Vad blir det för middag

var day = prompt('Vad är det för dag?');

//Switchen tar in vår variabel som vi skrev in i vår prompt via paranteserna ()
switch(day){
  /*Case vill ha ett exakt värde. Alltså måste vi skriva exakt måndag och inte Måndag
  Dessutom kan det bli problem med t.ex. å/ä/ö tolkas på olika sätt*/
  case "måndag":
    console.log('Kyckling');
    //break; signalerar att caset tar slut, ingen mer kod ska skrivas ut.
    break;
  case "tisdag":
    console.log('Pannkaka');
    break;
  case "onsdag":
    console.log('Ärtsoppa');
    break;
  case "torsdag":
    console.log('Gryta');
    break;
  //om vi tar bort break; och koden i caset så kommer caset gälla för både fre/lör/sön
  case "fredag":
  case "lördag":
  case "söndag":
    console.log('Kålsoppa');
    break;
}

/****************************************
*  LÖSNINGSFÖRSLAG TILL ITERATION   *
****************************************/

//Uppgift 1

//deklarera en variabel som ska hålla summan
var sum = 0;

/*Skapa en for-loop som börjar på 0 genom att deklarera en variabel i.
Loopen ska köras 10 gånger så vi använde <= vilket betyder "upp till 10 samt 10"
För varje varv ska vår variabel i öka med 1 */
for ( var i = 0; i <= 10; i++){
  /*När vi lagrar summan ska vi ta det gamla värdet av summa + det nya värdet av i.
  Första varvet är sum = 0 samt i = 0;
  Andra varvet: sum = 0, i = 1. Vi plussar på i till sum
  Tredje varvet: sum = 1, i = 2
  Fjärde varvet: sum = 3, i = 3 */
  sum = sum + i;
}

//Consol loggar det EFTER loopen annars skrivs allt ut flera gånger
console.log(sum);



//Uppgift 2

var num = 10;

/*while-loopens uppgift blir enbart att hålla koll på hur många gånger loopen körs.
I det här fallet ska den göras 10 gånger, från 10 till 0 */
while(num >= 0){
  /*Vi ska även kolla efter om värdet är jämnt, vilket vi kan göra genom att sätta
  en if-sats i loopen. Loopen behöver alltså inte kolla efter rätt värde, vi delar upp
  ansvaret */
  if( num % 2 === 0){
    //Alla tal som är delbara med 2 genom modulo och inte lämnar rest är jämna
    console.log(num);
  }
  //För varje varv måste vi även minska num så att loopen slutar någon gång
  num--;
}

//Uppgift 3

var numberOfSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;


/* Man behöver inte använda var i när man kör loopen. Man kan deklarera en variabel
utanför själva for(){} och använda den variabeln. I det här fallet är monthNumber = 1 (vår start,
monthsToPrint = 12 (vårt stopp) samt att vi måste öka vår räknare: monthsToPrint++ */
for (monthNumber; monthNumber <= monthsToPrint; monthNumber++){
  /*Väl inne i loopen sker ökningen av själva fåren, multiplicerar det ursprungliga värdet
  med 4*/
  numberOfSheep = numberOfSheep*4;
  /* Samt skriver ut variabeln numberOfSheep. Observera att när vi sätter ihop
  strängar och variabler/nummer måste vi använda + för att binda ihop dem */
    console.log('There will be ' + numberOfSheep + ' sheeps after ' + monthNumber +' months(s)!');
}

//Uppgift 4


//Läs in hur många mjau
var numberOfMjau = prompt('Hur många mjau?');

/*Om värdet direkt är 0 behöver vi inte ens gå in i loopen och köra någon kod. Vår kod
kommer då direkt hoppa till console.log() nedanför loopen. */

while(numberOfMjau != 0){
  /* Man kan ju dock inte multiplicera strängar, vilket vi vill göra i det här fallet.
  Vi kan dock lägga in samtliga mjau i en sträng genom en loop*/
  var allTheMjaus = '';
  /*För varje mjau som vi skickar in: lägg till ett mjau i vår variabel som lagrar mjau*/
  for(var i = 1; i <= numberOfMjau; i++){
    allTheMjaus += 'mjau ';
  }
  //Skriv ut den färdiga stränger innehållande alla mjua som vi la till i loopen
  console.log(allTheMjaus);

  //Fråga efter hur många mjau igen, om du skriver in 0 den här gången så avslutas loopen
  numberOfMjau = prompt('Hur många mjau?');
}

//Detta kommer att skrivas ut när loopen är färdig
console.log(':(');

//Uppgift 5

var numberOfSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

for (monthNumber; monthNumber <= monthsToPrint; monthNumber++){

  /* Vi har liknande kod sen tidigare men nu lägger vi till extra if-satser för att
  kolla så att var fjärde månad ska 75% av populationen tas bort.
  Vi kollar detta INNAN vi multiplicerar våra får annars får vi fel värden.
  ökningen av får kommer efter att alla villkor har kollats:
  För att kolla var fjärde delar vi med 4 och får 0 i rest: modulo 4*/
  if (monthNumber % 4 == 0){
    /*Vi kan skapa en variabel där vi lagrar alla får som ska tas bort
    antalet får som ska tas bort är 75% == 0.75 vilket kan även skrivas som .75 */
    var sheepsToRemove = numberOfSheep * .75;
    //Loggar ut hur många får som ska tas bort
    console.log('Removing ' + sheepsToRemove + ' sheeps from population');
    //Tar nuvarande får minus vår nya variabel med antalet får som ska tas bort
    numberOfSheep = numberOfSheep - sheepsToRemove;
  }
  //Sedan vill vi kolla om populationen är över 10 000 med en else if-sats
  else if (numberOfSheep > 10000){
    /*Samma som tidigare då vi skapade en variabel för att lagra det som ska tas bort
    men nu dividerar vi med 2 istället för att få hälften*/
    var sheepsToRemove = numberOfSheep / 2;
    //Ta bort antalet får
    numberOfSheep = numberOfSheep -sheepsToRemove;
  }
  //Sedan ökar vi vår fårpopulation och skriver ut antalet får
  numberOfSheep = numberOfSheep*4;
  console.log('There will be ' + numberOfSheep + ' after ' + monthNumber + ' month(s)!');
}

//Uppgift 6 - Multiplikation

//Skapar en yttre loop som ska gå igenom talet 1 till 10
for(var i = 1; i <=10; i++){
  //Skapar en inre loop som ska gå igenom talet 1 till 10
  for(var j = 1; j <= 10; j++){
    /*I första iterationen kommer i att vara 1 sedan kommer j att loopa igenom
    1 till 10. Vi kommer alltså logga 1*1, 1*2, 1*3, 1*4 etc. i kommer att vara 1
    tills den inre loopen har kört klart sina tio gånger */
    console.log(i * j);
  }
  /*I den yttre loopen kan vi skapa en ny rad med hjälp av "/n" vilket betyder
  "Newline". när vi skriver detta kommer vår program att byta rad */
  console.log('\n');
  //Efter detta ökar den yttre loopen, i kommer då att vara 2
}


//Lösningsförslag 2 - Multiplikationstabellen

//Skapar en yttre loop som ska gå igenom talet 1 till 10
for(var i = 1; i <=10; i++){
  //Skapar en variabel där vi ska lagra allt vårt resultat
  var multi = "";
  //Skapar en inre loop som ska gå igenom talet 1 till 10
  for(var j = 1; j <= 10; j++){
    /*I första iterationen kommer i att vara 1 sedan kommer j att loopa igenom
    1 till 10. Vi kommer alltså logga 1*1, 1*2, 1*3, 1*4 etc. i kommer att vara 1
    tills den inre loopen har kört klart sina tio gånger */

    //Lägger till strängar som vi lägger till värden. " " bara för att få ett mellanrum
    multi = multi + i*j + " ";
  }
  /*I den yttre loopen kan vi skapa en ny rad med hjälp av "/n" vilket betyder
  "Newline". när vi skriver detta kommer vår program att byta rad */
  console.log(multi);
  //Efter detta ökar den yttre loopen, i kommer då att vara 2
}


/************************************
* Övningar till funktioner    *
************************************/

//Multiply
function multiply(x,y){
  //Vi kan returnera multiplikatione direkt, behöver inte lagra i en ny variabel. Det som returneras blir variabeln
  return x * y;
}

var multiplyAnswer = multiply(8,4);
console.log(multiplyAnswer);

//Calculate

function calculate(x,y,z){
  /*Det underlättar om man använder paranterser för att visa vilka värden man
  man multiplicerar.*/
  return ((x*y) / z);
}

var calculateAnswer = calculate(5,6,2);
console.log(calculateAnswer);



//Maxing, relaxing, acting all cool

function highestNumber(x,y){
  //Om x, dv.s. det första värdet är större än det andra värdet returnerar vi x eftersom det är störst, villkoret stämmer.
  if( x > y){
    return x;
  }
  //Eftersom vi bara har två värden och om det ena inte är större än det andra så är det andra större!
  else{
    return y;
  }
}

var highestAnswer = highestNumber(5,4);
console.log(highestAnswer);

//Sparar värdet i en variabel, vi får nu tillbaka ett värde istället för console.log vilket gör att vi kan spara värdet
var answer = highestNumber(5, 5);
console.log(answer);




//Mjau Machine REBORN

//Skriver in via prompt vårt värde
var numberOfMjaus = prompt('Antal Mjau!');
//Skickar med argumentet från prompten in i funktionen
mjauMachine(numberOfMjaus);

function mjauMachine(mjau){
  //Så länge värdet som kommer in inte är 0
  while( mjau != 0){
    //Logga mjau så många gånger som värdet säger
    console.log("mjau ".repeat(mjau));
    //Fråga efter antalet mjau igen tills 0 matas in. Lagra över det gamla värdet
    mjau = prompt('Antal mjau?');
  }
  //Ute ur while-loopen kan vi skriva ut :(
  console.log(':(');
}


/************************************************
* Övningar till funktioner - fortsättning   *
************************************************/

//The Horror!

/*Detta är fortfarande en namngiven funktion. Sättet vi skapar den 
på är dock att vi lagrar en anonym funktion i en variabel. Funktionen
är dock lagrad i vår kod och kan kallas på via 'theHorror();'. Denna funktion
är alltså inte anonym för den kan kallas på med ett namn. */

var theHorror = function() {
  console.log('The Horror! The Horror!')
}

/*Denna funktion är dock helt anonym. Den har inget namn och kan inte kallas på.
Alltså kommer koden aldrig att köras. Vi måste dock kapsla in funktionen i
paranteser för att nyckelordet function kan inte stå för sig själv.*/

(function(){
  console.log('The Horror! The Horror!');
})

/* Denna funktion kommer dock att köras. Man kallar på en funktion genom dess namn
samt paranteser theHorror(); Denna funktion har dock inget namn men kan ändå kalla
på sig själv med hjälp av paranteserna (); */

(function(){
  console.log('The Horror! The Horror!');
})();


//EvenOdd

/*Funktionen tar ett övre värde och skriver ut alla jämna eller ojämna tal
  baserat på vad vi anger som värde b */
function evenOdd(a,b){
  var numbers = '';
  /* Loopa igenom alla värden ned till 0 genom en while-loop,
  a ör den första parametern, d.v.s värde att räkna ned ifrån */
  while(a >= 0){
    /* Om värdet på a modulo 2 returnerar 0 är värdet jämnt. Om värdet
    på a modulo 2 returnerar 1 är dock värdet inte jämnt. b är alltså
    den andra parametern vi skickar med som bestämmer vad vi ska skriva ut */

    if( a % 2 == b){
      //Lagrar värdet a i numbers med ett mellanslag mellan varje värde
      numbers = numbers + a + " ";
    }
    a--;
  }
  //Returnerar en sträng med alla siffrors
  return numbers;
}

//Andra värdet 1 bestämmer att det ska vara rest 1 när vi jämför med modulo.
console.log(evenOdd(20,1));

//Calcy

var calcy = function(x,y){
  //Skapa variabel som lagrar slutliga summan
  var sum = 0
  /* x * y är samma sak som att addera x, y antal gånger. Vi kör alltså loopen
  i det här fallet y antal gånger, alltså 4 i vårat fall.
  Värdet som läggs till i sum är 5 i detta fall, alltså:
  5 + 5 + 5 + 5 */

  for (var i = 0; i <= y ; i++){
    //ta den ursprungliga summan och addera x och spara om i variabeln sum
    sum = sum + x;
  }
  return sum;
}

var calcyAnswer = calcy(5,4);
console.log(calcyAnswer);

//String Checker

//Funktionen tar in en sträng som parameter
var stringChecker = function(stringToCheck){
  //Använder den inbyggda funktionen 'length' för att få ut strängens längd
  var stringLength = stringToCheck.length
  return "Strängen du matade in är " + stringLength + " tecken lång";
}

//Vi skickar in en valfri sträng som argument
console.log(stringChecker('Huburru Hubburru'));

//String converter



//String extractor

var stringExtractor = function(stringToCheck){
  /*Vi hämtar ut längden på strängen. Längden på strängen och sista
  positionen inom strängen är dock inte samma sak. I vårt fall "Hej"
  är strängen 3 tecken lång. Indexet börjar dock på 0 vilket betyder att
  sista tecknet har index 2. H = 0, e = 1, j = 2. Vi måste alltså ta -1 för 
  att få ut sista positionen */ 
  var last = stringToCheck.length -1;
  /*Inbyggda funktionen .substring plockar ut en del av strängen. Observera
  att .substring och .substr är två olika funktioner som fungerar lite olika.*/
  return stringToCheck.substring(last);

}

console.log(stringExtractor("Hej"));


/*****************************************************
*       Lösningsförslag - Arrays         *
*****************************************************/

//Skriv ut värde

var yourArray = [23, 45, 54, 12, 77];

console.log(yourArray[0]); // Index 0 indikerar det första värdet i vår array.
console.log(yourArray[4]); // Index 4 är vårt sista värde

//Ändra ett värdet


//Som när vi tilldelar ett värde till en variabel med = ;
yourArray[4] = 1; 
console.log(yourArray);


// Loopa genom en array

var bestArray = [ 1, 2, 3, 4, 5];

/* Vi får ut hur många gånger loopen ska köras genom att ta .length på vår array
som villkor. På så sätt körs den hela arrayens längd */
for (var i = 0; i < bestArray.length; i++){
  //i ökar från 0 till 4, alltså går den från plats 0 i arrayen till plats 4
  console.log(bestArray[i]);
}


//Summera array

//Den här känner ni igen! Skapa en variabel som lagrar det slutgiltiga värdet
var sum = 0;
//Samma som i förra loopen, vi vill gå igenom alla värden
for (var i = 0; i < bestArray.length; i++){
  //Som vi har gjort tidigare, förutom att vi bara lägger till sum + i den här gången
  //lägger vi till värdet som hämtas ur arrayen, där i indikerar index, plats, i arrayen.
  sum = sum + bestArray[i];
}

console.log(sum);



//Filter array by length

var okArray = [ "fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];

for (var i=0; i < okArray.length; i++){

  //wordArray[i] är strängen som ska kollas. Precis som med arrayen kan vi ta ut
  //längden på strängen med .length och kolla om den är kortaren än 5 tecken, isf: skriv ut.
  if (okArray[i].length <= 5){
    console.log(okArray[i]);
  }
}

//Filter array by content

var okArray = [ "fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];

for (var i=0; i < okArray.length; i++){
  //Ett enkelt sätt är att konvertera den sträng vi ska kolla till lowercase innan
  //vi kollar villkoret. Då behöver vi inte ha två villkor att kolla.
  if (okArray[i].toLowerCase() === "fine"){
    console.log(okArray[i]);
  }
}

//Filter array by type

//En redig soppa av variabler!
var worstArrayYet = ["string", true, 42, "another string", 54, null, 12];

var sum = 0;

for (var i = 0; i < worstArrayYet.length; i++){
  //Om det inte är ett nummer så skriver vi ut det i console. Argumentet som skickas in
  //är värdet i arrayen på index i
  if (isNaN(worstArrayYet[i])){
    console.log(worstArrayYet[i]);
  }
  //Vi kan även kolla typen med hjälp av typeof. Här kollar vi så att det är ett nummer
  //Testa att skriva den här koden utan att köra den här else if satsen. D.v.s kör bara
  // med den första if-satsen. Summera sen alla andra variabler. Får du samma resultat?
  else if (typeof worstArrayYet[i] === 'number'){
    sum+= worstArrayYet[i];
  }
}

console.log(sum);

/*****************************************************
*       Lösningsförslag - Objects        *
*****************************************************/

//Skapa ett objekt

/* Curly brackets skapar ett nytt objekt. Varje värde i ett objekt måste 
 * vara bundet till en property. I det här objektet är första property
 * 'albumName' med värdet "Trouble Will Find Me". Värdet och propertyn
 * är separerade med : och varje property/value-par är separerade med komma
 */
var album = {
  albumName: "Blue",
  artist: 'Joni Mitchell',
  year: 1971
};

console.log(album);

//Komma åt värden


//Punktnotationen är att föredra men båda fungerar. JSHint säger att man inte
//ska använda den senare.

console.log(album.albumName);
console.log(album["albumName"]);


// Skapa en kopia

var dublett = album; //Som att tilldela ett värde

//Dessa värden är dock länkade, dublett är inte en kopia av album utan de pekar på samma objekt
console.log(dublett);
console.log(album);


//Ta bort en property


//Observera att detta tar bort property på båda objektet, de är länkade till varandra
delete dublett.year;

console.log(dublett);
console.log(album);


// Ändra ett värde

//Observera att detta ändrar property på båda objektet, de är länkade till varandra

dublett.artist = "Cher";

console.log(dublett);
console.log(album);


// Loopa igenom properties


//Prop blir en tillfällig variabel som används för att loopa samma som när vi brukar
//använda i för att loopa. Dock sköter den här loopen mycket själv, vi behöver inte 
//ange start stop etc. Den loopar bara igenom alla värden i objektet eller arrayen vi anger

for(var prop in album){
    console.log(prop);
}

//Loopa igenom värden

//Liknande som förra loopen. bara prop skriver ut vår property. Dock om vi skickar med
//vår property som index får vi ut själva värdet.
for(var prop in album){
    console.log(album[prop]);
}
