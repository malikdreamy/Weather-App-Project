
const getWeather = () =>{
    let city = document.getElementById("citySearch").value;

searchBtn = document.getElementById("searchBtn");

let searchUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=184ddd95f0a2169d4eef4fe4f53f0a44`;

fetch(searchUrl)
.then(response => response.json())
.then(data => {
    console.log(data[0].lat + " " + data[0].lon);
    lat = data[0].lat;
    lon = data[0].lon;
    weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&timezone&appid=184ddd95f0a2169d4eef4fe4f53f0a44`;
    
fetch(weatherUrl)
.then(response => response.json())
.then(data => {
let date = new Date();
// const d = new Date();
// const localTime = d.getTime();
// const localOffset = d.getTimezoneOffset() * 60 * 1000;
// const utc = localTime - localOffset;
// const targetTime = utc + offset;
// const targetDate = new Date(targetTime);
// console.log(targetDate.toLocaleString());


let txt = "";
let  weatherImg = ""
if (data.main.temp >= 65 && data.weather[0].main == "Clear" ){
weatherImg = `sunnyday.png`
} else if (data.weather[0].main == "Rain"){
weatherImg = `rainyday.png`
} else if (data.weather[0].main == "Clouds"){
weatherImg = `cloudysky1.png`
} 
// else if (offset >= 18 && offset < 24){
// weatherImg = `moon.png`
else {
weatherImg = `clearsky3.jpeg`

}
console.log(data);
dataname = data.name;

txt += ` <div class="mainWeather" style="background-image: url(${weatherImg}); background-size: cover; width: 100%; height: 100%; ">

<div class="weatherText">
<p id="">${"Today's Date: " + date}</p>
<h3 id="mainCity">${dataname}</h3>
<p>${"Temperature: " + data.main.temp + "°F"}</p>
<p>${data.weather[0].description + " Humidity: " + data.main.humidity + "% " + " Wind: " + data.wind.speed + " MPH"}</p>
</div>
</div>`;


document.getElementById("current-weather").innerHTML = txt;
fiveDayForcastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`;


fetch(fiveDayForcastUrl)
.then(response => response.json())
.then(data => {
fiveDayForcast1 = "";
fiveDayForcast2 = "";
fiveDayForcast3 = "";
fiveDayForcast4 = "";
fiveDayForcast5 = "";
console.log(data);
let  weatherImg1 = "";
let  weatherImg2 = "";
let  weatherImg3 = "";
let  weatherImg4 = "";
let  weatherImg5 = "";
const celToFar = (celsius) =>{
return celsius * (9/5) + 32;
} 
let celsius1 = data.hourly.temperature_2m[15];
let far1 = celToFar(celsius1);
let farSlice1 = String(far1).slice(0, 3);
let time1 = data.hourly.time[15];
let timeSlice1 = time1.slice(0, 10);
if (far1 <= 60 ){
weatherImg1 = `cloud.png`
} else if (far1 >= 60){
weatherImg1 = `sun.png`
}  else {
weatherImg1 = `moon.png`
}
fiveDayForcast1 += ` <div class="five-day fiveDayForeCast">
<img src="${weatherImg1}" class="weatherImg" alt="Sunny" width="50px" height="50px">
<h1 class="fiveDayForeCastCityName">${dataname}</h1>
<p class="">${"Date: " + timeSlice1}</p>
<h1 class=""></h1>
<p>${"Tempterature: " + farSlice1 + "°F"}</p>
<h3><h3>
<h3><h3>
<h3><h3>
</div>
</div>`;
document.getElementById("forecast-day1").innerHTML = fiveDayForcast1;

let celsius2 = data.hourly.temperature_2m[33];
let far2 = celToFar(celsius2);
let farSlice2 = String(far2).slice(0, 3);
let time2 = data.hourly.time[33];
let timeSlice2 = time2.slice(0, 10);
if (far2 <= 60 ){
weatherImg2 = `cloud.png`
} else if (far2 >= 60){
weatherImg2 = `sun.png`
}  else {
weatherImg2 = `moon.png`
}
fiveDayForcast2 += ` <div class="five-day1 fiveDayForeCast">
<img src="${weatherImg2}" class="weatherImg" alt="Sunny" width="50px" height="50px">
<h1 class="fiveDayForeCastCityName">${dataname}</h1>
<p class="">${"Date: " + timeSlice2}</p>
<h1 class=""></h1>
<p>${"Tempterature: " + farSlice2 + "°F"}</p>
<h3><h3>
<h3><h3>
<h3><h3>
</div>
</div>`;
document.getElementById("forecast-day2").innerHTML = fiveDayForcast2;

let celsius3 = data.hourly.temperature_2m[55];
let far3 = celToFar(celsius3);
let farSlice3 = String(far3).slice(0, 3);
let time3 = data.hourly.time[55];
let timeSlice3 = time3.slice(0, 10);
if (far3 <= 60 ){
weatherImg3 = `cloud.png`
} else if (far3 >= 60){
weatherImg3 = `sun.png`
}  else {
weatherImg3 = `moon.png`
}
fiveDayForcast3 += ` <div class="five-day2 fiveDayForeCast">
<img src="${weatherImg3}" class="weatherImg" alt="Sunny" width="50px" height="50px">
<h1 class="fiveDayForeCastCityName">${dataname}</h1>
<p class="">${"Date: " + timeSlice3}</p>
<h1 class=""></h1>
<p>${"Tempterature: " + farSlice3 + "°F"}</p>
<h3><h3>
<h3><h3>
<h3><h3>
</div>
</div>`;
document.getElementById("forecast-day3").innerHTML = fiveDayForcast3;


let celsius4 = data.hourly.temperature_2m[81];
let far4 = celToFar(celsius4);
let farSlice4 = String(far4).slice(0, 3);
let time4 = data.hourly.time[81];
let timeSlice4 = time4.slice(0, 10);

if (far4 <= 60 ){
weatherImg4 = `cloud.png`
} else if (far4 >= 60){
weatherImg4 = `sun.png`
}  else {
weatherImg4 = `moon.png`
}
fiveDayForcast4 += ` <div class="five-day3 fiveDayForeCast">
<img src="${weatherImg4}" class="weatherImg" alt="Sunny" width="50px" height="50px">
<h1 class="fiveDayForeCastCityName">${dataname}</h1>
<p class="">${"Date: " + timeSlice4}</p>
<h1 class=""></h1>
<p>${"Tempterature: " + farSlice4 + "°F"}</p>
<h3><h3>
<h3><h3>
<h3><h3>
</div>
</div>`;
document.getElementById("forecast-day4").innerHTML = fiveDayForcast4;

let celsius5 = data.hourly.temperature_2m[99];
let far5 = celToFar(celsius5);
let farSlice5 = String(far5).slice(0, 3)
let time5 = data.hourly.time[99];
let timeSlice5 = time5.slice(0, 10);
if (far5 <= 60 ){
weatherImg5 = `cloud.png`
} else if (far5 >= 60){
weatherImg5 = `sun.png`
}  else {
weatherImg5 = `moon.png`
}
fiveDayForcast5 += ` <div class="five-day4 fiveDayForeCast">
<img src="${weatherImg5}" class="weather" alt="Sunny" width="50px" height="50px">
<h1 class="fiveDayForeCastCityName">${dataname}</h1>
<p class="">${"Date: " + timeSlice5}</p>
<h1 class=""></h1>
<p>${"Tempterature: " + farSlice5 + "°F"}</p>
<h3><h3>
<h3><h3>
<h3><h3>
</div>
</div>`;
document.getElementById("forecast-day5").innerHTML = fiveDayForcast5;

let cityValue = document.getElementById("mainCity").innerText;
const cityList = document.getElementById("cityList");

const listArray = Array.from(cityList.getElementsByTagName("li"));

let existingCity = listArray.find(element => element.innerText === cityValue);
if (existingCity) {
cityList.removeChild(existingCity);
}

const cityPicked = document.createElement('li');
cityPicked.innerText = cityValue;
cityList.appendChild(cityPicked);

if (listArray.length > 15) {
cityList.removeChild(listArray[0]);
}

listArray.forEach(element => {
element.addEventListener("click", () => {
let clickedCity = element.innerText;
document.getElementById("citySearch").value = clickedCity;
});
});

let items = cityList.getElementsByTagName("li");
let cities = [];
for (let i = 0; i < items.length; i++) {
cities.push(items[i].textContent);
}
localStorage.setItem("cities", JSON.stringify(cities));
})
})
})
}

searchBtn.addEventListener("click", getWeather);

let cities = JSON.parse(localStorage.getItem("cities"));
if (cities) {
cities.forEach(city => {
let li = document.createElement("li");
li.textContent = city;
cityList.appendChild(li);
});
}

document.addEventListener("DOMContentLoaded", function() {
function removeDuplicateListElements() {
var ul = document.querySelector("ul");
var listElements = ul.getElementsByTagName("li");
var textContents = [];

for (var i = 0; i < listElements.length; i++) {
var elementText = listElements[i].textContent;
if (textContents.indexOf(elementText) !== -1) {
ul.removeChild(listElements[i]);
i--;
} else {
textContents.push(elementText);
}
}
}

removeDuplicateListElements();
});


let citiesInQueue = Array.from(document.getElementsByTagName("li"));
console.log(citiesInQueue);

citiesInQueue.forEach(city => {
city.addEventListener("click", () => {
let cityName = city.textContent;
document.getElementById("citySearch").value = cityName;
searchBtn.click();
})
});

const showRecent = () => {
if (document.getElementById("citySearch").value == ""){
let inputVal = document.getElementById("citySearch");
let citiesViewed = Array.from(document.getElementsByTagName("li"));
let lastCitySelected = citiesViewed[citiesViewed.length - 1].textContent;
inputVal.value = lastCitySelected;
searchBtn.click();
}
}

window.addEventListener("DOMContentLoaded", showRecent);
