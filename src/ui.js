import { state } from './state.js';

export function renderWeather(weather) {
    const unit = state.unit;
    const tempSymbol = unit === "uk" ? "°C" : "°F";
    const speedSymbol = unit === "uk" ? "km/h" : "mph";

    const searchBox = document.querySelector(".search-box");
 
    const oldLocationContainer = searchBox.querySelector(".location-container");
    if (oldLocationContainer) {
        oldLocationContainer.remove();
    }
    const locationContainer = document.createElement("div");
    locationContainer.classList.add("location-container");
    searchBox.append(locationContainer);
    
    // sidebar-searchbox-location-container -- header
    const locationHeader = document.createElement("div");
    locationHeader.classList.add("header");
    const locationName = document.createElement("h1");
    locationName.textContent = weather.address.charAt(0).toUpperCase() + weather.address.slice(1);
    const locationTemp = document.createElement("h1");
    locationTemp.textContent = `${weather.currentConditions.temp} ${tempSymbol}`;
    locationHeader.append(locationName, locationTemp);
    //sidebar-searchbox-location-container -- details
    const locationDetails = document.createElement("div");
    locationDetails.classList.add("details");
    locationContainer.append(locationHeader,locationDetails);

    const locationCondition = document.createElement("p");
    locationCondition.textContent = weather.currentConditions.conditions;
    const locationHighLowTemps = document.createElement("div");
    locationHighLowTemps.classList.add("temp");
    locationDetails.append(locationCondition, locationHighLowTemps);

    const locationHighTemp = document.createElement("p");
    locationHighTemp.textContent = `H: ${weather.days[0].tempmax} ${tempSymbol}`;
    const locationLowTemp = document.createElement("p");
    locationLowTemp.textContent = `L: ${weather.days[0].tempmin} ${tempSymbol}`;
    locationHighLowTemps.append(locationHighTemp, locationLowTemp);

    // main-content
    const nameContainer = document.querySelector(".name-container");
    nameContainer.innerHTML = "";
    const name = document.createElement("h1");
    name.textContent = weather.address.charAt(0).toUpperCase() + weather.address.slice(1);
    nameContainer.append(name);

    const tempContainer = document.querySelector(".temperature-container");
    tempContainer.innerHTML = "";
    const temp = document.createElement("p");
    temp.textContent = `${weather.currentConditions.temp} ${tempSymbol}`;
    tempContainer.append(temp);
    const tempDetailsContainer = document.createElement("div");
    tempDetailsContainer.classList.add("details-container");
    const headerFeelslike = document.createElement("p");
    headerFeelslike.textContent = `Feels like: ${weather.currentConditions.feelslike} ${tempSymbol}`;
    tempDetailsContainer.append(headerFeelslike);
    tempContainer.append(tempDetailsContainer);
    const headerHighsLows = document.createElement("p");
    headerHighsLows.textContent = `H: ${weather.days[0].tempmax} ${tempSymbol}      L: ${weather.days[0].tempmin} ${tempSymbol}`;
    tempDetailsContainer.append(headerHighsLows);



    const descriptionContainer = document.querySelector(".description-container");
    descriptionContainer.innerHTML = "";
    const description = document.createElement("p");
    description.textContent = weather.days[0].description;
    descriptionContainer.append(description);



    const windspeedContainer = document.querySelector(".windspeed-container");
    windspeedContainer.innerHTML = "";
    const windspeedHeader = document.createElement("p");
    windspeedHeader.classList.add("header");
    windspeedHeader.textContent = "WINDSPEED";
    const windspeed = document.createElement("p");
    windspeed.classList.add("context");
    windspeed.textContent = `${weather.currentConditions.windspeed} ${speedSymbol}`;
    windspeedContainer.append(windspeedHeader, windspeed);

    const humidityContainer = document.querySelector(".humidity-container");
    humidityContainer.innerHTML = "";
    const humidityHeader = document.createElement("p");
    humidityHeader.classList.add("header");
    humidityHeader.textContent = "HUMIDITY";
    const humidity = document.createElement("p");
    humidity.classList.add("context");
    humidity.textContent = `${weather.currentConditions.humidity} %`;
    humidityContainer.append(humidityHeader, humidity);
    
    const feelslikeContainer = document.querySelector(".feelslike-container");
    feelslikeContainer.innerHTML = "";
    const feelslikeHeader = document.createElement("p");
    feelslikeHeader.classList.add("header");
    feelslikeHeader.textContent = "FEELS LIKE";
    const feelslike = document.createElement("p");
    feelslike.classList.add("context");
    feelslike.textContent = `${weather.currentConditions.feelslike} ${tempSymbol}`;
    feelslikeContainer.append(feelslikeHeader, feelslike);

}