// Personal API Key for OpenWeatherMap API

const key = '345252b34bcc67ba5923d03a6625e886';
const zipCode = document.getElementById('zip').value;
let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${key}`;

const temp = GetTemp(zipcode);


document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    
    getZipCodeInfo(url) 
}

const getZipCodeInfo = async (url) =>{
    const res = await fetch(url);

    try {

        const newData = await request.json();

        console.log(newData);

    }catch(error) {

      console.log("error", error);

      //alert('Please check that you zip code is a valid US zip code')

    }

}
// async function GetTemp(zipcode){

    

//     const request = await fetch(url)

//     try {

//         const newData = await request.json();

//         console.log(newData);

//     }catch(error) {

//       console.log("error", error);

//       //alert('Please check that you zip code is a valid US zip code')

//     }
// }

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */