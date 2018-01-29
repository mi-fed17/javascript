// To print stuff to console
console.log('Hejsan klassen!');

//We define a variable with 'var'
var a = 'Hej';
//A constant cannot be overwritten
const isJavaScript = true;
//We reassign a value by omitting the 'var'
a = 'Inte hej';

//We put two string together with +
var b = a + "konkatenering";
//We can log two values by separating them by ,
console.log(a, isJavaScript);
console.log(b);

//An array is defined by square brackets: []
var arr = [5, 6, 10, "Hej"];

//We can loop through the values of an array with
// 'of', if we use 'in' here we get 0,1,2,3
for(var key of arr){
  console.log(key);
}

//The more ordinary loop will also do
for(var i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

//The advanced forloop which takes a function as argument
arr.forEach(function(data) {
  console.log(data);
})

//An object is like an associative array
var thisIsMe = {
  name: 'Jesper',
  age: 25
};

//Bracket notation is used in loops and when the key has
//weird symbols in the name for example 'åäö'
thisIsMe["name"];               // bracket notation
//Dot notation is the prefered way
thisIsMe.name;                  // dot notation
//Reassign av value with dot notation
thisIsMe.name = "Inte Jesper";  //Skriv över värde

//If we want to loop through an object we use
// 'in'. This will get us the key, we then use the
// key to get the value of the item
for(var key in thisIsMe){
  console.log(key);
  console.log(thisIsMe[key])
}

//If we want input from a user, use prompt,
//the prompt will save the value in the variable
var answer = prompt('Skriv in ett nummer?');
//If we want to check if input is number or somthing else
//use 'isNaN'
console.log(isNaN(answer));
//If we want to convert the string to a number so we can
//add them, use 'Number()'
console.log(Number(answer) + Number(answer));
alert(answer);

//If/else if/else is nothing new
if(answer === 'Jesper'){
  console.log("Haha");
} else if(answer === 'Nej'){
  //do something
} else {
  console.log('Okej');
}

//An array cannot be cloned, we can copy the array
//but it is still linked to the previous array. If
//we change arr, arr2 also changes
var arr = [5,5,5];
//We can REALLY clone the array with the spread syntax: [...]
//this will clone an array for real
var arr2 = [...arr];
arr2[1] = 10;

console.log(arr);
console.log(arr2);

var obj = {
  name: 'Jesper'
};

//Fake clone object
var obj2 = obj;
//Changing the value in one object changes in all objects 
//linked to it.
obj.name = 'Hej';
//Delete a property but not the object
delete obj.name;

console.log(obj);
console.log(obj2);


//Function is the same as in PHP but with differences
//in scope
function myFunction(value){
  return value;
}

function add(a,b){
  return a + b;
}

console.log(add(10,10));

//A function can also be written like this,
//but it is the same as the one below basically
var myLogFunction = function(){
  console.log(answer);
}

function myLogFunction1(){
  console.log(answer);
}
