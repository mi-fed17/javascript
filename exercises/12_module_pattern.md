# Module Pattern - Calculator

Nedanför i övningar är en rad funktioner som hör ihop. De alla är den rena logiken för en miniräknare. Miniräknaren har inget gränssnitt som du kan interagera med, det finns ingen hemsida där du kan trycka på `+5` eller liknande och det är också tanken. Kod som inte behöver hantera att skriva ut något grafiskt ska kunna fungera även utan det grafiska. Här nedan kan vi skriva `add(5)` för att lägga till något till miniräknaren. Vi skulle även kunna skapa en enklare hemsida som låter oss klicka på `+` och `5`, vilket är något vi ska göra i en senare del av denna övning.

Dock är koden separerad, vi kan utläsa från den här kontexten att `total` är den totala summan eftersom vi vet att vi ska bygga en miniräknare. Dock om vi såg denna kod utan att vi visste att vi skulle bygga en miniräknare skulle vi inte lista ut vad `total` och `memory` syftar på förän vi kommer till funktionerna `add`, `subtract` etc. Om vi hade ett namn på denna funktionalitet skulle vi direkt veta vad variabeln syftar på.

Det betyder att vi borde gruppera denna funktionalitet under ett och samma namn, eller med ett annat begrepp: en och samma **namnrymd**(`namespace`).

## Övningar

**1 .** Skapa ett __Module Pattern__ som grupperar all denna funktionalitet, `total` och `memory` ska ligga innan `return` då de ska vara "privata" variabler som inte är tillgängliga utanför modulen. Resterande funktioner kan returneras.

```js
let total = 0;
let memory = [];

function add(numberToAdd) {
  memory.push(total);
  total = total + numberToAdd;
}

function subtract(numberToSubtract) {
  memory.push(total);
  total = total - numberToSubtract;
}

function multiply(multiplier) {
  memory.push(total);
  totalt = total * multiplier;
}

function getTotal() {
  return total;
}

function clearMemory() {
  memory = [];
}
```

**2 .** Skapa ett till __Module Pattern__ som heter `CalculatorView` som ska hantera att ta in värden från DOMen. Använd nedanstående HTML för att sköta hanteringen av input. Lägg denna HTML inuti `<body>`. I din nya modul ska du nu göra så att när användaren trycker på knappen med id `calculate` så ska operatorn från inputfältet med id `operator` läsas in, samt så ska inputfältet med id `number` läsas in. Beroende på vilken operator som skickats in så ska olika funktioner i den tidigare skapade modellen kallas på. Så om Jag har skrivit in `+` och `5` så ska `CalculatorModel.add(5)` kallas på och sedan ska detta värde skrivas ut i `<div>`-en med id `output`. Beräkningarna ska alltså som tidigare skötas via `CalculatorModel` och `CalculatorView` ska enbart kalla på modellen och sedan lägga till resultatet i DOMen.

```html
<label for="operator">Operator (+,-,*)</label>
<input type="text" id="operator">
<label for="number">Number</label>
<input type="text" id="number">
<button id="calculate">Calculate</button>
```

**Man skulle här kunna göra en uppdelning där våra eventlisteners ligger i en `CalculatorController` och koden för att hantera att visa upp resultatet ligger i `CalculatorView`. Jag har här valt att slå ihop dessa så att du enbart behöver skapa `CalculatorView`. Huvudsaken är att separera det som syns på sidan och det som inte syns på sidan**


## Lösningsförslag

**1 .** 
```js
/**
 * The Module Pattern is a IIFE being called and immediatly returns an object
 * that holds all our functions. The variables `total` and `memory` is not inside the
 * object being returned from the function and can therefore cannot be access from the outside.
 * They only exists inside of a closure, the functions can access the variables but we can not
 * access them from the outside. This is how the Module Pattern differs from a regular object even
 * though it is just an object.
 */
const CalculatorModel = (function() {
  let total = 0;
  let memory = [];
  // We return an anonymous object from the function. This returned object is being stored in `Calculator`
  return {
    add: function(numberToAdd) {
      memory.push(total);
      total = total + numberToAdd;
    },
    subtract: function(numberToSubtract) {
      memory.push(total);
      total = total - numberToSubtract;
    },
    multiply: function(multiplier) {
      memory.push(total);
      totalt = total * multiplier;
    },
    getTotal :function() {
      return total;
    },
    clearMemory: function() {
      memory = [];
    }
  }
})();

console.log(Calculator.total); //This will not work: undefined
console.log(Calculator.getTotal()); //This will work tho!
```


**2 .**
```js
/*
 * We could divide this further and make a CalculatorController which handles the
 * eventlistener and a CalculatorView that only handles printing the value to the DOM
 * So in that case CalculatorView would only have the function 'displayOutput' and
 * the Controller would only have the function `handleOperatorInput`. But because we have
 * such a small application I put them in the same Module.
 */
const CalculatorView = (function(){
  // Get all the DOM-elements we need.
  const inputNumberField = document.getElementById('number');
  const inputOperatorField = document.getElementById('operator');
  const calculateButton = document.getElementById('calculate');
  const outputElement = document.getElementById('output')

  return {
    /* Create a function that adds an eventlistener. That eventlistener
     * will check with operator you used with a switch case and then
     * add the value you added in the second input to the model with the
     * appropriate operator
     */
    handleOperatorInput: function(){
      /* Only trigger calculation when pressing the button */
      calculateButton.addEventListener('click', function(){
        let operator = inputOperatorField.value;
        /* *
         * parseInt is used to convert the string from the inputfield to a
         * number, else we will try to operate on a string which will give us faulty 
         * values, always parse to number if you are going to operate on it
         * */
        let number = parseInt(inputNumberField.value,10);
        let result = 0;
        switch(operator){
          case "+":
            // Add the number to the model, this function adds the number to `total`
            CalculatorModel.add(number);
            // Get the total with the `getTotal` function
            result = CalculatorModel.getTotal();
            // Then display it in the DOM.
            CalculatorView.displayOutput(result);
            break;
          case "-":
            CalculatorModel.subtract(number);
            result = CalculatorModel.getTotal();
            CalculatorView.displayOutput(result);
            break;
          case "*":
            CalculatorModel.multiply(number);
            result = CalculatorModel.getTotal();
            CalculatorView.displayOutput(result);
            break;
        }
      })
    },
    // displayOutput has one job, add the passed value onto the DOM.
    displayOutput: function(value){
      outputElement.innerHTML = value;
    }
  }
})();

// We need to call this function to actually bind the event that will listen for click.
CalculatorView.handleOperatorInput();
```
