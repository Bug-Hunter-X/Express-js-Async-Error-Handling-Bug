# Express.js Async Error Handling Bug

This repository demonstrates a common bug in Express.js applications related to asynchronous error handling. The server handles POST requests to the `/data` endpoint and processes the request body asynchronously. However, if an error occurs during the asynchronous processing, the error handling might not be robust enough.

## Bug Description
The provided `bug.js` file contains an Express.js server that processes data asynchronously. If the `data.id` is negative, an error occurs in the `processData` function. However, the error handling in the main route handler is insufficient to handle this case appropriately, not sending a proper response or returning a 500 status code consistently.