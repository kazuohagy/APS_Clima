// FAZER UM .ENV DEPOIS nao e recomendado deixar keys no
//a3716f3bb1655185feee051b1e9ea397 key
const apiKey= "a3716f3bb1655185feee051b1e9ea397";
const apiCountryURL = "https://countryflagsapi.com/png/"

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")
// Funcoes
const getWeatherData = async(city)=>{
    const apiWeatherURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json();
    console.log("Esse aqui e a data", data)
    return data;
}
const showWeatherData = async(city)=>{
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = data.main.temp;
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute("src",`https://countryflagsapi.com/png/br`)
}

// Eventos
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const city = cityInput.value;
    showWeatherData(city)
})
