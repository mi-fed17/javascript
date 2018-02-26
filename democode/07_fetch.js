/****************
 * GET REQUEST  *
 ****************/

/*
 * `fetch` returns a promise containing the response from the server
 * the data doesn't 'arrive' as pure JSON so we have to convert it to JSON.
 * This is done with a built in function `.json` which is basically the same as
 * calling the function `JSON.parse(response)`. So the first `.then()` just converts
 * the data to JSON, we must then use another `.then()` to handle the returned data.
 * In this example I just choose to log it to console. !! The variables can be named
 * anything, they don't have to have the names 'response' and 'jsonData', that is just me
 * describing what data is being fetched and what happens to that data. IMPORTANT: the last
 * `.then()` doesn't have to return anything, every other `.then()` must return a value
 * if we want to continue chaining `thens` to it. We can have as many `.then()` as we want.
 */
fetch('http://fed17.herokuapp.com/todos')
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
  });

//----- ES6 VERSION ----- //

/*
 * Because the functions inside of `then` is just callbacks in the form of anonymous
 * functions we can replace them with arrow functions `=>` to make this a bit cleaner.
 * When you want to directly return a value from an arrow function and when you only have
 * one line in your function you dont need curly brackets {}, furthermore you don't need
 * to actually write out the `return`-keyword when you omit the curly brackets. In the second
 * `.then()` we want to handle the data being return from the API-call so we need to have curly
 * brackets. The second `.then()` is the last `.then()` and doesn't need to return anything. Every
 * `.then()` before the last MUST return a value.
 */
fetch('http://fed17.herokuapp.com/todos')
  .then(response => response.json())
  .then(jsonData => {
    console.log(jsonData);
  });

/****************
 * POST REQUEST *
 ****************/

/*
 * If we want to do anything else than a GET we need to supply extra options to the
 * `fetch()`-call. so: `fetch(url, options)`. The options is ALWAYS in the form of an
 * object. Here we can supply which method, headers and what data to send (body). The
 * body must be in the form of JSON. This can easily be done with `JSON.stringify`
 */
const postOptions = {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ text: 'Buy a house', complete: false })
};

fetch('http://fed17.herokuapp.com/todos/1', postOptions);

/*****************
 * PATCH REQUEST *
 *****************/

/*
 * When we want to patch we must specify which URL we want to patch. This is not
 * set in the options, this is set in the url (the first argument of fetch). We change
 * the method and we only need to send the values we want to change, if we have set the
 * method 'PATCH' it will only update those properties that need to be updated.
 */
const patchOptions = {
  method: 'PATCH',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ complete: true })
};

fetch('http://fed17.herokuapp.com/todos/1', patchOptions);

/******************
 * DELETE REQUEST *
 ******************/

/* 
 * If we are deleting resources we don't need to send along anything in body and 
 * we don't need to have that property in our `options`-object. We only need to change
 * the 'method' and specify which resource (id) to remove.
 */
const deleteOptions = {
  method: 'DELETE',
  headers: { 'content-type': 'application/json' }
};

fetch('http://fed17.herokuapp.com/todos/1', deleteOptions);

/*******************
 * CATCHING ERRORS!*
 *******************/

/* ALWAYS have a `.catch()` to handle errors. Anything can happen. If the server returns
 * an error the `.catch()` will automatically skip over the `.then()` and go directly
 * to the `.catch()`-function. This function shouldn't just log the error. It's OK to
 * log it in development but when you are writing an application you should format it and display
 * it to a user. 
 */

fetch('http://fed17.herokuapp.com/todos')
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
  })
  .catch(function(error) {
    console.log(error);
  });

// Better scenario
fetch('http://fed17.herokuapp.com/todos')
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
  })
  .catch(function(error) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = error.message;
  });
