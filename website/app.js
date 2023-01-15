/* Global Variables */
const APIKey = "&appid=0748243122b8664a6a54e4298eea20cd&units=imperial";


const url = "https://api.openweathermap.org/data/2.5/forecast?id=";

// Create a new date instance dynamically with JS
let date = new Date();
let nowDate = date.getDate()+'.'+(date.getMonth()+1)+'.'+ date.getFullYear();




// event listener click for the element with the id "generate" 
let button = document.getElementById("generate");
button.addEventListener("click", APIFun);

function APIFun(e){
    let zipCode = document.getElementById('zip').value;
    let userFeelings = document.getElementById('feelings').value;
    console.log(zipCode);
    console.log(APIKey);
    console.log(userFeelings);
    sendPostData(url,zipCode)
    .then(function(dateFromAPI){
        console.log(dateFromAPI);
        postDataToServer("/add" , {date:nowDate , temperature:dateFromAPI.list[0].main.temp , userFeelings:userFeelings })
        UIView();
    })
};





const sendPostData = async (url,zipCode )=>{
    const response = await fetch(url+zipCode+APIKey)
    try {
        const dateFromAPI = await response.json();
        console.log(dateFromAPI)
        return dateFromAPI;
        }  catch(error) {
         console.log("error", error);
        // appropriately handle the error
       }
}




// Async POST
const postDataToServer = async ( url = '', dataToServer = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToServer), // body data type must match "Content-Type" header        
  });
    console.log(dataToServer);
    try {
      const newDataToServer = await response.json();
      return newDataToServer;
    }catch(error) {
    console.log("error", error);
    }
};








  const UIView = async () => {
    const callBackData = await fetch('/all');
    try{
      const element = await callBackData.json();
      dateFromServer = document.getElementById('date');
      tempFromServer = document.getElementById('temp');
      FeelingsFromServer = document.getElementById('content');
      dateFromServer.innerHTML = `Date :  ${element[0].date}`;
      tempFromServer.innerHTML = `Temp :  ${Math.round(element[0].temperature)} degrees`;
      FeelingsFromServer.innerHTML = `Feelings : ${element[0].userFeelings}`;
    }catch(error){
      console.log("error", error);
    }
  }








  
