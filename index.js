const button = document.getElementById('search');
const city = document.getElementById('city');
const display = document.getElementById('display');
function getWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
        .then (response => response.json())
        .then ( data => {
            // console.log(data)
            display.innerHTML = `<h2 class="cityname">${data.name}</h2><h3 class="temp">Temperature:${data.main.temp} &#176C</h3><h3 class="weather">Weather: ${data.weather[0].description}</h3><h3 class="lon">Longitude: ${data.coord.lon}</h3><h3 class="lat">Latitude: ${data.coord.lat}</h3>`
            city.value = ""
        }).catch (err => {
                        alert("Error fetching city info")
                    err})
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        getWeather()
    }
});


button.addEventListener('click', (e) => {
    e.preventDefault()
    if (city.value === "") {
        alert("Please enter a city")
    }
    else if (city.value.length <= 2 ){
        alert("Please enter a valid city")
    }
    else {
        getWeather()

    }
   
    
})


// let mymonth = new Date().getMonth() + 1;
// let mydate = new Date().getDate();
// let myyear = new Date().getFullYear();
// function displayDate (){
//     if (mymonth == 1){
//         mymonth = "January";
//     }
//     else if (mymonth == 2){
//         mymonth = "February";
//     }
    
//     else if (mymonth == 3){
//         mymonth = "March";
//     }
//     else if (mymonth == 4){
//         mymonth = "April";
//     }
//     else if (mymonth == 5){
//         mymonth = "May";
//     }
//     else if (mymonth == 6){
//         mymonth = "June";
//     }
//     else if (mymonth == 7){
//         mymonth = "July";
//     }
//     else if (mymonth == 8){
//         mymonth = "August";
//     }
//     else if (mymonth == 9){
//         mymonth = "September";
//     }
//     else if (mymonth == 10){
//         mymonth = "October";
//     }
//     else if (mymonth == 11){
//         mymonth = "November";
//     }
//     else if (mymonth == 12){
//         mymonth = "December";
//     }

    
//     let day = ${mydate}/${mymonth}/${myyear};
//     console.log(day);
// }

// displayDate()
// // console.log(mymonth);
// // console.log(mydate);
// // console.log(myyear);