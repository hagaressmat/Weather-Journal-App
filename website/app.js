/* Global Variables */
const APIKey = "&appid=0748243122b8664a6a54e4298eea20cd";


const url = "https://api.openweathermap.org/data/2.5/forecast?id=";

// Create a new date instance dynamically with JS
let date = new Date();
let newDate = date.getMonth()+'.'+ date.getDate()+'.'+ date.getFullYear();




// event listener click for the element with the id "generate" 
let button = document.getElementById("generate");
button.addEventListener("click", performAction);

function performAction(e){
    let zipCode = document.getElementById('zip').value;
    let userFeelings = document.getElementById('feelings').value;
    console.log(zipCode);
    console.log(APIKey);
    console.log(userFeelings);
    sendPostData(url,zipCode)
    .then(function(data){
        console.log(data);
        // postData("/all" , {date:date , temperature:data.list[0].main.temp , userFeelings:userFeelings })
        // updateUI();
    })
};





const sendPostData = async (url,zipCode )=>{
    const response = await fetch(url+zipCode+APIKey)
    try {
        const data = await response.json();
        console.log(data)
        return data;
        }  catch(error) {
         console.log("error", error);
        // appropriately handle the error
       }
}




// // Async GET
// const postData = async ( url = '', data = {})=>{

//     const response = await fetch(url, {
//     method: 'POST', 
//     credentials: 'same-origin', 
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data), // body data type must match "Content-Type" header        
//   });

//     try {
//       const newData = await response.json();
//       return newData;
//     }catch(error) {
//     console.log("error", error);
//     }
// };

  // const updateUI = async () => {
  //   const request = await fetch('/all');
  //   try{
  //     const allData = await request.json();
  //     document.getElementById('date').innerHTML = allData[0].date;
  //     document.getElementById('temp').innerHTML = allData[0].temperature;
  //     document.getElementById('content').innerHTML = allData[0].userFeelings;
  
  //   }catch(error){
  //     console.log("error", error);
  //   }
  // }








  
