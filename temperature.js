fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&APPID=8fa574811267f3e1a1994d0b35996b2b')
    .then(res => res.json())
    .then(data => modifyTemperatureDiv(data))
    .catch(error => console.log(error));


// get input value
const getInputValue = () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
// load temperature
const loadTemperature = async () => {
    const inputValue = getInputValue();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=8fa574811267f3e1a1994d0b35996b2b`;

    const res = await fetch(url);
    const data = await res.json();
    modifyTemperatureDiv(data);
    displayTemperature(data);
}

// temperature div
const modifyTemperatureDiv = (temperature) => {
    const temperatureDiv = document.getElementById('temperature-div');
    temperatureDiv.innerHTML = `
        <img  src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
        <h1>${temperature.name}</h1>
        <h3><span>${parseInt(temperature.main.temp - 273)}</span>&deg;C</h3>
        <h1 class="lead">${temperature.weather[0].main}</h1>
    `;
}

// display temperature
function displayTemperature(temperature) {
    modifyTemperatureDiv(temperature);
}