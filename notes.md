## What is a Server?

A server is software that provides services to other software or devices.

# Backend Development Roadmap

### Key Components to Learn:

1. **Programming Language**: Choose one - Java, JavaScript, PHP, Golang, C++
2. **Database**: Choose one - MongoDB, MySQL, PostgreSQL, SQLite (use ORM/ODM)

Note: Databases are often hosted in different geographical locations.

## JavaScript-based Backend

Backend developers handle data, files, and third-party APIs.

### JavaScript Runtimes: Node.js / Deno / Bun

Essential files: `package.json`, `.env` (also consider: `README.md`, `.gitignore`, lint, prettier, etc.)

### Backend Directory Structure

```
src
  ├── index.js
  ├── app.js
  ├── constants.js
  ├── db
  ├── models
  ├── controllers
  ├── routes
  ├── middlewares
  ├── utils
  └── more (depends)
```

### Detailed Overview

#### Root-Level Files

- `index.js`
  1. Entry point of the application.
  2. Sets up the server, middleware, and routes.
  3. Example: Starting an Express server.
  4. Connects the database to the server.

- `app.js`
  1. Main application logic or central configuration file.
  2. Connects middleware or defines app-level configurations.
  3. Initializes third-party services or libraries.
  4. Example: Setting up CORS, body parsers, or session management.
  5. Handles configuration, cookies, and URL encoding.

- `constants.js`
  1. Stores app-wide constants such as API keys, error messages, or environment-specific configurations.
  2. Example: enums, database names.

#### Directories

- `db`
- `models`
- `controllers`
- `routes`
- `middlewares`
- `utils`
- `more` (depends)

# How to Connect Backend to Frontend



Read this: [Axios Example](https://axios-http.com/docs/example)


there are four ways to connect beckend to frontend 

1. ## Connecting Backend to Frontend using CORS

CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated.

### Steps to Enable CORS in a Node.js Application

1. **Install the CORS package**:
  ```bash
  npm install cors
  ```

2. **Require and use CORS in your `app.js` or main server file**:
  ```javascript
  const express = require('express');
  const cors = require('cors');
  const app = express();

  // Use CORS middleware
  app.use(cors());

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  ```

  By following these steps, you can enable CORS in your backend application, allowing it to communicate with the frontend hosted on a different domain.


### Example Usage in `App.jsx`

```javascript
useEffect(() => {
  axios
  .get('http://localhost:3000/api/jokes')
  .then((response) => {
    setJokes(response.data);
    // console.log('Jokes fetched', response.data);
  })
  .catch((err) => {
    console.log('Error while fetching jokes', err);
  });
}, []);
```

1. ### Steps to Use Proxy to Make a Connection

#### `vite.config.js`

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
  proxy: {
    '/api': 'http://localhost:3000',
  },
  },
  plugins: [react()],
});
```

#### Example Usage in `App.jsx`

```javascript
useEffect(() => {
  axios
  .get('/api/jokes')
  .then((response) => {
    setJokes(response.data);
    // console.log('Jokes fetched', response.data);
  })
  .catch((err) => {
    console.log('Error while fetching jokes', err);
  });
}, []);
```
### Whitelisting frontend Configuring CORS in Express.js

This code configures CORS (Cross-Origin Resource Sharing) settings for an Express.js application. CORS is a mechanism that allows servers to specify which domains are permitted to make requests to them. Let's break down the code:

1. **Whitelist**:
  ```javascript
  const whitelist = ['http://localhost:5173', 'http://localhost:3001'];
  ```
  This is an array of allowed origins (domains). Only requests from these origins will be permitted by the server.

2. **CORS Options**:
  ```javascript
  const corsOptions = {
     origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
     }
  };
  ```
  - `origin`: This is a function that decides whether a given request's origin is allowed.
  - `origin` parameter: This is the domain (origin) of the incoming request.
  - Logic:
    - If the incoming request's origin is found in the whitelist, the callback is called with `null` (no error) and `true` (allow access).
    - Otherwise, the callback is called with an error (`new Error('Not allowed by CORS')`), rejecting the request.

3. **Middleware Application**:
  ```javascript
  app.use(cors(corsOptions));
  ```
  The `cors()` function is applied to the app as middleware. When a request is received, the `origin` function in `corsOptions` is invoked to decide whether to allow or block the request based on its origin.

**What Happens?**

- When a browser sends a request to this server:
  - The origin of the request is checked against the whitelist.
  - If the origin matches an entry in the whitelist (e.g., `http://localhost:5173` or `http://localhost:3001`):
   - The request is allowed, and CORS headers are added to the response.
  - If the origin does not match:
   - An error is returned, and the request is rejected.

