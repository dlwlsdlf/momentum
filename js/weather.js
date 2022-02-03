const API_KEY = "34c2ce9565c2389de3380460e4b81bf9";



function onGeoOK(positon){
const lat =positon.coords.latitude;
const lon =positon.coords.longitude ;
console.log("You live in", lat, lon);
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
fetch(url).then(Response => Response.json()).then(data =>{
 //console.log(data.name, data.weather[0].main);
 const weather = document.querySelector("#weather sapn:first-child");
 const city = document.querySelector("#weather sapn:last-child");
 city.innerText = data.name;
 weather.innerText = `${data.weather[0].main} / ${data.main.temp}`

});
}
function onGeoError(){
alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);
