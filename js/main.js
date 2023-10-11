let todayName = document.getElementById("todayName")
const month = document.getElementById("month")
const cityName = document.getElementById("cityName")
const citydegree = document.getElementById("citydegree")
const weatherState = document.getElementById("weatherState")
const conditionToday = document.getElementById("conditionToday")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
let windDirection = document.getElementById("wind_direction")


//next data
const nextDay = document.getElementsByClassName("next-day")
const icon = document.getElementsByClassName("icon")
const maxTemp = document.getElementsByClassName("max-temp")
const minTemp = document.getElementsByClassName("min-temp")
const state = document.getElementsByClassName("state")

// search
const searchByName = document.getElementById("searchByName")

weatherData()



//weather 
async function weatherData(city = "cairo") {
    let myReq = await fetch(`http://api.weatherapi.com/v1/forecast.json?key= 3b1c938fe07a415dad0213021230308&q=${city}&days=3`)
    let data = await myReq.json()
    if(!data.error){
    // today
    let todayDate = new Date()
    todayName.innerHTML = todayDate.toLocaleDateString("en-US", { weekday: "long" })
    month.innerHTML = todayDate.getDate() +' '+ todayDate.toLocaleDateString("en-US", { month: "long" })
    cityName.innerHTML = data.location.name
    citydegree.innerHTML = data.current.temp_c + "°C"
    weatherState.setAttribute("src", `http:` + data.current.condition.icon)
    humidity.innerHTML = data.current.humidity + "%"
    wind.innerHTML = data.current.wind_kph + "km/h"
    windDirection.innerHTML = data.current.wind_dir
    conditionToday.innerHTML = data.current.condition.text

    //next day
    let forecastData = data.forecast.forecastday
    for (let i = 0; i < 2; i++) {
        let nextDate = new Date(forecastData[i+1].date)
        nextDay[i].innerHTML = nextDate.toLocaleDateString("en-US",{weekday:"long"})
        maxTemp[i].innerHTML = forecastData[i + 1].day.maxtemp_c + " °C"
        minTemp[i].innerHTML = forecastData[i + 1].day.mintemp_c + " °C"
        icon[i].setAttribute("src", `http:` + forecastData[i + 1].day.condition.icon)
        state[i].innerHTML = forecastData[i + 1].day.condition.text
    }
    }
    
}

// search
searchByName.addEventListener("keyup", function () {
    weatherData(searchByName.value)

})









