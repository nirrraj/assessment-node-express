Broken App Issues
---

* App Crash Log:
    ```
    internal/modules/cjs/loader.js:638
        throw err;
        ^

    Error: Cannot find module 'express'
    ...
    ```
    * install express and axios

* app was not converting incoming requests as json
    Used `app.use(express.json());` to convert requests and responses to json

* await all axios get requests to finish before moving onto building json response.
