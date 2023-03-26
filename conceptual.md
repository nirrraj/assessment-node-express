### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

You can manage code asynchronously with callback functions, promises with .then() and .catch(), and promises with async/await.

- What is a Promise?

A promise is an object that reserves a place for a future value. This object can have one of three statuses: pending, fulfilled, or rejected.

- What are the differences between an async function and a regular function?

Async functions always return a promise object, while a regular function may return various data types or nothing at all.

- What is the difference between Node.js and Express.js?

Node.js is the JavaScript runtime environment for executing JavaScript outside of a browser. It is used for backend programming in Javascript.

Express.js is a framework based on Node.js for building web applications (i.e., handling requests and routing/responding as desired).

- What is the error-first callback pattern?

In the error-first callback pattern, the first argument passed to the callback function is the error object. The result of the request is passed as subsequent arguments.

- What is middleware?

Middleware is code that runs in the middle of the request-response cycle. It handles intermediate steps which may include things like validating inputs, translating certain processes for backend work, and routing errors of various types.

- What does the `next` function do?

next() is used to send execution to the next qualifying route.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

Structure-wise, these requests can be chained so that they don't need to be listed with an `await` on each line. Naming-wise, the values of the variables are Promise objects rather than the data itself about each user -- naming and returning them in this way may not be the most readable, intuitive way for developers to handle these requests.
