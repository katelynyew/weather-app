const API_KEY = 'KNYUMZKWMSTCP7BPFFFEZ6ZNN';

export async function fetchWeather(location, unit) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=${API_KEY}&contentType=json`);
    const result = await response.json();
    return result;
}


