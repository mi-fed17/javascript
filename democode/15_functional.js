let array = [
  {
    value: 10
  },
  {
    value: 20
  },
  {
    value: 10
  }
];

// Sort always returns -1, 0 or 1
array.sort((currentValue, nextValue) => {
  if(currentValue.value > nextValue.value){
    return 1;
  } else if (currentValue.value < nextValue.value){
    return -1;
  }
  return 0;
});

array
const mapped = array.map((obj, index, array) => {
  return obj.value;
});
mapped;

//! filter returns true or false
const filtered = array.filter(function(obj, index, array){
  if(obj.value !== 20){
    return true;
  }
  return false;
});

filtered;


let numbers = [5,5,10];
const reduced = numbers.reduce((sum, currentValue) => {
  return sum * currentValue;
});

reduced;

/**
 * Method chaining, map, filter and reduce always returns 
 * a new modified array that you can continue to work on
 */
const result = numbers
  .filter(number => number !== 10)
  .map(filtered => filtered * 2)
  .reduce((sum, currentValue) => sum + currentValue)

result;