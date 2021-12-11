// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };
// Personal API Key for OpenWeatherMap API
const apiKey = 'be6a4d51af89985c0ee5ef7faabc09e1&units=imperial';

app.get('/', (req, res) => {
  return projectData;
});

app.post('/', (req, res) => {
  projectData = req.body;
});

app.get('/all', (req, res) => {
  return projectData;
});