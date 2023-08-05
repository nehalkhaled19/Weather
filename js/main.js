let todayName = document.getElementById("todayName")
const tomorrowName = document.getElementById("tomorrowName")
const nextDayName = document.getElementById("nextDayName")
const month = document.getElementById("month")
const cityName = document.getElementById("cityName")
const l = document.getElementById("l")
const weatherState = document.getElementById("weatherState")
const citydegree = document.getElementById("citydegree")
const conditionToday = document.getElementById("conditionToday")
const maxTempTomm = document.getElementById("maxTempTomm")
const minTempTomm = document.getElementById("minTempTomm")
const tommState = document.getElementById("tommState")
const tommIcon = document.getElementById("tommIcon")
const maxTempNextday = document.getElementById("maxTempNextday")
const minTempNextday = document.getElementById("minTempNextday")
const nextdayState = document.getElementById("nextdayState")
const nextdayIcon = document.getElementById("nextdayIcon")
const wind = document.getElementById("wind")
const date = new Date();
locationCity("cairo")
weather("cairo")

// weathertoday
async function locationCity(city = "cairo") {
    let myReq = await fetch(`http://api.weatherapi.com/v1/current.json?key= 3b1c938fe07a415dad0213021230308&q=${city}`)
    let data = await myReq.json()
    cityName.innerHTML =data.location.name
    citydegree.innerHTML = data.current.temp_c + "°C"
    conditionToday.innerHTML = data.current.condition.text
    // let x =`https:${data.current.condition.icon}`
    // weatherState.src = x
    wind.innerHTML = data.current.wind_kph
}
//weather 
async function weather(city = "cairo") {
    // tomorrow
    let myReq = await fetch(`http://api.weatherapi.com/v1/forecast.json?key= 3b1c938fe07a415dad0213021230308&q=${city}&days=3`)
    let data = await myReq.json()
    maxTempTomm.innerHTML = data.forecast.forecastday[1].day.maxtemp_c + "°C"
    minTempTomm.innerHTML = data.forecast.forecastday[1].day.mintemp_c + "°C"
    tommState.innerHTML = data.forecast.forecastday[1].day.condition.text
    let x =`https:${data.forecast.forecastday[1].day.condition.icon}`
    tommIcon.src = x
    // nextday
    maxTempNextday.innerHTML = data.forecast.forecastday[2].day.maxtemp_c + "°C"
    minTempNextday.innerHTML = data.forecast.forecastday[2].day.mintemp_c + "°C"
    nextdayState.innerHTML = data.forecast.forecastday[2].day.condition.text
    let y=`https:${data.forecast.forecastday[2].day.condition.icon}`
    nextdayIcon.src = y
}
// search
l.addEventListener("keyup",function () {
    locationCity(l.value)
    weather(l.value)
    
})
// time
let time = date.getHours()
if (4 < time && time < 17) {
    weatherState.src = "img/sun.png"
}
else {
    weatherState.src = "img/moon.png"
}
// get day
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = date.getDay()
var dayName = days[day];
todayName.innerHTML = dayName
if (day == 6) {
    day = 0
    tomorrowName.innerHTML = days[day]
    nextDayName.innerHTML = days[day + 1]
}
else if (day == 5) {
    tomorrowName.innerHTML = days[day + 1]
    nextDayName.innerHTML = days[0]
}
else {
    tomorrowName.innerHTML = days[day + 1]
    nextDayName.innerHTML = days[day + 2]
}
// get month
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let monthName = date.getMonth()
let dayNum = date.getDate()
month.innerHTML = dayNum + ` ` + monthNames[monthName]








