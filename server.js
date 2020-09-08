// Setup empty JS object to act as endpoint for all routes
const projectData = {
  temp: '40c',
  weather: 'hot'
};

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

const port = 3001;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// Respond with JS object when a GET request is made to the homepage

app.get('/projectData', getProjectData)
function getProjectData(req, res) {
  res.send(projectData);
  console.log(projectData);
}

// Setup Server

// app.get('/all', sendData);

// function sendData (request, response) {
//   response.send(projectData);
// };

// // POST route
// app.post('/add', callBack);

// function callBack(req,res){
//   res.send('POST received');
// }


// // POST an animal
// const data = [];

// app.post('/animal', addAnimal);

// function addAnimal (req,res){
//     data.push(req.body);
// };