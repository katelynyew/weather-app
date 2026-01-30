export const state = {
    location: null,
    unit: 'uk',
    weather: null
}

export function setWeather(data) {
    state.weather = data;
}

export function toggleUnit() {
    state.unit = state.unit === 'uk' ? 'us' : 'uk';
}