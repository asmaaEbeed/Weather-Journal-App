/* Global Variables */


 //let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?id='
 //let apiKey = '345252b34bcc67ba5923d03a6625e886';

const key = '345252b34bcc67ba5923d03a6625e886';

//let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${key}`;

//const temp = GetTemp(zipcode);


document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    
    const zipCode = document.getElementById('zip').value;
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${key}`
    //console.log("code is"+zipCode);

    const feel =  document.getElementById('feelings').value;

    getZipCodeInfo(url)
    
    //getZipCodeInfo(baseURL, zipCode, apiKey) 
    //use after complete function getAnimal successfully then and start next code
    .then(function(response){
        console.log(response);
       postData('/addFeel', {weather:response.weather, feel: feel}) ;
    });
    }

// const getZipCodeInfo = async (baseURL, zipCode, apiKey) =>{
    const getZipCodeInfo = async (url) =>{
    // const res = await fetch(baseURL + zipCode + apiKey);
    const res = await fetch(url)
    try {

        const response = await res.json();
        console.log(response);
        return response;

        }catch(error) {

        console.log("error", error);

        alert('Please check that you zip code is a valid US zip code')

        }

    // try {

    //     const data = await res.json();

    //     console.log(data);
    //     return data;

    // }catch(error) {

    //   console.log("error", error);

      //alert('Please check that you zip code is a valid US zip code')

    //}

}

const postData = async ( url = '', newData = {})=>{
    console.log(newData);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(newData), 
    });
  
      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();