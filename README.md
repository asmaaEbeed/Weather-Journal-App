# Nanodegree Program 2nd Project "Weather-Journal App Project"

## Project Concept
User enter zip code and what he feeling in text area then tempreture is successfully returned from the external API, and update UI with data returned from API and data that user entered.

## Project Environment Setup

* Install Node and Express on the local machine.

* Install express from VS terminal using ```>npm install express``` , and should create an instance of their app using express.

* Make the express app instance pointed to the project folder "websit" using this code 
```app.use(express.static('website'));```.

* install ```cors``` for cross origin allowance & ```body-parser``` package to use as middle-ware.

* initialize the local server port 3000

## APIs and Routes

* Create ```projectData``` at server side to act as the app API endpoint.

* At client side  initialize API personal Key as const variable ```key```.

* Invoke ```performAction()``` function when click event action at the element that have ```generate``` id.

* at the ```function performAction(e)``` we will git the value of Zip code that user entered then generate full ```url``` using this code then invoke ```getZipCodeInfo(url)``` pass ```url``` as the argument.

* The full ```url``` variable is passed as a parameter to ```fetch()```.

* Then Data successfully returned from the external API.

* Setup get rout at server side ```app.get('/url', getProjectData)``` first argument is route name and second argument is callback function to return the JS object created at the top of server code.

*  Add an entry to the project endpoint using a POST route setup on the server side ```app.post('/addFeel', addFeel);``` , define ```const weatherData = [];``` array to push new entered data on it.
On client side function take two arguments, the URL to make a POST to, and an object holding the data to POST.

## Dynamic UI

* Invoke ```updateUI()``` function when click generate button after complete get and post request successfully, the full ```'/all'``` variable is passed as a parameter to ```fetch()``` at the client side, in other side that server side we setup get rout with two argument first is same url we use in client side ```/url``` and second argument is function to return the JS object created that hold data entered by user.

* When data returned to client side at ```const request``` const then convert it to json ```allData = await request.json()``` then assign data from allData to UI elements.