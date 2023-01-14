// Setup empty JS object to act as endpoint for all routes
const projectData = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser')

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 5000;
const hostname = "127.0.0.1";
const server = app.listen(port,hostname, listening);
 function listening(){
    console.log(server);
    console.log(`Server running at http://${hostname}:${port}/`);
  };

// get route

app.get("/all" , sendAllData);

function sendAllData(request , response){
  response.send(projectData);
  // clear projectData
  projectData = {};
}

// post route

app.post("/add" , callBack);

function callBack(request , response){
  let element = {
    temperature : request.body.temperature,
    date : request.body.date,
    userFeelings : request.body.userFeelings}

  projectData.push(element);
  response.send(projectData);
  response.end();
}

