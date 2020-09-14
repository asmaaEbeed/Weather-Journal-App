/* Global Variables */


 //let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?id='
 //let apiKey = '345252b34bcc67ba5923d03a6625e886';

const key = '345252b34bcc67ba5923d03a6625e886';

//let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${key}`;

//const temp = GetTemp(zipcode);

// Create a new date instance dynamically with JS
let d = new Date();
//we add 1 to getMonth because it start from 0 to 11
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

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
        // console.log(response);
       postData('/addFeel', {temp:response.main.temp, feel: feel, cityName:response.name, date: newDate}) ;
       updateUI()
    });
    
      
    
    }

// const getZipCodeInfo = async (baseURL, zipCode, apiKey) =>{
    const getZipCodeInfo = async (url) =>{
    // const res = await fetch(baseURL + zipCode + apiKey);
    const res = await fetch(url)
    try {

        const response = await res.json();
        //if used to check if zip code valid
        const notFoundElement = document.getElementById('notFound');
        const foundElement = document.getElementById('entryHolder');
        
        //check if zip code is empty or isn't valid
        if(response.cod ==="400" || response.cod ==="404"){
          notFoundElement.style.display = "block";
          foundElement.style.display = "none";
          notFoundElement.innerHTML ="Please, enter valid city zip code.";
        } else{
          notFoundElement.style.display = "none";
          foundElement.style.display = "block";
          // console.log(response);
          return response;
        }
        

        }catch(error) {

        console.log("error", error);

        //alert('Please check that you zip code is a valid US zip code')

        }

}

const postData = async ( url = '', newData = {})=>{
    console.log(newData);     //This return value {temp: 300, feel:"good"}
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
        //console.log(newData);    
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }
  //update UI element with new data
const updateUI = async () => {
  const request = await fetch('/all')

  try{
    const allData = await request.json();
    //console.log(allData);
    //temp returned in kelvin, we convert it to celsius degree with this formula
    //T(°C) = (T(°k) - 273.15)
    const tempInCelesius = (allData[(allData.length-1)].temp -273.15);
    document.getElementById('temp').innerHTML = tempInCelesius.toFixed(2) + "°C";
    document.getElementById('content').innerHTML = allData[(allData.length-1)].feel;
    document.getElementById('date').innerHTML = allData[(allData.length-1)].date;
    document.getElementById('cityName').innerHTML = allData[(allData.length-1)].cityName;


  } catch(error){
console.log("error", error);
  }
}
