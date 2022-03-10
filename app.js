// ./src/index.js

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send("Welcome to the home page");
});

const port = process.env.PORT || 3001;
// starting the server
app.listen(port, () => {
  console.log('listening on port 3001');
});