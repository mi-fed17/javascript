/****************
 * GET REQUEST  *
 ****************/

/* We create a new request-object that will handle the transaction between the server/database
 * and the client (me/us/the browser). */
var request = new XMLHttpRequest();

/* 
 * We add a listener to the request which will listen to when the state changes,
 * aka when we get back data from the server. So instead of listening to a onlick
 * we are listening for a response from the server. IMPORTANT: everything related to
 * the data, like displaying it on the website, must be handled inside of this function.
 * only in the `if`-statement below do we truly know that the data has been recieved. This
 * is the core of asynchronous actions in JavaScript, always wait for a response.
 */
request.onreadystatechange = function() {
  if (request.readyState === 4) {
    // A status of 4 means a completed transfer of data. We can then get the data
    // by saying `request.responseText` which in this case (and most cases) is JSON-format
    var data = JSON.parse(request.responseText);
    console.log(data);
  }
};

/*
 * To actully send the request we need to first specify type of request ('GET')
 * and to which URL we want to make this request ('https://fed17.herokuapp.com/todos')
 */
request.open('GET', 'https://fed17.herokuapp.com/todos');
/* After this is done we can send the request. We are only GETTING information from the 
 * database not storing anything so we just need to send the request and wait for the response.
 * The waiting for response happens in the function above (`request.onreadystatechange`).
 */
request.send();

/****************
 * POST REQUEST *
 ****************/

/* 
 * If we want to store a new resource in the database we must send a POST request, telling
 * the database what to store and where to store it. Notice that we are sending a POST-request
 * to the same URL as above. A URL can recive a GET-request AND a POST-request at the same URL.
 * To do a post we need to specify 'POST'. We also have to send along the data we want to store
 * inside of the method `send()`. In this database (like MySQL) the ID is auto incremented so each
 * new TODO will get a unique ID and we can then reference it via `https://fed17.herokuapp.com/todos/:id`
 */
var postRequest = new XMLHttpRequest();
postRequest.open('POST', 'https://fed17.herokuapp.com/todos');
postRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
postRequest.send(JSON.stringify({ text: 'Buy House', complete: false }));

/* 
 * Every request can listen for a response ('GET','POST','PATCH', 'DELETE')
 * If we post something we can get the resource sent to us in the same way like we 
 * did with a 'GET'-request. This can be useful when we want to update the page
 * with the newly created value in the database without doing another 'GET'-request. Not
 * all APIs work this way tho, but most of them send back the created response
 */
postRequest.onreadystatechange = function() {
  if (postRequest.readyState === 4) {
    var data = JSON.parse(postRequest.responseText);
    console.log(data);
  }
};

/*****************
 * PATCH REQUEST *
 *****************/

/*
 * When we want to edit a resource we need to specify which 
 * todo we want to change, this is done in the URL. We specify that we want to change
 * the resource with the ID of 1 and use the verb 'PATCH'. 
 * We don't want to change every value (just toggle the completed) so we send along just
 * that property with the new value (`true`). Every other property of the object will remain
 * the same if we use `PATCH`. 
 */
var editRequest = new XMLHttpRequest();
editRequest.open('PATCH', 'https://fed17.herokuapp.com/todos/1');
editRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
editRequest.send(JSON.stringify({ complete: true }));

/******************
 * DELETE REQUEST *
 ******************/

/* 
 * Delete requests doesn't need to send any data inside of the `send()`-method. We are 
 * removing data so we just need to specify WHAT we want to remove. What we want to remove
 * is specified in the URL. So we are sending a DELETE-request to the URL:
 * "https://fed17.herokuapp.com/todos/1", this means that we want to remove the todo with an ID
 * of 1. It is important to specify the method 'DELETE' inside of `open()`
 */

var deleteRequest = new XMLHttpRequest();
deleteRequest.open('DELETE', 'https://fed17.herokuapp.com/todos/1');
deleteRequest.setRequestHeader(
  'Content-Type',
  'application/json;charset=UTF-8'
);
deleteRequest.send();
