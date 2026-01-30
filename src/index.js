import { state, setWeather, toggleUnit} from "./state";
import { fetchWeather } from "./api";
import { renderWeather } from "./ui";
import './style.css';
import searchImage from '../assets/images/search.svg'

const searchImg = document.querySelector(".search-box img");
searchImg.src = searchImage;


async function loadWeather(location, unit) {
    try {
        const weatherData = await fetchWeather(location, unit);
        setWeather(weatherData);
        renderWeather(weatherData);
    }
    catch(error) {
        console.log("Error fetching the weather", error);
        alert("Could not fetch the weather data. Please try again"); 
    }
}
const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const location = searchInput.value.trim();
        if (location) {
            loadWeather(location, state.unit);
        }   
    }
})
const unitBtnText = document.querySelector("#unit-btn span");
unitBtnText.textContent = state.unit;

const unitBtn = document.querySelector("#unit-btn");
unitBtn.addEventListener("click", () => {
    toggleUnit();
    unitBtnText.textContent = state.unit;   
    const location = searchInput.value.trim();
    if (location) {
        loadWeather(location, state.unit);
    }
    console.log("current state unit", state.unit);
    
})

loadWeather("Toronto", "uk");
