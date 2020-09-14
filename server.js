// Setup empty JS object to act as endpoint for all routes

const projectData = {};


// Require Express to run server and routes
var express =require('express');
var app = express();
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// Respond with JS object when a GET request is made to the homepage
app.get('/url', getProjectData) //correct nearly
function getProjectData(req, res) {
   res.send(projectData);
  //console.log(projectData)
}


// Create JS object
const weatherData = [];
//Add an entry to the project endpoint using a POST route
app.post('/addFeel', addFeel);

function addFeel(req, res){
  console.log(req.body)   //get data in terminal Like => {temp: 302.27, feel:"ss"}
  newEntry = {
    temp:req.body.temp,
    feel: req.body.feel,
    date: req.body.date,
    cityName: req.body.cityName
  }
  weatherData.push(newEntry);
  res.send(weatherData);
  console.log(weatherData);

}
app.get('/all', function (req, res) {
  res.send(weatherData);
  console.log(weatherData);
});
